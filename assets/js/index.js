const translations = {
  es: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    title: "ManuFloso - Portfolio",
    description: "Portfolio de ManuFloso, estudiante de Ingeniería Informática y desarrollador de software especializado en bajo nivel, sistemas, Minecraft y proyectos propios.",
    introTitle: "Hola, soy Manu, <br> también conocido como ManuFloso",
    intro: "Soy estudiante de Ingeniería Informática en la Universidad de Murcia y desarrollador de software. Me apasiona el desarrollo de bajo nivel, la administración de sistemas y crear mis propios proyectos: desde emuladores de CPU hasta mods de Minecraft.",
    selected: "Proyectos destacados",
    allProjects: "Ver todos los proyectos",
    expertiseTitle: "Áreas de trabajo",
    expertiseDescription: "Desarrollo software y herramientas con C++, C#, Java y JavaScript, y trabajo con sistemas Linux, virtualización e infraestructura personal.",
    expertiseItems: ["Desarrollo de bajo nivel", "Sistemas e infraestructura", "Minecraft y NeoForge", "Herramientas y videojuegos"],
    homeCards: [
      ["C++ · OpenGL · CMake", "Simulador del procesador 65C02 para explorar arquitectura y ejecución de instrucciones."],
      ["Java · NeoForge 1.21.1", "Mod de Minecraft con nuevas mecánicas, contenido y experimentos para NeoForge."],
      ["C# · Utilidades", "Herramienta para descargar contenido de YouTube de forma sencilla."],
      ["C# · Herramientas", "Instalador por lotes para agilizar la configuración de software."]
    ],
    explore: "Explorar",
    home: "Inicio",
    connect: "Contacto",
    email: "Correo electrónico",
    copyright: "© 2026 ManuFloso. Todos los derechos reservados."
  },
  en: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    title: "ManuFloso - Portfolio",
    description: "Portfolio of ManuFloso, Computer Engineering student and software developer focused on low-level development, systems, Minecraft and personal projects.",
    introTitle: "Hi, I'm Manu, <br> also known as ManuFloso",
    intro: "I'm a Computer Engineering student at the University of Murcia and a software developer. I enjoy low-level development, systems administration and building my own projects, from CPU emulators to Minecraft mods.",
    selected: "Selected projects",
    allProjects: "View all projects",
    expertiseTitle: "Areas of work",
    expertiseDescription: "I build software and tools with C++, C#, Java and JavaScript, and work with Linux systems, virtualization and personal infrastructure.",
    expertiseItems: ["Low-level development", "Systems and infrastructure", "Minecraft and NeoForge", "Tools and video games"],
    homeCards: [
      ["C++ · OpenGL · CMake", "A 65C02 processor simulator for exploring architecture and instruction execution."],
      ["Java · NeoForge 1.21.1", "A Minecraft mod with new mechanics, content and experiments for NeoForge."],
      ["C# · Utilities", "A tool for downloading YouTube content easily."],
      ["C# · Tools", "A batch installer to streamline software setup."]
    ],
    explore: "Explore",
    home: "Home",
    connect: "Contact",
    email: "Email",
    copyright: "© 2026 ManuFloso. All rights reserved."
  }
};

