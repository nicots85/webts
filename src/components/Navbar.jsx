import { useState, useRef } from "react";
import { SERVICES, REPAIR_STATUS_URL, WHATSAPP_NUMBER } from "../data/services";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Apple", href: "#apple" },
  { label: "Celulares", href: "#celulares" },
  { label: "Computadoras", href: "#computadoras" },
  { label: "Upgrades", href: "#upgrades" },
  { label: "Bisagras", href: "#bisagras" },
  { label: "Consolas", href: "#consolas" },
  { label: "Tablets", href: "#tablets" },
  { label: "Impresoras", href: "#impresoras" },
  { label: "Armado PC", href: "#armado" },
  { label: "Ventas", href: "#ventas" },
  { label: "Contacto", href: "#contacto" },
];

export default function NavBar({ activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimeoutRef = useRef(null);

  const SERVICE_NAV = NAV_LINKS.filter(l => 
    !["#inicio", "#servicios", "#contacto"].includes(l.href)
  );

  function handleServicesEnter() {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
  }
  function handleServicesLeave() {
    servicesTimeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
  }

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
          gap: 16,
        }}
      >
        <a href="#inicio" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img 
            src="/img/LOGO BLANCO.png" 
            alt="TechnoStore" 
            style={{ 
              height: 44, 
              width: "auto",
              filter: "drop-shadow(0 0 8px rgba(13,89,242,0.4)) drop-shadow(0 0 2px rgba(45,252,82,0.3))"
            }} 
          />
        </a>

        <nav className="desktop-nav" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <a
            href="/"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: activeSection === "inicio" ? "#0d59f2" : "rgba(255,255,255,0.7)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Inicio
          </a>

          {/* Dropdown Servicios */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <a
              href="#servicios"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: activeSection === "servicios" ? "#0d59f2" : "rgba(255,255,255,0.7)",
                textDecoration: "none",
                transition: "color 0.2s",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Servicios
              <span style={{ fontSize: 10, transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
            </a>
            {servicesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  paddingTop: 12,
                  zIndex: 100,
                }}
              >
                <div
                  style={{
                    background: "rgba(10,15,26,0.97)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 16,
                    padding: "12px 8px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4px 8px",
                    minWidth: 380,
                    boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
                  }}
                >
                  {SERVICE_NAV.map((l) => {
                    const svc = SERVICES.find(s => `#${s.id}` === l.href);
                    return (
                      <a
                        key={l.href}
                        href={l.href}
                        onClick={() => setServicesOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "10px 14px",
                          borderRadius: 10,
                          textDecoration: "none",
                          transition: "background 0.15s",
                          color: "rgba(255,255,255,0.8)",
                          fontSize: 13,
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 500,
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
                        onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                      >
                        <span style={{ fontSize: 18 }}>{svc?.icon || "•"}</span>
                        <span>{l.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a
            href="#contacto"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: activeSection === "contacto" ? "#0d59f2" : "rgba(255,255,255,0.7)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Contacto
          </a>
        </nav>

        <div className="desktop-only" style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a
            href={REPAIR_STATUS_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "rgba(45,252,82,0.12)",
              color: "#2dfc52",
              fontWeight: 700,
              fontSize: 13,
              padding: "9px 18px",
              borderRadius: 10,
              textDecoration: "none",
              whiteSpace: "nowrap",
              border: "1px solid rgba(45,252,82,0.3)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(45,252,82,0.22)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(45,252,82,0.12)"}
          >
            🔍 Estado de Reparación
          </a>
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

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(o => !o)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 24,
            cursor: "pointer",
            padding: 4,
          }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="mobile-menu"
          style={{
            background: "rgba(10,15,26,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "16px 24px 24px",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "10px 0",
                fontSize: 15,
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                fontFamily: "'Space Grotesk', sans-serif",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href={REPAIR_STATUS_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                background: "rgba(45,252,82,0.12)",
                color: "#2dfc52",
                fontWeight: 700,
                fontSize: 14,
                padding: "14px",
                borderRadius: 12,
                textDecoration: "none",
                border: "1px solid rgba(45,252,82,0.3)",
              }}
            >
              🔍 Estado de Reparación
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                background: "#0d59f2",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                padding: "14px",
                borderRadius: 12,
                textDecoration: "none",
              }}
            >
              Agendar Turno
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export { NAV_LINKS, REPAIR_STATUS_URL };