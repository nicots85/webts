// Landing page para Ventas de equipos y accesorios

const WHATSAPP_NUMBER = "5491127650658";

function getWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ServicioVentas({ imageUrl }) {
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
            background: "linear-gradient(135deg, #ffd60a 0%, #1a1a2e 100%)",
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
                background: "rgba(0,0,0,0.3)",
                borderRadius: 99,
                padding: "8px 16px",
                marginBottom: 24,
              }}
            >
              <span style={{ fontSize: 24, marginRight: 8 }}>🛒</span>
              <span style={{ color: "#000", fontSize: 14, fontWeight: 600, letterSpacing: 1 }}>
                VENTAS Y ACCESORIOS
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
              Vendemos equipos y <span style={{ color: "#0d59f2" }}>accesorios</span>
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
              компрадо y venta de tecnología. Celulares, notebooks, tablets, periféricos, cargadores, fundas, y más. También vendemos repuestos para que vos mismo puedas arreglar tu equipo.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#000" }}>
                <span style={{ color: "#0d59f2" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Equipos nuevos y usados</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#000" }}>
                <span style={{ color: "#0d59f2" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Accesorios originales</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#000" }}>
                <span style={{ color: "#0d59f2" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Repuestos</span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hola, quiero comprar un equipo/accesorio. ¿Qué tienen disponible?")}
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
              Ver Catálogo
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { title: "Celulares", desc: "Nuevos y usados garantizados" },
              { title: "Notebooks", desc: "Para trabajo y gaming" },
              { title: "Accesorios", desc: "Cargadores, fundas, vidrios" },
              { title: "Repuestos", desc: "Pantallas, baterías, partes" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.95)",
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
            ¿Qué vendemo?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 40 }}>
            {[
              "Celulares nuevas y seminuevas",
              "Notebooks y netbooks",
              "Tablets y iPads",
              "Cargadores y cables",
              "Fundas y protectores",
              "Vidrios templados",
              "Auriculares y parlantes",
              "Baterías externas (powerbanks)",
              "Mouse y teclados",
              "Discos SSD y HDD",
              "Memorias RAM",
              "Repuestos varios",
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
            ¿Qué necesitás comprar?
          </h2>
          <p style={{ color: "#666", marginBottom: 32, fontSize: 18, fontFamily: "'DM Sans', sans-serif" }}>
            Consultanos por lo que necesites. Temos los mejores precios.
          </p>
          <a
            href={getWhatsAppUrl("Hola, quiero comprar un equipo/accesorio. ¿Qué tienen disponible ahora?")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#0d59f2", color: "#fff", fontWeight: 700, fontSize: 18, padding: "18px 40px", borderRadius: 12, textDecoration: "none", display: "inline-block", fontFamily: "'DM Sans', sans-serif" }}
          >
            Consultar Disponibilidad
          </a>
        </div>
      </section>

      <footer style={{ padding: "40px 24px", background: "#000", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>© 2024 TechnoStore.</p>
      </footer>
    </div>
  );
}