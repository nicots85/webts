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
        className="hero-container"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="hero-content" style={{ animation: "fadeInUp 0.8s ease-out" }}>
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
              TU LUGAR DE ENCUENTRO CON LA TECNOLOGÍA
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 72px)",
              fontWeight: 950,
              color: "#fff",
              marginBottom: 24,
              lineHeight: 1.05,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-2px",
            }}
          >
            Servicio <br />
            <span style={{ 
              background: "linear-gradient(90deg, #0d59f2, #2dfc52)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Técnico</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 2vw, 20px)",
              color: "rgba(255,255,255,0.7)",
              marginBottom: 48,
              maxWidth: 540,
              lineHeight: 1.7,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "-0.2px",
            }}
          >
            Somos un negocio con más de 15 años de experiencia en el rubro. Estamos en constante formación. Nuestro compromiso es con su satisfacción.
          </p>

          <div className="hero-actions" style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <a
              href="#contacto"
              style={{
                background: "#0d59f2",
                color: "#fff",
                fontWeight: 800,
                fontSize: 16,
                padding: "16px 36px",
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
                fontSize: 16,
                padding: "16px 36px",
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

        <div className="hero-stats-grid" style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: 16,
          animation: "fadeInUp 1s ease-out 0.2s both" 
        }}>
          {[
            { tag: "EXPERIENCIA", val: "15+", label: "Años Liderando", icon: "💎", color: "#0d59f2" },
            { tag: "VELOCIDAD", val: "EXPRESS", label: "En el día", icon: "⚡", color: "#2dfc52" },
            { tag: "RESPALDO", val: "90 DÍAS", label: "Garantía", icon: "🛡️", color: "#ff3b30" },
            { tag: "CONFIANZA", val: "100%", label: "Piezas Premium", icon: "✅", color: "#9c27b0" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="stat-card"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                borderRadius: 20,
                padding: "24px 20px",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, border-color 0.3s",
              }}
            >
              <div style={{ 
                color: item.color, 
                fontSize: 9, 
                fontWeight: 900, 
                letterSpacing: 1.5, 
                marginBottom: 12,
                background: `${item.color}15`,
                padding: "3px 8px",
                borderRadius: 4,
                width: "fit-content"
              }}>
                {item.tag}
              </div>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", marginBottom: 2, letterSpacing: "-0.5px" }}>{item.val}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}