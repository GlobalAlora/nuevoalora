export interface Dictionary {
  locale: string;
  nav: { services: string; cases: string; why: string; contact: string; cta: string };
  hero: {
    chip: string; h1Line1: string; h1Line2: string; h1Accent: string;
    sub1: string; sub2: string; body: string;
    ctaPrimary: string; ctaSecondary: string; ticker: string[];
  };
  services: {
    sectionIndex: string; sectionLabel: string; heading: string; body: string; cta: string;
    items: { n: string; title: string; desc: string }[];
  };
  cases: {
    sectionIndex: string; sectionLabel: string; heading: string; body: string;
    filterAll: string;
    filters: { key: string; label: string }[];
    items: { slug: string; client: string; desc: string; tags: string[]; result?: string }[];
    ctaAll: string; ctaCard: string;
  };
  why: {
    sectionIndex: string; sectionLabel: string; heading: string; body: string;
    cards: { title: string; body: string }[];
  };
  process: {
    sectionIndex: string; sectionLabel: string; heading: string;
    steps: { n: string; title: string; body: string }[];
  };
  contact: {
    sectionIndex: string; sectionLabel: string; heading: string; body: string;
    name: string; namePlaceholder: string;
    email: string; emailPlaceholder: string;
    country: string; countryPlaceholder: string;
    phone: string; phonePlaceholder: string;
    website: string; websitePlaceholder: string;
    message: string; messagePlaceholder: string;
    privacyText: string; privacyLink: string;
    submit: string; sending: string; errorGeneral: string;
    reassurances: string[]; orContact: string; countries: string[];
  };
  footer: {
    tagline: string; servicesLabel: string; companyLabel: string;
    copy: string; privacy: string; cookies: string;
    serviceLinks: { label: string; href: string }[];
    companyLinks: { label: string; href: string }[];
  };
  chatbot: {
    welcome: string; offerContact: string; askName: string; askEmail: string;
    invalidEmail: string; askPhone: string; thankYou: string; continueChat: string;
    error: string; bubble: string; open: string; close: string;
    agentName: string; online: string; inputPlaceholder: string;
  };
  meta: { home: { title: string; description: string } };
}

