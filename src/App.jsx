import { useState, useRef, useEffect } from "react";

const LOGO_B64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8wAAAJ+CAYAAABi9vxiAAAACXBIWXMAABcSAAAXEgFnn9JSAAAFgWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDYtMjhUMDU6MDk6MzgtMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA0LTExVDA0OjAzOjMzLTAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA0LTExVDA0OjAzOjMzLTAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM4ZjJiOWM5LTZmYjItNDNlYy1hNTQ2LWNmMTJlZjVlYzRiMyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjFlNWFkNjkxLTI3YmItOTU0OS05MmE2LTgxZmI2Nzk5ZTJjMSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmVmOWI5MDk0LTUwNTAtNGY5NC1iNGEzLWMyYTc3OTFmYjMzYyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWY5YjkwOTQtNTA1MC00Zjk0LWI0YTMtYzJhNzc5MWZiMzNjIiBzdEV2dDp3aGVuPSIyMDE5LTA2LTI4VDA1OjA5OjM4LTAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MzhmMmI5YzktNmZiMi00M2VjLWE1NDYtY2YxMmVmNWVjNGIzIiBzdEV2dDp3aGVuPSIyMDIwLTA0LTExVDA0OjAzOjMzLTAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6bJKqNAAB4qklEQVR42tz9d5xdV3Xwj7/22af3mftemVGXZFnuveEGLhhMCyFAgIQkJCGN9EISSJ4QCCFACB0CBkxzw71gy7JsWb1Lo5HmnpnenXP2Xr8/ztGM5CbbKqvk/X7e13NvOWvvs/faa6/1WQq99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJL";

const WHATSAPP_NUMBER = "5491100000000";

// ─── SISTEMA DEL CHATBOT ───────────────────────────────────────────────────
const BOT_SYSTEM = `Sos el asistente virtual de TechnoStore, un servicio técnico especializado en Buenos Aires. Respondés en español rioplatense, de manera amigable, directa y concisa.

SERVICIOS:
• Reparación Apple: iPhone, iPad, MacBook. Pantallas OLED/LCD originales, baterías con ciclos reales, conectores Lightning/USB-C, Face ID, Touch ID, cámaras, microsoldadura de placa. Diagnóstico sin cargo.
• Upgrade PC/Notebook: SSD NVMe y SATA, ampliación RAM DDR3/DDR4, limpieza profunda, pasta térmica, reinstalación de sistema. Tu vieja notebook puede ser hasta 100 veces más rápida.
• Reparación de Consolas: PS4, PS5, Xbox One/Series, Nintendo Switch. Reballing de GPU, cambio de puerto HDMI (PS3/PS4/PS5), joystick drift, limpieza de ventilador, lector de disco, fuente de poder.
• Reparación de Bisagras: todas las marcas (HP, Lenovo, Asus, Acer, Dell, Samsung, Toshiba). Reparación de marco de pantalla, cambio de bisagras, refuerzo estructural. Garantía de mano de obra.
• Armado de PC a medida: presupuestos personalizados para gaming, diseño, edición de video o trabajo de oficina.

DATOS DEL LOCAL:
• Dirección: Av. Santa Fe 2844, Local TechnoStore, Buenos Aires
• Horario: Lunes a Sábados de 12:00 a 20:00 hs
• Email: tsbarrionuevo@gmail.com
• Se recomienda reservar turno previamente

POLÍTICAS:
• Diagnóstico sin cargo para todos los equipos
• Garantía de mano de obra en todas las reparaciones
• Repuestos originales cuando es posible

IMPORTANTE: Si no sabés algo con certeza, derivá al cliente por WhatsApp o email. Sé breve: máximo 3-4 oraciones. No inventes precios.`;

