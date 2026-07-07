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
  testimonialPlaceholder?: { es: string; en: string }
  cta: { es: string; en: string }
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
        heading: "El desafío",
        body: "En Comodoro Rivadavia, comprar o vender un auto significaba recorrer grupos de Facebook, marketplaces genéricos y agencias que no se comunican entre sí. Ninguna plataforma nacional estaba pensada para la lógica ni la escala de un mercado regional. Autodux necesitaba nacer como la base de un marketplace propio de la Patagonia — no un clasificado más, sino la infraestructura de un negocio que pueda crecer con el tiempo.",
        points: [
          { icon: "puzzle", text: "Oferta dispersa entre grupos de Facebook, redes sociales y agencias que operan de forma aislada" },
          { icon: "portal", text: "Plataformas nacionales que no entienden la lógica ni la escala de un mercado regional" },
          { icon: "search", text: "Ningún lugar donde comparar, contactar y decidir sin saltar entre sitios distintos" },
          { icon: "target", text: "El objetivo no era una web de clasificados más, sino la base de una plataforma que pueda escalar" },
        ],
      },
      en: {
        heading: "The challenge",
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
        heading: "Qué construimos",
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
        heading: "What we built",
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
    testimonialPlaceholder: {
      es: "Esta sección va a mostrar el testimonio real del cliente — agregar cita verificada antes de publicar.",
      en: "This section will show the client's real testimonial — add a verified quote before publishing.",
    },
    cta: { es: "Quiero un proyecto como este", en: "I want a project like this" },
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
        heading: "El desafío",
        body: "Castro Yeso necesitaba presencia digital para captar clientes de durlock y yesería en su zona de trabajo. Pero el problema real no era la falta de una web — era la falta de consultas calificadas. Un sitio tradicional con múltiples páginas dispersa la atención justo cuando el usuario busca algo concreto: ver trabajos reales y contactar ya por WhatsApp.",
        points: [
          { icon: "search", text: "El usuario busca una solución concreta, no un sitio para explorar página por página" },
          { icon: "layers", text: "Un sitio de múltiples páginas dispersa la atención y reduce la conversión" },
          { icon: "chat", text: "El contacto real sucede por WhatsApp, no por formularios largos" },
          { icon: "target", text: "El objetivo no era \"tener una web\", sino generar consultas calificadas dentro de una zona definida" },
        ],
      },
      en: {
        heading: "The challenge",
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
        heading: "Qué construimos",
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
        heading: "What we built",
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
    testimonialPlaceholder: {
      es: "Esta sección va a mostrar el testimonio real del cliente — agregar cita verificada antes de publicar.",
      en: "This section will show the client's real testimonial — add a verified quote before publishing.",
    },
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
        heading: "El desafío",
        body: "ALKEMIA venía de relanzar su marca luego de una etapa anterior, y necesitaba mucho más que una web nueva: necesitaba un activo digital que transmitiera innovación, solidez y capacidad tecnológica desde el primer segundo, para posicionarse en el sector de software e inteligencia artificial frente a una audiencia en LATAM y mercados internacionales.",
        points: [
          { icon: "target", text: "La marca se había relanzado, pero la web todavía no representaba ese cambio" },
          { icon: "spark", text: "El sitio necesitaba transmitir innovación y capacidad tecnológica, no solo información institucional" },
          { icon: "portal", text: "La audiencia es internacional: el contenido debía funcionar en español e inglés desde el día uno" },
          { icon: "controls", text: "El equipo necesitaba poder actualizar contenido sin depender de un desarrollador" },
        ],
      },
      en: {
        heading: "The challenge",
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
        heading: "Qué construimos",
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
        heading: "What we built",
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
    testimonialPlaceholder: {
      es: "Esta sección va a mostrar el testimonio real del cliente — agregar cita verificada antes de publicar.",
      en: "This section will show the client's real testimonial — add a verified quote before publishing.",
    },
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
        heading: "El desafío",
        body: "Distri-Sal ya tenía un sitio web con catálogo y precios visibles para usuarios logueados, pero el proceso de venta estaba desacoplado de Centum, su sistema de gestión interno. Cada pedido implicaba carga operativa manual, y esa desconexión limitaba cuánto podía escalar el canal digital sin sumar más trabajo administrativo.",
        points: [
          { icon: "layers", text: "El ecommerce y el sistema de gestión operaban por separado, con carga manual entre ambos" },
          { icon: "controls", text: "Cada cliente mayorista necesita su propia lista de precios y descuentos, no un catálogo único" },
          { icon: "shield", text: "Un error de sincronización podía significar vender a un precio incorrecto" },
          { icon: "target", text: "El objetivo no era una tienda online más, sino un canal digital que escale sin más carga operativa" },
        ],
      },
      en: {
        heading: "The challenge",
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
        heading: "Qué construimos",
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
        heading: "What we built",
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
    testimonialPlaceholder: {
      es: "Esta sección va a mostrar el testimonio real del cliente — agregar cita verificada antes de publicar.",
      en: "This section will show the client's real testimonial — add a verified quote before publishing.",
    },
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
        heading: "El desafío",
        body: "Voutier Repuestos ya vendía online, pero su tienda en Kodear tenía caídas frecuentes — llegó a estar 12 horas fuera de servicio — y no permitía filtros de búsqueda por marca, modelo, motor o año, algo clave para un ecommerce de autopartes. Eso, sumado a un checkout con login obligatorio, empujaba a muchos clientes a abandonar el carrito y terminar comprando por WhatsApp.",
        points: [
          { icon: "cloud", text: "Caídas frecuentes de la plataforma — incluida una de 12 horas seguidas" },
          { icon: "search", text: "Sin filtros por marca, modelo, motor o año, algo clave para buscar autopartes" },
          { icon: "cart", text: "El login obligatorio para comprar generaba abandono de carrito y ventas por WhatsApp" },
          { icon: "plug", text: "Kodear no permitía sumar las funciones que el negocio necesitaba para crecer" },
        ],
      },
      en: {
        heading: "The challenge",
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
        heading: "Qué construimos",
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
        heading: "What we built",
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
    testimonialPlaceholder: {
      es: "Esta sección va a mostrar el testimonio real del cliente — agregar cita verificada antes de publicar.",
      en: "This section will show the client's real testimonial — add a verified quote before publishing.",
    },
    cta: { es: "Quiero un ecommerce estable y escalable", en: "I want a stable, scalable ecommerce" },
  },
];

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
