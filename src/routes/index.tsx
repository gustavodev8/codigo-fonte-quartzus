import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import julianaAsset from "../assets/juliana-cardoso.png.asset.json";
import felipeAsset from "../assets/felipe-david.png.asset.json";
import campusAsset from "../assets/campustalk.png.asset.json";
import logoAsset from "../assets/quartzus-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quartzus — Estúdio de Tecnologia" },
      { name: "description", content: "Websites, sistemas, CRM, automações e inteligência artificial sob medida para negócios que querem evoluir." },
      { property: "og:title", content: "Quartzus — Estúdio de Tecnologia" },
      { property: "og:description", content: "Experiências e soluções digitais sob medida para negócios que querem evoluir." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Projetos", "#projetos"], ["Soluções", "#solucoes"], ["Processo", "#processo"],
  ["Sobre", "#sobre"], ["Contato", "#contato"],
];

const projects = [
  {
    number: "01", category: "WEBSITE • PERSONAL BRANDING • SOCIAL MEDIA", name: "Juliana Cardoso",
    description: "Website desenvolvido para uma profissional de social media, criado para fortalecer seu posicionamento digital, apresentar seus serviços e transformar visitantes em potenciais clientes.",
    // Captura local da tela inicial de juliana-cardoso-showcase.vercel.app — substituir pela imagem final do projeto quando disponível.
    image: "/juliana-cardoso-home.webp", alt: "Imagem principal do website de Juliana Cardoso", layout: "wide",
  },
  {
    number: "02", category: "WEBSITE • NUTRIÇÃO • CONVERSÃO", name: "Felipe David",
    description: "Website desenvolvido para um nutricionista clínico e esportivo, com foco em autoridade profissional, apresentação dos serviços, resultados e agendamento de consultas.",
    // Captura local da tela inicial de fillipedavidnutri.online — substituir pela imagem final do projeto quando disponível.
    image: "/fillipe-david-home.jpeg", alt: "Imagem principal do website de Felipe David", layout: "offset",
  },
  {
    number: "03", category: "CRM • IA • AUTOMAÇÃO • ATENDIMENTO", name: "CampusTalk",
    description: "CRM desenvolvido para a Faculdade Santíssimo, criado para centralizar atendimentos, organizar a operação e utilizar inteligência artificial para auxiliar e automatizar o atendimento aos alunos.",
    image: campusAsset.url, alt: "Painel do sistema CampusTalk", layout: "system",
    tags: ["CRM", "IA", "WhatsApp", "Automação", "Atendimento"],
  },
];

