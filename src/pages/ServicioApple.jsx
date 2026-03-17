// Landing page para Servicio Técnico Apple
// Esta página está optimizada para campañas de publicidad pagada

import { useState } from "react";

const WHATSAPP_NUMBER = "5491158586472";

function getWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ServicioApple({ imageUrl }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

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
        {/* Background con gradiente */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #0d59f2 0%, #1a1a2e 100%)",
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
              <span style={{ fontSize: 24, marginRight: 8 }}>🍏</span>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 600, letterSpacing: 1 }}>
                SERVICIO TÉCNICO ESPECIALIZADO
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
              Reparación de <span style={{ color: "#0d59f2" }}>tu MacBook, iPhone o iPad</span>
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
              Tu equipo Apple merece un servicio de calidad. Trabajamos hace más de 10 años con productos Apple, usando repuestos de la más alta calidad y técnica de microsoldadura avanzada.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Diagnóstico gratuito</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Reparaciones en el día</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Garantía de 90 días</span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hola, tengo un problema con mi equipo Apple. Necesito más información sobre el servicio técnico.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#2dfc52",
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
              Solicitar Diagnóstico Gratis
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: 20,
                padding: 32,
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 8 }}>💻</div>
              <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 8, fontFamily: "'Space Grotesk', sans-serif" }}>
                MacBook / iMac
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif" }}>
                Cambio de pantalla, batería, teclado, reparación de Face ID y microsoldadura en placa.
              </p>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: 20,
                padding: 32,
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 8 }}>📱</div>
              <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 8, fontFamily: "'Space Grotesk', sans-serif" }}>
                iPhone / iPad
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif" }}>
                Pantalla, batería, cámara, botón home, Face ID, Touch ID y recuperación de datos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios que ofrece */}
      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 12, textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Qué podemos reparar?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", textAlign: "center", marginBottom: 48, fontFamily: "'DM Sans', sans-serif" }}>
            Estos son los servicios más comunes que realizamos en equipos Apple
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              "Cambio de pantalla OLED/LCD con TrueTone",
              "Reemplazo de batería original y compatible",
              "Reparación de Face ID y Touch ID",
              "Microsoldadura en placa lógica (IC de carga, audio, etc.)",
              "Ampliación de almacenamiento NAND",
              "Reparación de sobrecalentamiento",
              "Cambio de teclado butterfly",
              "Recuperación de equipos que no encienden",
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
                <span style={{ color: "#0d59f2", marginRight: 8 }}>✓</span>
                <span style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>{servicio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué confiar en nosotros */}
      <section style={{ padding: "80px 24px", background: "rgba(13,89,242,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 12, textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Por qué confiar en TechnoStore?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", textAlign: "center", marginBottom: 48, fontFamily: "'DM Sans', sans-serif" }}>
            Más de 15 años reparando tecnología en Buenos Aires
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32 }}>
            {[
              { icon: "🔧", title: "Técnicos especializados", desc: "Tenemos más de 10 años de experiencia exclusiva con productos Apple" },
              { icon: "⚡", title: "Reparaciones rápidas", desc: "La mayoría de reparaciones las completamos en el mismo día" },
              { icon: "🛡️", title: "Garantía escrita", desc: "Todos nuestros trabajos incluyen garantía de 90 días" },
              { icon: "💎", title: "Repuestos de calidad", desc: "Usamos repuestos de la más alta calidad disponible" },
              { icon: "📋", title: "Diagnóstico transparente", desc: "Te explicamos exactamente qué tiene tu equipo antes de proceder" },
              { icon: "🔒", title: "Tus datos seguros", desc: "Tu información personal está segura con nosotros" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: 32,
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 600, marginBottom: 12, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {item.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 48, textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Cómo funciona nuestro servicio?
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
            {[
              { step: "1", title: "Contactanos", desc: "Escribinos por WhatsApp o visitanos en el local" },
              { step: "2", title: "Diagnóstico", desc: "Revisamos tu equipo y te cotización sin cargo" },
              { step: "3", title: "Reparación", desc: "Una vez aprobado, reparamos tu equipo" },
              { step: "4", title: "Entrega", desc: "Retirás tu equipo funcionando con garantía" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 16,
                  padding: "24px 32px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  minWidth: 280,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#0d59f2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h4 style={{ color: "#fff", fontWeight: 600, marginBottom: 4, fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h4>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        style={{
          padding: "80px 24px",
          background: "linear-gradient(135deg, #0d59f2 0%, #1a1a2e 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 16, fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Tu equipo Apple necesita reparación?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 32, fontSize: 18, fontFamily: "'DM Sans', sans-serif" }}>
            No arriesgues tu equipo en cualquier lugar. Escribinos para un diagnóstico gratuito y te tellinguemos exactamente qué tiene tu MacBook, iPhone o iPad.
          </p>
          <a
            href={getWhatsAppUrl("Hola, tengo un MacBook/iPhone/iPad que necesita reparación. Quiero más información.")}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#2dfc52",
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
            Escribinos por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer simple */}
      <footer style={{ padding: "40px 24px", background: "#050810", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>
          © 2024 TechnoStore. Más de 15 años reparando tu tecnología.
        </p>
      </footer>
    </div>
  );
}