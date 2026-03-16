import { useState, useRef, useEffect } from "react";

const LOGO_B64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8wAAAJ+CAYAAABi9vxiAAAACXBIWXMAABcSAAAXEgFnn9JSAAAFgWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDYtMjhUMDU6MDk6MzgtMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA0LTExVDA0OjAzOjMzLTAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA0LTExVDA0OjAzOjMzLTAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM4ZjJiOWM5LTZmYjItNDNlYy1hNTQ2LWNmMTJlZjVlYzRiMyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjFlNWFkNjkxLTI3YmItOTU0OS05MmE2LTgxZmI2Nzk5ZTJjMSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmVmOWI5MDk0LTUwNTAtNGY5NC1iNGEzLWMyYTc3OTFmYjMzYyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWY5YjkwOTQtNTA1MC00Zjk0LWI0YTMtYzJhNzc5MWZiMzNjIiBzdEV2dDp3aGVuPSIyMDE5LTA2LTI4VDA1OjA5OjM4LTAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MzhmMmI5YzktNmZiMi00M2VjLWE1NDYtY2YxMmVmNWVjNGIzIiBzdEV2dDp3aGVuPSIyMDIwLTA0LTExVDA0OjAzOjMzLTAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6bJKqNAAB4qklEQVR42tz9d5xdV3Xwj7/22af3mftemVGXZFnuveEGLhhMCyFAgIQkJCGN9EISSJ4QCCFACB0CBkxzw71gy7JsWb1Lo5HmnpnenXP2Xr8/ztGM5CbbKqvk/X7e13NvOWvvs/faa6/1WQq99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJLL7300ksvvfTSSy+99NJL";

const WHATSAPP_NUMBER = "5491127650658";

