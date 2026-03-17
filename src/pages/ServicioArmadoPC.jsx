// Landing page para Armado de PC
// Optimizada para campañas de publicidad en Buenos Aires

const WHATSAPP_NUMBER = "5491127650658";

function getWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ServicioArmadoPC({ imageUrl }) {
  return (
    <div style={{ background: "#0a0f1a", minHeight: "100vh", color: "#fff", fontFamily: "'Space Grotesk', sans-serif" }}>
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
            background: "linear-gradient(135deg, #00d4ff 0%, #1a1a2e 100%)",
            opacity: 0.9,
            zIndex: 1
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
            zIndex: 0
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
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
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
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <span style={{ fontSize: 20 }}>🖥️</span>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
                Armado de PC a Medida
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 900,
                marginBottom: 20,
                lineHeight: 1.1,
                letterSpacing: "-1px"
              }}
            >
              Armamos la PC <span style={{ color: "#00d4ff" }}>que necesitás</span>
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.7)",
                marginBottom: 32,
                maxWidth: 520,
                lineHeight: 1.6
              }}
            >
              ¿Buscás una PC para gaming, diseño, edición o simplemente para trabajar rápido? Te asesoramos en la elección de cada componente para que tengas el mejor rendimiento por tu inversión.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
              {["Asesoría profesional", "Presupuestos sin cargo", "Garantía escrita"].map(tag => (
                <div key={tag} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "#2dfc52", fontSize: 18 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 15 }}>{tag}</span>
                </div>
              ))}
            </div>

            <a
              href={getWhatsAppUrl("Hola! Quiero armar una PC. ¿Me podrían pasar un presupuesto?")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#00d4ff",
                color: "#0a0f1a",
                fontWeight: 800,
                fontSize: 16,
                padding: "18px 36px",
                borderRadius: 14,
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 8px 32px rgba(0,212,255,0.3)"
              }}
            >
              Pedir Presupuesto Gratis
            </a>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            {[
              { title: "Gaming Pro", desc: "Máximo rendimiento para juegos competitivos y streaming.", icon: "🎮" },
              { title: "Diseño & Edición", desc: "Potencia bruta para renders y procesamiento de video.", icon: "🎨" },
              { title: "Home Office", desc: "Equipos rápidos y confiables para el trabajo diario.", icon: "🏠" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(20px)",
                  borderRadius: 20,
                  padding: "24px 32px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  gap: 20,
                  alignItems: "center"
                }}
              >
                <div style={{ fontSize: 32 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section style={{ padding: "100px 24px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, marginBottom: 16 }}>
              ¿Por qué armarla en <span style={{ color: "#00d4ff" }}>TechnoStore</span>?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 18 }}>Más de 15 años de experiencia armando equipos de alto rendimiento</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { title: "Asesoría Real", desc: "No te vendemos lo más caro, sino lo que realmente necesitás para tu uso." },
              { title: "Componentes Originales", desc: "Trabajamos con las mejores marcas del mercado con garantía oficial." },
              { title: "Armado Premium", desc: "Gestión prolija de cables y optimización de flujo de aire para mayor vida útil." },
              { title: "Software Listo", desc: "Te llevás la PC configurada con drivers actualizados y lista para usar." },
            ].map((box, i) => (
              <div key={i} style={{ padding: 32, background: "rgba(255,255,255,0.03)", borderRadius: 24, border: "1px solid rgba(255,255,255,0.05)" }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: "#fff" }}>{box.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.6 }}>{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ padding: "100px 24px", textAlign: "center", background: "linear-gradient(to bottom, transparent, rgba(0,212,255,0.05))" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24 }}>¿Listo para dar el salto?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, marginBottom: 40 }}>
            Escribinos ahora y te pasamos un presupuesto detallado según lo que estés buscando.
          </p>
          <a
            href={getWhatsAppUrl("Hola! Me gustaría armar una PC y quería ver qué opciones me recomiendan.")}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#2dfc52",
              color: "#0a0f1a",
              fontWeight: 800,
              fontSize: 18,
              padding: "20px 48px",
              borderRadius: 16,
              textDecoration: "none",
              display: "inline-block",
              boxShadow: "0 10px 40px rgba(45,252,82,0.2)"
            }}
          >
            Hablar con un técnico
          </a>
        </div>
      </section>

      <footer style={{ padding: "60px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>© 2024 TechnoStore — Av. Santa Fe 2844, CABA.</p>
      </footer>
    </div>
  );
}