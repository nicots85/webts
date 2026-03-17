// Landing page para Armado de PC

const WHATSAPP_NUMBER = "5491158586472";

function getWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ServicioArmadoPC({ imageUrl }) {
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
            background: "linear-gradient(135deg, #00d4ff 0%, #1a1a2e 100%)",
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
              <span style={{ fontSize: 24, marginRight: 8 }}>🖥️</span>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 600, letterSpacing: 1 }}>
                ARMADO PERSONALIZADO
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
              Armamos la PC <span style={{ color: "#00d4ff" }}">que necesitás</span>
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
              ¿Necesitás una PC para gaming, trabajo de oficina, diseño o edición de video? Te asesoramos y armamos la配置 perfecta para vos, con los mejores componentes y al mejor precio.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Asesoría gratuita</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Mejor precio en componentes</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Garantía propia</span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hola, quiero armar una PC. Necesito asesoría sobre los componentes.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#00d4ff",
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
              Pedir Asesoría
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { title: "Gaming", desc: "PC para jugar en alta calidad" },
              { title: "Oficina", desc: "Equipos económicos y rápidos" },
              { title: "Diseño/Edición", desc: "Potencia para trabajos exigentes" },
              { title: "Básico", desc: "Ideal para tareas cotidianas" },
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
            ¿Qué incluye el armado?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 40 }}>
            {[
              "Asesoría personalizada según tu besoin",
              "Selección de componentes de calidad",
              "Armado profesional y prolijo",
              "Instalación de Windows y drivers",
              "Pruebas de rendimiento y estabilidad",
              "Gestión de cables para mejor airflow",
              "Garantía en el armado completo",
              "Soporte post-venta",
            ].map((servicio, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 16, padding: 24, border: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ color: "#00d4ff", marginRight: 8 }}>✓</span>
                <span style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>{servicio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #00d4ff 0%, #1a1a2e 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 16, fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Querés armarte una PC?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 32, fontSize: 18, fontFamily: "'DM Sans', sans-serif" }}>
            Te asesoramos sin cargo sobre qué配置 necesitás según tu presupuesto y uso.
          </p>
          <a
            href={getWhatsAppUrl("Hola, quiero información para armar una PC. ¿Qué me recomiendan?")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#fff", color: "#000", fontWeight: 700, fontSize: 18, padding: "18px 40px", borderRadius: 12, textDecoration: "none", display: "inline-block", fontFamily: "'DM Sans', sans-serif" }}
          >
            Pedir Asesoría Gratis
          </a>
        </div>
      </section>

      <footer style={{ padding: "40px 24px", background: "#050810", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>© 2024 TechnoStore.</p>
      </footer>
    </div>
  );
}