export interface SolutionProject {
  name: string
  url: string
  image: string
  es: string
  en: string
}

export interface SolutionData {
  slug: string
  heroImage?: string
  meta: {
    es: { title: string; desc: string }
    en: { title: string; desc: string }
  }
  hero: {
    es: { badge: string; headline: string; sub: string }
    en: { badge: string; headline: string; sub: string }
  }
  features: {
    es: string[]
    en: string[]
  }
  projects?: SolutionProject[]
  process: {
    es: { n: string; title: string; body: string }[]
    en: { n: string; title: string; body: string }[]
  }
  cta: { es: string; en: string }
}

export const SOLUTIONS: SolutionData[] = [
  {
    slug: "desarrollo-web",
    meta: {
      es: { title: "Desarrollo Web a Medida | ALORA", desc: "Diseñamos y desarrollamos sitios web pensados para representar correctamente tu negocio, comunicar con claridad y generar oportunidades reales." },
      en: { title: "Custom Web Development | ALORA", desc: "We design and develop websites to correctly represent your business, communicate clearly and generate real opportunities." },
    },
    hero: {
      es: { badge: "Desarrollo Web", headline: "Desarrollo Web", sub: "Diseñamos y desarrollamos sitios web pensados para representar correctamente tu negocio, comunicar con claridad y generar oportunidades reales." },
      en: { badge: "Web Development", headline: "Web Development", sub: "We design and develop websites designed to correctly represent your business, communicate clearly and generate real opportunities." },
    },
    features: {
      es: [
        "Diseño visual alineado a la identidad de marca",
        "Definición de estructura y jerarquía de contenidos",
        "Navegación clara e intuitiva",
        "Experiencia optimizada para dispositivos móviles",
        "Desarrollo técnico sólido y escalable",
        "Sitio web autogestionable",
        "Optimización básica de rendimiento y SEO técnico",
        "Integración con formularios y herramientas externas",
      ],
      en: [
        "Visual design aligned with brand identity",
        "Definition of structure and content hierarchy",
        "Clear and intuitive navigation",
        "Optimized experience for mobile devices",
        "Solid and scalable technical development",
        "Self-manageable website",
        "Basic performance optimization and technical SEO",
        "Integration with forms and external tools",
      ],
    },
    projects: [
      { name: "Grupo Terra Lauquen", url: "https://grupoterralauquen.com.ar", image: "/images/grupoterralauquen.com.ar_.png", es: "Sitio corporativo para grupo empresarial con múltiples divisiones y presencia regional.", en: "Corporate site for business group with multiple divisions and regional presence." },
      { name: "FPNN", url: "http://fpnn.org.ar", image: "/images/fpnn.png", es: "Sitio completamente custom, desarrollado a medida con diseño personalizado para fundación.", en: "Fully custom site developed for a non-profit foundation with tailored design." },
      { name: "Tenis de Mesa Trenque", url: "https://tenisdemesatrenque.com.ar", image: "/images/tenisdemesatrenque.com.ar_.png", es: "Sitio institucional para club deportivo con integración de torneos y ranking.", en: "Institutional site for sports club with tournament and ranking integration." },
    ],
    process: {
      es: [
        { n: "01", title: "Análisis del negocio", body: "Entendemos tu propuesta de valor, tu audiencia y lo que esperás del sitio." },
        { n: "02", title: "Arquitectura y foco", body: "Diseñamos la estructura del sitio y definimos las páginas y su jerarquía." },
        { n: "03", title: "Experiencia y contenido", body: "Creamos los wireframes, el diseño visual y organizamos el contenido." },
        { n: "04", title: "Desarrollo y QA", body: "Construimos el sitio con tecnología probada y lo testeamos en todos los dispositivos." },
        { n: "05", title: "Lanzamiento y mejora continua", body: "Publicamos y te entregamos las herramientas para actualizarlo vos mismo." },
      ],
      en: [
        { n: "01", title: "Business analysis", body: "We understand your value proposition, your audience and what you expect from the site." },
        { n: "02", title: "Architecture and focus", body: "We design the site structure and define the pages and their hierarchy." },
        { n: "03", title: "Experience and content", body: "We create wireframes, visual design and organize the content." },
        { n: "04", title: "Development & QA", body: "We build the site with proven technology and test it across all devices." },
        { n: "05", title: "Launch and continuous improvement", body: "We publish and give you the tools to update it yourself." },
      ],
    },
    cta: { es: "Hablemos de tu proyecto web", en: "Let's talk about your web project" },
  },

  {
    slug: "landing-pages",
    meta: {
      es: { title: "Landing Pages de Alta Conversión | ALORA", desc: "Diseñamos landing pages enfocadas en un solo objetivo: convertir visitas en leads, contactos o ventas." },
      en: { title: "High-Converting Landing Pages | ALORA", desc: "We design landing pages focused on a single objective: converting visits into leads, contacts or sales." },
    },
    hero: {
      es: { badge: "Landing Pages", headline: "Landing pages diseñadas para convertir", sub: "Diseñamos landing pages enfocadas en un solo objetivo: convertir visitas en leads, contactos o ventas." },
      en: { badge: "Landing Pages", headline: "Landing pages designed to convert", sub: "We design landing pages focused on a single objective: converting visits into leads, contacts or sales." },
    },
    features: {
      es: [
        "Definición del objetivo principal de conversión",
        "Estructura estratégica orientada a resultados",
        "Copy claro, directo y enfocado en beneficios",
        "Diseño visual alineado a la marca",
        "Experiencia optimizada para dispositivos móviles",
        "Desarrollo técnico rápido y eficiente",
        "Integraciones y automatización",
        "Optimización de velocidad y medición",
      ],
      en: [
        "Definition of the main conversion objective",
        "Strategic structure oriented to results",
        "Clear, benefit-driven copywriting",
        "Visual design aligned with the brand",
        "Experience optimized for mobile devices",
        "Fast and efficient technical development",
        "Integrations and automation",
        "Speed optimization and measurement",
      ],
    },
    projects: [
      { name: "Castro Yeso", url: "https://castro-yeso.com", image: "/images/castroweb.png", es: "Landing page 100% personalizada desarrollada con WordPress sin uso de plantillas.", en: "100% custom WordPress landing page built without templates." },
      { name: "Asesoría Dialogar", url: "https://asesoriadialogar.com.ar", image: "/images/dialogar.png", es: "Landing page profesional desarrollada con WordPress para consultoría de recursos humanos.", en: "Professional landing page developed with WordPress for HR consulting firm." },
      { name: "Starley", url: "https://starley.com.ar", image: "/images/starley.png", es: "Sitio de aterrizaje con integración de campañas y seguimiento de conversiones.", en: "Landing site with campaign integration and conversion tracking." },
      { name: "José José", url: "https://www.josejoseoficial.com.mx", image: "/images/josejose.png", es: "Presencia digital y landing para artista con foco en conversión y branding.", en: "Digital presence and landing for artist focused on conversion and branding." },
      { name: "Protorneos", url: "https://protorneos.com", image: "/images/protorneo.png", es: "Landing page para plataforma de torneos deportivos.", en: "Landing page for sports tournament platform." },
    ],
    process: {
      es: [
        { n: "01", title: "Análisis del objetivo y la oferta", body: "Definimos qué acción querés que tome el visitante y cuál es tu propuesta de valor." },
        { n: "02", title: "Arquitectura y guion", body: "Diseñamos la estructura de la página y el mensaje de arriba a abajo." },
        { n: "03", title: "Contenido y diseño de experiencia", body: "Creamos el copy, el diseño visual y la experiencia de usuario." },
        { n: "04", title: "Desarrollo e integraciones", body: "Construimos y conectamos con tus herramientas: CRM, email, analytics." },
        { n: "05", title: "Lanzamiento y optimización inicial", body: "Publicamos, medimos el comportamiento y hacemos ajustes iniciales." },
      ],
      en: [
        { n: "01", title: "Objective and offer analysis", body: "We define what action you want visitors to take and your value proposition." },
        { n: "02", title: "Architecture and narrative", body: "We design the page structure and message from top to bottom." },
        { n: "03", title: "Content and experience design", body: "We create the copy, visual design and user experience." },
        { n: "04", title: "Development and integrations", body: "We build and connect with your tools: CRM, email, analytics." },
        { n: "05", title: "Launch and initial optimization", body: "We publish, measure behavior and make initial adjustments." },
      ],
    },
    cta: { es: "Quiero una landing que convierta", en: "I want a landing that converts" },
  },

  {
    slug: "aplicaciones-web",
    meta: {
      es: { title: "Aplicaciones Web a Medida | ALORA", desc: "Diseñamos y desarrollamos aplicaciones web personalizadas para equipos que necesitan algo más que un sitio corporativo." },
      en: { title: "Custom Web Applications | ALORA", desc: "We design and build custom web applications for teams that need more than a marketing site." },
    },
    hero: {
      es: { badge: "Aplicaciones Web", headline: "Aplicaciones web a medida", sub: "Diseñamos y desarrollamos aplicaciones web personalizadas para equipos que necesitan algo más que un sitio corporativo." },
      en: { badge: "Web Applications", headline: "Custom web applications to solve real business problems", sub: "We design and build custom web applications for teams that need more than a marketing site." },
    },
    features: {
      es: [
        "Diagnóstico operativo y alcance controlado",
        "Diseño UX/UI orientado a equipos",
        "Arquitectura y desarrollo evolutivo",
        "Gobernanza y seguridad aplicadas al negocio",
        "Orquestación de integraciones",
        "Puesta en marcha y transferencia operativa",
      ],
      en: [
        "Operational diagnosis and managed scope",
        "Team-focused UX/UI design",
        "Evolutive architecture and development",
        "Business-grade governance and security",
        "Integration orchestration",
        "Rollout and operational handover",
      ],
    },
    projects: [
      { name: "Protorneos", url: "https://protorneos.com", image: "/images/protorneo.png", es: "Sistema de gestión de torneos y rankings deportivos con panel de administración completo.", en: "Tournament and sports ranking management system with full admin panel." },
    ],
    process: {
      es: [
        { n: "01", title: "Análisis y criterios de éxito", body: "Identificamos qué problema necesita resolver la aplicación y cómo se mide el éxito." },
        { n: "02", title: "Definición funcional y alcance negociado", body: "Mapeamos los flujos operativos y acordamos el alcance del MVP." },
        { n: "03", title: "Diseño de flujos y experiencia operativa", body: "Creamos los flujos de usuario y la interfaz para equipos." },
        { n: "04", title: "Desarrollo iterativo con entregas controladas", body: "Construimos en ciclos cortos con entregas funcionales y feedback constante." },
        { n: "05", title: "Pruebas, endurecimiento y despliegue", body: "Validamos la seguridad, el rendimiento y el comportamiento en producción." },
        { n: "06", title: "Monitoreo y acompañamiento inicial", body: "Supervisamos el arranque y acompañamos al equipo en la adopción." },
      ],
      en: [
        { n: "01", title: "Analysis and success criteria", body: "We identify what problem the application needs to solve and how success is measured." },
        { n: "02", title: "Functional definition and negotiated scope", body: "We map operational flows and agree on MVP scope." },
        { n: "03", title: "Flow design and operational experience", body: "We create user flows and the interface for teams." },
        { n: "04", title: "Iterative development with controlled releases", body: "We build in short cycles with functional deliveries and constant feedback." },
        { n: "05", title: "Testing, hardening and rollout", body: "We validate security, performance and production behavior." },
        { n: "06", title: "Early monitoring and support", body: "We supervise the launch and support the team in adoption." },
      ],
    },
    cta: { es: "Contanos qué necesitás construir", en: "Tell us what you need to build" },
  },

  {
    slug: "ecommerce",
    heroImage: "/images/ecommerce-hero.png",
    meta: {
      es: { title: "Ecommerce y Tiendas Online con WooCommerce | ALORA", desc: "Diseñamos y desarrollamos tiendas online funcionales, claras y orientadas a conversión." },
      en: { title: "Ecommerce & Online Stores with WooCommerce | ALORA", desc: "We design and develop functional, clear and conversion-oriented online stores." },
    },
    hero: {
      es: { badge: "Ecommerce", headline: "Ecommerce", sub: "Tiendas online pensadas para vender y escalar. Diseñamos y desarrollamos tiendas online funcionales, claras y orientadas a conversión." },
      en: { badge: "Ecommerce", headline: "Ecommerce", sub: "Online stores built to sell and scale. We design and develop functional, clear and conversion-oriented online stores." },
    },
    features: {
      es: [
        "Definición de estructura y flujo de compra",
        "Diseño visual alineado a la marca",
        "Experiencia optimizada para móviles",
        "Desarrollo y configuración completa en WooCommerce",
        "Organización y carga asistida de productos",
        "Configuración de medios de pago",
        "Reglas de envío, retiros y pricing dinámico",
        "Integraciones con ERP, CRM y marketplaces",
        "Optimización inicial de rendimiento",
      ],
      en: [
        "Definition of purchase flow structure",
        "Visual design aligned with the brand",
        "Mobile-optimized experience",
        "Full WooCommerce development and configuration",
        "Assisted product organization and loading",
        "Payment method configuration",
        "Shipping rules, pickups and dynamic pricing",
        "ERP, CRM and marketplace integrations",
        "Initial performance optimization",
      ],
    },
    projects: [
      { name: "Greta Kids Atelier", url: "https://gretakidsatelier.com.ar", image: "/images/greta.png", es: "Tienda WooCommerce de moda infantil con checkout personalizado y gestión de inventario.", en: "Children's fashion WooCommerce store with custom checkout and inventory management." },
      { name: "Alaux Neumáticos", url: "https://tiendaalaux.com.ar", image: "/images/alaux.png", es: "Tienda online para distribuidora de neumáticos con catálogo de 500+ productos.", en: "Online store for tire distributor with 500+ product catalog." },
      { name: "Nutriac", url: "https://nutriac.com.ar", image: "/images/nutriac.png", es: "Ecommerce 100% custom de productos nutricionales con integración de pagos local.", en: "100% custom nutritional products ecommerce with local payment integration." },
    ],
    process: {
      es: [
        { n: "01", title: "Análisis y objetivos", body: "Entendemos tu modelo de negocio, catálogo, operación y objetivos de venta." },
        { n: "02", title: "Plataforma y alcance", body: "Definimos la arquitectura, la plataforma y el alcance del proyecto." },
        { n: "03", title: "Experiencia y contenido", body: "Diseñamos la tienda con foco en la experiencia de compra y la conversión." },
        { n: "04", title: "Desarrollo e integraciones", body: "Construimos la tienda y conectamos pagos, envíos y herramientas de gestión." },
        { n: "05", title: "Pruebas y traspaso", body: "Testeamos el flujo completo y te capacitamos para gestionar la tienda." },
      ],
      en: [
        { n: "01", title: "Analysis & goals", body: "We understand your business model, catalog, operations and sales objectives." },
        { n: "02", title: "Platform & scope", body: "We define the architecture, platform and project scope." },
        { n: "03", title: "Experience & content", body: "We design the store focused on purchase experience and conversion." },
        { n: "04", title: "Build & integrations", body: "We build the store and connect payments, shipping and management tools." },
        { n: "05", title: "Testing & handover", body: "We test the full flow and train you to manage the store." },
      ],
    },
    cta: { es: "Hablemos de tu tienda online", en: "Let's talk about your online store" },
  },

  {
    slug: "chatbots",
    heroImage: "/images/alorawha.png",
    meta: {
      es: { title: "Chatbots Inteligentes con IA | ALORA", desc: "Automatizá la atención al cliente las 24hs. Tu chatbot responde consultas, agenda citas y captura leads." },
      en: { title: "AI-Powered Chatbots | ALORA", desc: "Automate customer support 24/7. Your chatbot answers questions, books appointments and captures leads." },
    },
    hero: {
      es: { badge: "Chatbots con IA", headline: "Chatbots que responden, agendan y convierten", sub: "Automatizá la atención al cliente las 24hs. Tu chatbot responde consultas, agenda citas y captura leads mientras vos te enfocás en lo importante." },
      en: { badge: "AI Chatbots", headline: "Chatbots that answer, schedule and convert", sub: "Automate customer support 24/7. Your chatbot answers questions, books appointments and captures leads while you focus on what matters." },
    },
    features: {
      es: [
        "Respuestas automáticas 24/7",
        "Base de conocimiento personalizable",
        "Derivación inteligente a humanos",
        "Integración con calendarios para agendar citas",
        "Recordatorios automáticos",
        "Formularios conversacionales para calificar leads",
        "Integración con Email, WhatsApp y CRM",
        "Analytics en tiempo real",
      ],
      en: [
        "Automatic 24/7 responses",
        "Customizable knowledge base",
        "Smart escalation to humans",
        "Calendar integration for appointment booking",
        "Automatic reminders",
        "Conversational forms for lead qualification",
        "Email, WhatsApp and CRM integration",
        "Real-time analytics",
      ],
    },
    process: {
      es: [
        { n: "01", title: "Análisis de flujos de atención", body: "Mapeamos las consultas frecuentes y los procesos que puede automatizar el chatbot." },
        { n: "02", title: "Diseño conversacional", body: "Creamos los flujos de conversación y el tono de comunicación." },
        { n: "03", title: "Desarrollo e integración", body: "Construimos el chatbot e integramos con tus canales y herramientas." },
        { n: "04", title: "Pruebas y ajustes", body: "Testeamos todos los escenarios y ajustamos las respuestas." },
        { n: "05", title: "Activación y monitoreo", body: "Publicamos el chatbot y monitoreamos su desempeño." },
      ],
      en: [
        { n: "01", title: "Service flow analysis", body: "We map frequent queries and processes the chatbot can automate." },
        { n: "02", title: "Conversational design", body: "We create conversation flows and communication tone." },
        { n: "03", title: "Development and integration", body: "We build the chatbot and integrate with your channels and tools." },
        { n: "04", title: "Testing and adjustments", body: "We test all scenarios and adjust responses." },
        { n: "05", title: "Activation and monitoring", body: "We deploy the chatbot and monitor its performance." },
      ],
    },
    cta: { es: "Quiero un chatbot para mi negocio", en: "I want a chatbot for my business" },
  },

  {
    slug: "google-ads",
    heroImage: "/images/google-ads-hero.jpeg",
    meta: {
      es: { title: "Gestión de Google Ads para Generar Leads | ALORA", desc: "Gestión de campañas de Google Ads con estrategia antes de invertir, estructura orientada a conversión y optimización continua." },
      en: { title: "Google Ads Management to Generate Leads | ALORA", desc: "Google Ads campaign management with strategy before investing, conversion-first structure and continuous optimization." },
    },
    hero: {
      es: { badge: "Google Ads", headline: "Gestión de Google Ads para generar clientes a partir de búsquedas con intención", sub: "Estrategia antes de invertir. Estructura orientada a conversión. Optimización continua." },
      en: { badge: "Google Ads", headline: "Google Ads management to turn intent into customers", sub: "Strategy before investing. Conversion-first structure. Continuous optimization." },
    },
    features: {
      es: [
        "Estrategia y análisis antes de invertir",
        "Campañas de Búsqueda, Display, Shopping y Performance Max",
        "Remarketing para recuperar visitas",
        "Lead forms y extensiones",
        "Tracking y medición de conversiones",
        "Landing pages orientadas a conversión",
        "Optimización de presupuesto continua",
        "Reportes ejecutivos periódicos",
      ],
      en: [
        "Strategy and analysis before investing",
        "Search, Display, Shopping and Performance Max campaigns",
        "Remarketing to recover visits",
        "Lead forms and extensions",
        "Conversion tracking and measurement",
        "Conversion-focused landing pages",
        "Continuous budget optimization",
        "Periodic executive reports",
      ],
    },
    process: {
      es: [
        { n: "01", title: "Auditoría y estrategia", body: "Analizamos tu mercado, competencia y definimos los objetivos de campaña." },
        { n: "02", title: "Estructura de campaña", body: "Construimos la arquitectura de campaña orientada a conversión." },
        { n: "03", title: "Tracking y medición", body: "Configuramos el seguimiento de conversiones para medir el ROI real." },
        { n: "04", title: "Optimización continua", body: "Refinamos keywords, anuncios y pujas basándonos en datos reales." },
        { n: "05", title: "Reporte y decisiones", body: "Informamos resultados y tomamos decisiones estratégicas juntos." },
      ],
      en: [
        { n: "01", title: "Audit and strategy", body: "We analyze your market, competition and define campaign objectives." },
        { n: "02", title: "Campaign structure", body: "We build conversion-oriented campaign architecture." },
        { n: "03", title: "Tracking and measurement", body: "We configure conversion tracking to measure real ROI." },
        { n: "04", title: "Continuous optimization", body: "We refine keywords, ads and bids based on real data." },
        { n: "05", title: "Reporting and decisions", body: "We report results and make strategic decisions together." },
      ],
    },
    cta: { es: "Quiero más clientes con Google Ads", en: "I want more customers with Google Ads" },
  },

  {
    slug: "mantenimiento-web",
    heroImage: "/images/mantenimiento-web-hero.png",
    meta: {
      es: { title: "Mantenimiento Web Profesional | ALORA", desc: "Supervisión técnica, actualizaciones, seguridad y mejoras continuas para que tu sitio funcione siempre." },
      en: { title: "Professional Website Maintenance | ALORA", desc: "Technical supervision, updates, security and continuous improvements so your site always works." },
    },
    hero: {
      es: { badge: "Mantenimiento Web", headline: "Mantenimiento Web para que tu sitio funcione siempre", sub: "Supervisión técnica, actualizaciones, seguridad y mejoras continuas. Un sitio web no es un proyecto terminado — es una herramienta activa del negocio." },
      en: { badge: "Web Maintenance", headline: "Web Maintenance — so your site works always, not just on launch day", sub: "Technical supervision, updates, security and continuous improvements. A website is not a finished project — it is an active business tool." },
    },
    features: {
      es: [
        "Actualizaciones técnicas de CMS, plugins y temas",
        "Seguridad y prevención de vulnerabilidades",
        "Backups automáticos y recuperación de emergencia",
        "Corrección de errores y bugs",
        "Optimización básica de rendimiento",
        "Soporte técnico ante incidentes",
      ],
      en: [
        "Technical updates for CMS, plugins and themes",
        "Security and vulnerability prevention",
        "Automatic backups and emergency recovery",
        "Error and bug correction",
        "Basic performance optimization",
        "Technical support for incidents",
      ],
    },
    process: {
      es: [
        { n: "01", title: "Auditoría inicial del sitio", body: "Evaluamos el estado actual, los riesgos y lo que necesita atención inmediata." },
        { n: "02", title: "Plan de mantenimiento", body: "Definimos la frecuencia y el alcance de las intervenciones técnicas." },
        { n: "03", title: "Monitoreo y backups", body: "Implementamos el sistema de monitoreo y respaldo automático." },
        { n: "04", title: "Revisión técnica periódica", body: "Realizamos las actualizaciones y revisiones según el plan." },
        { n: "05", title: "Reporte de estado", body: "Informamos el estado del sitio y las acciones realizadas cada período." },
      ],
      en: [
        { n: "01", title: "Initial site audit", body: "We evaluate the current state, risks and what needs immediate attention." },
        { n: "02", title: "Maintenance plan", body: "We define the frequency and scope of technical interventions." },
        { n: "03", title: "Monitoring and backups", body: "We implement the monitoring and automatic backup system." },
        { n: "04", title: "Periodic technical review", body: "We perform updates and reviews according to the plan." },
        { n: "05", title: "Status report", body: "We report the site status and actions taken each period." },
      ],
    },
    cta: { es: "Quiero mantener mi sitio al día", en: "I want to keep my site up to date" },
  },

  {
    slug: "atencion-cliente-ia",
    heroImage: "/images/atencionalclienteconia.jpg",
    meta: {
      es: { title: "Atención al Cliente con IA 24/7 | ALORA", desc: "Automatizá tu atención al cliente con agentes de IA que responden en minutos, no en horas." },
      en: { title: "AI Customer Service 24/7 | ALORA", desc: "Automate your customer service with AI agents that respond in minutes, not hours." },
    },
    hero: {
      es: { badge: "IA para Atención", headline: "Automatizá tu atención al cliente con agentes de IA que responden en minutos, no en horas", sub: "Disponibilidad 24/7, respuestas instantáneas y calificación automática de leads. Tu equipo enfocado en lo que importa." },
      en: { badge: "AI Customer Service", headline: "Automate your customer service with AI agents that respond in minutes, not hours", sub: "24/7 availability, instant responses and automatic lead qualification. Your team focused on what matters." },
    },
    features: {
      es: [
        "Diseño del flujo de atención personalizado",
        "Creación de agentes de IA con tu marca y tono",
        "Integración con WhatsApp, web, email y más",
        "Clasificación y organización de información",
        "Calificación automática de leads",
        "Derivación inteligente a agentes humanos",
        "Soporte fuera del horario de atención",
        "Reportes y analytics de conversaciones",
      ],
      en: [
        "Custom service flow design",
        "AI agent creation with your brand and tone",
        "WhatsApp, web, email and more integrations",
        "Information classification and organization",
        "Automatic lead qualification",
        "Smart escalation to human agents",
        "After-hours customer support",
        "Conversation reports and analytics",
      ],
    },
    process: {
      es: [
        { n: "01", title: "Auditoría del proceso de atención", body: "Analizamos cómo atendés hoy, qué se puede automatizar y qué métricas mejorar." },
        { n: "02", title: "Definición de objetivos", body: "Establecemos qué va a resolver el agente y cómo se mide el éxito." },
        { n: "03", title: "Diseño de flujos conversacionales", body: "Creamos los guiones, flujos y escaladas del agente de IA." },
        { n: "04", title: "Implementación técnica e integración", body: "Construimos e integramos el agente con tus canales y sistemas." },
        { n: "05", title: "Pruebas, ajustes y mejora continua", body: "Validamos todos los escenarios y ajustamos el comportamiento." },
      ],
      en: [
        { n: "01", title: "Service process audit", body: "We analyze how you currently serve customers, what can be automated and what metrics to improve." },
        { n: "02", title: "Objective definition", body: "We establish what the agent will solve and how success is measured." },
        { n: "03", title: "Conversational flow design", body: "We create the agent's scripts, flows and escalations." },
        { n: "04", title: "Technical implementation and integration", body: "We build and integrate the agent with your channels and systems." },
        { n: "05", title: "Testing, adjustments and continuous improvement", body: "We validate all scenarios and adjust behavior." },
      ],
    },
    cta: { es: "Quiero automatizar mi atención al cliente", en: "I want to automate my customer service" },
  },
]

export function getSolution(slug: string): SolutionData | undefined {
  return SOLUTIONS.find((s) => s.slug === slug)
}
