import { REPAIR_STATUS_URL } from "../data/services";

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "90vh",
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
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(13,89,242,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 30%, rgba(45,252,82,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
          width: "100%",
          position: "relative",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(13,89,242,0.12)",
              border: "1px solid rgba(13,89,242,0.3)",
              borderRadius: 99,
              padding: "6px 16px",
              marginBottom: 28,
            }}
          >
            <span style={{ color: "#0d59f2", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>
              ✓ SERVICIO TÉCNICO ESPECIALIZADO
            </span>
          </div>

          <h1
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 20,
              lineHeight: 1.1,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Tu equipo en manos de{" "}
            <span style={{ color: "#0d59f2" }}>profesionales</span>
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 36,
              maxWidth: 500,
              lineHeight: 1.6,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Más de 15 años reparando tecnología en Buenos Aires. Tratamos tu equipo como si fuera nuestro, con repuestos de calidad y diagnósticos transparentes.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#contacto"
              style={{
                background: "#0d59f2",
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
                padding: "14px 28px",
                borderRadius: 12,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Solicitar Diagnóstico
            </a>
            <a
              href={REPAIR_STATUS_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "rgba(45,252,82,0.12)",
                color: "#2dfc52",
                fontWeight: 600,
                fontSize: 16,
                padding: "14px 28px",
                borderRadius: 12,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                border: "1px solid rgba(45,252,82,0.3)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(45,252,82,0.22)"}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(45,252,82,0.12)")}
            >
              🔍 Consultar Reparación
            </a>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(13,89,242,0.15) 0%, rgba(13,89,242,0.05) 100%)",
              borderRadius: 24,
              padding: 32,
              border: "1px solid rgba(13,89,242,0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 12 }}>🔧</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 4 }}>15+</div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}>Años de experiencia</div>
          </div>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(45,252,82,0.12) 0%, rgba(45,252,82,0.04) 100%)",
              borderRadius: 24,
              padding: 32,
              border: "1px solid rgba(45,252,82,0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 12 }}>⚡</div>
            {/* Refined text for TechnoStore V5 */}
            <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Reparaciones <br/> en el día</div>
          </div>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(242,13,89,0.12) 0%, rgba(242,13,89,0.04) 100%)",
              borderRadius: 24,
              padding: 32,
              border: "1px solid rgba(242,13,89,0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 12 }}>🛡️</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 4 }}>90 días</div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}>Garantía en reparaciones</div>
          </div>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(156,39,176,0.12) 0%, rgba(156,39,176,0.04) 100%)",
              borderRadius: 24,
              padding: 32,
              border: "1px solid rgba(156,39,176,0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 12 }}>✓</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 4 }}>100%</div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}>Transparencia total</div>
          </div>
        </div>
      </div>
    </section>
  );
}