function buildWhatsAppLink(name, device, brand, model, problem) {
  const text = `Hola TechnoStore! Te contacto desde el sitio web.\n\nNombre: ${name}\nEquipo: ${device}\nMarca y modelo: ${brand} ${model}\nProblema: ${problem}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Reparación Apple", href: "#apple" },
  { label: "Upgrade PC", href: "#upgrade" },
  { label: "Consolas", href: "#consolas" },
  { label: "Bisagras", href: "#bisagras" },
  { label: "Presupuesto PC", href: "#armado" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICES = [
  {
    id: "apple",
    icon: "📱",
    title: "Reparación Apple",
    subtitle: "iPhone · iPad · MacBook",
    desc: "Especialistas certificados en toda la línea Apple. Pantallas, baterías, conectores, microsoldadura y más. Repuestos originales y garantía real.",
    color: "#0d59f2",
    items: ["Pantallas OLED/LCD originales", "Baterías con ciclos reales", "Conectores y cámaras", "Microsoldadura de placa", "Diagnóstico sin cargo"],
  },
  {
    id: "upgrade",
    icon: "⚡",
    title: "No tires tu vieja compu",
    subtitle: "La volvemos hasta 100× más rápida",
    desc: "Instalación de SSD NVMe, RAM, limpieza profunda y optimización de sistema. Tu notebook del 2015 puede volar como nueva.",
    color: "#2dfc52",
    items: ["SSD NVMe / SATA 2.5\"", "Ampliación de RAM", "Limpieza profunda de polvo", "Renovación de pasta térmica", "Reinstalación de sistema"],
  },
  {
    id: "consolas",
    icon: "🎮",
    title: "Reparación de Consolas",
    subtitle: "PS4 · PS5 · Xbox · Switch",
    desc: "Reballing de GPU, cambio de puerto HDMI, limpieza de ventilador, joystick drift y fallas de lectura de disco.",
    color: "#0d59f2",
    items: ["Reballing profesional PS4/PS5", "Puerto HDMI PS3/PS4/PS5", "Drift de joystick Switch/PS5", "Limpieza y pasta térmica", "Falla de lectura de disco"],
  },
  {
    id: "bisagras",
    icon: "💻",
    title: "Reparación de Bisagras",
    subtitle: "Notebooks de todas las marcas",
    desc: "Las bisagras rotas son el problema más común en notebooks. Las reparamos o reemplazamos con repuestos específicos para tu modelo.",
    color: "#2dfc52",
    items: ["Bisagras HP, Lenovo, Acer, Asus", "Reparación de marco de pantalla", "Cambio de bisagras originales", "Refuerzo estructural", "Garantía de mano de obra"],
  },
];

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function NavBar({ activeSection }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(10,15,26,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src={LOGO_B64} alt="TechnoStore" style={{ height: 44 }} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              background: "linear-gradient(90deg, #0d59f2, #2dfc52)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.5px",
            }}
          >
            TechnoStore
          </span>
        </a>

        <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {NAV_LINKS.slice(0, 5).map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: activeSection === l.href.replace("#", "") ? "#0d59f2" : "rgba(255,255,255,0.7)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            background: "#0d59f2",
            color: "#fff",
            fontWeight: 700,
            fontSize: 14,
            padding: "10px 22px",
            borderRadius: 10,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Agendar Turno
        </a>
      </div>
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
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
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(38px, 5vw, 68px)",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              color: "#fff",
              margin: "0 0 24px",
            }}
          >
            Tu tecnología,{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #0d59f2 20%, #2dfc52 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              reparada y mejorada
            </span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 480,
              margin: "0 0 36px",
            }}
          >
            Reparación profesional de Apple, PC, consolas y notebooks. Instalamos SSD, ampliamos RAM
            y devolvemos la vida a equipos viejos. Somos TechnoStore.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#servicios"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "#0d59f2",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 32px",
                borderRadius: 12,
                textDecoration: "none",
                boxShadow: "0 8px 32px rgba(13,89,242,0.35)",
              }}
            >
              Ver Servicios
            </a>
            <a
              href="#contacto"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "rgba(255,255,255,0.07)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 32px",
                borderRadius: 12,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              WhatsApp
            </a>
          </div>

          <div style={{ display: "flex", gap: 40, marginTop: 48 }}>
            {[
              { n: "10+", label: "Años de experiencia" },
              { n: "+5.000", label: "Reparaciones" },
              { n: "100%", label: "Clientes satisfechos" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 28,
                    fontWeight: 900,
                    color: "#0d59f2",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", height: 500 }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(13,89,242,0.2) 0%, rgba(45,252,82,0.1) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 120,
            }}
          >
            🛠️
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: 24,
              right: 24,
              background: "rgba(10,15,26,0.85)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(45,252,82,0.3)",
              borderRadius: 16,
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span style={{ fontSize: 32 }}>⚡</span>
            <div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  color: "#2dfc52",
                  fontSize: 14,
                }}
              >
                Laboratorio Nivel 3
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Equipamiento de última generación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICIOS GRID ───────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="servicios" style={{ padding: "100px 24px", background: "rgba(255,255,255,0.02)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-1px",
              margin: "0 0 16px",
            }}
          >
            Nuestros Servicios
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, maxWidth: 560, margin: "0 auto" }}>
            Soluciones técnicas especializadas para toda tu tecnología
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              style={{
                display: "block",
                textDecoration: "none",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: 32,
                transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = s.color + "60";
                e.currentTarget.style.boxShadow = `0 16px 48px ${s.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: s.color + "20",
                  border: `1px solid ${s.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  marginBottom: 24,
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#fff",
                  margin: "0 0 6px",
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: 13, color: s.color, fontWeight: 600, margin: "0 0 16px" }}>{s.subtitle}</p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.65, margin: "0 0 24px" }}>
                {s.desc}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {s.items.map((item) => (
                  <li
                    key={item}
                    style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8 }}
                  >
                    <span style={{ color: s.color, fontSize: 16 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── UPGRADE SECTION ──────────────────────────────────────────────────────────
function UpgradeSection() {
  return (
    <section
      id="upgrade"
      style={{
        padding: "100px 24px",
        background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(45,252,82,0.08) 0%, transparent 70%)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "rgba(45,252,82,0.07)",
            border: "1px solid rgba(45,252,82,0.2)",
            borderRadius: 24,
            padding: 48,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 96, marginBottom: 24 }}>🖥️</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "HDD lento", before: true },
              { label: "Instalamos SSD NVMe", arrow: true },
              { label: "100× más rápido", after: true },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  padding: "12px 20px",
                  borderRadius: 10,
                  background: row.after ? "rgba(45,252,82,0.15)" : "rgba(255,255,255,0.04)",
                  border: row.after ? "1px solid rgba(45,252,82,0.4)" : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span style={{ fontSize: 14, color: row.after ? "#2dfc52" : "rgba(255,255,255,0.6)", fontWeight: row.after ? 700 : 400 }}>
                  {row.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              display: "inline-block",
              background: "rgba(45,252,82,0.12)",
              border: "1px solid rgba(45,252,82,0.3)",
              borderRadius: 99,
              padding: "5px 14px",
              fontSize: 12,
              color: "#2dfc52",
              fontWeight: 700,
              letterSpacing: 1,
              marginBottom: 24,
            }}
          >
            ⚡ UPGRADE DE HARDWARE
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 3.5vw, 48px)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-1px",
              margin: "0 0 16px",
              lineHeight: 1.1,
            }}
          >
            No tires tu vieja compu. <br />
            <span style={{ color: "#2dfc52" }}>La volvemos nueva.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
            Con la instalación de un SSD NVMe tu notebook del 2015 arranca en segundos y trabaja
            sin lag. Además ampliamos la RAM y hacemos una limpieza profunda.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
            {[
              "Diagnóstico previo sin cargo",
              "SSD NVMe hasta 4 TB de velocidad",
              "Ampliación de RAM DDR3/DDR4",
              "Limpieza profunda y pasta térmica",
              "Garantía sobre mano de obra",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "rgba(45,252,82,0.2)",
                    border: "1px solid rgba(45,252,82,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    color: "#2dfc52",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 15 }}>{item}</span>
              </div>
            ))}
          </div>
          <a
            href="#contacto"
            style={{
              display: "inline-block",
              background: "#2dfc52",
              color: "#0a0f1a",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 16,
              padding: "14px 32px",
              borderRadius: 12,
              textDecoration: "none",
            }}
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICE DETAIL ───────────────────────────────────────────────────────────
function ServiceDetail({ id, icon, title, subtitle, desc, color, items }) {
  return (
    <section id={id} style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 32, flexWrap: "wrap" }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: color + "20",
              border: `1px solid ${color}40`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              flexShrink: 0,
            }}
          >
            {icon}
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ color, fontWeight: 700, fontSize: 13, letterSpacing: 1, margin: "0 0 8px" }}>{subtitle}</p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-1px",
                margin: "0 0 16px",
              }}
            >
              {title}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, lineHeight: 1.7, maxWidth: 600 }}>{desc}</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 12,
                marginTop: 32,
              }}
            >
              {items.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 10,
                    padding: "12px 16px",
                  }}
                >
                  <span style={{ color, fontSize: 16 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#contacto"
              style={{
                display: "inline-block",
                background: color,
                color: color === "#2dfc52" ? "#0a0f1a" : "#fff",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 15,
                padding: "13px 28px",
                borderRadius: 12,
                textDecoration: "none",
                marginTop: 32,
              }}
            >
              Solicitar este servicio →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── BUILD PC FORM ────────────────────────────────────────────────────────────
function BuildPCForm() {
  const [form, setForm] = useState({ name: "", use: "", budget: "", peripherals: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = `Hola TechnoStore! Quiero un presupuesto para armar una PC.\n\nNombre: ${form.name}\nUso principal: ${form.use}\nPresupuesto aproximado: $${form.budget}\nPeriféricos: ${form.peripherals}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  return (
    <section id="armado" style={{ padding: "100px 24px", background: "rgba(13,89,242,0.04)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(13,89,242,0.12)",
              border: "1px solid rgba(13,89,242,0.3)",
              borderRadius: 99,
              padding: "5px 14px",
              fontSize: 12,
              color: "#0d59f2",
              fontWeight: 700,
              letterSpacing: 1,
              marginBottom: 20,
            }}
          >
            🖥️ ARMADO DE PC A MEDIDA
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-1px",
              margin: "0 0 12px",
            }}
          >
            Presupuesto Personalizado
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17 }}>
            Completá el formulario y te mandamos el presupuesto por WhatsApp
          </p>
        </div>

        {sent ? (
          <div
            style={{
              background: "rgba(45,252,82,0.1)",
              border: "1px solid rgba(45,252,82,0.3)",
              borderRadius: 16,
              padding: 40,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
            <h3 style={{ color: "#2dfc52", fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 800 }}>
              ¡Listo!
            </h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16 }}>
              Te redirigimos a WhatsApp. Si no se abrió,{" "}
              <a href="#contacto" style={{ color: "#0d59f2" }}>contactanos acá</a>.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: 40,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {[
              { name: "name", label: "Tu nombre", placeholder: "Juan García", type: "text" },
              { name: "use", label: "Uso principal", placeholder: "Gaming, diseño gráfico, edición de video, trabajo de oficina...", type: "text" },
              { name: "budget", label: "Presupuesto aproximado (ARS)", placeholder: "Ej: 500000", type: "number" },
              { name: "peripherals", label: "¿Necesitás periféricos? (monitor, teclado, mouse)", placeholder: "Ej: monitor 24\", teclado y mouse", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: 8,
                    letterSpacing: 0.5,
                  }}
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  style={{
                    width: "100%",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 10,
                    padding: "12px 16px",
                    color: "#fff",
                    fontSize: 15,
                    outline: "none",
                    boxSizing: "border-box",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                />
              </div>
            ))}
            <button
              type="submit"
              style={{
                background: "#0d59f2",
                color: "#fff",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 32px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                marginTop: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                boxShadow: "0 8px 32px rgba(13,89,242,0.35)",
              }}
            >
              💬 Recibir presupuesto por WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// ─── FORMULARIO DE CONTACTO ───────────────────────────────────────────────────
function ServiceRequestForm() {
  const [form, setForm] = useState({ name: "", device: "", brand: "", model: "", problem: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const link = buildWhatsAppLink(form.name, form.device, form.brand, form.model, form.problem);
    window.open(link, "_blank");
    setSent(true);
  }

  return (
    <section id="contacto" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>

          {/* Info del local */}
          <div>
            <div
              style={{
                display: "inline-block",
                background: "rgba(45,252,82,0.12)",
                border: "1px solid rgba(45,252,82,0.3)",
                borderRadius: 99,
                padding: "5px 14px",
                fontSize: 12,
                color: "#2dfc52",
                fontWeight: 700,
                letterSpacing: 1,
                marginBottom: 24,
              }}
            >
              📍 DATOS DEL LOCAL
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-1px",
                margin: "0 0 32px",
              }}
            >
              Vení a vernos o <span style={{ color: "#2dfc52" }}>escribinos</span>
            </h2>
            {[
              { icon: "📍", title: "Dirección", value: "Av. Santa Fe 2844 — Local TechnoStore" },
              { icon: "🕐", title: "Horario", value: "Lunes a Sábados 12:00 a 20:00 hs" },
              { icon: "📅", title: "Turnos", value: "Recomendamos reservar turno" },
              { icon: "✉️", title: "Email", value: "tsbarrionuevo@gmail.com" },
            ].map((info) => (
              <div
                key={info.title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  marginBottom: 24,
                  padding: "16px 20px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                }}
              >
                <span style={{ fontSize: 24 }}>{info.icon}</span>
                <div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: 0.5, marginBottom: 4 }}>
                    {info.title}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 15 }}>{info.value}</div>
                </div>
              </div>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#2dfc52",
                color: "#0a0f1a",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 15,
                padding: "13px 28px",
                borderRadius: 12,
                textDecoration: "none",
                marginTop: 8,
              }}
            >
              💬 Abrir WhatsApp
            </a>
          </div>

          {/* Formulario */}
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 800, color: "#fff", margin: "0 0 24px" }}>
              Solicitar servicio técnico
            </h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 28 }}>
              Completá el formulario y se abrirá un chat de WhatsApp con toda la info precargada.
            </p>
            {sent ? (
              <div
                style={{
                  background: "rgba(13,89,242,0.1)",
                  border: "1px solid rgba(13,89,242,0.3)",
                  borderRadius: 16,
                  padding: 32,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15 }}>¡Gracias! Te redirigimos a WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { name: "name", label: "Nombre", placeholder: "Tu nombre completo", type: "text" },
                  { name: "device", label: "Tipo de equipo", placeholder: "Ej: iPhone 13, Notebook, PS5", type: "text" },
                  { name: "brand", label: "Marca", placeholder: "Ej: Apple, HP, Sony", type: "text" },
                  { name: "model", label: "Modelo", placeholder: "Ej: Pro Max, Pavilion 15", type: "text" },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={`req-${field.name}`}
                      style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6, fontWeight: 600 }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={`req-${field.name}`}
                      name={field.name}
                      type={field.type}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 8,
                        padding: "10px 14px",
                        color: "#fff",
                        fontSize: 14,
                        outline: "none",
                        boxSizing: "border-box",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="req-problem"
                    style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6, fontWeight: 600 }}
                  >
                    Descripción del problema
                  </label>
                  <textarea
                    id="req-problem"
                    name="problem"
                    value={form.problem}
                    onChange={handleChange}
                    placeholder="Describí el problema con tu equipo..."
                    required
                    rows={3}
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 8,
                      padding: "10px 14px",
                      color: "#fff",
                      fontSize: 14,
                      outline: "none",
                      boxSizing: "border-box",
                      resize: "vertical",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: "#0d59f2",
                    color: "#fff",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    padding: "13px 24px",
                    borderRadius: 10,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  💬 Contactar por WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "60px 24px 40px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }}>
              <img src={LOGO_B64} alt="TechnoStore" style={{ height: 40 }} />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  background: "linear-gradient(90deg, #0d59f2, #2dfc52)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                TechnoStore
              </span>
            </a>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
              Servicio técnico especializado con más de 10 años de experiencia. Reparamos Apple, PC, consolas y notebooks.
            </p>
            <div style={{ marginTop: 20 }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>📍 Av. Santa Fe 2844</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>🕐 Lun–Sáb 12:00 a 20:00 hs</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>✉️ tsbarrionuevo@gmail.com</p>
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 20 }}>Servicios</h4>
            {["Reparación Apple", "Upgrade PC/Notebook", "Consolas", "Bisagras", "Armado de PC"].map((l) => (
              <a key={l} href="#servicios" style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 10, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 20 }}>Información</h4>
            {["Cómo trabajamos", "Garantía", "Preguntas frecuentes", "Presupuesto PC"].map((l) => (
              <a key={l} href="#contacto" style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 10, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 20 }}>Contacto</h4>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#2dfc52",
                color: "#0a0f1a",
                fontWeight: 700,
                fontSize: 14,
                padding: "10px 18px",
                borderRadius: 10,
                textDecoration: "none",
                marginBottom: 12,
              }}
            >
              💬 WhatsApp
            </a>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 8 }}>Recomendamos reservar turno</p>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>© 2024 TechnoStore. Todos los derechos reservados.</p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>Av. Santa Fe 2844 — Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  );
}