const pageTranslations = {
  es: {
    experience: {
      title: "Trayectoria — ManuFloso",
      description: "Trayectoria académica y técnica de ManuFloso: ingeniería informática, desarrollo de software y administración de sistemas.",
      eyebrow: "Trayectoria",
      heading: "Construyendo sistemas, software y comunidades.",
      intro: "Soy estudiante de Ingeniería Informática en la Universidad de Murcia y desarrollador interesado en el bajo nivel, la infraestructura y las herramientas que hacen el software más útil.",
      cards: [
        ["2023 — Actualidad", "Ingeniería Informática", "Universidad de Murcia. Formación en programación, arquitectura de computadores, sistemas operativos y redes."],
        ["Infraestructura", "Linux, Proxmox y Kubernetes", "Administración de servidores domésticos, virtualización y despliegues reproducibles para proyectos personales."],
        ["Desarrollo de bajo nivel", "65c02-SIM y microDOS", "Diseño de un simulador de CPU en C++ y experimentos con sistemas operativos y emulación."],
        ["Ecosistema Minecraft", "Mods para NeoForge", "Desarrollo de mods Java para Minecraft, explorando APIs, rendimiento y diseño de gameplay."]
      ]
    },
    projects: {
      title: "Proyectos — ManuFloso",
      description: "Proyectos de ManuFloso: simulación de CPU, mods de Minecraft, videojuegos y preservación web.",
      eyebrow: "Proyectos",
      heading: "Ideas que se convierten en software.",
      intro: "Una selección de proyectos personales en los que mezclo bajo nivel, videojuegos, infraestructura, herramientas y preservación digital.",
      cards: [
        ["C++ · OpenGL · CMake", "65c02-SIM", "Simulador del procesador 65C02 para explorar arquitectura y ejecución de instrucciones."],
        ["HTML · Preservación web", "Antologia", "Proyecto de preservación y publicación de la Antología Poética."],
        ["Unity · C#", "BolaVa", "Proyecto de videojuego desarrollado con Unity."],
        ["C# · Herramientas", "FastBulkInstaller", "Instalador por lotes para agilizar la configuración de software."],
        ["C# · Utilidades", "FastWebDownloader", "Herramienta para descargar contenido de YouTube de forma sencilla."],
        ["Unity · C#", "GameCollection", "Colección de proyectos y experimentos de videojuegos."],
        ["C# · Videojuegos", "Mine2D", "Experimento de videojuego 2D inspirado en la construcción y exploración."],
        ["Java · Minecraft", "Mineclone", "Proyecto clon de Minecraft en C++ y OpenGL."],
        ["C# · Utilidades", "WinCalc", "Calculadora de escritorio para Windows."],
        ["Java · NeoForge 1.21.1", "Random Super Mod", "Mod de Minecraft con nuevas mecánicas, contenido y experimentos para NeoForge."]
      ]
    }
  },
  en: {
    experience: {
      title: "Journey — ManuFloso",
      description: "ManuFloso's academic and technical journey: computer engineering, software development and systems administration.",
      eyebrow: "Journey",
      heading: "Building systems, software and communities.",
      intro: "I'm a Computer Engineering student at the University of Murcia and a developer interested in low-level development, infrastructure and tools that make software more useful.",
      cards: [
        ["2023 — Present", "Computer Engineering", "University of Murcia. Training in programming, computer architecture, operating systems and networks."],
        ["Infrastructure", "Linux, Proxmox and Kubernetes", "Home server administration, virtualization and reproducible deployments for personal projects."],
        ["Low-level development", "65c02-SIM and microDOS", "Designing a CPU simulator in C++ and experimenting with operating systems and emulation."],
        ["Minecraft ecosystem", "Mods for NeoForge", "Developing Java mods for Minecraft, exploring APIs, performance and gameplay design."]
      ]
    },
    projects: {
      title: "Projects — ManuFloso",
      description: "ManuFloso's projects: CPU simulation, Minecraft mods, video games and web preservation.",
      eyebrow: "Projects",
      heading: "Ideas turned into software.",
      intro: "A selection of personal projects combining low-level development, video games, infrastructure, tools and digital preservation.",
      cards: [
        ["C++ · OpenGL · CMake", "65c02-SIM", "A 65C02 processor simulator for exploring architecture and instruction execution."],
        ["HTML · Web preservation", "Antologia", "A project for preserving and publishing the Poetry Anthology."],
        ["Unity · C#", "BolaVa", "A video game project developed with Unity."],
        ["C# · Tools", "FastBulkInstaller", "A batch installer to streamline software setup."],
        ["C# · Utilities", "FastWebDownloader", "A tool for downloading YouTube content easily."],
        ["Unity · C#", "GameCollection", "A collection of video game projects and experiments."],
        ["C# · Video games", "Mine2D", "A 2D video game experiment inspired by building and exploration."],
        ["Java · Minecraft", "Mineclone", "A Minecraft clone project in C++ and OpenGL."],
        ["C# · Utilities", "WinCalc", "A desktop calculator for Windows."],
        ["Java · NeoForge 1.21.1", "Random Super Mod", "A Minecraft mod with new mechanics, content and experiments for NeoForge."]
      ]
    }
  }
};

function updateMetadata(page, language) {
  const metadata = pageTranslations[language][page];
  if (!metadata) return;
  document.title = metadata.title;
  document.querySelector('meta[name="description"]').content = metadata.description;
  document.querySelector('meta[property="og:title"]').content = metadata.title;
  document.querySelector('meta[property="og:description"]').content = metadata.description;
  document.querySelector('meta[name="twitter:title"]').content = metadata.title;
  document.querySelector('meta[name="twitter:description"]').content = metadata.description;
}

function translateSecondaryPage(page, language) {
  const metadata = pageTranslations[language][page];
  if (!metadata) return;
  const section = document.querySelector("main section");
  section.querySelector(":scope > p:first-child").textContent = metadata.eyebrow;
  section.querySelector(":scope > h1").textContent = metadata.heading;
  section.querySelector(":scope > p:nth-of-type(2)").textContent = metadata.intro;
  const cards = page === "experience"
    ? [...section.querySelectorAll(":scope > div article")]
    : [...section.querySelectorAll(":scope > div.mt-16 > a")];
  cards.forEach((card, index) => {
    const [label, heading, description] = metadata.cards[index];
    const paragraphs = card.querySelectorAll("p");
    paragraphs[0].textContent = label;
    card.querySelector("h2").textContent = heading;
    paragraphs[1].textContent = description;
  });
  updateMetadata(page, language);
}