const solutions = [
  ["01", "WEBSITES", "Experiências digitais modernas projetadas para posicionamento e conversão."],
  ["02", "AUTOMAÇÃO", "Processos inteligentes para eliminar tarefas repetitivas e aumentar eficiência."],
  ["03", "CRM", "Sistemas personalizados para organizar clientes, equipes e operações."],
  ["04", "INTELIGÊNCIA ARTIFICIAL", "Agentes e soluções de IA integrados à operação real das empresas."],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto grid h-18 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:h-20 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
          <a href="#inicio" className="flex min-w-0 items-center gap-3" aria-label="Quartzus, início">
            <img src={logoAsset.url} alt="" className="h-8 w-8 shrink-0 object-contain" />
            <span className="font-display text-lg font-semibold tracking-[0.12em]">QUARTZUS</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {nav.slice(0, 4).map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}
          </nav>
          <a href="#contato" className="action-link ml-auto hidden lg:inline-flex">Vamos conversar <ArrowUpRight size={15} /></a>
          <button type="button" className="icon-control lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-6 lg:hidden" aria-label="Navegação móvel">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-border py-4 text-lg">{label}</a>)}
        </nav>}
      </header>

      <section id="inicio" className="hero-grid relative flex min-h-[94svh] items-end border-b border-border px-5 pb-12 pt-32 sm:px-8 lg:px-12 lg:pb-16">
        <div className="ambient-lines" aria-hidden="true"><span /><span /><span /></div>
        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <p className="eyebrow animate-fade-in">ESTRATÉGIA • DESIGN • TECNOLOGIA • IA</p>
          <h1 className="mt-7 max-w-[1200px] font-display text-[clamp(3.4rem,8.8vw,9.2rem)] font-medium leading-[0.88]">
            Criamos experiências digitais que fazem negócios <span className="text-muted-foreground">evoluírem.</span>
          </h1>
          <div className="mt-10 grid gap-8 border-t border-border pt-7 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.25fr_.75fr]">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Sites, sistemas, CRMs e automações inteligentes desenvolvidos para transformar operações complexas em experiências simples, rápidas e eficientes.</p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="#projetos" className="button-primary">Conhecer projetos <ArrowDown size={17} /></a>
              <a href="#contato" className="button-secondary">Falar sobre um projeto <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="section-shell">
        <div className="mx-auto max-w-[1440px]">
          <div className="section-intro" data-reveal>
            <p className="eyebrow">PROJETOS SELECIONADOS</p>
            <div><h2 className="section-title">Alguns projetos<br />que construímos.</h2><p className="section-copy">Cada projeto nasce de uma necessidade diferente. Unimos estratégia, design e tecnologia para criar soluções digitais funcionais e personalizadas.</p></div>
          </div>
          <div className="mt-20 space-y-28 lg:mt-32 lg:space-y-40">
            {projects.map((project) => (
              <article key={project.name} className={`project project-${project.layout}`} data-reveal>
                <div className="project-media"><img src={project.image} alt={project.alt} loading="lazy" /></div>
                <div className="project-meta">
                  <div className="flex items-center justify-between border-b border-border pb-4"><span className="eyebrow">PROJETO {project.number}</span><ArrowUpRight size={18} /></div>
                  <p className="mt-6 text-xs font-medium text-muted-foreground">{project.category}</p>
                  <h3 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">{project.name}</h3>
                  <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{project.description}</p>
                  {project.tags && <div className="mt-8 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tech-tag">{tag}</span>)}</div>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="border-y border-border bg-surface px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]" data-reveal>
          <p className="eyebrow">Não criamos apenas sites.</p>
          <h2 className="section-title mt-6 max-w-4xl">Construímos sistemas que trabalham pelo negócio.</h2>
          <div className="mt-16 border-t border-border lg:mt-24">
            {solutions.map(([number, title, description]) => <div key={number} className="solution-row"><span className="text-xs text-muted-foreground">{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight className="shrink-0" size={18} /></div>)}
          </div>
        </div>
      </section>

      <section id="processo" className="section-shell">
        <div className="mx-auto max-w-[1440px]" data-reveal>
          <p className="eyebrow">PROCESSO</p><h2 className="section-title mt-6">Do problema à solução.</h2>
          <div className="mt-16 grid border-y border-border md:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {[["01", "Descobrir", "Entendemos o negócio e o problema."], ["02", "Estratégia", "Definimos a melhor solução."], ["03", "Construir", "Transformamos a estratégia em produto digital."], ["04", "Evoluir", "Melhoramos e expandimos continuamente."]].map(([number, title, description]) => <div className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></div>)}
          </div>
        </div>
      </section>

      <section id="sobre" className="border-y border-border px-5 py-24 sm:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.7fr_1.3fr]" data-reveal>
          <p className="eyebrow">TECNOLOGIA COM PROPÓSITO.</p>
          <div className="max-w-4xl space-y-8 font-display text-3xl leading-tight sm:text-5xl lg:text-6xl"><p>Somos um estúdio digital focado em criar experiências, sistemas e automações que conectam pessoas, processos e tecnologia.</p><p className="text-muted-foreground">Unimos design, desenvolvimento, automação e inteligência artificial para transformar ideias e operações em produtos digitais funcionais.</p></div>
        </div>
      </section>

      <section id="contato" className="relative px-5 py-28 sm:px-8 lg:px-12 lg:py-44">
        <div className="contact-orbit" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-[1440px]" data-reveal>
          <p className="eyebrow">TEM UM PROJETO EM MENTE?</p>
          <h2 className="mt-8 max-w-6xl font-display text-[clamp(3rem,8vw,8rem)] leading-[0.92]">Vamos construir algo que faça diferença.</h2>
          <div className="mt-12 grid gap-8 border-t border-border pt-8 lg:grid-cols-2"><p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">Conte-nos o que você precisa. Podemos transformar sua ideia em uma experiência digital, sistema ou automação pronta para crescer com seu negócio.</p><a href="mailto:contato@quartzus.com" className="button-primary w-fit lg:ml-auto">Começar uma conversa <ArrowUpRight size={18} /></a></div>
        </div>
      </section>

      <footer className="border-t border-border px-5 pb-8 pt-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto]"><div><div className="flex items-center gap-3"><img src={logoAsset.url} alt="" className="h-10 w-10 object-contain" /><span className="font-display text-2xl tracking-[0.12em]">QUARTZUS</span></div><p className="mt-4 text-sm text-muted-foreground">Websites • Sistemas • Automação • IA</p></div><nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">{nav.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}</nav></div>
          <div className="mt-16 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between"><span>© 2026 QUARTZUS. Todos os direitos reservados.</span><span>ESTRATÉGIA • DESIGN • TECNOLOGIA</span></div>
        </div>
      </footer>
    </main>
  );
}
