import { useState } from "react";

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
        <a href="#inicio" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/img/LOGO BLANCO.png" alt="TechnoStore" style={{ height: 44, width: "auto" }} />
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

export { NAV_LINKS };