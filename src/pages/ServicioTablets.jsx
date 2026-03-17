// Landing page para Tablets e iPads

const WHATSAPP_NUMBER = "5491158586472";

function getWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ServicioTablets({ imageUrl }) {
  return (
    <div style={{ background: "#0a0f1a", minHeight: "100vh" }}>
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
            background: "linear-gradient(135deg, #0df2a6 0%, #1a1a2e 100%)",
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
              <span style={{ fontSize: 24, marginRight: 8 }}>📱</span>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 600, letterSpacing: 1 }}>
                TABLETS E IPADS
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
              Reparación de <span style={{ color: "#0df2a6" }}>Tablets y iPads</span>
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
              Ya sea la tablet de tus hijos que se cayó o el iPad que usás para trabajar, la reparamos. Cambiamos pantallas, baterías, táctil y solucionamos problemas de software.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>iPad todas las generaciones</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Samsung Galaxy Tab</span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hola, tengo una tablet/iPad que necesita reparación. Necesito más información.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#0df2a6",
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
              { title: "Pantalla rota", desc: "Cambio de display completo" },
              { title: "Táctil no responde", desc: "Reemplazo de digitalizador" },
              { title: "Batería", desc: "No carga o dura poco" },
              { title: "Software", desc: "Se traba, no enciende" },
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

      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 12, textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Qué reparamos?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 40 }}>
            {[
              "Cambio de cristal táctil (glass)",
              "Reemplazo de display LCD/OLED",
              "Baterías nuevas de alta duración",
              "Reparación de conector de carga",
              "Problemas de software y bloqueos",
              "Cámaras frontal y trasera",
              "Micrófonos y parlantes",
              "Botones de volumen y power",
            ].map((servicio, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 16, padding: 24, border: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ color: "#0df2a6", marginRight: 8 }}>✓</span>
                <span style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>{servicio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #0df2a6 0%, #1a1a2e 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 16, fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Tu tablet necesita reparación?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 32, fontSize: 18, fontFamily: "'DM Sans', sans-serif" }}>
            Diagnóstico gratuito. Escribinos y te tellinguemos qué necesita.
          </p>
          <a
            href={getWhatsAppUrl("Hola, necesito reparar mi tablet/iPad. ¿Cuánto cuesta?")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#fff", color: "#000", fontWeight: 700, fontSize: 18, padding: "18px 40px", borderRadius: 12, textDecoration: "none", display: "inline-block", fontFamily: "'DM Sans', sans-serif" }}
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </section>

      <footer style={{ padding: "40px 24px", background: "#050810", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>© 2024 TechnoStore.</p>
      </footer>
    </div>
  );
}