const es: Dictionary = {
  locale: "es",
  nav: {
    services: "Servicios",
    cases: "Casos",
    why: "Por qué ALORA",
    contact: "Contacto",
    cta: "Hablar con ALORA",
  },
  hero: {
    chip: "SOFTWARE · AUTOMATIZACIÓN · IA APLICADA",
    h1Line1: "Tecnología,",
    h1Line2: "automatización e",
    h1Accent: "IA",
    sub1: "para convertir crecimiento",
    sub2: "en capacidad operativa.",
    body: "Construimos sistemas que integran software, automatización e inteligencia artificial para convertir crecimiento en capacidad operativa.",
    ctaPrimary: "Reservar una asesoría gratuita",
    ctaSecondary: "Ver casos de éxito",
    ticker: ["Software", "IA", "Automatización", "Plataformas", "Ecommerce", "Sistemas web"],
  },
  services: {
    sectionIndex: "02",
    sectionLabel: "Servicios",
    heading: "Creamos tecnología para crecer.",
    body: "Software, IA y experiencias digitales conectadas para operar mejor.",
    cta: "Explorar solución",
    items: [
      { n: "01", title: "Diseño de Software", desc: "Plataformas y sistemas preparados para crecer." },
      { n: "02", title: "IA para Atención al Cliente", desc: "Automatización e inteligencia aplicada." },
      { n: "03", title: "Chatbots con IA", desc: "Asistentes conectados a procesos reales." },
      { n: "04", title: "Diseño Web", desc: "Experiencias digitales que convierten." },
      { n: "05", title: "Diseño de Aplicaciones", desc: "Productos digitales para operar mejor." },
      { n: "06", title: "Ecommerce", desc: "Canales preparados para vender." },
    ],
  },
  cases: {
    sectionIndex: "03",
    sectionLabel: "Casos de éxito",
    heading: "Sistemas en producción,\nresultados medibles.",
    body: "Proyectos que ya están operando y acompañando el crecimiento de nuestros clientes.",
    filterAll: "Todos",
    filters: [
      { key: "web", label: "Web" },
      { key: "ecommerce", label: "Ecommerce" },
      { key: "ia", label: "IA" },
      { key: "crm", label: "CRM" },
      { key: "landing", label: "Landing" },
      { key: "app", label: "App" },
    ],
    items: [
      { slug: "crm-alora", client: "CRM Alora", desc: "Sistema CRM propio desarrollado por Alora para gestión de clientes, pipeline de ventas y seguimiento de proyectos.", tags: ["CRM", "App"], result: "Interno" },
      { slug: "crm-lidia", client: "CRM LIDIA", desc: "CRM integrado a la plataforma LIDIA con IA para gestión automatizada de contactos, seguimientos y conversiones.", tags: ["CRM", "IA", "App"], result: "En producción" },
      { slug: "castro-yeso", client: "Castro Yeso", desc: "Landing page 100% personalizada para empresa de yesería y construcción en seco.", tags: ["Landing", "Web"], result: "+3x leads" },
      { slug: "asesoria-dialogar", client: "Asesoría Dialogar", desc: "Landing page profesional para servicios de asesoría contable y financiera.", tags: ["Landing", "Web"], result: "Pipeline activo" },
      { slug: "starley", client: "Starley", desc: "Sitio WordPress con tema Flatsome para catálogo de productos e información empresarial.", tags: ["Web"], result: "Mejoras web" },
      { slug: "jose-jose", client: "José José", desc: "Sitio desarrollado a medida con WordPress, PHP y SCSS. Tema completamente personalizado.", tags: ["Web"], result: "Lanzamiento" },
      { slug: "protorneos", client: "Protorneos", desc: "Sitio estático desarrollado con HTML5, CSS3 y JavaScript puro para torneos deportivos.", tags: ["Web", "Landing"], result: "1.2k usuarios" },
      { slug: "tenis-trenque", client: "Tenis de Mesa Trenque", desc: "Sitio web informativo moderno y dinámico desarrollado en React para club deportivo.", tags: ["Web", "App"], result: "Lanzamiento" },
      { slug: "alkemia", client: "ALKEMIA", desc: "Sitio web informativo corporativo para empresa de soluciones tecnológicas.", tags: ["Web"], result: "Online" },
      { slug: "soy-lidia", client: "Soy LIDIA", desc: "Plataforma web con IA para automatización de atención al cliente y gestión de consultas.", tags: ["IA", "App"], result: "Automatizado" },
      { slug: "fpnn", client: "Fundación por Nuestros Niños", desc: "Sitio web informativo para fundación sin fines de lucro orientado a donaciones.", tags: ["Web"], result: "Online" },
      { slug: "grupo-terra-lauquen", client: "Grupo Terra Lauquen", desc: "Sitio web corporativo para grupo empresarial del sector inmobiliario y agropecuario.", tags: ["Web"], result: "Lanzamiento" },
      { slug: "cichic", client: "Cichic", desc: "Sitio web informativo para marca de moda y accesorios femeninos.", tags: ["Web"], result: "Online" },
      { slug: "talleres-unidos", client: "Talleres Unidos", desc: "Sistema web para gestión de talleres mecánicos con panel de administración.", tags: ["App", "Web"], result: "En producción" },
      { slug: "lidia-superadmin", client: "LIDIA Superadmin", desc: "Panel de superadministración con IA para gestión de la plataforma LIDIA.", tags: ["IA", "App"], result: "Producción" },
      { slug: "ranking-tenis", client: "Ranking Profesional", desc: "Sistema web de ranking deportivo con estadísticas y seguimiento de jugadores.", tags: ["App", "Web"], result: "Activo" },
      { slug: "nutriac", client: "Nutriac", desc: "Tienda online WooCommerce para marca de suplementos y nutrición deportiva.", tags: ["Ecommerce"], result: "Ventas online" },
      { slug: "gangafan", client: "GangaFan", desc: "Ecommerce WooCommerce para plataforma de ofertas y descuentos.", tags: ["Ecommerce"], result: "Lanzamiento" },
      { slug: "mega-mayorista", client: "Mega Mayorista", desc: "Tienda mayorista online con catálogo extenso y sistema de precios por volumen.", tags: ["Ecommerce"], result: "Online" },
      { slug: "greta-kids", client: "Greta Kids Atelier", desc: "Tienda online WooCommerce para marca de ropa infantil artesanal.", tags: ["Ecommerce"], result: "Ventas online" },
      { slug: "alaux-neumaticos", client: "Alaux Neumáticos", desc: "Ecommerce WooCommerce para distribuidora de neumáticos con gestión de stock.", tags: ["Ecommerce"], result: "Online" },
      { slug: "yumkax", client: "YumKax", desc: "Mejoras y optimizaciones web para plataforma de gastronomía.", tags: ["Web"], result: "Optimizado" },
      { slug: "terracota-valladolid", client: "Terracota Valladolid", desc: "Mejoras web y adaptaciones para empresa española de cerámica artesanal.", tags: ["Web"], result: "Mejorado" },
    ],
    ctaAll: "Ver todos los casos",
    ctaCard: "Ver caso",
  },
  why: {
    sectionIndex: "04",
    sectionLabel: "Por qué ALORA",
    heading: "Crecés más rápido cuando la tecnología trabaja para vos.",
    body: "Un equipo que entiende negocio, opera con criterio técnico y entrega resultados reales.",
    cards: [
      { title: "Personas que aceleran, no que agregan gestión.", body: "Equipos seleccionados para integrarse rápido, reducir fricción y generar valor desde las primeras semanas." },
      { title: "Acompañamiento que se siente interno.", body: "No entregamos proyectos y desaparecemos. Trabajamos cerca del equipo para sostener decisiones y resolver bloqueos." },
      { title: "Tecnología preparada para el siguiente paso.", body: "Sistemas flexibles y escalables para que el crecimiento no obligue a reconstruir lo que ya funciona." },
      { title: "Decisiones técnicas con criterio de negocio.", body: "Entendemos captación, operación y conversión para construir tecnología que genere capacidad, no complejidad." },
    ],
  },
  process: {
    sectionIndex: "06",
    sectionLabel: "Cómo trabajamos",
    heading: "Un proceso diseñado para generar resultados desde el día uno.",
    steps: [
      { n: "01", title: "Diagnóstico", body: "Entendemos tu negocio, tus objetivos y el contexto antes de proponer cualquier solución." },
      { n: "02", title: "Estrategia", body: "Definimos la arquitectura técnica, el stack y el roadmap que tiene más sentido para tu caso." },
      { n: "03", title: "Ejecución", body: "Construimos con iteraciones cortas, entregando valor en cada sprint sin esperar al final." },
      { n: "04", title: "Lanzamiento", body: "Desplegamos, monitoreamos y ajustamos hasta que el sistema funcione exactamente como esperás." },
      { n: "05", title: "Crecimiento", body: "Seguimos cerca para evolucionar el producto junto con tu negocio." },
    ],
  },
  contact: {
    sectionIndex: "08",
    sectionLabel: "Contacto",
    heading: "Hablemos de tu proyecto.",
    body: "Contanos qué necesitás y te respondemos en menos de 24 horas.",
    name: "Nombre",
    namePlaceholder: "Juan Pérez",
    email: "Email",
    emailPlaceholder: "tu@email.com",
    country: "País",
    countryPlaceholder: "Seleccioná tu país",
    phone: "Teléfono o WhatsApp",
    phonePlaceholder: "+54 9 11 1234-5678",
    website: "Sitio web (opcional)",
    websitePlaceholder: "www.tuempresa.com",
    message: "Consulta",
    messagePlaceholder: "Contanos tu proyecto o consulta...",
    privacyText: "Acepto recibir información comercial y he leído la",
    privacyLink: "Política de Privacidad",
    submit: "¡Quiero que me contacten!",
    sending: "Enviando...",
    errorGeneral: "Error al enviar. Por favor, intentá nuevamente.",
    reassurances: [
      "Respondemos en menos de 24 horas",
      "Sin compromiso ni presiones",
      "Tu información está protegida",
    ],
    orContact: "O contactanos directamente",
    countries: [
      "Argentina","Bolivia","Brasil","Chile","Colombia","Costa Rica",
      "Ecuador","El Salvador","Guatemala","Honduras","México",
      "Nicaragua","Panamá","Paraguay","Perú","Uruguay","Venezuela",
      "España","Portugal","Estados Unidos","Canadá","Otro",
    ],
  },
  footer: {
    tagline: "Ecosistemas digitales que convierten el crecimiento en capacidad operativa.",
    servicesLabel: "Servicios",
    companyLabel: "Empresa",
    copy: `© ${new Date().getFullYear()} ALORA. Todos los derechos reservados.`,
    privacy: "Privacidad",
    cookies: "Cookies",
    serviceLinks: [
      { label: "Desarrollo Web", href: "/es/soluciones/desarrollo-web" },
      { label: "Landing Pages", href: "/es/soluciones/landing-pages" },
      { label: "Chatbots con IA", href: "/es/soluciones/chatbots" },
      { label: "Ecommerce", href: "/es/soluciones/ecommerce" },
      { label: "Google Ads", href: "/es/soluciones/google-ads" },
      { label: "Mantenimiento Web", href: "/es/soluciones/mantenimiento-web" },
    ],
    companyLinks: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Sobre ALORA", href: "/sobre-nosotros" },
      { label: "Contacto", href: "/contacto" },
      { label: "Agenda una llamada", href: "/llamada-de-relevamiento" },
      { label: "Instagram", href: "https://www.instagram.com/globalalora" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/globalalora" },
    ],
  },
  chatbot: {
    welcome: "¡Hola! Soy el asistente virtual de Alora. Somos una agencia de desarrollo digital. ¿En qué puedo ayudarte hoy?",
    offerContact: "¿Te gustaría que un asesor especializado te contacte con más detalles?",
    askName: "¡Perfecto! ¿Me podés decir tu nombre?",
    askEmail: "¡Genial! ¿Y cuál es tu email de contacto?",
    invalidEmail: "Ese email no parece válido. ¿Podés revisarlo?",
    askPhone: "¡Casi listo! ¿Tu número de teléfono o WhatsApp?",
    thankYou: "¡Gracias! Un asesor se pondrá en contacto pronto. ¿Hay algo más?",
    continueChat: "Entiendo. ¿Hay algo más en lo que pueda ayudarte?",
    error: "Tuvimos un problema técnico. Podés escribirnos por WhatsApp +54 11 2462-9452.",
    bubble: "¡Hola! ¿Cómo puedo ayudarte? 👋",
    open: "Abrir chat",
    close: "Cerrar chat",
    agentName: "Asistente ALORA",
    online: "En línea",
    inputPlaceholder: "Escribí tu mensaje...",
  },
  meta: {
    home: {
      title: "ALORA — Tecnología, Automatización e IA para empresas",
      description: "Construimos ecosistemas digitales que integran software, automatización e IA para convertir el crecimiento en capacidad operativa. Agencia con base en Argentina.",
    },
  },
};

export default es;
