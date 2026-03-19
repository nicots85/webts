// api/chat.js — Vercel Edge Function
// Proxy seguro entre el browser y Groq. La API key nunca llega al cliente.

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  // Solo POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { messages, system } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages array is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error("GROQ_API_KEY not configured in Vercel.");
      return new Response(JSON.stringify({ error: "GROQ_API_KEY not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const groqMessages = system
      ? [{ role: "system", content: system }, ...messages]
      : messages;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
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

    if (!response.ok) {
      const err = await response.text();
      console.error("Groq API error:", response.status, err);
      return new Response(JSON.stringify({ error: "Error de conexión con IA", details: err }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "No pude generar una respuesta.";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Edge Function error:", error.message);
    return new Response(JSON.stringify({ error: "Error interno del servidor", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
