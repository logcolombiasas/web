import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import heroVideo from "@/assets/truck_transporting.mp4";
import mechanicalImage from "@/assets/logcolombia-mechanical.jpg";
import roadsideImage from "@/assets/logcolombia-roadside.jpg";
import maintenanceImage from "@/assets/logcolombia-maintenance.jpg";
import salesImage from "@/assets/logcolombia-sales.jpg";
import operationImage from "@/assets/logcolombia-operation.jpg";
import teamImage from "@/assets/logcolombia-team.jpg";
import logoAsset from "@/assets/logcolombia-logo.png";

const QUOTE_URL = "https://wa.link/d9yjgl";
const SERVICE_URL = "https://wa.link/hkiijg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Logcolombia | Soluciones Automotrices 24/7" },
      { name: "description", content: "Asistencia en carretera, grúas, mantenimiento, revisión técnico-mecánica y soluciones automotrices con cobertura en Colombia." },
      { property: "og:title", content: "Logcolombia | Tu vehículo, nuestra pasión" },
      { property: "og:description", content: "Atención automotriz integral y asistencia en carretera 24/7 en Colombia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { title: "Asistencia técnico-mecánica", image: mechanicalImage, copy: "Diagnóstico preciso, seguridad y cumplimiento para tu vehículo." },
  { title: "Asistencia en carretera y traslado", image: roadsideImage, copy: "Respuesta 24/7 y traslado seguro ante cualquier imprevisto." },
  { title: "Mantenimiento preventivo y correctivo", image: maintenanceImage, copy: "Tecnología y experiencia para prolongar la vida útil de tu vehículo." },
  { title: "Comercialización de vehículos", image: salesImage, copy: "Vehículos usados, financiación flexible y una compra transparente." },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Logcolombia, inicio">
      <img src={logoAsset} alt="Logcolombia" width="640" height="641" />
      <span>Logcolombia</span>
    </a>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Index() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        item.style.setProperty("--parallax-y", `${Math.max(-18, Math.min(18, progress * -24))}px`);
      });
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };
    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main id="top" className="overflow-hidden bg-background text-foreground">
      <section className="hero-shell">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hero-media hero-enter-media"
        />
        <div className="hero-shade" />
        <header className="site-header hero-enter-header">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#top">Inicio</a><a href="#services">Servicios</a><a href="#about">Nosotros</a>
            <a href="#coverage">Cobertura</a><a href="#contact">Contacto</a>
            <a className="nav-cta" href={QUOTE_URL} target="_blank" rel="noreferrer">Cotizar <Arrow /></a>
          </nav>
          <details className="mobile-nav">
            <summary aria-label="Abrir menú"><span>Menú</span><i /><i /></summary>
            <div><a href="#top">Inicio</a><a href="#services">Servicios</a><a href="#about">Nosotros</a><a href="#coverage">Cobertura</a><a href={QUOTE_URL} target="_blank" rel="noreferrer">Cotizar</a></div>
          </details>
        </header>
        <div className="hero-content">
          <p className="eyebrow light hero-enter hero-enter-1">Atención automotriz integral · 24/7</p>
          <div className="hero-title-mask"><h1 className="hero-enter hero-enter-2">Tu vehículo,<br />nuestra pasión.</h1></div>
          <p className="hero-copy hero-enter hero-enter-3">Mantenimiento, asistencia en carretera y soluciones especializadas con respuesta rápida en Colombia.</p>
          <div className="hero-actions hero-enter hero-enter-4"><a className="button button-solid" href={QUOTE_URL} target="_blank" rel="noreferrer">Cotizar ahora <Arrow /></a><a className="button button-ghost" href="tel:+573104622366">Llamar al 310 462 2366</a></div>
        </div>
        <a className="scroll-cue hero-enter hero-enter-4" href="#services"><span>Conoce más</span><i /></a>
      </section>

      <section id="services" className="products-section">
        <div className="section-intro"><p className="eyebrow" data-reveal>Soluciones integrales</p><h2 data-reveal data-reveal-delay="1">Todo lo que tu vehículo necesita.<br />Cuando más lo necesitas.</h2></div>
        <div className="product-grid">
          {services.map((service, index) => (
            <article className="product-card" key={service.title} data-reveal data-reveal-delay={String((index % 4) + 1)}>
              <img src={service.image} width={1200} height={1500} alt={service.title} loading="lazy" />
              <div className="product-shade" />
              <div className="product-overlay"><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.copy}</p><a href={QUOTE_URL} target="_blank" rel="noreferrer">Cotizar servicio <Arrow /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <p className="eyebrow light" data-reveal>Movilidad sin pausas</p>
        <h2 data-reveal data-reveal-delay="1">Transformamos problemas automotrices en soluciones efectivas, seguras y personalizadas.</h2>
        <div className="manifesto-rule" data-reveal data-reveal-delay="2"><span>Disponibles 24/7</span><span>Más de 12 ciudades principales</span><span>Cobertura nacional</span></div>
      </section>

      <section id="coverage" className="split-section">
        <div className="split-media" data-reveal="image"><img data-parallax src={operationImage} width={1600} height={1100} alt="Operación profesional de traslado vehicular" loading="lazy" /></div>
        <div className="split-copy"><p className="eyebrow" data-reveal>Asistencia / 01</p><h2 data-reveal data-reveal-delay="1">En ruta con<br />confianza.</h2><p data-reveal data-reveal-delay="2">Cuando cada segundo cuenta, nuestro equipo responde con grúas, asistencia técnico-mecánica y cobertura amplia. Desde el rescate en carretera hasta la reparación, trabajamos para devolverte la movilidad.</p><a className="text-link" data-reveal data-reveal-delay="3" href={SERVICE_URL} target="_blank" rel="noreferrer">Solicitar asistencia <Arrow /></a></div>
      </section>

      <section id="about" className="split-section reverse">
        <div className="split-media" data-reveal="image"><img data-parallax src={teamImage} width={1600} height={1100} alt="Técnico especializado realizando un diagnóstico automotriz" loading="lazy" /></div>
        <div className="split-copy"><p className="eyebrow" data-reveal>Logcolombia / 02</p><h2 data-reveal data-reveal-delay="1">Innovación y pasión<br />en cada viaje.</h2><p data-reveal data-reveal-delay="2">Somos una empresa de soluciones automotrices integrales comprometida con simplificar la vida de nuestros clientes. Unimos tecnología avanzada, atención personalizada y un equipo experto que entiende el valor de la movilidad.</p><a className="text-link" data-reveal data-reveal-delay="3" href={QUOTE_URL} target="_blank" rel="noreferrer">Hablar con un asesor <Arrow /></a></div>
      </section>

      <section className="journal-section"><p className="eyebrow" data-reveal>Por qué elegirnos</p><div><h2 data-reveal data-reveal-delay="1">Compromiso que<br />te acompaña.</h2><p data-reveal data-reveal-delay="2">Profesionalismo, soporte cercano, garantía sobre los servicios y facilidades de pago para que cada recorrido empiece con tranquilidad.</p><div className="value-list" data-reveal data-reveal-delay="3"><span>Respuesta inmediata</span><span>Técnicos calificados</span><span>Calidad garantizada</span><span>Atención personalizada</span></div></div></section>

      <section className="cta-section"><div><p className="eyebrow light" data-reveal>Estamos listos 24/7</p><h2 data-reveal data-reveal-delay="1">Sigue tu camino.<br />Nosotros respondemos.</h2></div><a className="round-link" data-reveal data-reveal-delay="2" href={QUOTE_URL} target="_blank" rel="noreferrer" aria-label="Cotizar un servicio por WhatsApp"><Arrow /></a></section>

      <footer id="contact"><Brand /><p>Localización, operación y gestión vehicular en Colombia.</p><div><a href="tel:+573104622366">310 462 2366</a><a href={SERVICE_URL} target="_blank" rel="noreferrer">Servicio al cliente</a><a href="#top">Volver arriba ↑</a></div><small>© 2026 Logcolombia. Todos los derechos reservados.</small></footer>
    </main>
  );
}