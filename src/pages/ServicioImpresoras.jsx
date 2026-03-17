// Landing page para Servicio de Impresoras

const WHATSAPP_NUMBER = "5491127650658";

function getWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ServicioImpresoras({ imageUrl }) {
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
            background: "linear-gradient(135deg, #e6e6e6 0%, #1a1a2e 100%)",
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
            opacity: 0.2,
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
                background: "rgba(0,0,0,0.3)",
                borderRadius: 99,
                padding: "8px 16px",
                marginBottom: 24,
              }}
            >
              <span style={{ fontSize: 24, marginRight: 8 }}>🖨️</span>
              <span style={{ color: "#000", fontSize: 14, fontWeight: 600, letterSpacing: 1 }}>
                SERVICIO ESPECIALIZADO
              </span>
            </div>

            <h1
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: "#000",
                marginBottom: 20,
                lineHeight: 1.1,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Servicio de <span style={{ color: "#0d59f2" }}>Impresoras</span>
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "#333",
                marginBottom: 32,
                maxWidth: 520,
                lineHeight: 1.7,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              ¿Tu impresora mancha, no toma papel o dejó de imprimir? Hacemos mantenimiento y reparación de impresoras hogareñas y de oficina. Destapamos cabezales, reseteamos almohadillas e instalamos sistemas continuos.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#000" }}>
                <span style={{ color: "#0d59f2" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Epson</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#000" }}>
                <span style={{ color: "#0d59f2" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>HP</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#000" }}>
                <span style={{ color: "#0d59f2" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Brother</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#000" }}>
                <span style={{ color: "#0d59f2" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Canon</span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hola, tengo una impresora que necesita reparación. Necesito más información.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#0d59f2",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                padding: "16px 32px",
                borderRadius: 12,
                textDecoration: "none",
                display: "inline-block",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Solicitar Servicio
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { title: "Mancha hojas", desc: "Cabezales sucios o dañados" },
              { title: "No toma papel", desc: "Problemas de rodillos" },
              { title: "No imprime", desc: "Sistema de tinta bloqueado" },
              { title: "Almohadilla llena", desc: "Necesita reseteo" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: 20,
                  padding: 28,
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <h3 style={{ color: "#000", fontSize: 22, fontWeight: 700, marginBottom: 8, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "#000", fontSize: 36, fontWeight: 700, marginBottom: 12, textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
            Servicios que ofrecemos
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 40 }}>
            {[
              "Destape de cabezales (ultrasonido y líquido)",
              "Reseteo de almohadillas (waste ink pad)",
              "Instalación de sistema de tinta continua",
              "Reparación de toma de papel",
              "Limpieza de rodillos y engranajes",
              "Calibración de inyectores",
              "Cambio de tarjetas madre",
              "Reparación de impresoras atascadas",
            ].map((servicio, i) => (
              <div key={i} style={{ background: "rgba(0,0,0,0.05)", borderRadius: 16, padding: 24, border: "1px solid rgba(0,0,0,0.1)" }}>
                <span style={{ color: "#0d59f2", marginRight: 8 }}>✓</span>
                <span style={{ color: "#000", fontFamily: "'DM Sans', sans-serif" }}>{servicio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#f5f5f5", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#000", fontSize: 36, fontWeight: 700, marginBottom: 16, fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Tu impresora no funciona bien?
          </h2>
          <p style={{ color: "#666", marginBottom: 32, fontSize: 18, fontFamily: "'DM Sans', sans-serif" }}>
            Escribinos y te diremos qué necesita tu impresora.
          </p>
          <a
            href={getWhatsAppUrl("Hola, necesito servicio para mi impresora. ¿Qué marcas trabajan?")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#0d59f2", color: "#fff", fontWeight: 700, fontSize: 18, padding: "18px 40px", borderRadius: 12, textDecoration: "none", display: "inline-block", fontFamily: "'DM Sans', sans-serif" }}
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </section>

      <footer style={{ padding: "40px 24px", background: "#000", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>© 2024 TechnoStore.</p>
      </footer>
    </div>
  );
}