// Landing page para Computadoras y Notebooks

import { useState } from "react";
import useSEO from "../hooks/useSEO";

const WHATSAPP_NUMBER = "5491127650658";

function getWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function ServicioComputadoras({ imageUrl }) {
  useSEO({
    title: "Reparación de Computadoras y Notebooks en Buenos Aires | TechnoStore",
    description: "Reparamos computadoras de escritorio, notebooks y All-in-One de todas las marcas en Buenos Aires. Formateo, backup, reparación de motherboard, diagnóstico sin cargo. Av. Santa Fe 2844.",
    canonical: "https://technostore.com.ar/computadoras",
  });
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
            background: "linear-gradient(135deg, #9c27b0 0%, #1a1a2e 100%)",
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
              <span style={{ fontSize: 24, marginRight: 8 }}>💻</span>
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
              Reparación de <span style={{ color: "#9c27b0" }}>Computadoras y Notebooks</span>
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
              ¿Tu compu no enciende, se cuelga, hace ruidos raros o tiene problemas de video? La revisamos y te decimos exactamente qué tiene. Trabajamos con todas las marcas y hacemos diagnóstico sin cargo.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Diagnóstico gratuito</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Todas las marcas</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                <span style={{ color: "#2dfc52" }}>✓</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Backup de datos</span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hola, tengo una computadora/notebook que necesita reparación. Necesito más información.")}
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
              { title: "No enciende", desc: "Problemas de fuente, motherboard o alimentación" },
              { title: "Pantalla negra", desc: "Problemas de video, inverter o display" },
              { title: "Se cuelga", desc: "Sobrecalentamiento, RAM o disco проблема" },
              { title: "Ruido excesivo", desc: "Cambio de cooler o limpieza completa" },
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

      {/* Servicios que ofrecemos */}
      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 12, textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Qué servicios ofrecemo?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", textAlign: "center", marginBottom: 48, fontFamily: "'DM Sans', sans-serif" }}>
            Desde lo más simple hasta reparaciones complejas de hardware
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              "Reparación de motherboard y componentes",
              "Mantenimiento térmico profundo",
              "Cambio de pasta térmica",
              "Limpieza interna completa",
              "Solución a pantalla negra",
              "Problemas de reinicio y bluescreen",
              "Formateo e instalación de Windows",
              "Backup seguro de datos",
              "Recuperación de archivos",
              "Cambio de teclado, cargador, batería",
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
                <span style={{ color: "#9c27b0", marginRight: 8 }}>✓</span>
                <span style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>{servicio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section style={{ padding: "80px 24px", background: "rgba(156,39,176,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 12, textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Por qué confiar en nosotros?
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32, marginTop: 48 }}>
            {[
              { icon: "🔧", title: "Técnicos con experiencia", desc: "Más de 15 años reparando computadoras" },
              { icon: "💾", title: "Tus datos seguros", desc: "Siempre hacemos backup antes de intervenir" },
              { icon: "⚡", title: "Diagnóstico claro", desc: "Te explicamos exactamente qué tiene tu equipo" },
              { icon: "🛡️", title: "Garantía", desc: "90 días en reparaciones de hardware" },
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
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #9c27b0 0%, #1a1a2e 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 16, fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Tu computadora tiene problemas?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 32, fontSize: 18, fontFamily: "'DM Sans', sans-serif" }}>
            No arriesgues tus datos llevándola a cualquier lugar. Traéla para un diagnóstico gratuito y te diremos exactamente qué tiene.
          </p>
          <a
            href={getWhatsAppUrl("Hola, tengo una computadora que no funciona bien. Quiero más información sobre el servicio.")}
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