// Landing page para Upgrade de Velocidad

const WHATSAPP_NUMBER = "5491127650658";

function getWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ServicioUpgrades({ imageUrl }) {
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
            background: "linear-gradient(135deg, #2dfc52 0%, #1a1a2e 100%)",
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
              <span style={{ fontSize: 24, marginRight: 8 }}>⚡</span>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 600, letterSpacing: 1 }}>
                TU COMPU COMO NUEVA
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
              Reviví tu <span style={{ color: "#2dfc52" }}>computadora antigua</span> por{" "}
              <span style={{ color: "#2dfc52" }}>menos de lo que pensás</span>
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
              ¿Tu notebook tarda 10 minutos en arrancar? ¿Se traba con solo abrir el navegador? No la tires. Con un upgrade de SSD y RAM, puede quedar hasta 10 veces más rápida. Clonamos tu disco para que no pierdas nada.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#fff" }}>🚀</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Hasta 10x más rápida</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#fff" }}>💾</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>No perdés nada</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#fff" }}>💰</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Más barato que comprar nueva</span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hola, quiero hacer un upgrade de velocidad a mi computadora. Necesito más información.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#fff",
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
              Solicitar Cotización
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: 20,
                padding: 28,
                border: "1px solid rgba(255,255,255,0.15)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 64, marginBottom: 8 }}>🔴</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>ANTES</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#ff3b30", fontFamily: "'Space Grotesk', sans-serif" }}>Disco HDD</div>
              <div style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif" }}>Arrancaje: 5-10 min</div>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: 20,
                padding: 28,
                border: "1px solid rgba(255,255,255,0.15)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 64, marginBottom: 8 }}>⚡</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>DESPUÉS</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#2dfc52", fontFamily: "'Space Grotesk', sans-serif" }}>Disco SSD</div>
              <div style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif" }}>Arrancaje: 10-15 segundos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 12, textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Qué incluye el upgrade?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", textAlign: "center", marginBottom: 48, fontFamily: "'DM Sans', sans-serif" }}>
            Todo lo que hacemos para que tu equipo vuele
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              "Cambio de disco HDD a SSD (SATA o NVMe)",
              "Ampliación de memoria RAM",
              "Clonación del disco (no perdés absolutamente nada)",
              "Optimización completa del sistema operativo",
              "Limpieza de programas innecesarios",
              "Eliminación de malware y virus",
              "Instalación de Windows limpio",
              "Configuración y actualización de drivers",
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
                <span style={{ color: "#2dfc52", marginRight: 8 }}>✓</span>
                <span style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>{servicio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section style={{ padding: "80px 24px", background: "rgba(45,252,82,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 12, textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Por qué hacer un upgrade?
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32, marginTop: 48 }}>
            {[
              { icon: "💰", title: "Ahorrá dinero", desc: "Un upgrade cuesta mucho menos que una computadora nueva" },
              { icon: "♻️", title: "Ecologico", desc: "No tires tu equipo, extindé su vida útil" },
              { icon: "⚡", title: "Velocidad inmediata", desc: "Notá la diferencia desde el primer arranque" },
              { icon: "💾", title: "Sin perder nada", desc: "Clonamos todo: programas, archivos, configuración" },
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
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #2dfc52 0%, #1a1a2e 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 16, fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Tu computadora está lenta?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 32, fontSize: 18, fontFamily: "'DM Sans', sans-serif" }}>
            No la tires, actualizala. Escribinos y te cotizamos el upgrade perfecto para tu equipo.
          </p>
          <a
            href={getWhatsAppUrl("Hola, quiero hacer un upgrade de mi computadora. ¿Cuánto cuesta?")}
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