// ─── CHATBOT IA ───────────────────────────────────────────────────────────────
function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "¡Hola! 👋 Soy el asistente de TechnoStore. Podés preguntarme sobre nuestros servicios, cómo llevar tu equipo, horarios o cualquier consulta técnica. ¿En qué te puedo ayudar?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, open]);

  async function sendMessage(text) {
    const msgText = text || input.trim();
    if (!msgText || loading) return;

    const newMessages = [...messages, { role: "user", content: msgText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 400,
          system: BOT_SYSTEM,
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const reply =
        data.content?.[0]?.text ||
        "Disculpá, hubo un problema. Por favor contactanos por WhatsApp o email.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Hubo un error de conexión. Podés contactarnos directamente por WhatsApp o al email tsbarrionuevo@gmail.com",
        },
      ]);
    }

    setLoading(false);
  }

  const QUICK_REPLIES = ["¿Qué servicios hacen?", "¿Dónde están ubicados?", "¿Cómo agendo un turno?", "Quiero reparar mi iPhone"];

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 200,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: open
            ? "rgba(255,255,255,0.15)"
            : "linear-gradient(135deg, #0d59f2 0%, #2dfc52 100%)",
          border: open ? "1px solid rgba(255,255,255,0.2)" : "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 32px rgba(13,89,242,0.45)",
          transition: "transform 0.2s, background 0.3s",
          fontSize: 26,
          color: "#fff",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        title="Chat con TechnoStore"
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Panel del chat */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 100,
            right: 28,
            zIndex: 199,
            width: 348,
            maxHeight: 540,
            background: "rgba(8,13,24,0.97)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(13,89,242,0.15)",
            animation: "chatSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "14px 18px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(13,89,242,0.08)",
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0d59f2, #2dfc52)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              🤖
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14, color: "#fff" }}>
                Asistente TechnoStore
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#2dfc52",
                    display: "inline-block",
                    boxShadow: "0 0 6px #2dfc52",
                  }}
                />
                <span style={{ fontSize: 11, color: "#2dfc52" }}>En línea · IA</span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.4)",
                cursor: "pointer",
                fontSize: 18,
                padding: 4,
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>

          {/* Mensajes */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                  alignItems: "flex-end",
                  gap: 7,
                }}
              >
                {m.role === "assistant" && (
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #0d59f2, #2dfc52)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      flexShrink: 0,
                      marginBottom: 2,
                    }}
                  >
                    🤖
                  </div>
                )}
                <div
                  style={{
                    maxWidth: "76%",
                    padding: "10px 14px",
                    borderRadius: 16,
                    borderBottomRightRadius: m.role === "user" ? 4 : 16,
                    borderBottomLeftRadius: m.role === "assistant" ? 4 : 16,
                    background:
                      m.role === "user"
                        ? "linear-gradient(135deg, #0d59f2, #0a45c0)"
                        : "rgba(255,255,255,0.07)",
                    border: m.role === "assistant" ? "1px solid rgba(255,255,255,0.08)" : "none",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: 1.6,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {/* Indicador de escritura */}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 7 }}>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0d59f2, #2dfc52)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                  }}
                >
                  🤖
                </div>
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: 16,
                    borderBottomLeftRadius: 4,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.5)",
                        display: "inline-block",
                        animation: `typingDot 1.2s infinite ${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies (solo al inicio) */}
          {messages.length <= 1 && (
            <div
              style={{
                padding: "0 12px 10px",
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
              }}
            >
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  style={{
                    background: "rgba(13,89,242,0.15)",
                    border: "1px solid rgba(13,89,242,0.35)",
                    borderRadius: 99,
                    padding: "5px 11px",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.75)",
                    cursor: "pointer",
                    fontFamily: "'Space Grotesk', sans-serif",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(13,89,242,0.28)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(13,89,242,0.15)")}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            style={{
              padding: "10px 12px 14px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Escribí tu consulta..."
              disabled={loading}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "9px 13px",
                color: "#fff",
                fontSize: 13,
                outline: "none",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background:
                  loading || !input.trim()
                    ? "rgba(13,89,242,0.2)"
                    : "#0d59f2",
                border: "none",
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 17,
                flexShrink: 0,
                transition: "background 0.2s",
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes typingDot {
          0%, 60%, 100% { opacity: 0.3; transform: scale(0.85); }
          30%            { opacity: 1;   transform: scale(1.15); }
        }
      `}</style>
    </>
  );
}

