// Landing page para Reparación de Celulares
// Optimizada para campañas de publicidad pagada

import { useState } from "react";

const WHATSAPP_NUMBER = "5491127650658";

function getWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ServicioCelulares({ imageUrl }) {
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
            background: "linear-gradient(135deg, #ff3b30 0%, #1a1a2e 100%)",
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
              Reparación de <span style={{ color: "#ff3b30" }}>Celulares Todas las Marcas</span>
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
              Samsung, Motorola, Xiaomi, Huawei y todas las marcas. Se te rompió la pantalla, no carga, se apaga solo o tiene problemas de audio? Te lo reparamos en el mismo día.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Diagnóstico gratuito</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Reparación en el día</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Todas las marcas</span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hola, tengo un problema con mi celular. Necesito más información sobre el servicio.")}
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

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { title: "Pantalla", desc: "Cambio de módulo completo" },
              { title: "Batería", desc: "Reemplazo por batería nueva" },
              { title: "Carga", desc: "Reparación del pin de carga" },
              { title: "Agua", desc: "Recuperación por líquido" },
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

      {/* Marcas que trabajamos */}
      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 16, fontFamily: "'Space Grotesk', sans-serif" }}>
            Trabajamos con todas las marcas
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 40, fontFamily: "'DM Sans', sans-serif" }}>
            No importa qué marca tengas, podemos repararlo
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", fontSize: 28, color: "#fff" }}>
            <span>Samsung</span>
            <span>Motorola</span>
            <span>Xiaomi</span>
            <span>Huawei</span>
            <span>OnePlus</span>
            <span>LG</span>
            <span>Sony</span>
            <span>Apple</span>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section style={{ padding: "80px 24px", background: "rgba(255,59,48,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 12, textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Qué problemas solucionamos?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", textAlign: "center", marginBottom: 48, fontFamily: "'DM Sans', sans-serif" }}>
            Los problemas más comunes que resolvemos a diario
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              "Pantalla rota o con manchas",
              "No carga o carga lenta",
              "Batería que se agota rápido",
              "Se apaga solo o reinicia",
              "Problemas de audio",
              "Cámara no funciona",
              "Micrófono no graba",
              "Botones que no responden",
              "Equipo mojado",
              "No enciende",
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
                <span style={{ color: "#ff3b30", marginRight: 8 }}>✓</span>
                <span style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>{servicio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 12, textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Por qué confiar en nosotros?
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32, marginTop: 48 }}>
            {[
              { icon: "⚡", title: "Reparación rápida", desc: "La mayoría de reparaciones las hacemos en el día" },
              { icon: "💰", title: "Precios justos", desc: "Te damos el mejor precio sin negociar calidad" },
              { icon: "🛡️", title: "Garantía", desc: "90 días de garantía en todas las reparaciones" },
              { icon: "🔒", title: "Datos seguros", desc: "Tu información personal queda protegida" },
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
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #ff3b30 0%, #1a1a2e 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 16, fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Tu celular tiene algún problema?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 32, fontSize: 18, fontFamily: "'DM Sans', sans-serif" }}>
            Traélo para un diagnóstico gratuito. Sin compromiso, te diremos exactamente qué tiene y cuánto cuesta la reparación.
          </p>
          <a
            href={getWhatsAppUrl("Hola, tengo un problema con mi celular. Quiero saber más sobre la reparación.")}
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

      <footer style={{ padding: "40px 24px", background: "#050810", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>
          © 2024 TechnoStore. Más de 15 años reparando tu tecnología.
        </p>
      </footer>
    </div>
  );
}