// ─── SISTEMA DEL CHATBOT ───────────────────────────────────────────────────
const BOT_SYSTEM = `Sos el asistente virtual de TechnoStore, un servicio técnico especializado en Buenos Aires. Respondés en español rioplatense, de manera amigable, directa y concisa.

SERVICIOS:
SERVICIOS:
• Reparación Apple: iPhone, iPad, MacBook. Repuestos 100% originales, Face ID, microsoldadura.
• Celulares (Multimarca): Samsung, Motorola, Xiaomi. Módulos, pines de carga, baterías.
• Computadoras & Notebooks: Cambio a SSD, ampliación de RAM, reballing, bisagras rotas, armado de PC a medida.
• Tablets: Cambio de táctil, displays, baterías, software. Todas las marcas.
• Impresoras: Mantenimiento preventivo, destape de cabezales, reseteo de almohadillas, recarga de sistemas continuos. Epson, HP, Brother.
• Armado de PC a medida: presupuestos personalizados para gaming, diseño, edición de video o trabajo de oficina.

DATOS DEL LOCAL:
• Dirección: Av. Santa Fe 2844, Local TechnoStore, Buenos Aires
• Horario: Lunes a Sábados de 12:00 a 20:00 hs
• Email: tsbarrionorte@gmail.com
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
  { label: "Apple", href: "#apple" },
  { label: "Celulares", href: "#celulares" },
  { label: "Computadoras", href: "#computadoras" },
  { label: "Upgrades", href: "#upgrades" },
  { label: "Bisagras", href: "#bisagras" },
  { label: "Consolas", href: "#consolas" },
  { label: "Armado PC", href: "#armado" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICES = [
  {
    id: "apple",
    icon: "🍏",
    title: "Especialistas Apple",
    subtitle: "MacBook · iPhone · iPad",
    desc: "Somos especialistas en MacBook, iPhone, iPad, todos los productos Apple. Servicio técnico premium con repuestos originales y microsoldadura de placa.",
    color: "#0d59f2",
    img: "/img/apple_service_1773640672618.png",
    items: ["Módulos OLED originales con TrueTone", "Baterías calidad 100% certificado", "Reparación avanzada de Face ID", "Microsoldadura en placas lógicas", "Ampliación de memoria NAND", "Reparaciones exprés en el día"],
  },
  {
    id: "celulares",
    icon: "📱",
    title: "Celulares Multimarca",
    subtitle: "Samsung · Motorola · Xiaomi",
    desc: "Sabemos lo importante que es tu teléfono. Realizamos reparaciones rápidas y efectivas para dejar tu celular funcionando como el primer día, sin perder tu información.",
    color: "#ff3b30",
    img: "/img/hero_lab_2_1773640646478.png",
    items: ["Cambio de módulo completo", "Reemplazo de baterías agotadas", "Reparación de pin de carga y audio", "Recuperación de equipos mojados", "Cámaras, sensores y botones", "Diagnóstico sin cargo"],
  },
  {
    id: "computadoras",
    icon: "💻",
    title: "Computadoras en General",
    subtitle: "PC de Escritorio · All in One",
    desc: "Diagnóstico y reparación integral de computadoras de escritorio, mothers y componentes electrónicos. Reemplazo de fuentes, memorias y solución de fallas complejas.",
    color: "#9c27b0",
    img: "/img/pc_general_1773640791199.png",
    items: ["Reparación de placas base (motherboards)", "Mantenimiento térmico profundo", "Solución a fallos de encendido o video", "Formateo e instalación limpia Windows", "Backups seguros y recuperación de datos", "Limpieza general de componentes"],
  },
  {
    id: "upgrades",
    icon: "⚡",
    title: "Mejoras de Velocidad",
    subtitle: "Upgrade de Hardware",
    desc: "Tu equipo viejo puede volar como nuevo. Optimizamos el rendimiento de tu notebook o PC instalando la última tecnología de almacenamiento y ampliando la memoria.",
    color: "#2dfc52",
    img: "/img/upgrade_speed_1773640834807.png",
    items: ["Instalación de SSD NVMe o SATA", "Ampliación de memoria RAM", "Optimización del sistema operativo", "Clonación de disco (sin perder datos)", "Hasta 100 veces más rápida", "Asesoramiento sobre compatibilidad"],
  },
  {
    id: "bisagras",
    icon: "🔧",
    title: "Reparación de Bisagras",
    subtitle: "Notebooks Multimarca",
    desc: "Las bisagras rotas son el problema mecánico más frecuente. Reparamos o reemplazamos bisagras y anclajes con refuerzo estructural de resina de alta resistencia.",
    color: "#ff9500",
    img: "/img/crea-una-imagen-para-un-banner-de-un-sitio-web-que-3.jpeg",
    items: ["Bisagras HP, Lenovo, Asus, Acer", "Restauración de plásticos rotos", "Reparación de marco de pantalla", "Refuerzo estructural del chasis", "Repuestos originales y compatibles", "Garantía de mano de obra y fijación"],
  },
  {
    id: "consolas",
    icon: "🎮",
    title: "Consolas de Videojuegos",
    subtitle: "PS5 · PS4 · Xbox · Switch",
    desc: "Somos expertos en la reparación de consolas. Desde problemas de recalentamiento con el famoso metal líquido, hasta reballing de la GPU o cambio de lectura de disco.",
    color: "#f20d59",
    img: "/img/console_repair_1773640849993.png",
    items: ["Mantenimiento preventivo completo", "Reballing profesional de GPU", "Cambio de puerto HDMI (PS4/PS5)", "Reparación Drift en joysticks", "Limpieza de metal líquido y pasta térmica", "Problemas de software y lector"],
  },
  {
    id: "tablets",
    icon: "📴",
    title: "Tablets e iPads",
    subtitle: "Estudio · Trabajo · Multimedia",
    desc: "Las tablets sufren muchos golpes y desgastes. Reparamos táctiles, displays completos y fallas de carga para que los más chicos o los profesionales no dejen de usarlas.",
    color: "#0df2a6",
    img: "/img/crea-una-imagen-para-un-banner-de-un-sitio-web-que-4.jpeg",
    items: ["Reemplazo de cristal táctil", "Cambio de display interno LCD", "Baterías nuevas de alta duración", "Desbloqueos de software", "Reparación de botón de encendido", "Limpieza de conectores"],
  },
  {
    id: "impresoras",
    icon: "🖨️",
    title: "Impresoras",
    subtitle: "Epson · HP · Brother",
    desc: "Mantenimiento especializado para impresoras de sistema continuo y cartuchos. Evitá manchas, atascos de papel y cabezales tapados con nuestro servicio profesional.",
    color: "#e6e6e6",
    img: "/img/realistic-modern-photo-of-a-modest-neighborhood-co-4.jpeg",
    items: ["Destape profundo de cabezales", "Reseteo de almohadillas por software", "Sistemas continuos alternativos", "Reparación de toma de papel", "Limpieza general de engranajes", "Calibración de inyectores"],
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
          <img src="/img/LOGO BLANCO.png" alt="TechnoStore" style={{ height: 44, width: "auto" }} />
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
              { n: "15+", label: "Años de experiencia" },
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

        <div style={{ position: "relative", height: 500, width: "100%", overflow: "hidden", borderRadius: 24, border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              width: "400%",
              animation: "slide 16s infinite cubic-bezier(0.8, 0, 0.2, 1)",
            }}
          >
            {[
              "/img/hero_lab_1_1773640631102.png",
              "/img/apple_service_1773640672618.png",
              "/img/pc_general_1773640791199.png",
              "/img/hero_lab_2_1773640646478.png"
            ].map((src, i) => (
              <div key={i} style={{ width: "25%", height: "100%", position: "relative" }}>
                <img
                  src={src}
                  alt={`TechnoStore Servicio ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,15,26,0.9) 0%, transparent 60%)" }} />
              </div>
            ))}
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: 24,
              right: 24,
              background: "rgba(10,15,26,0.75)",
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
                Servicio Técnico Multimarca
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>Reparaciones pensadas a cada medida</div>
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