// ─── APP PRINCIPAL ────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0a0f1a;
          color: #fff;
          font-family: 'Space Grotesk', sans-serif;
          min-height: 100vh;
        }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.3); }
        input:focus, textarea:focus {
          border-color: rgba(13,89,242,0.5) !important;
          box-shadow: 0 0 0 3px rgba(13,89,242,0.15) !important;
        }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
        @media (max-width: 768px) {
          nav { display: none !important; }
        }
      `}</style>

      <NavBar activeSection="inicio" />
      <Hero />
      <Services />

      <ServiceDetail
        id="apple"
        icon="📱"
        title="Reparación Apple"
        subtitle="ESPECIALISTAS EN APPLE"
        color="#0d59f2"
        desc="Contamos con técnicos certificados y repuestos originales para toda la línea Apple. Desde pantallas rotas hasta problemas de placa base y microsoldadura avanzada."
        items={["Pantallas OLED y LCD originales", "Baterías con ciclos reales certificados", "Conectores Lightning y USB-C", "Face ID, Touch ID, Cámara", "Microsoldadura de componentes", "Diagnóstico sin cargo previo"]}
      />

      <UpgradeSection />

      <ServiceDetail
        id="consolas"
        icon="🎮"
        title="Reparación de Consolas"
        subtitle="PS4 · PS5 · XBOX · SWITCH"
        color="#0d59f2"
        desc="Somos expertos en la reparación de consolas de todas las marcas y generaciones. Desde el reballing de la GPU hasta el cambio de puerto HDMI y problemas de lector de disco."
        items={["Reballing GPU PS4/PS5/Xbox", "Cambio puerto HDMI PS3/PS4/PS5", "Drift joystick Switch/PS5/Xbox", "Limpieza y pasta térmica", "Lector de disco y blu-ray", "Reparación de fuente de poder"]}
      />

      <ServiceDetail
        id="bisagras"
        icon="💻"
        title="Reparación de Bisagras"
        subtitle="TODAS LAS MARCAS Y MODELOS"
        color="#2dfc52"
        desc="Las bisagras rotas son el problema más frecuente en notebooks. Reparamos o reemplazamos bisagras con repuestos específicos para tu modelo, incluyendo el refuerzo del chasis."
        items={["Bisagras HP, Lenovo, Asus, Acer", "Dell, Samsung, Toshiba y más", "Reparación de marco de pantalla", "Refuerzo estructural del chasis", "Repuestos originales y compatibles", "Garantía de mano de obra"]}
      />

      <BuildPCForm />
      <ServiceRequestForm />
      <Footer />

      {/* Chatbot flotante con IA */}
      <Chatbot />
    </>
  );
}
