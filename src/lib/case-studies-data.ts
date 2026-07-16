export interface CaseStudyFeature {
  icon: string
  title: string
  body: string
  highlight?: boolean
}

export interface CaseStudyScreenshot {
  src: string
  alt: { es: string; en: string }
}

export interface CaseStudyPoint {
  icon: string
  text: string
}

export interface CaseStudyData {
  slug: string
  client: string
  icon: string
  url: string
  theme: { primary: string; secondary?: string }
  heroImage?: string
  heroImageAspect?: string
  heroImageMobile?: string
  heroImageMobileAspect?: string
  screenshots?: CaseStudyScreenshot[]
  location: { es: string; en: string }
  industry: { es: string; en: string }
  category: { es: string; en: string }
  meta: {
    es: { title: string; desc: string }
    en: { title: string; desc: string }
  }
  hero: {
    es: { badge: string; title: string; sub: string }
    en: { badge: string; title: string; sub: string }
  }
  challenge: {
    es: { heading: string; body: string; points: CaseStudyPoint[] }
    en: { heading: string; body: string; points: CaseStudyPoint[] }
  }
  solution: {
    es: { heading: string; intro: string; items: CaseStudyFeature[] }
    en: { heading: string; intro: string; items: CaseStudyFeature[] }
  }
  techStack: { name: string; icon: string; body: { es: string; en: string } }[]
  scopeDelivered: {
    es: { heading: string; intro: string; items: string[] }
    en: { heading: string; intro: string; items: string[] }
  }
  duration: { es: string; en: string }
  cta: { es: string; en: string }
  testimonial?: { quote: string; name: string; role: string }
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: "autodux",
    client: "Autodux",
    icon: "cart",
    url: "https://marketplace-sigma-teal.vercel.app/",
    theme: { primary: "var(--electric)", secondary: "var(--turquoise)" },
    heroImage: "/images/case-studies/autodux/hero.png",
    heroImageAspect: "1144/694",
    heroImageMobile: "/images/case-studies/autodux/hero-mobile.jpeg",
    heroImageMobileAspect: "812/1600",
    screenshots: [
      {
        src: "/images/case-studies/autodux/vehicle-grid.png",
        alt: { es: "Listado de vehículos con buscador y filtros", en: "Vehicle listing with search and filters" },
      },
      {
        src: "/images/case-studies/autodux/listings-pricing.png",
        alt: { es: "Fichas de vehículos con precio y detalle", en: "Vehicle cards with price and detail" },
      },
      {
        src: "/images/case-studies/autodux/featured-listings.png",
        alt: { es: "Vitrina de destacados para agencias", en: "Featured showcase for agencies" },
      },
      {
        src: "/images/case-studies/autodux/admin-dashboard.png",
        alt: { es: "Panel de control con métricas en tiempo real", en: "Admin dashboard with real-time metrics" },
      },
      {
        src: "/images/case-studies/autodux/about-us.png",
        alt: { es: "Sección institucional \"Sobre nosotros\"", en: "\"About us\" institutional section" },
      },
    ],
    location: { es: "Comodoro Rivadavia, Argentina", en: "Comodoro Rivadavia, Argentina" },
    industry: { es: "Compra y venta de vehículos", en: "Vehicle marketplace" },
    category: { es: "Marketplace / Desarrollo a medida", en: "Marketplace / Custom Development" },
    meta: {
      es: {
        title: "Caso de éxito: Autodux | ALORA",
        desc: "Cómo diseñamos y desarrollamos Autodux, un marketplace de compra y venta de autos para centralizar un mercado fragmentado en Comodoro Rivadavia.",
      },
      en: {
        title: "Case study: Autodux | ALORA",
        desc: "How we designed and developed Autodux, a car marketplace that centralized a fragmented market in Comodoro Rivadavia.",
      },
    },
    hero: {
      es: {
        badge: "Caso de éxito",
        title: "Cómo Autodux centralizó un mercado fragmentado de autos",
        sub: "Diseñamos y desarrollamos un MVP escalable para centralizar la compra y venta de autos en Comodoro Rivadavia, con publicaciones, buscador, panel de agencias y contacto directo por WhatsApp.",
      },
      en: {
        badge: "Case study",
        title: "How Autodux centralized a fragmented car market",
        sub: "We designed and developed a scalable MVP to centralize buying and selling cars in Comodoro Rivadavia, with listings, search, an agency panel and direct WhatsApp contact.",
      },
    },
    challenge: {
      es: {
        heading: "Comprar o vender un auto significaba saltar entre grupos de Facebook y agencias aisladas.",
        body: "En Comodoro Rivadavia, comprar o vender un auto significaba recorrer grupos de Facebook, marketplaces genéricos y agencias que no se comunican entre sí. Ninguna plataforma nacional estaba pensada para la lógica ni la escala de un mercado regional. Autodux necesitaba nacer como la base de un marketplace propio de la Patagonia — no un clasificado más, sino la infraestructura de un negocio que pueda crecer con el tiempo.",
        points: [
          { icon: "puzzle", text: "Oferta dispersa entre grupos de Facebook, redes sociales y agencias que operan de forma aislada" },
          { icon: "portal", text: "Plataformas nacionales que no entienden la lógica ni la escala de un mercado regional" },
          { icon: "search", text: "Ningún lugar donde comparar, contactar y decidir sin saltar entre sitios distintos" },
          { icon: "target", text: "El objetivo no era una web de clasificados más, sino la base de una plataforma que pueda escalar" },
        ],
      },
      en: {
        heading: "Buying or selling a car meant jumping between Facebook groups and isolated agencies.",
        body: "In Comodoro Rivadavia, buying or selling a car meant scrolling through Facebook groups, generic marketplaces and agencies that didn't talk to each other. No national platform was built for the logic or scale of a regional market. Autodux needed to become the foundation of a marketplace built for Patagonia — not another classifieds site, but the infrastructure for a business that can grow over time.",
        points: [
          { icon: "puzzle", text: "Supply scattered across Facebook groups, social media and agencies operating in isolation" },
          { icon: "portal", text: "National platforms that don't understand the logic or scale of a regional market" },
          { icon: "search", text: "No single place to compare, contact and decide without jumping between sites" },
          { icon: "target", text: "The goal wasn't another classifieds site, but the foundation of a platform built to scale" },
        ],
      },
    },
    solution: {
      es: {
        heading: "Un marketplace de autos con publicaciones, buscador, panel de agencias y contacto directo por WhatsApp.",
        intro: "Priorizamos lo que hace que un marketplace realmente funcione: que sea fácil publicar, fácil encontrar y fácil confiar.",
        items: [
          { icon: "structure", title: "Dos públicos, una plataforma", body: "Particulares venden gratis en minutos; las agencias acceden a cuentas profesionales pensadas para gestionar stock a escala.", highlight: true },
          { icon: "layers", title: "Publicar sin fricción", body: "Un formulario guiado que captura toda la info que un comprador necesita para decidir: marca, año, km, precio, fotos y ubicación." },
          { icon: "search", title: "Encontrar el auto correcto, rápido", body: "Búsqueda y filtros pensados para cómo la gente realmente busca: precio, marca, año, km y zona." },
          { icon: "chat", title: "Del clic a la conversación", body: "Nada de formularios genéricos: cada publicación conecta directo por WhatsApp con quien vende." },
          { icon: "controls", title: "Un panel para manejar el negocio", body: "Agencias y particulares administran publicaciones y planes sin depender de nosotros." },
          { icon: "shield", title: "Control total desde un solo lugar", body: "Panel de administración para moderar contenido, gestionar usuarios y cuidar la calidad del marketplace." },
          { icon: "chart", title: "Datos para decidir mejor", body: "Las agencias ven cuántas veces se vio cada publicación y cuántos clicks a WhatsApp generó." },
          { icon: "plug", title: "Un espacio para monetizar", body: "Banner publicitario configurable, pensado como una futura fuente de ingreso para la plataforma." },
        ],
      },
      en: {
        heading: "A car marketplace with listings, search, an agency panel and direct WhatsApp contact.",
        intro: "We prioritized what actually makes a marketplace work: easy to list, easy to find, and easy to trust.",
        items: [
          { icon: "structure", title: "Two audiences, one platform", body: "Individuals sell for free in minutes; agencies get professional accounts built to manage stock at scale.", highlight: true },
          { icon: "layers", title: "Listing without friction", body: "A guided form that captures everything a buyer needs to decide: make, year, mileage, price, photos and location." },
          { icon: "search", title: "Finding the right car, fast", body: "Search and filters built around how people actually search: price, make, year, mileage and location." },
          { icon: "chat", title: "From click to conversation", body: "No generic contact forms: every listing connects the buyer directly with the seller on WhatsApp." },
          { icon: "controls", title: "A panel to run the business", body: "Agencies and individuals manage listings and plans without depending on us." },
          { icon: "shield", title: "Full control in one place", body: "An admin panel to moderate content, manage users and protect marketplace quality." },
          { icon: "chart", title: "Data to decide better", body: "Agencies see how many times each listing was viewed and how many WhatsApp clicks it generated." },
          { icon: "plug", title: "A space to monetize", body: "Configurable ad banner, built as a future revenue stream for the platform." },
        ],
      },
    },
    techStack: [
      { name: "Next.js", icon: "code", body: { es: "Frontend moderno, rápido y optimizado para SEO.", en: "Modern, fast and SEO-optimized frontend." } },
      { name: "Supabase", icon: "cloud", body: { es: "Backend, base de datos y autenticación.", en: "Backend, database and authentication." } },
      { name: "Vercel", icon: "speed", body: { es: "Hosting con despliegue continuo.", en: "Hosting with continuous deployment." } },
    ],
    scopeDelivered: {
      es: {
        heading: "Un MVP real, listo para operar",
        intro: "Pasamos de una propuesta en papel a una plataforma real en producción, con IA como acelerador de desarrollo y control de calidad en cada entrega — velocidad sin resignar criterio técnico.",
        items: [
          "Una plataforma completa y en producción — no un prototipo: usuarios, publicaciones, buscador y fichas de vehículo funcionando de punta a punta",
          "Dos paneles de gestión reales: uno para que agencias y particulares administren su presencia, otro para que Autodux controle la calidad de la plataforma",
          "Desarrollo IA-first: usamos inteligencia artificial como acelerador en cada etapa para ejecutar más rápido sin resignar calidad ni criterio técnico",
          "Proceso de QA en cada entrega: cada funcionalidad se prueba antes de llegar a producción, para que lo que ve el usuario funcione de verdad",
          "Acompañamiento directo durante todo el proyecto, con entregas iterativas y ajustes basados en feedback real",
          "Arquitectura pensada para el día después del MVP: lista para sumar pagos automatizados, apps móviles y expansión a nuevas ciudades de la Patagonia",
        ],
      },
      en: {
        heading: "A real MVP, ready to operate",
        intro: "We went from a paper proposal to a real platform in production, using AI as a development accelerator and quality control on every delivery — speed without cutting corners.",
        items: [
          "A complete platform in production — not a prototype: users, listings, search and vehicle detail pages working end to end",
          "Two real management panels: one for agencies and individuals to manage their presence, another for Autodux to control platform quality",
          "AI-first development: we use artificial intelligence as an accelerator at every stage to move faster without sacrificing quality or technical judgment",
          "QA process on every delivery: every feature is tested before it reaches production, so what the user sees actually works",
          "Direct, hands-on support throughout the project, with iterative deliveries and adjustments based on real feedback",
          "Architecture built for the day after the MVP: ready to add automated payments, mobile apps and expansion to new Patagonian cities",
        ],
      },
    },
    duration: { es: "60 días", en: "60 days" },
    cta: { es: "Quiero un proyecto como este", en: "I want a project like this" },
  },
  {
    slug: "soy-lidia",
    client: "Soy LIDIA",
    icon: "chat",
    url: "https://soylidia.com",
    theme: { primary: "var(--violet)", secondary: "var(--electric)" },
    heroImage: "/images/case-studies/soy-lidia/hero.png",
    heroImageAspect: "1600/1542",
    heroImageMobile: "/images/case-studies/soy-lidia/web-reports.png",
    heroImageMobileAspect: "390/973",
    location: { es: "Argentina, Uruguay, España y Chile", en: "Argentina, Uruguay, Spain and Chile" },
    industry: { es: "Salud y bienestar (consultorios y clínicas)", en: "Health and wellness (clinics and practices)" },
    category: { es: "Producto SaaS / Agente de IA", en: "SaaS Product / AI Agent" },
    meta: {
      es: {
        title: "Caso de éxito: LIDIA | ALORA",
        desc: "Cómo diseñamos y desarrollamos LIDIA, un agente de IA por WhatsApp que agenda, confirma, cobra y recuerda turnos para consultorios y clínicas, 24/7.",
      },
      en: {
        title: "Case study: LIDIA | ALORA",
        desc: "How we designed and built LIDIA, a WhatsApp AI agent that books, confirms, charges and reminds appointments for clinics and practices, 24/7.",
      },
    },
    hero: {
      es: {
        badge: "Caso de éxito",
        title: "Cómo LIDIA se convirtió en la recepcionista que nunca duerme",
        sub: "Diseñamos y desarrollamos un agente de IA conversacional por WhatsApp que agenda, confirma, cobra señas y recuerda turnos automáticamente, con una web propia y reportes de negocio en tiempo real — hoy en uso en consultorios de Argentina, Uruguay, España y Chile.",
      },
      en: {
        badge: "Case study",
        title: "How LIDIA became the receptionist that never sleeps",
        sub: "We designed and developed a conversational AI agent on WhatsApp that books, confirms, charges deposits and reminds patients automatically, with its own website and real-time business reports — now in use at clinics across Argentina, Uruguay, Spain and Chile.",
      },
    },
    challenge: {
      es: {
        heading: "Los consultorios pierden pacientes por no responder a tiempo, de noche o en hora pico.",
        body: "Los consultorios y clínicas pierden pacientes todos los días por algo tan simple como no responder a tiempo. De noche, los fines de semana o en hora pico no hay quien conteste — y el paciente no espera: agenda con el primero que le responde. Confirmar y recordar turno por turno a mano consume horas, y cuando nadie lo hace aparecen los ausentes que dejan el horario vacío. Y cuando hay varios profesionales, coordinar la agenda a mano termina en turnos solapados, huecos y dobles reservas.",
        points: [
          { icon: "chat", text: "Mensajes sin respuesta de noche, fines de semana y en hora pico — el paciente agenda en otro lado" },
          { icon: "controls", text: "Confirmar y recordar turno por turno a mano consume horas, y sin recordatorios aparecen los ausentes" },
          { icon: "structure", text: "Coordinar varios profesionales a mano termina en turnos solapados, huecos y dobles reservas" },
          { icon: "target", text: "El objetivo no era un chatbot más, sino una recepcionista digital que agende, cobre y ordene sola" },
        ],
      },
      en: {
        heading: "Clinics lose patients when nobody answers at night or during peak hours.",
        body: "Clinics and private practices lose patients every day over something as simple as not responding in time. At night, on weekends or during peak hours, no one answers — and the patient doesn't wait: they book with whoever replies first. Confirming and reminding patients one by one by hand eats up hours, and when nobody does it, no-shows leave the slot empty. And once several professionals are involved, coordinating the schedule by hand ends in overlapping appointments, gaps and double bookings.",
        points: [
          { icon: "chat", text: "Unanswered messages at night, on weekends and during peak hours — the patient books elsewhere" },
          { icon: "controls", text: "Confirming and reminding appointments by hand eats up hours, and no-shows pile up without reminders" },
          { icon: "structure", text: "Coordinating several professionals by hand ends in overlapping slots, gaps and double bookings" },
          { icon: "target", text: "The goal wasn't another chatbot, but a digital receptionist that books, charges and organizes on its own" },
        ],
      },
    },
    solution: {
      es: {
        heading: "Un agente de IA por WhatsApp que agenda, confirma, cobra señas y recuerda turnos, 24/7.",
        intro: "La misma IA responde, agenda, cobra y recuerda — todo dentro de una sola conversación de WhatsApp, sin intervención humana.",
        items: [
          { icon: "chat", title: "Agente de IA por WhatsApp, 24/7", body: "Responde y agenda el turno en segundos, a toda hora, leyendo la disponibilidad real del calendario.", highlight: true },
          { icon: "controls", title: "Confirmaciones y recordatorios automáticos", body: "Avisa 24h y 2h antes de cada turno para reducir el ausentismo, sin que nadie tenga que acordarse." },
          { icon: "plug", title: "Cobro de señas integrado", body: "Pide y cobra la seña por Mercado Pago dentro de la misma conversación, sin salir del chat." },
          { icon: "shield", title: "Canal oficial, sin riesgo de bloqueo", body: "Cuenta de WhatsApp Business verificada por Meta, con control manual y alertas si la ventana de 24 hs está por cerrarse." },
          { icon: "layers", title: "Agenda multi-profesional en tiempo real", body: "Sincronizada con Google Calendar, con permisos y filtros por profesional y por sede." },
          { icon: "portal", title: "Página web generada automáticamente", body: "Cada clínica recibe un sitio propio con su marca, mapa, obras sociales y botón de reserva, sin diseñador ni una línea de código." },
          { icon: "search", title: "Reserva web como canal de respaldo", body: "Un formulario guiado en pasos para cuando WhatsApp no es una opción, sincronizado con la misma agenda." },
          { icon: "chart", title: "Reportes de negocio en tiempo real", body: "Ingresos, conversión, ocupación y demanda por especialidad, exportables a CSV." },
          { icon: "mobile", title: "Panel de gestión 100% responsive", body: "Reportes, turnos, equipo y sedes: todo el panel de LIDIA funciona igual de bien desde el celular, para gestionar la clínica sin depender de una computadora." },
        ],
      },
      en: {
        heading: "A WhatsApp AI agent that books, confirms, charges deposits and reminds appointments, 24/7.",
        intro: "The same AI responds, books, charges and reminds — all inside a single WhatsApp conversation, with no human intervention.",
        items: [
          { icon: "chat", title: "AI agent on WhatsApp, 24/7", body: "Replies and books the appointment in seconds, any time of day, reading real calendar availability.", highlight: true },
          { icon: "controls", title: "Automatic confirmations and reminders", body: "Sends reminders 24h and 2h before each appointment to cut down on no-shows, with nobody having to remember." },
          { icon: "plug", title: "Built-in deposit collection", body: "Requests and collects the deposit via Mercado Pago inside the same conversation, without leaving the chat." },
          { icon: "shield", title: "Official channel, no risk of being blocked", body: "WhatsApp Business account verified by Meta, with manual takeover and alerts before the 24-hour window closes." },
          { icon: "layers", title: "Real-time multi-professional schedule", body: "Synced with Google Calendar, with permissions and filters by professional and location." },
          { icon: "portal", title: "Automatically generated website", body: "Every clinic gets its own site with its brand, map, insurance providers and a booking button — no designer, no code." },
          { icon: "search", title: "Web booking as a backup channel", body: "A step-by-step guided form for when WhatsApp isn't an option, synced with the same schedule." },
          { icon: "chart", title: "Real-time business reports", body: "Revenue, conversion, occupancy and demand by specialty, exportable to CSV." },
          { icon: "mobile", title: "Fully responsive management panel", body: "Reports, appointments, team and locations: the entire LIDIA panel works just as well from a phone, so the clinic can be managed without depending on a computer." },
        ],
      },
    },
    techStack: [
      { name: "WhatsApp Business API", icon: "chat", body: { es: "Canal oficial verificado por Meta, sin riesgo de bloqueo.", en: "Official channel verified by Meta, no risk of being blocked." } },
      { name: "Google Calendar", icon: "layers", body: { es: "Agenda sincronizada en tiempo real por profesional y sede.", en: "Real-time agenda synced by professional and location." } },
      { name: "Mercado Pago", icon: "plug", body: { es: "Cobro de señas y pagos dentro de la conversación.", en: "Deposit and payment collection within the conversation." } },
    ],
    scopeDelivered: {
      es: {
        heading: "Una recepcionista digital, lista para operar",
        intro: "LIDIA se construyó en 60 días de producción y hoy sigue mejorando de forma constante con el uso real de cada clínica.",
        items: [
          "Un agente de IA conversacional en producción, agendando turnos reales por WhatsApp las 24 horas",
          "Cobro de señas integrado con Mercado Pago, dentro de la misma conversación",
          "Agenda multi-profesional y multi-sede sincronizada con Google Calendar en tiempo real",
          "Generación automática de sitio web propio para cada clínica, sin diseñador ni desarrollo a medida",
          "Un segundo canal de reserva por web, como respaldo si WhatsApp o Meta fallan",
          "Dashboard de reportes con ingresos, conversión, ocupación y demanda por especialidad",
          "Panel de gestión 100% responsive: extremadamente útil para revisar turnos, reportes y equipo desde el celular",
          "Hoy en uso en consultorios y clínicas de Argentina, Uruguay, España y Chile, con potencial de expansión a más mercados",
        ],
      },
      en: {
        heading: "A digital receptionist, ready to operate",
        intro: "LIDIA was built in 60 days of production and keeps improving constantly based on real usage from every clinic.",
        items: [
          "A conversational AI agent in production, booking real appointments over WhatsApp around the clock",
          "Deposit collection built in with Mercado Pago, inside the same conversation",
          "Multi-professional, multi-location schedule synced with Google Calendar in real time",
          "Automatic website generation for each clinic, no designer or custom development needed",
          "A second web booking channel as backup if WhatsApp or Meta go down",
          "A reporting dashboard with revenue, conversion, occupancy and demand by specialty",
          "A fully responsive management panel: extremely useful for checking appointments, reports and team from a phone",
          "Now in use at clinics and practices across Argentina, Uruguay, Spain and Chile, with potential to expand into more markets",
        ],
      },
    },
    duration: { es: "60 días", en: "60 days" },
    cta: { es: "Quiero un proyecto como este", en: "I want a project like this" },
  },
  {
    slug: "alora-crm",
    client: "ALORA CRM",
    icon: "chart",
    url: "https://www.globalalora.com",
    theme: { primary: "var(--electric)", secondary: "var(--violet)" },
    heroImage: "/images/case-studies/alora-crm/hero.png",
    heroImageAspect: "1400/613",
    screenshots: [
      {
        src: "/images/case-studies/alora-crm/pipeline.png",
        alt: { es: "Pipeline de leads por etapas en formato Kanban", en: "Stage-based lead pipeline in Kanban format" },
      },
      {
        src: "/images/case-studies/alora-crm/whatsapp-inbox.png",
        alt: { es: "WhatsApp integrado con IA dentro del CRM", en: "WhatsApp integrated with AI inside the CRM" },
      },
      {
        src: "/images/case-studies/alora-crm/lead-detail.png",
        alt: { es: "Ficha de lead autocompletada con historial y fechas del proceso", en: "Auto-filled lead card with history and process dates" },
      },
      {
        src: "/images/case-studies/alora-crm/funnel.png",
        alt: { es: "Embudo de conversión y tiempos entre etapas", en: "Conversion funnel and time between stages" },
      },
      {
        src: "/images/case-studies/alora-crm/por-pais-fuente.png",
        alt: { es: "Performance de venta por país y por fuente", en: "Sales performance by country and by source" },
      },
    ],
    location: { es: "Argentina, con implementación white-label en 4 clientes", en: "Argentina, with white-label deployment across 4 clients" },
    industry: { es: "CRM comercial / Ventas y seguimiento de leads", en: "Sales CRM / Lead tracking & conversion" },
    category: { es: "Producto SaaS / CRM White-Label", en: "SaaS Product / White-Label CRM" },
    meta: {
      es: {
        title: "Caso de éxito: ALORA CRM | ALORA",
        desc: "Cómo diseñamos y desarrollamos un CRM para seguimiento comercial automatizado, con pipeline por etapas, IA integrada y dashboard en tiempo real — hoy disponible como marca blanca.",
      },
      en: {
        title: "Case study: ALORA CRM | ALORA",
        desc: "How we designed and built a CRM for automated sales follow-up, with a stage-based pipeline, built-in AI and a real-time dashboard — now available as a white-label product.",
      },
    },
    hero: {
      es: {
        badge: "Caso de éxito",
        title: "Un CRM para automatizar todo tu seguimiento comercial",
        sub: "Diseñamos y desarrollamos un CRM comercial con pipeline por etapas 100% automatizado, fichas de leads autocompletadas desde WhatsApp, chatbot o formulario web, IA integrada para el seguimiento y un dashboard en tiempo real. Hoy está disponible como marca blanca para otras empresas.",
      },
      en: {
        badge: "Case study",
        title: "A CRM that automates your entire sales follow-up",
        sub: "We designed and built a sales CRM with a fully automated stage-based pipeline, lead cards auto-filled from WhatsApp, chatbot or web forms, built-in AI for follow-up, and a real-time dashboard. Now available as a white-label product for other companies.",
      },
    },
    challenge: {
      es: {
        heading: "Leads dispersos entre WhatsApp, chatbot y web, con seguimiento perdido entre etapas.",
        body: "Muchos equipos comerciales gestionan sus leads entre WhatsApp, planillas y mensajes sueltos: leads que llegan por distintas fuentes sin quedar centralizados, seguimientos que se pierden entre etapas y ningún panel real para saber qué está funcionando. Faltaba una herramienta que ordenara todo el proceso comercial de punta a punta, sin depender de que alguien se acuerde de actualizar una planilla.",
        points: [
          { icon: "puzzle", text: "Leads entrando por WhatsApp, chatbot y formulario web sin quedar centralizados en un solo lugar" },
          { icon: "controls", text: "Seguimiento manual etapa por etapa, con leads que se pierden entre la primera respuesta y el cierre" },
          { icon: "chart", text: "Ningún panel real para ver cierres, rentabilidad y performance de venta en un mismo lugar" },
          { icon: "target", text: "El objetivo no era un CRM genérico, sino una herramienta que automatice la gestión completa del pipeline" },
        ],
      },
      en: {
        heading: "Leads scattered across WhatsApp, chatbot and web, with follow-up lost between stages.",
        body: "Many sales teams manage their leads across WhatsApp, spreadsheets and scattered messages: leads arriving from different sources with nothing centralized, follow-ups falling through the cracks between stages, and no real dashboard to know what's actually working. What was missing was a tool that organized the entire commercial process end to end, without depending on someone remembering to update a spreadsheet.",
        points: [
          { icon: "puzzle", text: "Leads coming in through WhatsApp, chatbot and web forms with nothing centralized in one place" },
          { icon: "controls", text: "Manual stage-by-stage follow-up, with leads falling through between first reply and close" },
          { icon: "chart", text: "No real dashboard to see closed deals, profitability and sales performance in one place" },
          { icon: "target", text: "The goal wasn't a generic CRM, but a tool that automates the entire pipeline management" },
        ],
      },
    },
    solution: {
      es: {
        heading: "Un CRM con pipeline automatizado, WhatsApp con IA integrado y dashboard comercial en tiempo real.",
        intro: "Un CRM comercial pensado de punta a punta: desde que el lead entra hasta que se cierra la venta, todo automatizado y visible en un solo lugar.",
        items: [
          { icon: "structure", title: "Pipeline por etapas, 100% automatizado", body: "Cada lead avanza solo entre etapas —contactado, reunión, propuesta, cierre— sin mover una card a mano.", highlight: true },
          { icon: "chat", title: "WhatsApp con API oficial, sin riesgo de bloqueo", body: "Respondé, agendá y hacé seguimiento desde el mismo CRM, sin depender del celular físico — con la cuenta de WhatsApp Business verificada por Meta." },
          { icon: "layers", title: "Ficha de lead autocompletada", body: "Nombre, contacto, empresa y fuente se cargan solos apenas el lead entra, venga de WhatsApp, chatbot o formulario web." },
          { icon: "controls", title: "Tareas y recordatorios automáticos", body: "El sistema avisa cuándo hacer seguimiento y marca los leads sin respuesta antes de que se enfríen." },
          { icon: "chart", title: "Dashboard comercial en tiempo real", body: "Etapas, cierres, rentabilidad y performance de venta, todo en un panel que se actualiza solo." },
          { icon: "search", title: "Embudo de conversión visual", body: "Vemos cuántos leads pasan de una etapa a la siguiente y dónde se cae la conversión." },
          { icon: "shield", title: "Datos por país y por fuente", body: "Vemos qué mercados y qué canales convierten mejor, para invertir donde realmente funciona." },
          { icon: "portal", title: "Marca blanca para otras empresas", body: "La misma plataforma, con la marca de cada cliente, lista para implementarse en su propio proceso comercial." },
        ],
      },
      en: {
        heading: "A CRM with an automated pipeline, WhatsApp with built-in AI, and a real-time commercial dashboard.",
        intro: "A sales CRM designed end to end: from the moment a lead comes in to the moment the sale closes, everything automated and visible in one place.",
        items: [
          { icon: "structure", title: "Fully automated stage pipeline", body: "Every lead moves automatically between stages — contacted, meeting, proposal, close — with no card ever moved by hand.", highlight: true },
          { icon: "chat", title: "WhatsApp on the official API, no risk of being blocked", body: "Reply, book and follow up right from the CRM, with no need for a physical phone — using a WhatsApp Business account verified by Meta." },
          { icon: "layers", title: "Auto-filled lead card", body: "Name, contact, company and source populate automatically the moment a lead comes in, whether from WhatsApp, chatbot or a web form." },
          { icon: "controls", title: "Automatic tasks and reminders", body: "The system flags when to follow up and marks unanswered leads before they go cold." },
          { icon: "chart", title: "Real-time commercial dashboard", body: "Stages, closed deals, profitability and sales performance, all in a panel that updates itself." },
          { icon: "search", title: "Visual conversion funnel", body: "See how many leads move from one stage to the next, and where conversion drops off." },
          { icon: "shield", title: "Data by country and by source", body: "We see which markets and channels convert best, so we invest where it actually works." },
          { icon: "portal", title: "White-label for other companies", body: "The same platform, branded for each client, ready to run their own sales process." },
        ],
      },
    },
    techStack: [
      { name: "WhatsApp Business API", icon: "chat", body: { es: "Canal oficial verificado por Meta, sin riesgo de bloqueo, integrado directo al pipeline de ventas.", en: "Official channel verified by Meta, with no risk of being blocked, integrated directly into the sales pipeline." } },
      { name: "IA de seguimiento", icon: "spark", body: { es: "Motor de IA que responde, agenda y hace seguimiento dentro del CRM.", en: "AI engine that replies, books and follows up inside the CRM." } },
      { name: "Google Calendar", icon: "layers", body: { es: "Reuniones agendadas y sincronizadas automáticamente con el calendario del equipo.", en: "Meetings booked and synced automatically with the team's calendar." } },
    ],
    scopeDelivered: {
      es: {
        heading: "Un CRM listo para automatizar la gestión comercial",
        intro: "Un pipeline que se gestiona solo, hoy disponible como plataforma que licenciamos como marca blanca a otras empresas.",
        items: [
          "Un CRM comercial completo, gestionando el pipeline de ventas de punta a punta",
          "Pipeline por etapas 100% automatizado, con tareas y recordatorios que evitan que un lead se enfríe",
          "Ficha de lead autocompletada según la fuente: WhatsApp, chatbot, formulario web y más",
          "WhatsApp con API oficial: se responde desde el mismo CRM, sin celular físico y sin riesgo de bloqueo",
          "IA integrada para responder, agendar y hacer seguimiento por WhatsApp sin intervención manual",
          "Dashboard comercial en tiempo real con cierres, rentabilidad, ciclo de venta y performance por país y por fuente",
          "Implementado como marca blanca en 4 clientes, cada uno con su propio proceso y sus propios datos",
        ],
      },
      en: {
        heading: "A CRM built to automate commercial management",
        intro: "A pipeline that manages itself, now available as a platform we license white-label to other companies.",
        items: [
          "A complete sales CRM, running the sales pipeline end to end",
          "Fully automated stage pipeline, with tasks and reminders that keep leads from going cold",
          "Auto-filled lead card based on source: WhatsApp, chatbot, web form and more",
          "WhatsApp on the official API: answered right from the CRM, no physical phone and no risk of being blocked",
          "Built-in AI to reply, book and follow up over WhatsApp with no manual intervention",
          "Real-time commercial dashboard with closed deals, profitability, sales cycle and performance by country and by source",
          "Deployed as a white-label product across 4 clients, each with their own process and their own data",
        ],
      },
    },
    duration: { es: "En uso y evolución constante", en: "Ongoing use and constant evolution" },
    cta: { es: "Quiero un CRM así para mi negocio", en: "I want a CRM like this for my business" },
  },
  {
    slug: "castro-yeso",
    client: "Castro Yeso",
    icon: "target",
    url: "https://castro-yeso.com",
    theme: { primary: "var(--violet)", secondary: "var(--electric)" },
    heroImage: "/images/case-studies/castro-yeso/hero.png",
    heroImageAspect: "1063/635",
    heroImageMobile: "/images/case-studies/castro-yeso/hero-mobile.png",
    heroImageMobileAspect: "483/758",
    location: { es: "Carrasco, El Pinar y Canelones, Uruguay", en: "Carrasco, El Pinar and Canelones, Uruguay" },
    industry: { es: "Durlock y yesería", en: "Drywall & plastering" },
    category: { es: "Sitio Web One Page", en: "One-Page Website" },
    meta: {
      es: {
        title: "Caso de éxito: Castro Yeso | ALORA",
        desc: "Cómo diseñamos y desarrollamos un sitio web one page para Castro Yeso, optimizado para conversión por WhatsApp en vez de un sitio tradicional multi-página.",
      },
      en: {
        title: "Case study: Castro Yeso | ALORA",
        desc: "How we designed and developed a one-page website for Castro Yeso, optimized for WhatsApp conversion instead of a traditional multi-page site.",
      },
    },
    hero: {
      es: {
        badge: "Caso de éxito",
        title: "Cómo Castro Yeso pasó de una web tradicional a un sitio que convierte",
        sub: "Diseñamos y desarrollamos un sitio web one page en WordPress, optimizado 100% para conversión por WhatsApp, para la zona de Carrasco, El Pinar y Canelones.",
      },
      en: {
        badge: "Case study",
        title: "How Castro Yeso replaced a traditional website with one built to convert",
        sub: "We designed and developed a one-page WordPress website, fully optimized for WhatsApp conversion, for the Carrasco, El Pinar and Canelones area.",
      },
    },
    challenge: {
      es: {
        heading: "Un sitio tradicional dispersaba la atención justo cuando el usuario buscaba algo concreto.",
        body: "Castro Yeso necesitaba presencia digital para captar clientes de durlock y yesería en su zona de trabajo. Pero el problema real no era la falta de una web — era la falta de consultas calificadas. Un sitio tradicional con múltiples páginas dispersa la atención justo cuando el usuario busca algo concreto: ver trabajos reales y contactar ya por WhatsApp.",
        points: [
          { icon: "search", text: "El usuario busca una solución concreta, no un sitio para explorar página por página" },
          { icon: "layers", text: "Un sitio de múltiples páginas dispersa la atención y reduce la conversión" },
          { icon: "chat", text: "El contacto real sucede por WhatsApp, no por formularios largos" },
          { icon: "target", text: "El objetivo no era \"tener una web\", sino generar consultas calificadas dentro de una zona definida" },
        ],
      },
      en: {
        heading: "A traditional multi-page site scattered attention when the user wanted something specific.",
        body: "Castro Yeso needed a digital presence to capture drywall and plastering clients in its service area. But the real problem wasn't the lack of a website — it was the lack of qualified inquiries. A traditional multi-page site scatters attention right when the user is looking for something specific: real work examples and immediate WhatsApp contact.",
        points: [
          { icon: "search", text: "The user is looking for a specific solution, not a site to browse page by page" },
          { icon: "layers", text: "A multi-page site scatters attention and reduces conversion" },
          { icon: "chat", text: "Real contact happens over WhatsApp, not through long forms" },
          { icon: "target", text: "The goal wasn't \"having a website\", but generating qualified inquiries within a defined area" },
        ],
      },
    },
    solution: {
      es: {
        heading: "Un sitio one page que lleva al visitante de la duda a la consulta por WhatsApp.",
        intro: "Un sitio one page, pensado para llevar al visitante de la duda a la consulta por WhatsApp en el menor tiempo posible.",
        items: [
          { icon: "target", title: "Hero con zona de cobertura clara", body: "Presentación del servicio, propuesta de valor y botón de WhatsApp visible desde el primer segundo." },
          { icon: "structure", title: "Servicios bien diferenciados", body: "Cielorrasos, divisiones, revestimientos, aislamiento térmico y acústico y soluciones decorativas, explicados sin tecnicismos." },
          { icon: "shield", title: "Una sección de diferenciación", body: "Calidad de ejecución, resolución técnica correcta y prolijidad en obra, comunicadas como argumento de venta." },
          { icon: "layers", title: "Galería de trabajos reales", body: "Proyectos ejecutados que reemplazan la promesa por evidencia visual." },
          { icon: "chat", title: "Testimonios que refuerzan confianza", body: "Opiniones reales de clientes, ubicadas donde más pesan en la decisión." },
          { icon: "controls", title: "Proceso de trabajo explicado", body: "Contacto, cotización y ejecución, para que el cliente sepa qué esperar antes de escribir." },
          { icon: "chart", title: "SEO y analítica desde el día uno", body: "Google Analytics, Search Console y una estructura semántica pensada para posicionar." },
          { icon: "spark", title: "Optimizada para IA, no solo para Google", body: "Estructura semántica clara y un archivo de contexto (llms.txt) para que los asistentes de IA entiendan y recomienden el negocio.", highlight: true },
        ],
      },
      en: {
        heading: "A one-page site that takes the visitor from doubt to a WhatsApp inquiry.",
        intro: "A one-page website, designed to take the visitor from doubt to a WhatsApp inquiry in the shortest time possible.",
        items: [
          { icon: "target", title: "Hero with clear coverage area", body: "Service presentation, value proposition and a WhatsApp button visible from the first second." },
          { icon: "structure", title: "Clearly differentiated services", body: "Ceilings, interior divisions, cladding, thermal and acoustic insulation and decorative solutions, explained without jargon." },
          { icon: "shield", title: "A dedicated differentiation section", body: "Execution quality, correct technical resolution and job-site tidiness, communicated as a sales argument." },
          { icon: "layers", title: "Gallery of real work", body: "Executed projects that replace the promise with visual evidence." },
          { icon: "chat", title: "Testimonials that build trust", body: "Real client opinions, placed where they weigh most in the decision." },
          { icon: "controls", title: "Work process explained", body: "Contact, quote and execution, so the client knows what to expect before reaching out." },
          { icon: "chart", title: "SEO and analytics from day one", body: "Google Analytics, Search Console and a semantic structure built to rank." },
          { icon: "spark", title: "Optimized for AI, not just Google", body: "Clear semantic structure and a context file (llms.txt) so AI assistants understand and recommend the business.", highlight: true },
        ],
      },
    },
    techStack: [
      { name: "WordPress", icon: "code", body: { es: "CMS autogestionable: el cliente edita textos e imágenes sin depender de terceros.", en: "Self-manageable CMS: the client edits text and images without depending on third parties." } },
      { name: "SEO técnico", icon: "search", body: { es: "Estructura semántica, metadatos y velocidad optimizada para posicionamiento.", en: "Semantic structure, metadata and speed optimized for search ranking." } },
      { name: "llms.txt", icon: "spark", body: { es: "Archivo de contexto para que los asistentes de IA interpreten mejor el negocio.", en: "Context file so AI assistants better interpret the business." } },
    ],
    scopeDelivered: {
      es: {
        heading: "Un sitio one page listo para captar, no para navegar",
        intro: "En 30 días pasamos de una propuesta a un sitio en producción, con SEO, analítica y optimización para IA configurados desde el lanzamiento — no como un paso pendiente.",
        items: [
          "Sitio one page completo en producción, con una estructura pensada para conversión y no para exploración",
          "CMS autogestionable: el cliente actualiza textos e imágenes sin depender de un desarrollador",
          "SEO técnico y analítica (Google Analytics + Search Console) configurados desde el lanzamiento",
          "Optimización para IA (llms.txt) — una ventaja diferencial que muy pocos sitios de este tipo tienen hoy",
          "Proceso de QA antes y después del lanzamiento, en distintos dispositivos y navegadores",
          "Base preparada para escalar con campañas de Google Ads en una segunda etapa",
        ],
      },
      en: {
        heading: "A one-page website built to capture leads, not to browse",
        intro: "In 30 days we went from a proposal to a live site in production, with SEO, analytics and AI optimization configured from launch — not as a pending step.",
        items: [
          "Complete one-page website in production, with a structure built for conversion, not exploration",
          "Self-manageable CMS: the client updates text and images without depending on a developer",
          "Technical SEO and analytics (Google Analytics + Search Console) configured from launch",
          "AI optimization (llms.txt) — a differential advantage very few sites like this have today",
          "QA process before and after launch, across different devices and browsers",
          "Foundation ready to scale with Google Ads campaigns in a second phase",
        ],
      },
    },
    duration: { es: "30 días", en: "30 days" },
    cta: { es: "Quiero un sitio que convierta", en: "I want a website that converts" },
  },
  {
    slug: "alkemia",
    client: "ALKEMIA",
    icon: "spark",
    url: "https://goalkemia.com",
    theme: { primary: "var(--turquoise)", secondary: "var(--violet)" },
    heroImage: "/images/case-studies/alkemia/hero.png",
    heroImageAspect: "1400/697",
    location: { es: "Presencia internacional (LATAM)", en: "International presence (LATAM)" },
    industry: { es: "Software e Inteligencia Artificial", en: "Software & AI" },
    category: { es: "Sitio Web Institucional", en: "Institutional Website" },
    meta: {
      es: {
        title: "Caso de éxito: ALKEMIA | ALORA",
        desc: "Cómo diseñamos y desarrollamos el nuevo sitio institucional bilingüe de ALKEMIA, alineado a su posicionamiento en tecnología e inteligencia artificial.",
      },
      en: {
        title: "Case study: ALKEMIA | ALORA",
        desc: "How we designed and developed ALKEMIA's new bilingual institutional website, aligned to its technology and AI positioning.",
      },
    },
    hero: {
      es: {
        badge: "Caso de éxito",
        title: "Cómo ALKEMIA construyó su presencia digital en tech e IA",
        sub: "Diseñamos y desarrollamos el nuevo sitio institucional de ALKEMIA en WordPress, bilingüe en español e inglés, pensado para posicionar la marca en el sector de software e inteligencia artificial.",
      },
      en: {
        badge: "Case study",
        title: "How ALKEMIA built its digital presence in tech and AI",
        sub: "We designed and developed ALKEMIA's new WordPress institutional website, bilingual in Spanish and English, built to position the brand in the software and AI sector.",
      },
    },
    challenge: {
      es: {
        heading: "La marca se había relanzado, pero la web no transmitía innovación ni capacidad tecnológica.",
        body: "ALKEMIA venía de relanzar su marca luego de una etapa anterior, y necesitaba mucho más que una web nueva: necesitaba un activo digital que transmitiera innovación, solidez y capacidad tecnológica desde el primer segundo, para posicionarse en el sector de software e inteligencia artificial frente a una audiencia en LATAM y mercados internacionales.",
        points: [
          { icon: "target", text: "La marca se había relanzado, pero la web todavía no representaba ese cambio" },
          { icon: "spark", text: "El sitio necesitaba transmitir innovación y capacidad tecnológica, no solo información institucional" },
          { icon: "portal", text: "La audiencia es internacional: el contenido debía funcionar en español e inglés desde el día uno" },
          { icon: "controls", text: "El equipo necesitaba poder actualizar contenido sin depender de un desarrollador" },
        ],
      },
      en: {
        heading: "The brand had relaunched, but the site didn't convey innovation or tech capability.",
        body: "ALKEMIA had just relaunched its brand after a previous stage, and needed much more than a new website: it needed a digital asset that conveyed innovation, solidity and technological capability from the first second, to position itself in the software and AI sector in front of a LATAM and international audience.",
        points: [
          { icon: "target", text: "The brand had relaunched, but the website still didn't represent that change" },
          { icon: "spark", text: "The site needed to convey innovation and technological capability, not just institutional information" },
          { icon: "portal", text: "The audience is international: the content had to work in Spanish and English from day one" },
          { icon: "controls", text: "The team needed to update content without depending on a developer" },
        ],
      },
    },
    solution: {
      es: {
        heading: "Un sitio institucional bilingüe, autogestionable y con posicionamiento tech desde el día uno.",
        intro: "Un sitio institucional pensado para transmitir en segundos lo que ALKEMIA hace mejor: transformar procesos complejos en soluciones simples.",
        items: [
          { icon: "structure", title: "Arquitectura pensada para conversión", body: "Home, Servicios, Producto (Creatio), Empresa y Contacto, organizados para guiar al visitante hacia la acción." },
          { icon: "design", title: "Diseño UX/UI de alto impacto", body: "Estética moderna y tecnológica, con una experiencia clara, profesional y responsive mobile-first." },
          { icon: "code", title: "WordPress autogestionable", body: "El equipo de ALKEMIA actualiza contenido, imágenes y textos sin depender de un desarrollador." },
          { icon: "spark", title: "Copywriting con posicionamiento tech", body: "Redacción completa pensada para comunicar la propuesta de valor a una audiencia LATAM e internacional." },
          { icon: "portal", title: "Sitio bilingüe desde el día uno", body: "Estructura preparada en español e inglés, para una marca que opera en múltiples mercados.", highlight: true },
          { icon: "chat", title: "Formularios listos para escalar", body: "Contacto directo por email, con una estructura preparada para sumar integraciones a futuro." },
          { icon: "chart", title: "SEO técnico desde el lanzamiento", body: "Metadatos, sitemap y estructura de indexación configurados desde el día uno." },
          { icon: "shield", title: "QA antes y después de publicar", body: "Revisión responsive, validación de navegación y testeo de formularios, antes y después de salir a producción." },
        ],
      },
      en: {
        heading: "A bilingual, self-manageable institutional site with tech positioning from day one.",
        intro: "An institutional site designed to convey in seconds what ALKEMIA does best: turning complex processes into simple solutions.",
        items: [
          { icon: "structure", title: "Architecture built for conversion", body: "Home, Services, Product (Creatio), Company and Contact, organized to guide the visitor toward action." },
          { icon: "design", title: "High-impact UX/UI design", body: "Modern, technological aesthetics, with a clear, professional and mobile-first responsive experience." },
          { icon: "code", title: "Self-manageable WordPress", body: "ALKEMIA's team updates content, images and text without depending on a developer." },
          { icon: "spark", title: "Copywriting with tech positioning", body: "Full copywriting built to communicate the value proposition to a LATAM and international audience." },
          { icon: "portal", title: "Bilingual site from day one", body: "Structure ready in Spanish and English, for a brand operating in multiple markets.", highlight: true },
          { icon: "chat", title: "Forms ready to scale", body: "Direct contact by email, with a structure ready to add integrations in the future." },
          { icon: "chart", title: "Technical SEO from launch", body: "Metadata, sitemap and indexing structure configured from day one." },
          { icon: "shield", title: "QA before and after publishing", body: "Responsive review, navigation validation and form testing, before and after going live." },
        ],
      },
    },
    techStack: [
      { name: "WordPress", icon: "code", body: { es: "CMS autogestionable: el equipo de ALKEMIA actualiza contenido sin depender de un desarrollador.", en: "Self-manageable CMS: ALKEMIA's team updates content without depending on a developer." } },
      { name: "SEO técnico", icon: "search", body: { es: "Metadatos, sitemap y estructura de indexación configurados desde el lanzamiento.", en: "Metadata, sitemap and indexing structure configured from launch." } },
      { name: "ES / EN", icon: "portal", body: { es: "Estructura multilenguaje preparada para una audiencia LATAM e internacional.", en: "Multi-language structure ready for a LATAM and international audience." } },
    ],
    scopeDelivered: {
      es: {
        heading: "Un activo digital a la altura de la nueva marca",
        intro: "En 30 días pasamos de una marca recién relanzada a un sitio institucional bilingüe en producción, con SEO y QA configurados desde el lanzamiento — no como un paso pendiente.",
        items: [
          "Sitio institucional completo en producción, con una arquitectura pensada para posicionar a ALKEMIA en el sector tech e IA",
          "CMS autogestionable: el equipo actualiza contenido sin depender de un desarrollador",
          "Contenido en español e inglés, listo para una audiencia LATAM e internacional desde el día uno",
          "SEO técnico y estructura de indexación configurados desde el lanzamiento",
          "Proceso de QA antes y después de la publicación, en distintos dispositivos y navegadores",
          "Base preparada para escalar con integraciones y automatizaciones en una segunda etapa",
        ],
      },
      en: {
        heading: "A digital asset worthy of the new brand",
        intro: "In 30 days we went from a freshly relaunched brand to a bilingual institutional site in production, with SEO and QA configured from launch — not as a pending step.",
        items: [
          "Complete institutional site in production, with an architecture built to position ALKEMIA in the tech and AI sector",
          "Self-manageable CMS: the team updates content without depending on a developer",
          "Content in Spanish and English, ready for a LATAM and international audience from day one",
          "Technical SEO and indexing structure configured from launch",
          "QA process before and after publishing, across different devices and browsers",
          "Foundation ready to scale with integrations and automations in a second phase",
        ],
      },
    },
    duration: { es: "30 días", en: "30 days" },
    cta: { es: "Quiero un sitio que refleje mi marca", en: "I want a site that reflects my brand" },
  },
  {
    slug: "distrisal",
    client: "Distri-Sal",
    icon: "api",
    url: "https://nuevodistrisal.globalalora.com/",
    theme: { primary: "var(--electric)", secondary: "var(--violet)" },
    location: { es: "Argentina", en: "Argentina" },
    industry: { es: "Ferretería y electricidad (mayorista)", en: "Wholesale hardware & electrical" },
    category: { es: "Ecommerce / Integración de Sistemas", en: "Ecommerce / Systems Integration" },
    meta: {
      es: {
        title: "Caso de éxito: Distri-Sal | ALORA",
        desc: "Cómo integramos el ecommerce de Distri-Sal con Centum, su sistema de gestión, para sincronizar productos, stock y precios personalizados por cliente en tiempo real.",
      },
      en: {
        title: "Case study: Distri-Sal | ALORA",
        desc: "How we integrated Distri-Sal's ecommerce with Centum, its management system, to sync products, stock and per-client pricing in real time.",
      },
    },
    hero: {
      es: {
        badge: "Caso de éxito",
        title: "Cómo Distri-Sal unificó su ecommerce con Centum para vender sin fricción",
        sub: "Integramos WooCommerce con Centum, el sistema de gestión de Distri-Sal, para sincronizar productos, stock, precios y listas personalizadas por cliente en tiempo real.",
      },
      en: {
        badge: "Case study",
        title: "How Distri-Sal unified its ecommerce with Centum to sell without friction",
        sub: "We integrated WooCommerce with Centum, Distri-Sal's management system, to sync products, stock, prices and per-client price lists in real time.",
      },
    },
    challenge: {
      es: {
        heading: "El ecommerce operaba desconectado de Centum, con carga manual entre ambos sistemas.",
        body: "Distri-Sal ya tenía un sitio web con catálogo y precios visibles para usuarios logueados, pero el proceso de venta estaba desacoplado de Centum, su sistema de gestión interno. Cada pedido implicaba carga operativa manual, y esa desconexión limitaba cuánto podía escalar el canal digital sin sumar más trabajo administrativo.",
        points: [
          { icon: "layers", text: "El ecommerce y el sistema de gestión operaban por separado, con carga manual entre ambos" },
          { icon: "controls", text: "Cada cliente mayorista necesita su propia lista de precios y descuentos, no un catálogo único" },
          { icon: "shield", text: "Un error de sincronización podía significar vender a un precio incorrecto" },
          { icon: "target", text: "El objetivo no era una tienda online más, sino un canal digital que escale sin más carga operativa" },
        ],
      },
      en: {
        heading: "The ecommerce operated disconnected from Centum, with manual work between both systems.",
        body: "Distri-Sal already had a website with a catalog and prices visible to logged-in users, but the sales process was decoupled from Centum, its internal management system. Every order meant extra manual work, and that disconnection limited how much the digital channel could scale without adding more administrative load.",
        points: [
          { icon: "layers", text: "The ecommerce and the management system operated separately, with manual work between them" },
          { icon: "controls", text: "Every wholesale client needs its own price list and discounts, not a single catalog" },
          { icon: "shield", text: "A sync error could mean selling at the wrong price" },
          { icon: "target", text: "The goal wasn't another online store, but a digital channel that scales without more operational load" },
        ],
      },
    },
    solution: {
      es: {
        heading: "Una integración real entre WooCommerce y Centum, con precios por cliente en tiempo real.",
        intro: "Una integración real entre el ecommerce y la gestión interna, para que Centum sea la única fuente de verdad y cada cliente compre bajo sus propias condiciones.",
        items: [
          { icon: "api", title: "Integración WooCommerce + Centum", body: "Sincronización automática de productos, stock, precios y pedidos entre el ecommerce y el sistema de gestión.", highlight: true },
          { icon: "controls", title: "Precios y descuentos por cliente", body: "Cada cliente mayorista opera con su propia lista de precios, aplicada en listado, ficha, carrito y checkout." },
          { icon: "shield", title: "Reglas de seguridad ante fallas", body: "Comportamiento definido ante errores de sincronización, para prevenir ventas con precios incorrectos." },
          { icon: "design", title: "Rediseño completo de la experiencia", body: "Jerarquización de categorías y productos, con un diseño responsive alineado a la identidad de Distri-Sal." },
          { icon: "layers", title: "Fichas de producto optimizadas", body: "Estructura preparada para carga masiva, con precio dinámico según el cliente que esté navegando." },
          { icon: "structure", title: "Roles, permisos y aprobaciones", body: "Control de accesos y flujos de aprobación configurados según el rol de cada usuario." },
          { icon: "speed", title: "Performance y seguridad", body: "Arquitectura optimizada y preparada para crecer junto con la operación de Distri-Sal." },
          { icon: "search", title: "QA integral antes del go-live", body: "Testeo del flujo de compra, login y permisos, integración con Centum, precios, stock, pagos y envíos." },
        ],
      },
      en: {
        heading: "A real integration between WooCommerce and Centum, with real-time per-client pricing.",
        intro: "A real integration between the ecommerce and the internal management system, so Centum becomes the single source of truth and every client buys under its own terms.",
        items: [
          { icon: "api", title: "WooCommerce + Centum integration", body: "Automatic synchronization of products, stock, prices and orders between the ecommerce and the management system.", highlight: true },
          { icon: "controls", title: "Per-client pricing and discounts", body: "Every wholesale client operates with its own price list, applied across listing, product page, cart and checkout." },
          { icon: "shield", title: "Safety rules for sync failures", body: "Defined behavior for sync errors, to prevent sales at incorrect prices." },
          { icon: "design", title: "Complete experience redesign", body: "Category and product hierarchy, with a responsive design aligned to Distri-Sal's identity." },
          { icon: "layers", title: "Optimized product pages", body: "Structure ready for bulk loading, with dynamic pricing based on the client browsing." },
          { icon: "structure", title: "Roles, permissions and approvals", body: "Access control and approval flows configured according to each user's role." },
          { icon: "speed", title: "Performance and security", body: "Optimized architecture, ready to grow alongside Distri-Sal's operation." },
          { icon: "search", title: "Full QA before go-live", body: "Testing the purchase flow, login and permissions, Centum integration, prices, stock, payments and shipping." },
        ],
      },
    },
    techStack: [
      { name: "WooCommerce", icon: "cart", body: { es: "Plataforma de ecommerce robusta, con checkout, roles y gestión de pedidos.", en: "Robust ecommerce platform, with checkout, roles and order management." } },
      { name: "Centum API", icon: "api", body: { es: "Integración técnica con el sistema de gestión interno como fuente central de verdad.", en: "Technical integration with the internal management system as the single source of truth." } },
      { name: "WordPress", icon: "code", body: { es: "Base flexible y escalable para todo el desarrollo del ecommerce.", en: "Flexible, scalable foundation for the entire ecommerce build." } },
    ],
    scopeDelivered: {
      es: {
        heading: "Un ecommerce conectado a la operación real",
        intro: "En dos etapas, pasamos de un ecommerce desconectado a una plataforma integrada a Centum en tiempo real, con QA integral antes de cada entrega — no como un paso pendiente.",
        items: [
          "Integración completa entre WooCommerce y Centum: productos, stock, precios y pedidos sincronizados automáticamente",
          "Listas de precios y descuentos individuales por cliente, aplicadas en todo el recorrido de compra",
          "Reglas de fallback que previenen ventas con precios incorrectos ante errores de sincronización",
          "Rediseño completo de la experiencia, con roles, permisos y fichas de producto preparadas para carga masiva",
          "Proceso de QA integral: flujo de compra, login, permisos, integración con Centum, precios, stock, pagos y envíos",
          "Arquitectura preparada para crecer junto con la operación mayorista de Distri-Sal",
        ],
      },
      en: {
        heading: "An ecommerce connected to the real operation",
        intro: "Across two stages, we went from a disconnected ecommerce to a platform integrated with Centum in real time, with full QA before every delivery — not as a pending step.",
        items: [
          "Full integration between WooCommerce and Centum: products, stock, prices and orders synced automatically",
          "Individual price lists and discounts per client, applied across the entire purchase journey",
          "Fallback rules that prevent sales at incorrect prices when sync errors occur",
          "Complete experience redesign, with roles, permissions and product pages ready for bulk loading",
          "Full QA process: purchase flow, login, permissions, Centum integration, prices, stock, payments and shipping",
          "Architecture ready to grow alongside Distri-Sal's wholesale operation",
        ],
      },
    },
    duration: { es: "75 días", en: "75 days" },
    cta: { es: "Quiero un ecommerce integrado a mi sistema", en: "I want an ecommerce integrated with my system" },
  },
  {
    slug: "voutier",
    client: "Voutier Repuestos",
    icon: "search",
    url: "https://voutier.globalalora.com/",
    theme: { primary: "var(--turquoise)", secondary: "var(--electric)" },
    location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
    industry: { es: "Repuestos y autopartes", en: "Auto parts" },
    category: { es: "Ecommerce", en: "Ecommerce" },
    meta: {
      es: {
        title: "Caso de éxito: Voutier Repuestos | ALORA",
        desc: "Cómo construimos una plataforma de ecommerce robusta para Voutier Repuestos, con filtros avanzados por marca, modelo y año.",
      },
      en: {
        title: "Case study: Voutier Repuestos | ALORA",
        desc: "How we built a robust ecommerce platform for Voutier Repuestos, with advanced filters by make, model and year.",
      },
    },
    hero: {
      es: {
        badge: "Caso de éxito",
        title: "Cómo Voutier reemplazó Kodear por un ecommerce que escala",
        sub: "Construimos una plataforma de ecommerce robusta para Voutier Repuestos en WordPress + WooCommerce, con filtros avanzados por marca, modelo y año, y una arquitectura pensada para una operación estable y escalable.",
      },
      en: {
        badge: "Case study",
        title: "How Voutier replaced Kodear with an ecommerce built to scale",
        sub: "We built a robust ecommerce platform for Voutier Repuestos on WordPress + WooCommerce, with advanced filters by make, model and year, and an architecture designed for a stable, scalable operation.",
      },
    },
    challenge: {
      es: {
        heading: "La tienda en Kodear tenía caídas de hasta 12 horas y sin filtros por marca o año.",
        body: "Voutier Repuestos ya vendía online, pero su tienda en Kodear tenía caídas frecuentes — llegó a estar 12 horas fuera de servicio — y no permitía filtros de búsqueda por marca, modelo, motor o año, algo clave para un ecommerce de autopartes. Eso, sumado a un checkout con login obligatorio, empujaba a muchos clientes a abandonar el carrito y terminar comprando por WhatsApp.",
        points: [
          { icon: "cloud", text: "Caídas frecuentes de la plataforma — incluida una de 12 horas seguidas" },
          { icon: "search", text: "Sin filtros por marca, modelo, motor o año, algo clave para buscar autopartes" },
          { icon: "cart", text: "El login obligatorio para comprar generaba abandono de carrito y ventas por WhatsApp" },
          { icon: "plug", text: "Kodear no permitía sumar las funciones que el negocio necesitaba para crecer" },
        ],
      },
      en: {
        heading: "The Kodear store had outages of up to 12 hours, with no filters by make or year.",
        body: "Voutier Repuestos already sold online, but its Kodear store had frequent outages — it was once down for 12 hours straight — and didn't support search filters by make, model, engine or year, something key for an auto parts ecommerce. That, combined with a checkout that required mandatory login, pushed many customers to abandon their cart and end up buying over WhatsApp.",
        points: [
          { icon: "cloud", text: "Frequent platform outages — including one 12 hours straight" },
          { icon: "search", text: "No filters by make, model, engine or year, key for finding auto parts" },
          { icon: "cart", text: "Mandatory login to purchase drove cart abandonment and WhatsApp sales" },
          { icon: "plug", text: "Kodear didn't allow adding the features the business needed to grow" },
        ],
      },
    },
    solution: {
      es: {
        heading: "Un ecommerce estable con filtros por vehículo, checkout sin fricción y más formas de pagar.",
        intro: "Una tienda nueva de punta a punta, pensada para vender autopartes: fácil de buscar, fácil de comprar y siempre disponible.",
        items: [
          { icon: "search", title: "Filtros avanzados por vehículo", body: "Búsqueda por marca, modelo, tipo de motor y año, pensada específicamente para tiendas de autopartes.", highlight: true },
          { icon: "layers", title: "Catálogo organizado de verdad", body: "Productos ordenados por categoría, marca y tipo de repuesto, reemplazando el desorden de pestañas anterior." },
          { icon: "cart", title: "Checkout sin fricción", body: "Se elimina el login obligatorio como barrera, para reducir el abandono de carrito y las ventas que hoy se van por WhatsApp." },
          { icon: "plug", title: "Más formas de pagar y de recibir el pedido", body: "Mercado Pago y métodos adicionales, con hasta tres opciones de envío en vez de una sola." },
          { icon: "api", title: "Preparado para integrarse con DUX", body: "Arquitectura lista para conectarse con el sistema de facturación y gestión que ya usa Voutier." },
          { icon: "structure", title: "Migración completa desde Kodear", body: "Catálogo, categorías y contenido migrados a la nueva plataforma, sin partir de cero." },
          { icon: "controls", title: "Preparado para vender mayorista", body: "Base lista para sumar una sección mayorista con precios diferenciados, sin rehacer el sitio." },
          { icon: "shield", title: "Estabilidad como prioridad", body: "Arquitectura sobre WordPress + WooCommerce, con estabilidad garantizada incluso en los picos de ventas." },
        ],
      },
      en: {
        heading: "A stable ecommerce with vehicle filters, frictionless checkout and more ways to pay.",
        intro: "A brand new store built to sell auto parts: easy to search, easy to buy, and always available.",
        items: [
          { icon: "search", title: "Advanced vehicle filters", body: "Search by make, model, engine type and year, built specifically for auto parts stores.", highlight: true },
          { icon: "layers", title: "A catalog that's actually organized", body: "Products sorted by category, brand and part type, replacing the previous tab clutter." },
          { icon: "cart", title: "Frictionless checkout", body: "Mandatory login is removed as a barrier, to reduce cart abandonment and the sales that currently go to WhatsApp." },
          { icon: "plug", title: "More ways to pay and receive orders", body: "Mercado Pago and additional methods, with up to three shipping options instead of just one." },
          { icon: "api", title: "Ready to integrate with DUX", body: "Architecture ready to connect with the billing and management system Voutier already uses." },
          { icon: "structure", title: "Complete migration from Kodear", body: "Catalog, categories and content migrated to the new platform, without starting from scratch." },
          { icon: "controls", title: "Ready to sell wholesale", body: "Foundation ready to add a wholesale section with differentiated pricing, without rebuilding the site." },
          { icon: "shield", title: "Stability as a priority", body: "Architecture built on WordPress + WooCommerce, staying stable even during sales peaks." },
        ],
      },
    },
    techStack: [
      { name: "WordPress + WooCommerce", icon: "code", body: { es: "Base autogestionable y escalable, pensada para catálogos grandes.", en: "Self-manageable, scalable foundation, built for large catalogs." } },
      { name: "Mercado Pago", icon: "cart", body: { es: "Integración de pagos, con espacio para sumar métodos adicionales.", en: "Payment integration, with room to add additional methods." } },
      { name: "DUX (preparación)", icon: "api", body: { es: "Arquitectura preparada para integrarse con el sistema de facturación y gestión de Voutier.", en: "Architecture ready to integrate with Voutier's billing and management system." } },
    ],
    scopeDelivered: {
      es: {
        heading: "Una plataforma estable, lista para escalar",
        intro: "En 60 días construimos una plataforma de ecommerce robusta y escalable, con QA técnico en cada etapa — no como un paso pendiente.",
        items: [
          "Plataforma de ecommerce completa en WordPress + WooCommerce, con catálogo, categorías y contenido migrados desde Kodear",
          "Filtros avanzados por marca, modelo, motor y año, lo más pedido por el cliente",
          "Checkout optimizado, sin login obligatorio, para reducir el abandono de carrito",
          "Mercado Pago y envíos configurables hasta en tres métodos distintos",
          "QA técnico completo: navegación, carrito, checkout, filtros, pagos y envíos",
          "Arquitectura preparada para integrarse con DUX y para sumar un canal mayorista a futuro",
        ],
      },
      en: {
        heading: "A stable platform, ready to scale",
        intro: "In 60 days we built a robust, scalable ecommerce platform, with technical QA at every stage — not as a pending step.",
        items: [
          "Complete WordPress + WooCommerce ecommerce platform, with catalog, categories and content migrated from Kodear",
          "Advanced filters by make, model, engine and year, the client's most requested feature",
          "Optimized checkout, without mandatory login, to reduce cart abandonment",
          "Mercado Pago and shipping configurable across up to three different methods",
          "Full technical QA: navigation, cart, checkout, filters, payments and shipping",
          "Architecture ready to integrate with DUX and to add a wholesale channel in the future",
        ],
      },
    },
    duration: { es: "60 días", en: "60 days" },
    cta: { es: "Quiero un ecommerce estable y escalable", en: "I want a stable, scalable ecommerce" },
  },
  {
    slug: "mimikids",
    client: "Mimi Kids",
    icon: "cart",
    url: "https://mimikids.com.ar/",
    theme: { primary: "#e8758a", secondary: "#f4a7b9" },
    heroImage: "/images/case-studies/mimikids/hero-v2.png",
    heroImageAspect: "1914/942",
    heroImageMobile: "/images/case-studies/mimikids/hero-mobile.png",
    heroImageMobileAspect: "391/860",
    location: { es: "Trenque Lauquen, Argentina", en: "Trenque Lauquen, Argentina" },
    industry: { es: "Ecommerce · Productos para bebés", en: "Ecommerce · Baby products" },
    category: { es: "Ecommerce / Desarrollo a medida", en: "Ecommerce / Custom Development" },
    meta: {
      es: {
        title: "Caso de éxito: Mimi Kids | ALORA",
        desc: "Cómo llevamos a Mimi Kids del taller artesanal a una tienda online completa con personalización de productos, panel de administración y pagos integrados.",
      },
      en: {
        title: "Case study: Mimi Kids | ALORA",
        desc: "How we took Mimi Kids from a handmade workshop to a full online store with product customization, admin panel and integrated payments.",
      },
    },
    hero: {
      es: {
        badge: "Caso de éxito",
        title: "De idea a tienda online en tiempo récord",
        sub: "Cami llegó con un emprendimiento artesanal de portachupetes personalizados. Construimos la tienda completa: catálogo interactivo, flujo de personalización, panel de administración y pagos con MercadoPago.",
      },
      en: {
        badge: "Case study",
        title: "From idea to online store in record time",
        sub: "Cami came to us with a handmade pacifier clip business. We built the full store: interactive catalog, customization flow, admin panel and MercadoPago payments.",
      },
    },
    challenge: {
      es: {
        heading: "Un emprendimiento artesanal que necesitaba dar el salto digital sin perder su identidad.",
        body: "Cami hacía portachupetes únicos a mano en Trenque Lauquen y los vendía por Instagram. Sin tienda online, cada venta era manual: pedidos por mensaje, cobros por transferencia y sin forma de escalar. Necesitaba una tienda que reflejara la calidez de su marca y automatizara el proceso de compra — sin convertirse en una plataforma fría y genérica.",
        points: [
          { icon: "chat", text: "Ventas 100% manuales por Instagram: sin carrito, sin pagos online y sin automatización" },
          { icon: "puzzle", text: "Producto 100% personalizable: nombre del bebé, colores y materiales — imposible de gestionar sin un flujo digital" },
          { icon: "layers", text: "Sin panel de administración: Cami no podía ver pedidos ni actualizar el catálogo sin ayuda técnica" },
          { icon: "target", text: "La identidad artesanal y personal de la marca tenía que preservarse en cada pantalla" },
        ],
      },
      en: {
        heading: "A handmade business that needed to go digital without losing its identity.",
        body: "Cami made unique handmade pacifier clips in Trenque Lauquen and sold them through Instagram. With no online store, every sale was manual: orders by message, payment by transfer and no way to scale. She needed a store that reflected the warmth of her brand and automated the buying process — without becoming a cold, generic platform.",
        points: [
          { icon: "chat", text: "100% manual sales through Instagram: no cart, no online payments and no automation" },
          { icon: "puzzle", text: "100% customizable product: baby name, colors and materials — impossible to manage without a digital flow" },
          { icon: "layers", text: "No admin panel: Cami couldn't view orders or update the catalog without technical help" },
          { icon: "target", text: "The handmade, personal identity of the brand had to be preserved on every screen" },
        ],
      },
    },
    solution: {
      es: {
        heading: "Una tienda completa, pensada para el flujo real de trabajo de Cami.",
        intro: "Diseñamos cada pantalla entendiendo cómo Cami trabaja y cómo sus clientes compran: personalización natural, gestión simple y notificaciones automáticas en cada paso.",
        items: [
          { icon: "layers", title: "Catálogo con galería y modelos de referencia", body: "Los clientes ven cada producto con zoom, galería de fotos reales y modelos de referencia para inspirarse antes de personalizar.", highlight: true },
          { icon: "controls", title: "Flujo de personalización integrado al carrito", body: "El cliente elige nombre, colores y materiales directamente en la ficha del producto. Todo queda registrado en el pedido sin pasos extra." },
          { icon: "shield", title: "Panel de administración propio", body: "Cami gestiona productos, modelos, pedidos y estados en tiempo real desde un panel diseñado para ella — sin depender de nadie." },
          { icon: "plug", title: "Pagos con MercadoPago", body: "Checkout integrado con MercadoPago para cobros online seguros. Adiós a las transferencias manuales." },
          { icon: "chat", title: "Emails automáticos en cada etapa", body: "El cliente recibe notificaciones automáticas en cada cambio de estado: confirmación, producción, envío y entrega." },
          { icon: "structure", title: "Diseño que refleja la marca", body: "Paleta rosada, tipografía suave y fotografía real de productos. Una tienda que se siente tan artesanal como los productos que vende." },
        ],
      },
      en: {
        heading: "A complete store built around Cami's real workflow.",
        intro: "We designed every screen by understanding how Cami works and how her customers buy: natural customization, simple management and automatic notifications at every step.",
        items: [
          { icon: "layers", title: "Catalog with gallery and reference models", body: "Customers see each product with zoom, real photo gallery and reference models to inspire them before customizing.", highlight: true },
          { icon: "controls", title: "Customization flow integrated into the cart", body: "The customer chooses name, colors and materials directly on the product page. Everything is recorded in the order with no extra steps." },
          { icon: "shield", title: "Custom admin panel", body: "Cami manages products, models, orders and statuses in real time from a panel designed for her — without depending on anyone." },
          { icon: "plug", title: "MercadoPago payments", body: "Checkout integrated with MercadoPago for secure online payments. No more manual bank transfers." },
          { icon: "chat", title: "Automatic emails at every stage", body: "The customer receives automatic notifications at each status change: confirmation, production, shipping and delivery." },
          { icon: "structure", title: "Design that reflects the brand", body: "Pink palette, soft typography and real product photography. A store that feels as handmade as the products it sells." },
        ],
      },
    },
    techStack: [
      { name: "Next.js 16", icon: "code", body: { es: "App Router, TypeScript y Tailwind CSS.", en: "App Router, TypeScript and Tailwind CSS." } },
      { name: "Supabase", icon: "cloud", body: { es: "Base de datos PostgreSQL y storage de imágenes.", en: "PostgreSQL database and image storage." } },
      { name: "NextAuth v5", icon: "shield", body: { es: "Autenticación del panel de administración.", en: "Admin panel authentication." } },
      { name: "Resend", icon: "chat", body: { es: "Emails transaccionales automáticos.", en: "Automatic transactional emails." } },
      { name: "MercadoPago", icon: "plug", body: { es: "Pagos online integrados al checkout.", en: "Online payments integrated into checkout." } },
      { name: "Vercel", icon: "speed", body: { es: "Deploy continuo y hosting.", en: "Continuous deployment and hosting." } },
    ],
    scopeDelivered: {
      es: {
        heading: "Una tienda lista para vender desde el día uno",
        intro: "De la idea al ecommerce en producción, con personalización de productos, pagos integrados y un panel de gestión que Cami usa sola.",
        items: [
          "Tienda online completa con catálogo, galería de modelos y ficha de producto con zoom",
          "Flujo de personalización: nombre del bebé, colores y materiales integrados al carrito",
          "Panel de administración: gestión de productos, modelos, pedidos y estados en tiempo real",
          "Emails automáticos al cliente en confirmación, producción, envío y entrega",
          "Checkout con MercadoPago para cobros online sin fricción",
          "Sección 'Quiénes somos' con carrusel de fotos reales del taller",
          "Diseño responsivo adaptado a móvil, donde llega la mayoría del tráfico de Instagram",
          "QA completo antes del lanzamiento: navegación, carrito, personalización, pagos y emails",
        ],
      },
      en: {
        heading: "A store ready to sell from day one",
        intro: "From idea to production ecommerce, with product customization, integrated payments and a management panel that Cami uses on her own.",
        items: [
          "Complete online store with catalog, model gallery and product page with zoom",
          "Customization flow: baby name, colors and materials integrated into the cart",
          "Admin panel: real-time management of products, models, orders and statuses",
          "Automatic emails to the customer at confirmation, production, shipping and delivery",
          "MercadoPago checkout for frictionless online payments",
          "'About us' section with real workshop photo carousel",
          "Responsive design optimized for mobile, where most Instagram traffic arrives",
          "Full QA before launch: navigation, cart, customization, payments and emails",
        ],
      },
    },
    duration: { es: "45 días", en: "45 days" },
    cta: { es: "Quiero mi tienda online", en: "I want my online store" },
    testimonial: {
      quote: "Tenía mi emprendimiento funcionando por Instagram pero necesitaba dar el salto a una tienda de verdad. El equipo entendió desde el primer día que Mimi Kids no es solo una tienda, es un proyecto con identidad propia. La plataforma quedó exactamente como lo imaginé: mis clientas pueden personalizar todo, yo gestiono los pedidos desde el panel sin necesitar ayuda de nadie, y los emails automáticos me ahorran un montón de tiempo. Fue una inversión que valió cada peso.",
      name: "Cami",
      role: "Fundadora de Mimi Kids",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
