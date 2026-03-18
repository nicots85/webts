import { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importar landing pages
import ServicioApple from "./pages/ServicioApple";
import ServicioCelulares from "./pages/ServicioCelulares";
import ServicioComputadoras from "./pages/ServicioComputadoras";
import ServicioUpgrades from "./pages/ServicioUpgrades";
import ServicioBisagras from "./pages/ServicioBisagras";
import ServicioConsolas from "./pages/ServicioConsolas";
import ServicioTablets from "./pages/ServicioTablets";
import ServicioImpresoras from "./pages/ServicioImpresoras";
import ServicioArmadoPC from "./pages/ServicioArmadoPC";
import ServicioVentas from "./pages/ServicioVentas";
import { IMAGENES_SERVICIOS } from "./data/images";

// Importar Componentes y Datos centralizados
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import { SERVICES, REPAIR_STATUS_URL, WHATSAPP_NUMBER } from "./data/services";

// ─── SISTEMA DEL CHATBOT ───────────────────────────────────────────────────
const BOT_SYSTEM = `Sos el asistente virtual de TechnoStore, un servicio técnico de barrio con más de 15 años de experiencia en Buenos Aires. Respondés en español rioplatense, de manera amigable, directa y concisa.

SERVICIOS QUE OFRECEMOS:
• Apple (MacBook, iPhone, iPad, iMac): microsoldadura, Face ID, pantallas, baterías, ampliación NAND.
• Celulares multimarca (Samsung, Motorola, Xiaomi, Huawei): pantallas, baterías, pines de carga, daño por líquido.
• Computadoras y Notebooks: reparación de motherboard, formateo, backups, cambio de teclado y batería.
• Upgrade de velocidad: instalación de SSD, ampliación de RAM, clonación de disco. "No tires tu compu vieja".
• Bisagras de notebooks: reparación y refuerzo estructural para HP, Lenovo, Asus, Acer, Dell.
• Consolas (PS4, PS5, Xbox, Switch): mantenimiento, reballing GPU, HDMI, drift de joysticks, metal líquido.
• Tablets e iPads: táctiles, displays, baterías, software.
• Impresoras (Epson, HP, Brother, Canon): destape de cabezales, sistema continuo, almohadillas.
• Armado de PC a medida: presupuestos personalizados para gaming, diseño, edición o trabajo.
• Venta de celulares e insumos: equipos libres, fundas, templados, cargadores, hardware PC.

DATOS DEL LOCAL:
• Dirección: Av. Santa Fe 2844, Local TechnoStore, Buenos Aires
• Horario: Lunes a Sábados de 12:00 a 20:00 hs
• Email: tsbarrionorte@gmail.com
• WhatsApp: 11 2765-0658
• Instagram: @technostore_ts
• Se recomienda reservar turno previamente

POLÍTICAS:
• Diagnóstico sin cargo para todos los equipos
• Garantía de 90 días en mano de obra (salvo casos excepcionales)
• Repuestos de la más alta calidad disponible (originales cuando es posible)
• +15.000 equipos reparados

IMPORTANTE: Si no sabés algo con certeza, derivá al cliente por WhatsApp o email. Sé breve: máximo 3-4 oraciones. No inventes precios.`;

function buildWhatsAppLink(name, device, brand, model, problem) {
  const text = `Hola TechnoStore! Te contacto desde el sitio web.\n\nNombre: ${name}\nEquipo: ${device}\nMarca y modelo: ${brand} ${model}\nProblema: ${problem}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// ─── COMPONENTES SECUNDARIOS ───────────────────────────────────────────────────

function ServiceNav() {
  return (
    <section id="servicios" style={{ padding: "80px 24px 60px", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-1px",
              margin: "0 0 14px",
            }}
          >
            ¿Qué te reparamos hoy?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
            Más de 15 años en el barrio. Diagnóstico sin cargo en todos los equipos.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "center",
          }}
        >
          {SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                textDecoration: "none",
                background: `${s.color}12`,
                border: `1px solid ${s.color}35`,
                borderRadius: 99,
                padding: "11px 22px",
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "'Space Grotesk', sans-serif",
                transition: "transform 0.2s, background 0.2s, border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.background = `${s.color}28`;
                e.currentTarget.style.borderColor = `${s.color}70`;
                e.currentTarget.style.boxShadow = `0 8px 24px ${s.color}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.background = `${s.color}12`;
                e.currentTarget.style.borderColor = `${s.color}35`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: 18 }}>{s.icon}</span>
              {s.title}
            </a>
          ))}
          <a
            href="#armado"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              textDecoration: "none",
              background: "rgba(13,89,242,0.12)",
              border: "1px solid rgba(13,89,242,0.35)",
              borderRadius: 99,
              padding: "11px 22px",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "'Space Grotesk', sans-serif",
              transition: "transform 0.2s, background 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "rgba(13,89,242,0.25)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(13,89,242,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.background = "rgba(13,89,242,0.12)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span style={{ fontSize: 18 }}>🖥️</span>
            Armado de PC a Medida
          </a>
        </div>
      </div>
    </section>
  );
}

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

