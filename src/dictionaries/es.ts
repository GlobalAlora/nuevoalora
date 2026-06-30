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
      { key: "ia", label: "IA" },
      { key: "crm", label: "CRM" },
      { key: "ecommerce", label: "Ecommerce" },
    ],
    items: [
      { slug: "castro-yeso", client: "Castro Yeso", desc: "Web corporativa y sistema de captación de leads para distribuidora de materiales de construcción.", tags: ["Web", "CRM"], result: "+3x leads" },
      { slug: "asesoria-dialogar", client: "Asesoría Dialogar", desc: "Plataforma CRM y automatización del pipeline de clientes potenciales para consultoría.", tags: ["CRM", "Automatización"], result: "Pipeline activo" },
      { slug: "protorneos", client: "Protorneos", desc: "Sistema de gestión de torneos y rankings deportivos con app web y panel de administración.", tags: ["Web", "App"], result: "1.2k usuarios" },
      { slug: "tenis-trenque", client: "Tenis de Mesa Trenque", desc: "Tienda online con gestión de inventario y checkout para club deportivo.", tags: ["Ecommerce", "Web"], result: "Ventas online" },
      { slug: "starley", client: "Starley", desc: "Sistema de seguimiento de campañas de Google Ads y automatización de reportes de marketing.", tags: ["Marketing", "Automatización"], result: "ROAS +2.8x" },
      { slug: "jose-jose", client: "José José", desc: "Branding digital, sitio web y presencia online para empresa de servicios.", tags: ["Web", "Branding"], result: "Lanzamiento" },
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
      { label: "Software", href: "#servicios" },
      { label: "IA & Chatbots", href: "#servicios" },
      { label: "Automatización", href: "#servicios" },
      { label: "Diseño Web", href: "#servicios" },
      { label: "Ecommerce", href: "#servicios" },
    ],
    companyLinks: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Sobre ALORA", href: "/sobre-nosotros" },
      { label: "Contacto", href: "/contacto" },
      { label: "Agenda una llamada", href: "/llamada-de-relevamiento" },
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