function setLanguage(language) {
  const text = translations[language];
  const isHomePage = document.body.dataset.page === "home";
  const page = window.location.pathname.endsWith("experience.html")
    ? "experience"
    : window.location.pathname.endsWith("proyects.html") ? "projects" : "home";

  document.documentElement.lang = language;
  document.querySelectorAll("nav a").forEach((link) => {
    const label = link.textContent.trim();
    if (["About", "Sobre mí"].includes(label)) link.textContent = text.about;
    if (["Experience", "Experiencia"].includes(label)) link.textContent = text.experience;
    if (["Projects", "Proyectos"].includes(label)) link.textContent = text.projects;
    if (["Home", "Inicio"].includes(label)) link.textContent = text.home;
  });

  if (isHomePage) {
    document.title = text.title;
    document.querySelector('meta[name="description"]').content = text.description;
    document.querySelector('meta[property="og:title"]').content = text.title;
    document.querySelector('meta[property="og:description"]').content = text.description;
    document.querySelector('meta[name="twitter:title"]').content = text.title;
    document.querySelector('meta[name="twitter:description"]').content = text.description;
    document.querySelector("h1").innerHTML = text.introTitle;
    document.querySelector("main p").textContent = text.intro;
    document.querySelector("#expertise-title").textContent = text.expertiseTitle;
    document.querySelector("#expertise-description").textContent = text.expertiseDescription;
    document.querySelectorAll("#expertise-list li").forEach((item, index) => {
      item.textContent = text.expertiseItems[index];
    });
    document.querySelector("#home-projects-title").lastChild.textContent = text.selected;
    const homeCards = document.querySelectorAll("#home-projects-title ~ ul > li");
    homeCards.forEach((card, index) => {
      const [label, description] = text.homeCards[index];
      const paragraphs = card.querySelectorAll("p");
      paragraphs[0].textContent = label;
      paragraphs[1].textContent = description;
    });
    const allProjectsLink = document.querySelector('#home-projects-title ~ ul + a[href="proyects.html"]');
    if (allProjectsLink) allProjectsLink.firstChild.textContent = text.allProjects;
  } else {
    translateSecondaryPage(page, language);
  }

  document.querySelector("#footer-explore-title").textContent = text.explore;
  document.querySelector("#footer-connect-title").textContent = text.connect;
  const footerLinkLabels = [text.home, text.experience, text.projects];
  document.querySelectorAll("footer nav[aria-labelledby=footer-explore-title] a").forEach((link, index) => {
    const textNode = [...link.childNodes].find((node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim()
    );
    if (textNode && footerLinkLabels[index]) textNode.textContent = footerLinkLabels[index];
  });
  document.querySelectorAll('footer a[href^="mailto:"]').forEach((link) => {
    const textNode = [...link.childNodes].find((node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim()
    );
    if (textNode) textNode.textContent = text.email;
  });
  const copyright = document.querySelector("footer p.text-xs");
  if (copyright) copyright.textContent = text.copyright;
  document.querySelector("#language-es").setAttribute("aria-pressed", String(language === "es"));
  document.querySelector("#language-en").setAttribute("aria-pressed", String(language === "en"));
  document.querySelector("#language-es").disabled = language === "es";
  document.querySelector("#language-en").disabled = language === "en";
  const activeLanguageClass = "rounded-full px-3 py-1 uppercase transition bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900";
  const inactiveLanguageClass = "rounded-full px-3 py-1 uppercase transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100";
  document.querySelector("#language-es").className = language === "es" ? activeLanguageClass : inactiveLanguageClass;
  document.querySelector("#language-en").className = language === "en" ? activeLanguageClass : inactiveLanguageClass;
  localStorage.setItem("portfolio-language", language);
  document.querySelectorAll("a[href]").forEach((link) => {
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || !["index.html", "experience.html", "proyects.html"].includes(url.pathname.split("/").pop())) return;
    url.searchParams.set("lang", language);
    link.href = url.href;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#language-es").addEventListener("click", () => setLanguage("es"));
  document.querySelector("#language-en").addEventListener("click", () => setLanguage("en"));
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  const savedLanguage = localStorage.getItem("portfolio-language");
  setLanguage(requestedLanguage === "en" || (requestedLanguage !== "es" && savedLanguage === "en") ? "en" : "es");
});
