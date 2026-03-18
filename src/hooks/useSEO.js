/**
 * useSEO - Hook para setear el title y meta description dinámicamente.
 * Necesario porque React no tiene SSR: los bots de redes sociales y WhatsApp
 * leerán el index.html (homepage), pero Google sí ejecuta JS.
 */
import { useEffect } from "react";

export default function useSEO({ title, description, canonical }) {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Meta description
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.name = "description";
      document.head.appendChild(desc);
    }
    if (description) desc.content = description;

    // Canonical
    let can = document.querySelector('link[rel="canonical"]');
    if (!can) {
      can = document.createElement("link");
      can.rel = "canonical";
      document.head.appendChild(can);
    }
    if (canonical) can.href = canonical;

    // OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    if (title) ogTitle.content = title;

    // OG description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    if (description) ogDesc.content = description;

    // OG url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    if (canonical) ogUrl.content = canonical;

    // Cleanup on unmount: resetear al título del home
    return () => {
      document.title =
        "TechnoStore | Servicio Técnico en Buenos Aires · Reparación de Celulares, PC y Apple";
    };
  }, [title, description, canonical]);
}
