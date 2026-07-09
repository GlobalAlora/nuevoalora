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
    items: { slug: string; client: string; desc: string; tags: string[] }[];
    ctaAll: string; ctaCard: string;
  };
  why: {
    sectionIndex: string; sectionLabel: string; heading: string; body: string;
    cards: { title: string; body: string }[];
  };
  testimonials: {
    sectionIndex: string; sectionLabel: string; heading: string; body: string;
    items: { quote: string; tags: string[]; name: string; role: string }[];
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
      { key: "app", label: "App" },
    ],
    items: [
      { slug: "autodux", client: "Autodux", desc: "Marketplace de compra y venta de autos a medida, para centralizar un mercado fragmentado en Comodoro Rivadavia.", tags: ["App", "Web"] },
      { slug: "distrisal", client: "Distri-Sal", desc: "Ecommerce integrado con Centum, su sistema de gestión, para sincronizar productos, stock y precios por cliente en tiempo real.", tags: ["Ecommerce"] },
      { slug: "voutier", client: "Voutier Repuestos", desc: "Plataforma de ecommerce robusta para repuestos, con filtros avanzados por marca, modelo y año.", tags: ["Ecommerce"] },
      { slug: "crm-alora", client: "CRM Alora", desc: "Sistema CRM propio desarrollado por Alora para gestión de clientes, pipeline de ventas y seguimiento de proyectos.", tags: ["CRM", "App"] },
      { slug: "crm-lidia", client: "CRM LIDIA", desc: "CRM integrado a la plataforma LIDIA con IA para gestión automatizada de contactos, seguimientos y conversiones.", tags: ["CRM", "IA", "App"] },
      { slug: "castro-yeso", client: "Castro Yeso", desc: "Sitio web 100% personalizado para empresa de yesería y construcción en seco.", tags: ["Web"] },
      { slug: "asesoria-dialogar", client: "Asesoría Dialogar", desc: "Sitio web profesional para servicios de asesoría contable y financiera.", tags: ["Web"] },
      { slug: "starley", client: "Starley", desc: "Sitio WordPress con tema Flatsome para catálogo de productos e información empresarial.", tags: ["Web"] },
      { slug: "jose-jose", client: "José José", desc: "Sitio desarrollado a medida con WordPress, PHP y SCSS. Tema completamente personalizado.", tags: ["Web"] },
      { slug: "protorneos", client: "Protorneos", desc: "Sitio web desarrollado con HTML5, CSS3 y JavaScript puro para torneos deportivos.", tags: ["Web"] },
      { slug: "tenis-trenque", client: "Tenis de Mesa Trenque", desc: "Sitio web informativo moderno y dinámico desarrollado en React para club deportivo.", tags: ["Web", "App"] },
      { slug: "alkemia", client: "ALKEMIA", desc: "Sitio web informativo corporativo para empresa de soluciones tecnológicas.", tags: ["Web"] },
      { slug: "soy-lidia", client: "Soy LIDIA", desc: "Plataforma web con IA para automatización de atención al cliente y gestión de consultas.", tags: ["IA", "App"] },
      { slug: "fpnn", client: "Fundación por Nuestros Niños", desc: "Sitio web informativo para fundación sin fines de lucro orientado a donaciones.", tags: ["Web"] },
      { slug: "grupo-terra-lauquen", client: "Grupo Terra Lauquen", desc: "Sitio web corporativo para grupo empresarial del sector inmobiliario y agropecuario.", tags: ["Web"] },
      { slug: "cichic", client: "Cichic", desc: "Sitio web informativo para marca de moda y accesorios femeninos.", tags: ["Web"] },
      { slug: "talleres-unidos", client: "Talleres Unidos", desc: "Sistema web para gestión de talleres mecánicos con panel de administración.", tags: ["App", "Web"] },
      { slug: "lidia-superadmin", client: "LIDIA Superadmin", desc: "Panel de superadministración con IA para gestión de la plataforma LIDIA.", tags: ["IA", "App"] },
      { slug: "ranking-tenis", client: "Ranking Profesional", desc: "Sistema web de ranking deportivo con estadísticas y seguimiento de jugadores.", tags: ["App", "Web"] },
      { slug: "nutriac", client: "Nutriac", desc: "Tienda online WooCommerce para marca de suplementos y nutrición deportiva.", tags: ["Ecommerce"] },
      { slug: "gangafan", client: "GangaFan", desc: "Ecommerce WooCommerce para plataforma de ofertas y descuentos.", tags: ["Ecommerce"] },
      { slug: "mega-mayorista", client: "Mega Mayorista", desc: "Tienda mayorista online con catálogo extenso y sistema de precios por volumen.", tags: ["Ecommerce"] },
      { slug: "yumkax", client: "YumKax", desc: "Mejoras y optimizaciones web para plataforma de gastronomía.", tags: ["Web"] },
      { slug: "terracota-valladolid", client: "Terracota Valladolid", desc: "Mejoras web y adaptaciones para empresa española de cerámica artesanal.", tags: ["Web"] },
    ],
    ctaAll: "Ver todos los casos",
    ctaCard: "Ver Caso de Éxito",
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
  testimonials: {
    sectionIndex: "05",
    sectionLabel: "Testimonios",
    heading: "Lo que dicen quienes ya trabajaron con nosotros.",
    body: "Opiniones reales de clientes que ya tienen su proyecto en producción.",
    items: [
      {
        quote: "Trabajar con Alora fue una excelente experiencia. Desarrollaron tanto el sitio web institucional como un sistema de ranking profesional totalmente a medida, que hoy nos permite gestionar jugadores, estadísticas y puntos de forma clara y eficiente. La plataforma es rápida, fácil de usar y nos dio un salto de calidad en la organización del Tenis de Mesa. Siempre hubo buena comunicación, compromiso y predisposición para adaptar el sistema a nuestras necesidades reales.",
        tags: ["Sistema integral", "Gestión eficiente", "Fácil de usar"],
        name: "Alejandro",
        role: "Presidente de la Comisión de Tenis de Mesa",
      },
      {
        quote: "Desde Fundación por Nuestros Niños agradecemos el proceso compartido en la creación de nuestra página web. Ha sido una experiencia muy linda, que además nos permitió revisar aspectos muy importantes de nuestra institución. Era una deuda pendiente para nuestra ONG que lleva más de 28 años trabajando por la niñez de Salta. Gracias por la calidez, compromiso, profesionalismo y paciencia del equipo de Alora. ¡Esperamos mantener nuestra alianza por el bien común!",
        tags: ["Proceso colaborativo", "Impacto social", "Equipo comprometido"],
        name: "Verónica Figueroa",
        role: "Fundación por Nuestros Niños – Presidenta del Consejo de Administración",
      },
      {
        quote: "Fue un placer trabajar con Bruno y su equipo. Desde los procesos y canales de comunicación, el manejo de los tiempos y la seriedad con la que abordaron el trabajo. Dedicaron tiempo para entender la esencia del proyecto, hacer las sugerencias pertinentes y tener la predisposición para resolver cada situación. Quedé muy conforme con el trabajo realizado y los recomiendo.",
        tags: ["Proceso claro", "Comunicación abierta", "Resultados impecables"],
        name: "Rulo de Viaje",
        role: "Creador de la comunidad Club Rulo de Viaje",
      },
      {
        quote: "Durante este tiempo, el trabajo fue muy profesional, con excelente predisposición y cumplimiento en los plazos. La comunicación fue siempre clara y resolutiva. Destaco el compromiso y la eficiencia.",
        tags: ["Profesionalismo constante", "Comunicación clara", "Compromiso y eficiencia"],
        name: "Fernando Celaya",
        role: "Starley – Gerente",
      },
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
      { label: "Quiénes somos", href: "/presentacion" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Reseñas", href: "/resenas" },
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
