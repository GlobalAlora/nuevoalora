export interface IconTextItem {
  icon: string;
  title: string;
  body: string;
}

export interface IndustryItem {
  icon: string;
  name: string;
  useCases: string[];
}

export interface JourneyStageItem {
  icon: string;
  tag: string;
  title: string;
  body: string;
}

export interface ProofItemContent {
  client: string;
  category: string;
  problem: string;
  logic: string;
  solution: string;
  metric: string;
}

export interface FaqItemContent {
  question: string;
  answer: string;
}

export interface LandingContent {
  meta: { title: string; desc: string };
  breadcrumb: { home: string; page: string };
  hero: { badge: string; h1Line1: string; h1Line2: string; paragraph: string; cta: string };
  problem: { badge: string; title: string; intro: string; cards: IconTextItem[] };
  application: { badge: string; title: string; intro: string; cards: IconTextItem[] };
  industries: { badge: string; title: string; intro: string; items: IndustryItem[] };
  methodology: { badge: string; title: string; intro: string; stages: JourneyStageItem[] };
  proof: {
    badge: string;
    title: string;
    intro: string;
    rowLabels: { problem: string; logic: string; solution: string };
    items: ProofItemContent[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    leftHeading: string;
    bullets: string[];
    infoChip: string;
    secondaryCta: string;
  };
  faq: { badge: string; title: string; intro: string; items: FaqItemContent[]; itemCta: string; backToForm: string };
  footer: { copyright: string; privacy: string; cookies: string; terms: string };
}

export const LANDING_CONTENT: Record<"es" | "en", LandingContent> = {
  es: {
    meta: {
      title: "Auditoría de IA para empresas | ALORA",
      desc: "Diagnosticamos dónde la inteligencia artificial genera retorno real en tu operación — ventas, atención al cliente, procesos internos y datos. Auditoría gratuita de 20 minutos.",
    },
    breadcrumb: { home: "Inicio", page: "Auditoría de IA para empresas" },
    hero: {
      badge: "Consultoría en Inteligencia Artificial",
      h1Line1: "¿Qué puede hacer la IA por tu empresa?",
      h1Line2: "Te lo mostramos con un diagnóstico, no con una demo.",
      paragraph: "Trabajamos con equipos que ya tienen una operación en marcha — ventas, atención al cliente, procesos internos, datos — y buscan aplicar IA donde realmente genera retorno, no donde está de moda.",
      cta: "Reservá una auditoría de IA para tu operación →",
    },
    problem: {
      badge: "El problema",
      title: "Señales de que tu negocio tiene margen para aplicar IA",
      intro: "Estas señales aparecen en ventas, atención, operaciones y datos por igual — no hace falta que tengas un problema grave, alcanza con reconocerte en una de ellas.",
      cards: [
        { icon: "controls", title: "Tu equipo pierde horas en tareas repetibles", body: "Trabajo manual que se podría automatizar, pero nadie tuvo el tiempo de priorizarlo." },
        { icon: "chat", title: "Tu atención al cliente no escala", body: "El volumen de consultas crece más rápido que la capacidad de tu equipo para responderlas." },
        { icon: "puzzle", title: "Tenés datos dispersos que no se traducen en decisiones", body: "La información existe, pero está repartida entre sistemas que no se hablan entre sí." },
        { icon: "search", title: "Ya evaluaste \"meter IA\", pero no sabés por dónde empezar", body: "Sobran herramientas y demos. Falta un criterio claro de qué caso de uso genera retorno real primero." },
      ],
    },
    application: {
      badge: "Dónde aplica",
      title: "Dónde aplicamos IA en tu negocio",
      intro: "No vendemos una herramienta puntual — evaluamos tu operación completa y aplicamos IA donde el impacto es real.",
      cards: [
        { icon: "target", title: "Ventas y atención comercial", body: "Seguimiento de leads, calificación automática y respuesta inmediata en cada canal de entrada." },
        { icon: "gears", title: "Operaciones y procesos internos", body: "Tareas repetibles conectadas entre sistemas, sin depender de que alguien las haga a mano cada vez." },
        { icon: "headset", title: "Atención al cliente y soporte", body: "Consultas frecuentes resueltas al instante, con derivación a una persona cuando el caso lo requiere." },
        { icon: "chart", title: "Datos y toma de decisiones", body: "Información dispersa convertida en reportes que efectivamente se usan para decidir." },
      ],
    },
    industries: {
      badge: "Por industria",
      title: "Casos de aplicación de IA por industria",
      intro: "Nueve rubros con aplicaciones de IA ya probadas en el mercado, para que veas dónde encaja tu negocio antes de la llamada.",
      items: [
        { icon: "cart", name: "Retail y ecommerce", useCases: ["Chatbot de ventas con catálogo y precios 24/7", "Recomendaciones personalizadas por historial de compra", "Seguimiento automático de carritos abandonados"] },
        { icon: "chat", name: "Salud y bienestar", useCases: ["Agente que agenda, confirma y recuerda turnos por WhatsApp", "Reducción de ausentismo con recordatorios automáticos", "Cobro de señas integrado en la conversación"] },
        { icon: "structure", name: "Inmobiliaria", useCases: ["Calificación automática de leads por presupuesto y zona", "Agente que coordina visitas según disponibilidad", "Respuesta instantánea a consultas de propiedades"] },
        { icon: "shield", name: "Servicios profesionales y legal", useCases: ["Formulario que prioriza consultas según urgencia", "Reseñas y prueba social mostradas en vivo", "Agenda de turnos sin intervención manual"] },
        { icon: "gears", name: "Manufactura e industria", useCases: ["Automatización de cotizaciones repetitivas", "Seguimiento de pedidos integrado a tu sistema de gestión", "Alertas automáticas de stock y reposición"] },
        { icon: "chart", name: "Finanzas y seguros", useCases: ["Calificación de leads por perfil de riesgo", "Respuestas automáticas a consultas frecuentes", "Reportes de conversión y seguimiento en tiempo real"] },
        { icon: "spark", name: "Agro", useCases: ["Seguimiento automático de pedidos y cotizaciones de insumos", "Alertas de stock y reposición por campaña", "Atención a productores por WhatsApp fuera de horario"] },
        { icon: "headset", name: "Empresas de servicios", useCases: ["Calificación de leads antes de pasar a un vendedor", "Agenda automática de visitas o demos", "Seguimiento post-venta sin intervención manual"] },
        { icon: "navigation", name: "Logística y distribución", useCases: ["Seguimiento de pedidos integrado a tu sistema de gestión", "Respuestas automáticas sobre estado de envío", "Alertas de demora antes de que el cliente pregunte"] },
      ],
    },
    methodology: {
      badge: "Cómo trabajamos",
      title: "Un proceso de diagnóstico, no de venta",
      intro: "Cuatro etapas, siempre en ese orden: primero entendemos tu operación, después construimos. Nunca al revés.",
      stages: [
        { icon: "search", tag: "01", title: "Diagnóstico", body: "Relevamos tu operación real — sistemas, equipos y procesos — para identificar dónde la IA puede generar impacto concreto." },
        { icon: "target", tag: "02", title: "Priorización por impacto", body: "De todos los casos de uso posibles, definimos juntos cuáles conviene atacar primero según retorno y esfuerzo." },
        { icon: "code", tag: "03", title: "Implementación", body: "Construimos e integramos la solución con tus sistemas actuales, con entregas visibles durante todo el proceso." },
        { icon: "chart", tag: "04", title: "Medición y escalado", body: "Medimos el resultado real y expandimos a nuevas áreas una vez validado, no antes." },
      ],
    },
    proof: {
      badge: "Resultados reales",
      title: "IA en producción, no en demo",
      intro: "Sistemas reales, algunos ya en uso y otros en camino — con el problema, la lógica y la solución de cada uno, sin vueltas.",
      rowLabels: { problem: "Problema", logic: "Lógica de la solución", solution: "Solución implementada" },
      items: [
        {
          client: "ALORA CRM",
          category: "CRM comercial con IA",
          problem: "Leads dispersos entre WhatsApp, chatbot y web, sin seguimiento centralizado — cada etapa dependía de que alguien se acordara de actualizar una planilla.",
          logic: "Automatizar el pipeline completo con IA integrada: que cada lead avance solo entre etapas y que el seguimiento no dependa de una persona.",
          solution: "Pipeline 100% automatizado, WhatsApp con IA integrado y dashboard comercial en tiempo real. Hoy licenciado como marca blanca a otras empresas.",
          metric: "En uso y evolución constante — 4 clientes con implementación white-label",
        },
        {
          client: "Soy LIDIA",
          category: "Agente de IA por WhatsApp",
          problem: "Consultorios pierden pacientes por no responder a tiempo, de noche o en hora pico — el paciente agenda con el primero que le contesta.",
          logic: "Una recepcionista digital que responda, agende y cobre dentro de la misma conversación de WhatsApp, sin intervención humana.",
          solution: "Agente de IA 24/7 que agenda, confirma, cobra señas y recuerda turnos automáticamente, con reportes de negocio en tiempo real.",
          metric: "En uso en consultorios de Argentina, Uruguay, España y Chile",
        },
        {
          client: "Presupuestación automática por IA",
          category: "Automatización de cotizaciones",
          problem: "Armar un presupuesto después de una reunión comercial implica horas de trabajo manual: revisar notas, calcular ítems y redactar la propuesta desde cero cada vez.",
          logic: "Que la IA lea las notas de la reunión y arme un borrador de presupuesto automáticamente, listo para revisar y ajustar antes de enviarlo.",
          solution: "Un sistema que toma notas de reunión y genera un presupuesto estructurado en minutos, con ítems y condiciones ya cargados.",
          metric: "El armado de un presupuesto pasa de horas a minutos",
        },
        {
          client: "Ticketing de soporte para empresas",
          category: "Soporte y atención con IA",
          problem: "Los reclamos y consultas de soporte llegan por distintos canales y se pierden entre mails, WhatsApp y planillas, sin un criterio claro de prioridad.",
          logic: "Centralizar cada consulta en un sistema de tickets con IA que clasifique, priorice y sugiera una respuesta antes de que un agente humano intervenga.",
          solution: "Sistema de ticketing con clasificación automática por urgencia y área, con respuestas sugeridas por IA para acelerar cada resolución.",
          metric: "Todos los canales de soporte centralizados en un solo lugar",
        },
        {
          client: "Sistema de proyectos y seguimiento",
          category: "Gestión de proyectos con IA",
          problem: "El estado real de cada proyecto vive en la cabeza de una persona, sin visibilidad para el resto del equipo ni para el cliente.",
          logic: "Centralizar tareas, tiempos y entregables en un solo lugar, con IA que resuma el avance y anticipe demoras antes de que se conviertan en un problema.",
          solution: "Panel de proyectos con seguimiento automático de avance, alertas de demora y resúmenes generados por IA en cada actualización.",
          metric: "Visibilidad de avance en tiempo real, sin pedir un status a mano",
        },
      ],
    },
    contact: {
      badge: "Empecemos",
      title: "Reservá tu auditoría IA gratuita",
      subtitle: "Una conversación breve para entender tu negocio y mostrarte, en concreto, dónde la IA puede generar resultado — sin compromiso.",
      leftHeading: "¿Qué incluye?",
      bullets: [
        "20 minutos, 100% online",
        "Relevamiento de tu negocio y tus sistemas actuales",
        "Quick wins y un roadmap de implementación",
        "Totalmente gratuita, sin compromiso de compra",
      ],
      infoChip: "Pensado para empresas en funcionamiento, con equipo y operación activa.",
      secondaryCta: "Prefiero reservar llamada ya →",
    },
    faq: {
      badge: "Preguntas frecuentes",
      title: "Todo lo que necesitás saber antes de reservar",
      intro: "Si algo no queda claro acá, también lo podés preguntar directamente en la llamada.",
      items: [
        { question: "¿En qué consiste la auditoría de IA?", answer: "Es una llamada de 20 minutos, 100% online, donde relevamos tu operación actual — sistemas, equipos y procesos — y te mostramos en concreto dónde la IA puede generar retorno. No es una demo de producto ni una reunión de ventas." },
        { question: "¿Cuánto cuesta la auditoría?", answer: "Es completamente gratuita y sin compromiso de compra. El objetivo es darte un diagnóstico real, no venderte algo en la primera llamada." },
        { question: "¿Qué necesito preparar antes de la llamada?", answer: "Nada formal. Ayuda si llegás con una idea de qué proceso o equipo te gustaría optimizar y qué sistemas usás hoy (CRM, WhatsApp, ecommerce, etc.), pero no es un requisito." },
        { question: "¿Qué pasa después de la auditoría?", answer: "Te llevás una priorización clara de qué casos de uso conviene atacar primero según retorno y esfuerzo. Si decidís avanzar, armamos una propuesta a medida; si no, la auditoría sigue siendo tuya igual." },
        { question: "¿Trabajan con empresas de cualquier tamaño?", answer: "Trabajamos con empresas que ya tienen una operación en marcha, con equipo y procesos activos — no con emprendimientos que recién arrancan. Más allá de eso, el tamaño exacto importa menos que tener un proceso real para optimizar." },
        { question: "¿En qué se diferencia esto de una demo de producto?", answer: "Una demo te muestra una herramienta. Esta auditoría parte de tu operación real y define qué caso de uso conviene resolver primero — la herramienta, si hace falta una, viene después, no antes." },
      ],
      itemCta: "¿Seguís con dudas? Resolvelas en tu auditoría de IA →",
      backToForm: "Reservá Tu Auditoría IA Ahora",
    },
    footer: { copyright: "© 2026 ALORA. Todos los derechos reservados.", privacy: "Privacidad", cookies: "Cookies", terms: "Términos" },
  },
  en: {
    meta: {
      title: "AI Audit for Companies | ALORA",
      desc: "We diagnose where artificial intelligence generates real returns in your operation — sales, customer service, internal processes and data. Free 20-minute audit.",
    },
    breadcrumb: { home: "Home", page: "AI Audit for Companies" },
    hero: {
      badge: "Artificial Intelligence Consulting",
      h1Line1: "What can AI do for your company?",
      h1Line2: "We'll show you with a diagnosis, not a demo.",
      paragraph: "We work with teams that already have an operation running — sales, customer service, internal processes, data — and want to apply AI where it actually generates returns, not where it's trendy.",
      cta: "Book an AI audit for your operation →",
    },
    problem: {
      badge: "The problem",
      title: "Signs your business has room to apply AI",
      intro: "These signs show up in sales, support, operations and data alike — you don't need a serious problem, just recognize yourself in one of them.",
      cards: [
        { icon: "controls", title: "Your team loses hours to repeatable tasks", body: "Manual work that could be automated, but no one has had the time to prioritize it." },
        { icon: "chat", title: "Your customer service doesn't scale", body: "Inquiry volume grows faster than your team's capacity to respond to it." },
        { icon: "puzzle", title: "Your data is scattered and doesn't translate into decisions", body: "The information exists, but it's spread across systems that don't talk to each other." },
        { icon: "search", title: "You've already considered \"adding AI\", but don't know where to start", body: "There's no shortage of tools and demos. What's missing is a clear criterion for which use case generates real returns first." },
      ],
    },
    application: {
      badge: "Where it applies",
      title: "Where we apply AI in your business",
      intro: "We don't sell a one-off tool — we evaluate your entire operation and apply AI where the impact is real.",
      cards: [
        { icon: "target", title: "Sales and commercial outreach", body: "Lead follow-up, automatic qualification and immediate response on every inbound channel." },
        { icon: "gears", title: "Operations and internal processes", body: "Repeatable tasks connected across systems, without depending on someone doing them by hand every time." },
        { icon: "headset", title: "Customer service and support", body: "Frequent inquiries resolved instantly, handed off to a person when the case requires it." },
        { icon: "chart", title: "Data and decision-making", body: "Scattered information turned into reports that actually get used to decide." },
      ],
    },
    industries: {
      badge: "By industry",
      title: "AI application cases by industry",
      intro: "Nine industries with AI applications already proven in the market, so you can see where your business fits before the call.",
      items: [
        { icon: "cart", name: "Retail and ecommerce", useCases: ["24/7 sales chatbot with live catalog and pricing", "Personalized recommendations based on purchase history", "Automatic abandoned-cart follow-up"] },
        { icon: "chat", name: "Health and wellness", useCases: ["Agent that books, confirms and reminds appointments over WhatsApp", "Reduced no-shows with automatic reminders", "Deposit collection built into the conversation"] },
        { icon: "structure", name: "Real estate", useCases: ["Automatic lead qualification by budget and area", "Agent that coordinates viewings based on availability", "Instant response to property inquiries"] },
        { icon: "shield", name: "Professional and legal services", useCases: ["Form that prioritizes inquiries by urgency", "Reviews and social proof shown live", "Appointment scheduling with no manual intervention"] },
        { icon: "gears", name: "Manufacturing and industry", useCases: ["Automation of repetitive quotes", "Order tracking integrated with your management system", "Automatic stock and restocking alerts"] },
        { icon: "chart", name: "Finance and insurance", useCases: ["Lead qualification by risk profile", "Automatic replies to frequent questions", "Real-time conversion and follow-up reports"] },
        { icon: "spark", name: "Agriculture", useCases: ["Automatic tracking of orders and input quotes", "Stock and restocking alerts by season", "After-hours producer support over WhatsApp"] },
        { icon: "headset", name: "Service businesses", useCases: ["Lead qualification before handoff to a salesperson", "Automatic scheduling of visits or demos", "Post-sale follow-up with no manual intervention"] },
        { icon: "navigation", name: "Logistics and distribution", useCases: ["Order tracking integrated with your management system", "Automatic replies about shipment status", "Delay alerts before the customer has to ask"] },
      ],
    },
    methodology: {
      badge: "How we work",
      title: "A diagnostic process, not a sales pitch",
      intro: "Four stages, always in that order: first we understand your operation, then we build. Never the other way around.",
      stages: [
        { icon: "search", tag: "01", title: "Diagnosis", body: "We map your actual operation — systems, teams and processes — to identify where AI can generate concrete impact." },
        { icon: "target", tag: "02", title: "Impact-based prioritization", body: "Of all the possible use cases, we jointly define which ones to tackle first based on return and effort." },
        { icon: "code", tag: "03", title: "Implementation", body: "We build and integrate the solution with your current systems, with visible deliverables throughout the process." },
        { icon: "chart", tag: "04", title: "Measurement and scaling", body: "We measure the real result and expand into new areas once it's validated — not before." },
      ],
    },
    proof: {
      badge: "Real results",
      title: "AI in production, not in a demo",
      intro: "Real systems, some already in use and others on the way — with the problem, the logic and the solution for each, no fluff.",
      rowLabels: { problem: "Problem", logic: "Solution logic", solution: "Solution implemented" },
      items: [
        {
          client: "ALORA CRM",
          category: "AI-powered sales CRM",
          problem: "Leads scattered across WhatsApp, chatbot and web, with no centralized tracking — every stage depended on someone remembering to update a spreadsheet.",
          logic: "Automate the entire pipeline with built-in AI: each lead advances between stages on its own, and follow-up doesn't depend on one person.",
          solution: "A fully automated pipeline, WhatsApp with built-in AI and a real-time sales dashboard. Now licensed as white-label to other companies.",
          metric: "In active use and constant evolution — 4 clients with white-label implementations",
        },
        {
          client: "Soy LIDIA",
          category: "AI agent over WhatsApp",
          problem: "Clinics lose patients by not responding in time — at night or during peak hours — the patient books with whoever answers first.",
          logic: "A digital receptionist that replies, books and charges within the same WhatsApp conversation, with no human intervention.",
          solution: "A 24/7 AI agent that books, confirms, charges deposits and sends reminders automatically, with real-time business reports.",
          metric: "In use at clinics across Argentina, Uruguay, Spain and Chile",
        },
        {
          client: "AI-Automated Quoting",
          category: "Quote automation",
          problem: "Putting together a quote after a sales meeting means hours of manual work: reviewing notes, calculating line items and drafting the proposal from scratch every time.",
          logic: "Have AI read the meeting notes and draft a quote automatically, ready to review and adjust before sending.",
          solution: "A system that takes meeting notes and generates a structured quote in minutes, with line items and terms already filled in.",
          metric: "Putting together a quote goes from hours to minutes",
        },
        {
          client: "Enterprise Support Ticketing",
          category: "AI-powered support and service",
          problem: "Support requests and inquiries arrive through different channels and get lost between emails, WhatsApp and spreadsheets, with no clear priority criteria.",
          logic: "Centralize every inquiry in a ticketing system where AI classifies, prioritizes and suggests a response before a human agent steps in.",
          solution: "A ticketing system with automatic classification by urgency and area, with AI-suggested replies to speed up every resolution.",
          metric: "Every support channel centralized in one place",
        },
        {
          client: "Project Tracking System",
          category: "AI-powered project management",
          problem: "The real status of each project lives in one person's head, with no visibility for the rest of the team or the client.",
          logic: "Centralize tasks, timelines and deliverables in one place, with AI that summarizes progress and flags delays before they become a problem.",
          solution: "A project dashboard with automatic progress tracking, delay alerts and AI-generated summaries on every update.",
          metric: "Real-time progress visibility, without asking anyone for a status update",
        },
      ],
    },
    contact: {
      badge: "Let's start",
      title: "Book your free AI audit",
      subtitle: "A short conversation to understand your business and show you, in concrete terms, where AI can generate results — no strings attached.",
      leftHeading: "What's included?",
      bullets: [
        "20 minutes, 100% online",
        "An assessment of your business and current systems",
        "Quick wins and an implementation roadmap",
        "Completely free, no purchase commitment",
      ],
      infoChip: "Designed for companies already up and running, with a team and active operations.",
      secondaryCta: "I'd rather book a call now →",
    },
    faq: {
      badge: "FAQ",
      title: "Everything you need to know before booking",
      intro: "If something isn't clear here, you can also ask directly on the call.",
      items: [
        { question: "What does the AI audit consist of?", answer: "It's a 20-minute, fully online call where we assess your current operation — systems, teams and processes — and show you concretely where AI can generate returns. It's not a product demo or a sales meeting." },
        { question: "How much does the audit cost?", answer: "It's completely free, with no purchase commitment. The goal is to give you a real diagnosis, not sell you something on the first call." },
        { question: "What do I need to prepare before the call?", answer: "Nothing formal. It helps if you come with an idea of which process or team you'd like to optimize and what systems you currently use (CRM, WhatsApp, ecommerce, etc.), but it's not a requirement." },
        { question: "What happens after the audit?", answer: "You'll walk away with a clear prioritization of which use cases are worth tackling first, based on return and effort. If you decide to move forward, we put together a custom proposal; if not, the audit is yours to keep either way." },
        { question: "Do you work with companies of any size?", answer: "We work with companies that already have an operation running, with an active team and processes — not with early-stage startups just getting off the ground. Beyond that, exact size matters less than having a real process to optimize." },
        { question: "How is this different from a product demo?", answer: "A demo shows you a tool. This audit starts from your actual operation and defines which use case is worth solving first — the tool, if one is even needed, comes after, not before." },
      ],
      itemCta: "Still have questions? Get them answered in your AI audit →",
      backToForm: "Book Your AI Audit Now",
    },
    footer: { copyright: "© 2026 ALORA. All rights reserved.", privacy: "Privacy", cookies: "Cookies", terms: "Terms" },
  },
};

export interface FormContent {
  labels: { nombre: string; apellido: string; email: string; telefono: string; empresa: string; companySize: string; pais: string; mensaje: string };
  placeholders: { nombre: string; apellido: string; email: string; telefono: string; empresa: string; companySizeOption: string; paisOption: string; mensaje: string };
  countries: string[];
  privacyText: string;
  privacyLink: string;
  submitError: string;
  submitting: string;
  submit: string;
  requiredMark: string;
}

export const FORM_CONTENT: Record<"es" | "en", FormContent> = {
  es: {
    labels: { nombre: "Nombre", apellido: "Apellido", email: "Correo", telefono: "Teléfono / WhatsApp", empresa: "Empresa", companySize: "Tamaño de la empresa", pais: "País", mensaje: "¿Qué proceso o equipo te gustaría optimizar con IA?" },
    placeholders: {
      nombre: "Tu nombre",
      apellido: "Tu apellido",
      email: "vos@empresa.com",
      telefono: "+54 9 11 1234-5678",
      empresa: "Nombre de tu empresa",
      companySizeOption: "Seleccioná una opción",
      paisOption: "Seleccioná tu país",
      mensaje: "Contanos un poco sobre tu operación y qué te gustaría mejorar (mínimo 100 caracteres)",
    },
    countries: ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica", "Ecuador", "El Salvador", "Guatemala", "Honduras", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "Uruguay", "Venezuela", "España", "Portugal", "Estados Unidos", "Canadá", "Otro"],
    privacyText: "Acepto la política de privacidad y quiero recibir novedades y comunicaciones comerciales de ALORA.",
    privacyLink: "Política de Privacidad",
    submitError: "Error al enviar. Por favor intentá de nuevo.",
    submitting: "Enviando...",
    submit: "Reservar mi auditoría de IA",
    requiredMark: "*",
  },
  en: {
    labels: { nombre: "First name", apellido: "Last name", email: "Email", telefono: "Phone / WhatsApp", empresa: "Company", companySize: "Company size", pais: "Country", mensaje: "What process or team would you like to optimize with AI?" },
    placeholders: {
      nombre: "Your first name",
      apellido: "Your last name",
      email: "you@company.com",
      telefono: "+1 555 123 4567",
      empresa: "Your company's name",
      companySizeOption: "Select an option",
      paisOption: "Select your country",
      mensaje: "Tell us a bit about your operation and what you'd like to improve (minimum 100 characters)",
    },
    countries: ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Costa Rica", "Ecuador", "El Salvador", "Guatemala", "Honduras", "Mexico", "Nicaragua", "Panama", "Paraguay", "Peru", "Uruguay", "Venezuela", "Spain", "Portugal", "United States", "Canada", "Other"],
    privacyText: "I accept the privacy policy and want to receive updates and commercial communications from ALORA.",
    privacyLink: "Privacy Policy",
    submitError: "Something went wrong. Please try again.",
    submitting: "Sending...",
    submit: "Book my AI audit",
    requiredMark: "*",
  },
};

export interface GraciasContent {
  title: string;
  h1: string;
  body: string;
  steps: string[];
  waitNote: string;
  waitLink: string;
}

export const GRACIAS_CONTENT: Record<"es" | "en", GraciasContent> = {
  es: {
    title: "¡Solicitud de auditoría de IA recibida! | ALORA",
    h1: "Recibimos tu solicitud de auditoría de IA",
    body: "Un especialista revisa lo que nos contaste sobre tu operación y te escribe en menos de 24 horas para coordinar tu auditoría de IA — 20 minutos, online y gratis.",
    steps: ["Revisamos tu operación", "Te contactamos en 24hs", "Agendamos tu auditoría de IA"],
    waitNote: "¿Preferís no esperar?",
    waitLink: "Reservá tu auditoría de IA ahora",
  },
  en: {
    title: "AI audit request received! | ALORA",
    h1: "We received your AI audit request",
    body: "A specialist reviews what you told us about your operation and reaches out within 24 hours to coordinate your AI audit — 20 minutes, online and free.",
    steps: ["We review your operation", "We reach out within 24hs", "We schedule your AI audit"],
    waitNote: "Prefer not to wait?",
    waitLink: "Book your AI audit now",
  },
};

export interface ReservarContent {
  title: string;
  h1: string;
  subtitle: string;
}

export const RESERVAR_CONTENT: Record<"es" | "en", ReservarContent> = {
  es: { title: "Reservá tu auditoría de IA | ALORA", h1: "Reservá tu auditoría de IA", subtitle: "20 minutos, online y sin costo. Elegí el horario que mejor te quede." },
  en: { title: "Book your AI audit | ALORA", h1: "Book your AI audit", subtitle: "20 minutes, online and free. Pick the time that works best for you." },
};

export interface AgendadaContent {
  title: string;
  h1: string;
  body: string;
  prepHeading: string;
  prepItems: string[];
}

export const AGENDADA_CONTENT: Record<"es" | "en", AgendadaContent> = {
  es: {
    title: "¡Tu auditoría de IA está agendada! | ALORA",
    h1: "Tu auditoría de IA está agendada",
    body: "Te enviamos la confirmación por email, con los detalles y el link de acceso. En 20 minutos analizamos tu operación y te mostramos, en concreto, dónde la IA puede generar retorno real.",
    prepHeading: "Antes de tu auditoría de IA, pensá en:",
    prepItems: ["Qué proceso o equipo te consume más tiempo hoy", "Qué sistemas usás actualmente (CRM, WhatsApp, ecommerce, etc.)", "Qué te gustaría lograr en los próximos 6 meses"],
  },
  en: {
    title: "Your AI audit is scheduled! | ALORA",
    h1: "Your AI audit is scheduled",
    body: "We sent the confirmation by email, with the details and access link. In 20 minutes we'll analyze your operation and show you, in concrete terms, where AI can generate real returns.",
    prepHeading: "Before your AI audit, think about:",
    prepItems: ["Which process or team takes up the most time today", "What systems you currently use (CRM, WhatsApp, ecommerce, etc.)", "What you'd like to achieve in the next 6 months"],
  },
};
