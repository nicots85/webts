// Landing page para Reparación de Bisagras

const WHATSAPP_NUMBER = "5491158586472";

function getWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ServicioBisagras({ imageUrl }) {
  return (
    <div style={{ background: "#0a0f1a", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #ff9500 0%, #1a1a2e 100%)",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.15)",
                borderRadius: 99,
                padding: "8px 16px",
                marginBottom: 24,
              }}
            >
              <span style={{ fontSize: 24, marginRight: 8 }}>🔧</span>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 600, letterSpacing: 1 }}>
                EL PROBLEMA MÁS COMÚN
              </span>
            </div>

            <h1
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 20,
                lineHeight: 1.1,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Reparación de <span style={{ color: "#ff9500" }}>Bisagras de Notebooks</span>
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.85)",
                marginBottom: 32,
                maxWidth: 520,
                lineHeight: 1.7,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Las bisagras rotas son el problema más frecuente en notebooks. No tires tu equipo por esto. Lo reparamos更换 bisagras, reconstruimos los plásticos y reforzamos la estructura para que no vuelva a pasar.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>No cambiás toda la laptop</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Garantía de 90 días</span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hola, tengo las bisagras de mi notebook rotas. Necesito más información sobre la reparación.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#ff9500",
                color: "#000",
                fontWeight: 700,
                fontSize: 16,
                padding: "16px 32px",
                borderRadius: 12,
                textDecoration: "none",
                display: "inline-block",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Solicitar Diagnóstico
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { title: "Bisagras flojas", desc: "La pantalla se mueve sola" },
              { title: "Bisagras rotas", desc: "No sostiene la pantalla" },
              { title: "Plástico roto", desc: "Anclajes dañados" },
              { title: "Pantalla despega", desc: "Peligro de romper el display" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(20px)",
                  borderRadius: 20,
                  padding: 28,
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 8, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {item.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas que reparamos */}
      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 16, fontFamily: "'Space Grotesk', sans-serif" }}>
            Marcas que reparamos
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 40, fontFamily: "'DM Sans', sans-serif" }}>
            Trabajamos con todas las marcas de notebooks
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", fontSize: 24, color: "#fff" }}>
            <span>HP</span>
            <span>Lenovo</span>
            <span>Asus</span>
            <span>Acer</span>
            <span>Dell</span>
            <span>Toshiba</span>
            <span>Sony</span>
            <span>Samsung</span>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section style={{ padding: "80px 24px", background: "rgba(255,149,0,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 12, textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Qué hacemos exactamente?
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 40 }}>
            {[
              "Cambio de bisagras originales",
              "Reconstrucción de plásticos rotos",
              "Reemplazo de anclajes dañados",
              "Refuerzo estructural con resina",
              "Reparación del marco de pantalla",
              "Cambio de tapa completa",
              "Ajuste y regulación",
              "Garantía de 90 días",
            ].map((servicio, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 16,
                  padding: 24,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ color: "#ff9500", marginRight: 8 }}>✓</span>
                <span style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>{servicio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué no comprar nueva */}
      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 12, textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Por qué reparar en lugar de comprar otra?
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32, marginTop: 48 }}>
            {[
              { icon: "💰", title: "Mucho más económico", desc: "Una reparación cuesta una fracción del precio de una nueva" },
              { icon: "♻️", title: "Sustentable", desc: "No contribute al desecho electrónico" },
              { icon: "⚡", title: "Rápido", desc: "Generalmente listo en 24-48 horas" },
              { icon: "🛡️", title: "Garantizado", desc: "90 días de garantía en la reparación" },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: "center", padding: 24 }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 600, marginBottom: 8, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {item.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #ff9500 0%, #1a1a2e 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 16, fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Las bisagras de tu notebook están rotas?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 32, fontSize: 18, fontFamily: "'DM Sans', sans-serif" }}>
            No arriesgues romper la pantalla. Traéla para un diagnóstico gratuito y te tellinguemos qué necesita.
          </p>
          <a
            href={getWhatsAppUrl("Hola, necesito reparar las bisagras de mi notebook. ¿Cuánto cuesta?")}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#fff",
              color: "#000",
              fontWeight: 700,
              fontSize: 18,
              padding: "18px 40px",
              borderRadius: 12,
              textDecoration: "none",
              display: "inline-block",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Pedir Cotización
          </a>
        </div>
      </section>

      <footer style={{ padding: "40px 24px", background: "#050810", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>
          © 2024 TechnoStore. Más de 15 años reparando tu tecnología.
        </p>
      </footer>
    </div>
  );
}