// ─── BUILD PC FORM ────────────────────────────────────────────────────────────

// ─── BUILD PC FORM ────────────────────────────────────────────────────────────
function BuildPCForm() {
  const [form, setForm] = useState({ name: "", use: "", budget: "", extraInfo: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const text = `Hola TechnoStore! Quiero un presupuesto para armar una PC.\n\nNombre: ${form.name}\nUso principal: ${form.use}\nPresupuesto aproximado: ${form.budget}\nInformación extra: ${form.extraInfo}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  const USES = [
    { label: "Gaming a Tope", icon: "🎮" },
    { label: "Edición y Diseño", icon: "🎨" },
    { label: "Trabajo / Estudio", icon: "💼" },
    { label: "Uso General", icon: "🏠" },
  ];

  const BUDGETS = [
    "Hasta $500.000",
    "Entre $500k y $1M",
    "Entre $1M y $2M",
    "Sin límite de presupuesto",
  ];

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
            Seleccioná cómo vas a usar tu PC y te enviamos la mejor opción por WhatsApp
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
            <h3 style={{ fontSize: 24, margin: "0 0 8px", color: "#fff" }}>¡Preparando tu presupuesto!</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16 }}>
              Se abrió WhatsApp para que nos mandes la info. Te vamos a asesorar de forma personalizada.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 24,
              padding: 40,
              boxShadow: "0 24px 48px rgba(0,0,0,0.2)",
            }}
          >
            <div style={{ marginBottom: 32 }}>
              <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>Tu Nombre</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ej: Juan García"
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: "16px 20px",
                  color: "#fff",
                  fontSize: 16,
                  outline: "none",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              />
            </div>

            <div style={{ marginBottom: 32 }}>
              <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 700, marginBottom: 12, textTransform: "uppercase" }}>Uso Principal</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                {USES.map(u => (
                  <button
                    type="button"
                    key={u.label}
                    onClick={() => setForm({ ...form, use: u.label })}
                    style={{
                      background: form.use === u.label ? "rgba(13,89,242,0.2)" : "rgba(255,255,255,0.04)",
                      border: form.use === u.label ? "1px solid #0d59f2" : "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 12,
                      padding: "16px",
                      color: form.use === u.label ? "#fff" : "rgba(255,255,255,0.6)",
                      fontSize: 15,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      transition: "all 0.2s",
                    }}
                  >
                    <span style={{ fontSize: 20 }}>{u.icon}</span> {u.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 700, marginBottom: 12, textTransform: "uppercase" }}>Presupuesto Aproximado</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                {BUDGETS.map(b => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setForm({ ...form, budget: b })}
                    style={{
                      background: form.budget === b ? "rgba(45,252,82,0.15)" : "rgba(255,255,255,0.04)",
                      border: form.budget === b ? "1px solid #2dfc52" : "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 12,
                      padding: "16px",
                      color: form.budget === b ? "#fff" : "rgba(255,255,255,0.6)",
                      fontSize: 14,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 40 }}>
              <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>Información Extra</label>
              <textarea
                name="extraInfo"
                value={form.extraInfo}
                onChange={(e) => setForm({ ...form, extraInfo: e.target.value })}
                placeholder="Ej: Necesito monitor, quiero armarla con luces RGB..."
                rows={3}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: "16px 20px",
                  color: "#fff",
                  fontSize: 16,
                  outline: "none",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={!form.name || !form.use || !form.budget}
              style={{
                width: "100%",
                background: "#0d59f2",
                color: "#fff",
                padding: "18px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 800,
                border: "none",
                cursor: (!form.name || !form.use || !form.budget) ? "not-allowed" : "pointer",
                opacity: (!form.name || !form.use || !form.budget) ? 0.5 : 1,
              }}
            >
              Consultar Armado por WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// ─── CONTACT SECTION ──────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section id="contacto" style={{ padding: "100px 24px", background: "rgba(255,255,255,0.01)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64, alignItems: "center" }}>
        <div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#fff", letterSpacing: "-1px", margin: "0 0 16px" }}>
            Vení a conocernos
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 18, lineHeight: 1.7, marginBottom: 40 }}>
            Nuestro laboratorio técnico está abierto al público. Traé tu equipo y te hacemos un diagnóstico profesional.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ width: 48, height: 48, background: "rgba(45,252,82,0.1)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: "#2dfc52", flexShrink: 0 }}>📍</div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>Dirección</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>Av. Santa Fe 2844, Local TechnoStore, CABA</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ width: 48, height: 48, background: "rgba(13,89,242,0.1)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: "#0d59f2", flexShrink: 0 }}>🕐</div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>Horarios de Atención</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>Lunes a Sábados de 12:00 a 20:00 hs</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ width: 48, height: 48, background: "rgba(255,59,48,0.1)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: "#ff3b30", flexShrink: 0 }}>📱</div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>WhatsApp Directo</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>+54 9 11 2765-0658</div>
              </div>
            </div>
          </div>
          
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: "#0d59f2", color: "#fff", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 16, padding: "16px 36px", borderRadius: 14, textDecoration: "none", boxShadow: "0 8px 32px rgba(13,89,242,0.35)" }}>
            💬 Escribirnos ahora
          </a>
        </div>
        
        <div style={{ width: "100%", height: 500, background: "rgba(255,255,255,0.05)", borderRadius: 24, padding: 8, border: "1px solid rgba(255,255,255,0.1)" }}>
          <iframe title="Mapa TechnoStore" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.4074811370215!2d-58.4069502!3d-34.5938498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca97bba5c2a1%3A0x6b49e2cf4b971a8!2sAv.%20Sta.%20Fe%202844%2C%20C1425%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar" width="100%" height="100%" style={{ border: 0, borderRadius: 16 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 48, marginBottom: 48 }}>
          <div>
            <a href="#inicio" style={{ display: "inline-block", marginBottom: 16 }}>
              <img src="/img/LOGO BLANCO.png" alt="TechnoStore" style={{ height: 40, width: "auto" }} />
            </a>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
              Servicio técnico especializado con más de 15 años de experiencia. Reparamos Apple, PC, consolas y notebooks.
            </p>
            <div style={{ marginTop: 20 }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>📍 Av. Santa Fe 2844</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>🕐 Lun–Sáb 12:00 a 20:00 hs</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>✉️ tsbarrionorte@gmail.com</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 4 }}>📸 IG: @technostore_ts</p>
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 20 }}>Servicios</h4>
            {[
              {l: "Reparación Apple", href: "#apple"},
              {l: "Celulares Multimarca", href: "#celulares"},
              {l: "Computadoras", href: "#computadoras"},
              {l: "Reparación Bisagras", href: "#bisagras"},
              {l: "Consolas (PS/Xbox)", href: "#consolas"}
            ].map((s) => (
              <a key={s.l} href={s.href} style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 10, textDecoration: "none" }}>{s.l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 20 }}>Garantía</h4>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.6 }}>
              ✅ Reparaciones garantizadas.<br/>
              ✅ Repuestos originales certificados.<br/><br/>
              <strong style={{color:"#2dfc52", fontWeight: 700}}>Garantía de 90 días</strong><br/>
              (salvo casos excepcionales detallados en la orden).
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 20 }}>Contacto Rápidio</h4>
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
          content: "Hubo un error de conexión. Podés contactarnos directamente por WhatsApp o al email tsbarrionorte@gmail.com",
        },
      ]);
    }

    setLoading(false);
  }

  const QUICK_REPLIES = [
    "Reparación Apple",
    "Celulares Multimarca",
    "Computadoras & Notebooks",
    "Tablets e iPads",
    "Impresoras Epson/HP",
    "Otra consulta",
  ];

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
        @keyframes slide {
          0% { transform: translateX(0); }
          20% { transform: translateX(0); }
          25% { transform: translateX(-25%); }
          45% { transform: translateX(-25%); }
          50% { transform: translateX(-50%); }
          70% { transform: translateX(-50%); }
          75% { transform: translateX(-75%); }
          95% { transform: translateX(-75%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <NavBar activeSection="inicio" />
      <Hero />
      <Services />

      {SERVICES.map((s, index) => (
        <section key={s.id} id={s.id} style={{ padding: "100px 24px", background: index % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: index % 2 === 0 ? "row" : "row-reverse", alignItems: "center", gap: 64, flexWrap: "wrap" }}>
              
              <div style={{ flex: 1, minWidth: 320 }}>
                <p style={{ color: s.color, fontWeight: 700, fontSize: 13, letterSpacing: 1, margin: "0 0 8px", background: `${s.color}15`, display: "inline-block", padding: "6px 14px", borderRadius: 99 }}>
                  {s.icon} {s.subtitle}
                </p>
                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(32px, 4vw, 48px)",
                    fontWeight: 900,
                    color: "#fff",
                    letterSpacing: "-1px",
                    margin: "12px 0 20px",
                    lineHeight: 1.1
                  }}
                >
                  {s.title}
                </h2>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>{s.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 24px" }}>
                  {s.items.map((item) => (
                    <li
                      key={item}
                      style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.4 }}
                    >
                      <span style={{ color: s.color, fontSize: 16, marginTop: -2 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  style={{
                    display: "inline-block",
                    background: s.color,
                    color: ["#2dfc52"].includes(s.color) ? "#0a0f1a" : "#fff",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: 16,
                    padding: "16px 36px",
                    borderRadius: 14,
                    textDecoration: "none",
                    marginTop: 48,
                    boxShadow: `0 8px 32px ${s.color}35`,
                  }}
                >
                  Agendar turno →
                </a>
              </div>

              <div style={{ flex: 1, minWidth: 320, position: "relative" }}>
                <div style={{ position: "absolute", inset: -20, background: `radial-gradient(circle at center, ${s.color}20 0%, transparent 70%)`, filter: "blur(40px)" }} />
                <img 
                  src={s.img} 
                  alt={s.title}
                  style={{ 
                    width: "100%", 
                    height: 400, 
                    objectFit: "cover", 
                    borderRadius: 24, 
                    border: `1px solid ${s.color}40`,
                    boxShadow: `0 24px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)`,
                    position: "relative",
                    zIndex: 1
                  }} 
                />
              </div>

            </div>
          </div>
        </section>
      ))}

      <BuildPCForm />
      <ContactSection />
      <Footer />

      {/* Chatbot flotante con IA */}
      <Chatbot />
    </>
  );
}
