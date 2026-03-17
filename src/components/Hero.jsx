import { REPAIR_STATUS_URL, WHATSAPP_NUMBER } from "../data/services";

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        background: "#05080f",
      }}
    >
      {/* Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          opacity: 0.35,
          zIndex: 0,
          filter: "grayscale(30%) contrast(110%)",
        }}
      >
        <source src="/img/Macro_video_cell_phone_components_04a1d1d255.mp4" type="video/mp4" />
      </video>

      {/* Premium Gradient Overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(13,89,242,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(45,252,82,0.1) 0%, transparent 50%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, #05080f 0%, transparent 20%, transparent 80%, #05080f 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ animation: "fadeInUp 0.8s ease-out" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(13,89,242,0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(13,89,242,0.2)",
              borderRadius: 99,
              padding: "8px 20px",
              marginBottom: 32,
            }}
          >
            <span style={{ color: "#0d59f2", fontSize: 13, fontWeight: 800, letterSpacing: 1.5 }}>
              LABORATORIO DE ALTA PRECISIÓN
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(48px, 6vw, 72px)",
              fontWeight: 950,
              color: "#fff",
              marginBottom: 24,
              lineHeight: 1.05,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-2px",
            }}
          >
            Tecnología <br />
            <span style={{ 
              background: "linear-gradient(90deg, #0d59f2, #2dfc52)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>redefinida</span>
          </h1>

          <p
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 48,
              maxWidth: 540,
              lineHeight: 1.7,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "-0.2px",
            }}
          >
            Donde la ingeniería se encuentra con el detalle. Resolvemos lo que otros consideran imposible con estándares de fábrica y garantía total.
          </p>

          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <a
              href="#contacto"
              style={{
                background: "#0d59f2",
                color: "#fff",
                fontWeight: 800,
                fontSize: 17,
                padding: "18px 40px",
                borderRadius: 14,
                textDecoration: "none",
                fontFamily: "'Space Grotesk', sans-serif",
                boxShadow: "0 12px 40px rgba(13,89,242,0.4)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 16px 48px rgba(13,89,242,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(13,89,242,0.4)";
              }}
            >
              Iniciar Reparación
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 17,
                padding: "18px 40px",
                borderRadius: 14,
                textDecoration: "none",
                fontFamily: "'Space Grotesk', sans-serif",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              }}
            >
              Contactar Experto
            </a>
          </div>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: 20,
          animation: "fadeInUp 1s ease-out 0.2s both" 
        }}>
          {[
            { tag: "EXPERIENCIA", val: "15+", label: "Años Liderando", icon: "💎", color: "#0d59f2" },
            { tag: "VELOCIDAD", val: " EXPRESS", label: "En el día", icon: "⚡", color: "#2dfc52" },
            { tag: "RESPALDO", val: "90 DÍAS", label: "Garantía Escrita", icon: "🛡️", color: "#ff3b30" },
            { tag: "CONFIANZA", val: "100%", label: "Piezas Premium", icon: "✅", color: "#9c27b0" }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                borderRadius: 24,
                padding: "32px 24px",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, border-color 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div style={{ 
                color: item.color, 
                fontSize: 10, 
                fontWeight: 900, 
                letterSpacing: 2, 
                marginBottom: 16,
                background: `${item.color}15`,
                padding: "4px 10px",
                borderRadius: 6,
                width: "fit-content"
              }}>
                {item.tag}
              </div>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 4, letterSpacing: "-1px" }}>{item.val}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}