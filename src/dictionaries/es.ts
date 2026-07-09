export interface Dictionary {
  locale: string;
  nav: { home: string; solutions: string; cases: string; blog: string; contact: string; ctaCall: string; ctaWhatsapp: string };
  hero: {
    chip: string; h1Line1: string; h1Line2: string; h1Accent: string;
    body: string;
    ctaPrimary: string; ctaSecondary: string; ticker: string[];
  };
  services: {
    sectionIndex: string; sectionLabel: string; heading: string; body: string; cta: string;
    items: { n: string; title: string; desc: string }[];
  };
  cases: {
    sectionIndex: string; sectionLabel: string; heading: string; body: string;
    filters: { key: string; label: string }[];
    items: { slug: string; client: string; desc: string; tags: string[]; result?: string }[];
    ctaAll: string; ctaCard: string;
  };
  why: {
    sectionIndex: string; sectionLabel: string; heading: string; body: string;
    cards: { title: string; body: string }[];
  };
  process: {
    sectionIndex: string; sectionLabel: string; headingLine1: string; headingLine2: string;
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
  solutionForm: {
    ways: string;
    wayCall: string; wayCallBody: string;
    wayWhatsapp: string; wayWhatsappBody: string;
    wayForm: string; wayFormBody: string;
    formHeading: string;
    name: string; namePlaceholder: string;
    email: string; emailPlaceholder: string;
    company: string; companyPlaceholder: string;
    country: string; countryPlaceholder: string;
    project: string; projectPlaceholder: string;
    consent: string; privacyLink: string;
    submit: string; sending: string;
    success: string; errorGeneral: string;
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
    home: "Home",
    solutions: "Soluciones",
    cases: "Casos de Éxito",
    blog: "Insights",
    contact: "Contacto",
    ctaCall: "Reservar Llamada Gratuita",
    ctaWhatsapp: "Habla con nosotros",
  },
  hero: {
    chip: "SOFTWARE · AUTOMATIZACIÓN · IA APLICADA",
    h1Line1: "Tecnología,",
    h1Line2: "sistemas e",
    h1Accent: "inteligencia artificial",
    body: "Construimos ecosistemas digitales completos — sitios, aplicaciones, ecommerce, chatbots y agentes de IA — integrados y potenciados con inteligencia artificial para que tu negocio opere y escale con fluidez.",
    ctaPrimary: "Reservar una asesoría gratuita",
    ctaSecondary: "Ver casos de éxito",
    ticker: ["Software", "IA", "Automatización", "Plataformas", "Ecommerce", "Sistemas web"],
  },
  services: {
    sectionIndex: "02",
    sectionLabel: "Soluciones",
    heading: "Creamos tecnología para crecer.",
    body: "Software, IA y experiencias digitales conectadas para operar mejor.",
    cta: "Explorar solución",
    items: [
      { n: "01", title: "Diseño de Software", desc: "Plataformas y sistemas a medida, pensados para crecer sin fricciones." },
      { n: "02", title: "Agentes Conversacionales IA", desc: "Conversaciones reales con tus clientes, que resuelven consultas en segundos, todo el día." },
      { n: "03", title: "Chatbots IA", desc: "Flujos guiados que cualifican leads, agendan llamadas y capturan contactos." },
      { n: "04", title: "Diseño Web", desc: "Sitios rápidos y a medida que convierten visitas en clientes." },
      { n: "05", title: "Diseño de Aplicaciones", desc: "Apps web y móviles que digitalizan y agilizan tu operación." },
      { n: "06", title: "Ecommerce", desc: "Tiendas online listas para vender, integradas a tu stock y pagos." },
    ],
  },
  cases: {
    sectionIndex: "03",
    sectionLabel: "Casos de éxito",
    heading: "Sistemas en producción, resultados medibles.",
    body: "Proyectos que ya están operando y acompañando el crecimiento de nuestros clientes.",
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
    heading: "Lo que nos hace diferentes.",
    body: "Un equipo que piensa como socio, no como proveedor, y construye tecnología que realmente mueve tu negocio.",
    cards: [
      { title: "Visión de negocio, no solo tecnología.", body: "Entendemos captación, operación y conversión para construir tecnología que genere resultados, no solo funcionalidades." },
      { title: "Sistemas escalables desde el día uno.", body: "Arquitectura pensada para crecer, así el éxito no te obliga a reconstruir lo que ya funciona." },
      { title: "Cercanía y calidad que no se encuentran en todos lados.", body: "Equipos chicos, comunicación directa y estándares altos en cada entrega." },
      { title: "Partners, no proveedores.", body: "Nos involucramos en tu negocio como propio: acompañamos decisiones, no solo entregamos un proyecto." },
    ],
  },
  process: {
    sectionIndex: "06",
    sectionLabel: "Cómo trabajamos",
    headingLine1: "Un proceso diseñado para generar resultados",
    headingLine2: "desde el día uno.",
    steps: [
      { n: "01", title: "Relevamiento y diagnóstico", body: "Una llamada para entender tu negocio, objetivos y contexto antes de proponer una solución." },
      { n: "02", title: "Alcance, tiempos y costos", body: "Definimos qué se construye, en cuánto tiempo y a qué costo, con un plan claro y sin sorpresas." },
      { n: "03", title: "Ejecución del proyecto", body: "Desarrollamos con entregas visibles y comunicación constante durante todo el proceso." },
      { n: "04", title: "QA pre-lanzamiento", body: "Probamos cada flujo a fondo para asegurar que todo funcione antes de salir a producción." },
      { n: "05", title: "Lanzamiento", body: "Publicamos el proyecto y acompañamos de cerca los primeros pasos en producción." },
      { n: "06", title: "Escalación sin límites", body: "Seguimos optimizando y sumando capacidad a medida que tu negocio crece." },
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
    servicesLabel: "Soluciones",
    companyLabel: "Empresa",
    copy: `© ${new Date().getFullYear()} ALORA. Todos los derechos reservados.`,
    privacy: "Privacidad",
    cookies: "Cookies",
    serviceLinks: [
      { label: "Desarrollo de Software", href: "/es/soluciones/desarrollo-software" },
      { label: "Desarrollo Web", href: "/es/soluciones/desarrollo-web" },
      { label: "Aplicaciones Web", href: "/es/soluciones/aplicaciones-web" },
      { label: "Ecommerce", href: "/es/soluciones/ecommerce" },
      { label: "Chatbots IA", href: "/es/soluciones/chatbots" },
      { label: "Agentes Conversacionales IA", href: "/es/soluciones/atencion-cliente-ia" },
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
  solutionForm: {
    ways: "Tres formas de contactarnos",
    wayCall: "Agendá una llamada",
    wayCallBody: "20 minutos para contarnos tu proyecto y ver cómo ayudarte.",
    wayWhatsapp: "Escribinos por WhatsApp",
    wayWhatsappBody: "Respuesta directa y rápida, sin formularios.",
    wayForm: "Completá el formulario",
    wayFormBody: "Contanos los detalles y te respondemos en menos de 24 horas.",
    formHeading: "Contanos sobre tu proyecto",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Correo",
    emailPlaceholder: "vos@empresa.com",
    company: "Empresa",
    companyPlaceholder: "Nombre de tu empresa",
    country: "País",
    countryPlaceholder: "Seleccioná tu país",
    project: "Contanos sobre tu proyecto",
    projectPlaceholder: "¿Qué necesitás y qué objetivo querés lograr?",
    consent: "Acepto la política de privacidad y quiero recibir novedades y comunicaciones comerciales de ALORA.",
    privacyLink: "Política de Privacidad",
    submit: "Enviar",
    sending: "Enviando...",
    success: "¡Listo! Recibimos tu mensaje, te contactamos pronto.",
    errorGeneral: "Error al enviar. Por favor intentá de nuevo.",
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
