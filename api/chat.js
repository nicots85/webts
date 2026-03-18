// api/chat.js — Vercel Serverless Function (CommonJS)
// Proxy seguro entre el browser y Groq. La API key nunca llega al cliente.

module.exports = async function handler(req, res) {
  // CORS headers para desarrollo local
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages, system } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "messages array is required" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error("GROQ_API_KEY not set");
    return res.status(500).json({ error: "GROQ_API_KEY not configured" });
  }

  try {
    const groqMessages = system
      ? [{ role: "system", content: system }, ...messages]
      : messages;

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: groqMessages,
        max_tokens: 400,
        temperature: 0.6,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("Groq API error:", groqRes.status, errText);
      return res.status(502).json({ error: "Error al conectar con Groq: " + groqRes.status });
    }

    const data = await groqRes.json();
    const reply = data.choices?.[0]?.message?.content || "No pude generar una respuesta.";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Handler error:", error.message);
    return res.status(500).json({ error: "Error interno: " + error.message });
  }
};