function SalesSection() {
  return (
    <section id="ventas" style={{ padding: "100px 24px", background: "rgba(255,255,255,0.02)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64, alignItems: "center" }}>
        
        <div style={{ width: "100%", height: 500, background: "rgba(255,255,255,0.05)", borderRadius: 24, padding: 8, border: "1px solid rgba(255,255,255,0.1)", position: "relative", overflow: "hidden" }}>
          <img 
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1200" 
            alt="Venta de equipos e insumos" 
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 16 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,15,26,0.9) 0%, transparent 50%)" }} />
          <div style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}>
            <div style={{ background: "rgba(255,59,48,0.2)", border: "1px solid rgba(255,59,48,0.5)", color: "#ff3b30", padding: "6px 16px", borderRadius: 99, display: "inline-block", fontSize: 13, fontWeight: 700, marginBottom: 12 }}>
              NUEVO
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 800, color: "#fff", margin: 0 }}>Renová tu equipo con nosotros</h3>
          </div>
        </div>

        <div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#fff", letterSpacing: "-1px", margin: "0 0 16px" }}>
            Venta de Celulares <br/>e <span style={{ color: "#ff3b30" }}>Insumos</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 18, lineHeight: 1.7, marginBottom: 40 }}>
            Además de reparar, te asesoramos en tu próxima compra. Encontrá repuestos premium, accesorios de alta duración y celulares a excelentes precios.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 40 }}>
            {[
              { icon: "📱", title: "Celulares Nuevos", desc: "Equipos libres de fábrica con garantía." },
              { icon: "🛡️", title: "Insumos Premium", desc: "Fundas, templados y cargadores." },
              { icon: "💻", title: "Hardware PC", desc: "Discos sólidos, memorias y fuentes." },
              { icon: "🎧", title: "Accesorios", desc: "Auriculares, cables y periféricos." },
            ].map(item => (
              <div key={item.title} style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontSize: 24, marginBottom: 12 }}>{item.icon}</div>
                <h4 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{item.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola TechnoStore! Quería consultar el precio/disponibilidad de equipos o insumos.")}`} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: "#ff3b30", color: "#fff", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 16, padding: "16px 36px", borderRadius: 14, textDecoration: "none", boxShadow: "0 8px 32px rgba(255,59,48,0.25)" }}>
            🛒 Cotizar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}

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
              {l: "Venta de Equipos", href: "#ventas"}
            ].map((s) => (
              <a key={s.l} href={s.href} style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 10, textDecoration: "none" }}>{s.l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 20 }}>Garantía</h4>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.6 }}>
              ✅ Todas las reparaciones con garantía.<br/>
              ✅ Repuestos de la más alta calidad.<br/><br/>
              <strong style={{color:"#2dfc52", fontWeight: 700}}>Garantía de 90 días</strong><br/>
              (salvo casos excepcionales detallados en la orden).
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 20 }}>Contacto Rápido</h4>
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
          model: "claude-3-5-sonnet-20240620",
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

  return (
    <>
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
      >
        {open ? "✕" : "💬"}
      </button>

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
          }}
        >
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
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2dfc52", display: "inline-block", boxShadow: "0 0 6px #2dfc52" }} />
                <span style={{ fontSize: 11, color: "#2dfc52" }}>En línea · IA</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 18, padding: 4 }}>✕</button>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "16px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", alignItems: "flex-end", gap: 7 }}>
                {m.role === "assistant" && (
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg, #0d59f2, #2dfc52)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0, marginBottom: 2 }}>🤖</div>
                )}
                <div style={{ background: m.role === "user" ? "#0d59f2" : "rgba(255,255,255,0.08)", color: "#fff", padding: "10px 14px", borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px", fontSize: 14, lineHeight: 1.5, maxWidth: "80%", border: m.role === "assistant" ? "1px solid rgba(255,255,255,0.1)" : "none" }}>{m.content}</div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: 7, alignItems: "center", padding: "8px 12px", background: "rgba(255,255,255,0.05)", borderRadius: 12, width: "fit-content" }}>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Escribiendo...</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
            style={{ padding: "16px", borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(10,15,26,0.5)", display: "flex", gap: 10 }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribí tu consulta..."
              style={{ flex: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "10px 14px", color: "#fff", outline: "none", fontSize: 14 }}
            />
            <button type="submit" style={{ width: 40, height: 40, borderRadius: 10, background: "#0d59f2", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✈️</button>
          </form>
        </div>
      )}
    </>
  );
}

// ─── APP PRINCIPAL ─────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;900&display=swap');
              @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
              
              *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
              html { scroll-behavior: smooth; }
              body { background: #0a0f1a; color: #fff; font-family: 'Space Grotesk', sans-serif; min-height: 100vh; overflow-x: hidden; }
              input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.3); }
              ::-webkit-scrollbar { width: 5px; }
              ::-webkit-scrollbar-track { background: transparent; }
              ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }

              /* Responsive Core */
              @media (max-width: 900px) {
                .desktop-only { display: none !important; }
                .mobile-only { display: block !important; }
                .desktop-nav { display: none !important; }
                .mobile-menu-btn { display: flex !important; }
                .hero-container { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; width: 100% !important; max-width: 100% !important; }
                .hero-content { display: flex; flex-direction: column; align-items: center; width: 100%; }
                .hero-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; width: 100%; }
                .hero-actions { justify-content: center; width: 100%; }
                section { padding: 60px 16px !important; overflow-x: hidden; }
                .service-row { flex-direction: column !important; gap: 32px !important; width: 100%; }
                .service-info { text-align: center; width: 100%; }
                .service-items { grid-template-columns: 1fr !important; }
                .service-img { height: 300px !important; }
              }

              @media (max-width: 480px) {
                .hero-stats-grid { grid-template-columns: 1fr !important; }
                .hero-actions a { width: 100%; text-align: center; padding: 14px 20px !important; }
                .service-img { height: 240px !important; }
                h2 { font-size: 28px !important; }
              }

              @media (min-width: 901px) {
                .mobile-only { display: none !important; }
                .mobile-menu-btn { display: none !important; }
                .mobile-menu { display: none !important; }
              }

              @keyframes slide {
                0% { transform: translateX(0); }
                100% { transform: translateX(0); }
              }
            `}</style>

            <NavBar activeSection="inicio" />
            <Hero />
            <ServiceNav />

            {SERVICES.map((s, index) => (
              <section key={s.id} id={s.id} style={{ padding: "100px 24px", background: index % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                  <div className="service-row" style={{ display: "flex", flexDirection: index % 2 === 0 ? "row" : "row-reverse", alignItems: "center", gap: 64, flexWrap: "wrap" }}>
                    
                    <div className="service-info" style={{ flex: 1, minWidth: 280 }}>
                      <p style={{ color: s.color, fontWeight: 700, fontSize: 13, letterSpacing: 1, margin: "0 0 8px", background: `${s.color}15`, display: "inline-block", padding: "6px 14px", borderRadius: 99 }}>
                        {s.icon} {s.subtitle}
                      </p>
                      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, color: "#fff", letterSpacing: "-1px", margin: "12px 0 20px", lineHeight: 1.1 }}>
                        {s.title}
                      </h2>
                      <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>{s.desc}</p>
                      <ul className="service-items" style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 20px" }}>
                        {s.items.map((item) => (
                          <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "rgba(255,255,255,0.8)", fontSize: 13.5, lineHeight: 1.4, textAlign: "left" }}>
                            <span style={{ color: s.color, fontSize: 16, marginTop: -2 }}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 40 }}>
                        <a
                          href={`https://wa.me/5491127650658?text=${encodeURIComponent(`Hola TechnoStore! Quiero consultar sobre ${s.title}. ¿Me pueden dar más info?`)}`}
                          target="_blank"
                          rel="noreferrer"
                          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: s.color, color: ["#2dfc52", "#e6e6e6"].includes(s.color.toLowerCase()) ? "#0a0f1a" : "#fff", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 15, padding: "14px 30px", borderRadius: 14, textDecoration: "none", boxShadow: `0 8px 32px ${s.color}35` }}
                        >
                          💬 Consultar por WhatsApp
                        </a>
                      </div>
                    </div>

                    <div style={{ flex: 1, minWidth: 280, position: "relative" }}>
                      <div style={{ position: "absolute", inset: -20, background: `radial-gradient(circle at center, ${s.color}20 0%, transparent 70%)`, filter: "blur(40px)" }} />
                      <img 
                        className="service-img"
                        src={s.img} 
                        alt={s.title}
                        style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 24, border: `1px solid ${s.color}40`, boxShadow: `0 24px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)`, position: "relative", zIndex: 1 }} 
                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"; }}
                      />
                    </div>
                  </div>
                </div>
              </section>
            ))}

            <BuildPCForm />
            <SalesSection />
            <ContactSection />
            <Footer />
            <Chatbot />
          </>
        } />

        <Route path="/apple" element={<ServicioApple imageUrl={IMAGENES_SERVICIOS.apple.hero} />} />
        <Route path="/celulares" element={<ServicioCelulares imageUrl={IMAGENES_SERVICIOS.celulares.hero} />} />
        <Route path="/computadoras" element={<ServicioComputadoras imageUrl={IMAGENES_SERVICIOS.computadoras.hero} />} />
        <Route path="/upgrades" element={<ServicioUpgrades imageUrl={IMAGENES_SERVICIOS.upgrades.hero} />} />
        <Route path="/bisagras" element={<ServicioBisagras imageUrl={IMAGENES_SERVICIOS.bisagras.hero} />} />
        <Route path="/consolas" element={<ServicioConsolas imageUrl={IMAGENES_SERVICIOS.consolas.hero} />} />
        <Route path="/tablets" element={<ServicioTablets imageUrl={IMAGENES_SERVICIOS.tablets.hero} />} />
        <Route path="/impresoras" element={<ServicioImpresoras imageUrl={IMAGENES_SERVICIOS.impresoras.hero} />} />
        <Route path="/armado" element={<ServicioArmadoPC imageUrl={IMAGENES_SERVICIOS.armado.hero} />} />
        <Route path="/ventas" element={<ServicioVentas imageUrl={IMAGENES_SERVICIOS.ventas.hero} />} />
      </Routes>
    </BrowserRouter>
  );
}
