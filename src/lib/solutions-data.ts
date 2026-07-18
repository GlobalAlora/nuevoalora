export interface SolutionProject {
  name: string
  url: string
  image: string
  es: string
  en: string
}

export interface IconBlock {
  icon: string
  title: string
  body: string
  href?: string
}

export interface SolutionTheme {
  /** CSS color expression, e.g. "var(--turquoise)" or a color-mix() blend of two brand vars */
  primary: string
  /** Optional second stop for gradients; defaults to primary when omitted */
  secondary?: string
}

export interface SolutionData {
  slug: string
  heroImage?: string
  theme: SolutionTheme
  meta: {
    es: { title: string; desc: string }
    en: { title: string; desc: string }
  }
  hero: {
    es: { badge: string; headline: string; headlineLines?: string[]; sub: string }
    en: { badge: string; headline: string; headlineLines?: string[]; sub: string }
  }
  heroNote?: { es: string; en: string }
  heroSecondaryCta?: { es: string; en: string }
  statBar?: {
    label: { es: string; en: string }
    items: { es: { value: string; label: string; placeholder?: boolean }[]; en: { value: string; label: string; placeholder?: boolean }[] }
  }
  appExplainer?: {
    label: { es: string; en: string }
    heading: { es: string; en: string }
    intro: { es: string; en: string }
    definition: { title: { es: string; en: string }; body: { es: string; en: string } }
    comparison: {
      heading: { es: string; en: string }
      columns: {
        es: { tag: string; title: string; body: string; highlight?: boolean; href?: string; linkLabel?: string }[]
        en: { tag: string; title: string; body: string; highlight?: boolean; href?: string; linkLabel?: string }[]
      }
    }
  }
  whatWeBuild?: {
    label?: { es: string; en: string }
    heading: { es: string; en: string }
    intro: { es: string; en: string }
    items: { es: IconBlock[]; en: IconBlock[] }
  }
  approach?: {
    label: { es: string; en: string }
    heading: { es: string; en: string }
    body: { es: string; en: string }
    bullets: { es: string[]; en: string[] }
    stat?: { value: string; label: { es: string; en: string } }
    cards?: { es: IconBlock[]; en: IconBlock[] }
  }
  useCases?: {
    label?: { es: string; en: string }
    heading: { es: string; en: string }
    items: { es: string[]; en: string[] }
  }
  beforeAfter?: {
    label?: { es: string; en: string }
    heading: { es: string; en: string }
    intro?: { es: string; en: string }
    rows: { es: { label: string; before: string; after: string }[]; en: { label: string; before: string; after: string }[] }
    closing?: { es: string; en: string }
  }
  whyUsExtra?: {
    heading: { es: string; en: string }
    intro: { es: string; en: string }
    reasons: { es: { tag: string; label: string }[]; en: { tag: string; label: string }[] }
  }
  testimonials?: {
    es: { quote: string; tags: string[]; name: string; role: string }[]
    en: { quote: string; tags: string[]; name: string; role: string }[]
  }
  features: {
    es: string[]
    en: string[]
  }
  featuresLabel?: { es: string; en: string }
  featuresHeading?: { es: string; en: string }
  featuresIntro?: { es: string; en: string }
  featuresDetailed?: { es: IconBlock[]; en: IconBlock[] }
  featuresConclusion?: { es: string; en: string }
  projects?: SolutionProject[]
  projectsIntro?: { es: string; en: string }
  process: {
    es: { n: string; title: string; body: string }[]
    en: { n: string; title: string; body: string }[]
  }
  processLabel?: { es: string; en: string }
  processHeading?: { es: string; en: string }
  workPrinciple?: { es: string; en: string }
  finalCta?: {
    heading: { es: string; en: string }
    body: { es: string; en: string }
    ctaLabel: { es: string; en: string }
    ctaNote: { es: string; en: string }
  }
  cta: { es: string; en: string }
}

export const SOLUTIONS: SolutionData[] = [
  {
    slug: "desarrollo-web",
    theme: { primary: "var(--turquoise)" },
    meta: {
      es: { title: "Desarrollo Web a Medida | ALORA", desc: "Diseñamos y desarrollamos sitios web pensados para representar correctamente tu negocio, comunicar con claridad y generar oportunidades reales." },
      en: { title: "Custom Web Development | ALORA", desc: "We design and develop websites to correctly represent your business, communicate clearly and generate real opportunities." },
    },
    hero: {
      es: { badge: "Desarrollo Web", headline: "Un sitio web que trabaja para tu negocio", sub: "Diseñamos y desarrollamos sitios web pensados para representar correctamente tu negocio, comunicar con claridad y generar oportunidades reales. Un sitio web no es solo diseño. Es estructura, mensaje, experiencia y objetivo." },
      en: { badge: "Web Development", headline: "A website built to work for your business", sub: "We design and develop websites designed to correctly represent your business, communicate clearly and generate real opportunities. A website is not just design. It's structure, message, experience and objective." },
    },
    heroNote: { es: "Llamada online de 20 minutos", en: "20-minute online call" },
    whatWeBuild: {
      heading: { es: "Qué construimos", en: "What we build" },
      intro: {
        es: "Sitios web pensados para cada tipo de negocio y objetivo, siempre con la misma base: claridad, performance y foco en resultados.",
        en: "Websites built for every type of business and objective, always on the same foundation: clarity, performance and a focus on results.",
      },
      items: {
        es: [
          { icon: "structure", title: "Sitios institucionales y corporativos", body: "Presencia digital profesional que comunica quién sos, qué hacés y por qué confiar en tu negocio." },
          { icon: "speed", title: "Landing pages de conversión", body: "Páginas enfocadas en un solo objetivo: convertir visitas en leads o ventas." },
          { icon: "cart", title: "Tiendas online", body: "Ecommerce con catálogo, carrito y medios de pago, listo para vender desde el primer día." },
          { icon: "portal", title: "Portales y áreas privadas", body: "Accesos para clientes o usuarios con contenido, formularios y funciones a medida." },
          { icon: "puzzle", title: "Sitios con funcionalidades a medida", body: "Cuando tu negocio necesita algo que no entra en una plantilla, lo construimos desde cero." },
        ],
        en: [
          { icon: "structure", title: "Institutional and corporate sites", body: "Professional digital presence that communicates who you are, what you do and why you can be trusted." },
          { icon: "speed", title: "Conversion landing pages", body: "Pages focused on a single objective: turning visits into leads or sales." },
          { icon: "cart", title: "Online stores", body: "Ecommerce with catalog, cart and payment methods, ready to sell from day one." },
          { icon: "portal", title: "Portals and private areas", body: "Access for clients or users with tailored content, forms and features." },
          { icon: "puzzle", title: "Sites with custom functionality", body: "When your business needs something that doesn't fit a template, we build it from scratch." },
        ],
      },
    },
    approach: {
      label: { es: "Nuestro enfoque", en: "Our approach" },
      heading: { es: "Diseño centrado en objetivos, no solo en estética", en: "Design centered on objectives, not just aesthetics" },
      body: {
        es: "No empezamos por el diseño. Empezamos por entender tu negocio, tu usuario y el objetivo real del sitio. Cada decisión visual, de contenido y de estructura responde a ese objetivo, para que el sitio no solo se vea bien, sino que cumpla una función concreta dentro de tu negocio.",
        en: "We don't start with design. We start by understanding your business, your user and the site's real objective. Every visual, content and structural decision responds to that objective, so the site doesn't just look good, it serves a concrete function within your business.",
      },
      bullets: {
        es: ["Foco en objetivos de negocio, no solo en estética", "Estructura y contenido pensados para el usuario real", "Performance y SEO técnico desde el desarrollo, no como un parche"],
        en: ["Focus on business objectives, not just aesthetics", "Structure and content designed for the real user", "Performance and technical SEO from development, not as a patch"],
      },
      cards: {
        es: [
          { icon: "target", title: "Foco en tu negocio y tu nicho", body: "Estrategia y contenido adaptados a tu industria y a tu cliente real." },
          { icon: "search", title: "Optimizado para SEO, GEO, AIO y LLM", body: "Preparado para posicionar tanto en buscadores como en motores de IA." },
          { icon: "controls", title: "Sitios autogestionables", body: "Actualizá contenidos vos mismo, sin depender de nosotros." },
          { icon: "spark", title: "Desarrollo AI-first", body: "Combinamos prácticas de desarrollo web sólidas con procesos acelerados por IA para construir sitios más rápido." },
        ],
        en: [
          { icon: "target", title: "Focus on your business and niche", body: "Strategy and content tailored to your industry and your real customer." },
          { icon: "search", title: "Optimized for SEO, GEO, AIO and LLM", body: "Built to rank in traditional search engines and AI engines alike." },
          { icon: "controls", title: "Self-manageable sites", body: "Update content yourself, without depending on us." },
          { icon: "spark", title: "AI-first development", body: "We combine solid web development practices with AI-accelerated workflows to build sites faster." },
        ],
      },
    },
    whyUsExtra: {
      heading: { es: "Un sitio web hecho por gente que entiende de negocio, no solo de diseño", en: "A website built by people who understand business, not just design" },
      intro: {
        es: "No solo diseñamos sitios lindos. Construimos herramientas digitales que representan tu marca y trabajan para tu negocio.",
        en: "We don't just design nice-looking sites. We build digital tools that represent your brand and work for your business.",
      },
      reasons: {
        es: [
          { tag: "ENFOQUE", label: "Cada decisión responde a un objetivo de negocio, no a una moda" },
          { tag: "VELOCIDAD", label: "Procesos ágiles, sin vueltas ni demoras innecesarias" },
          { tag: "CERCANÍA", label: "Comunicación directa con el equipo que construye tu sitio" },
          { tag: "CALIDAD", label: "Código sólido, mantenible y preparado para crecer" },
          { tag: "AUTONOMÍA", label: "Te dejamos el control total para actualizar contenidos vos mismo" },
          { tag: "ACOMPAÑAMIENTO", label: "Seguimos cerca después del lanzamiento, no desaparecemos" },
        ],
        en: [
          { tag: "FOCUS", label: "Every decision responds to a business objective, not a trend" },
          { tag: "SPEED", label: "Agile processes, no unnecessary detours or delays" },
          { tag: "PROXIMITY", label: "Direct communication with the team building your site" },
          { tag: "QUALITY", label: "Solid, maintainable code that's ready to grow" },
          { tag: "AUTONOMY", label: "Full control handed to you to update content yourself" },
          { tag: "SUPPORT", label: "We stay close after launch, we don't disappear" },
        ],
      },
    },
    testimonials: {
      es: [
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
      en: [
        {
          quote: "Working with Alora was an excellent experience. They developed both our institutional website and a fully custom professional ranking system, which now lets us manage players, statistics and points clearly and efficiently. The platform is fast, easy to use, and gave our table tennis organization a real leap in quality. There was always good communication, commitment and willingness to adapt the system to our real needs.",
          tags: ["Comprehensive system", "Efficient management", "Easy to use"],
          name: "Alejandro",
          role: "President of the Table Tennis Commission",
        },
        {
          quote: "At Fundación por Nuestros Niños we're grateful for the process we shared in creating our website. It's been a wonderful experience that also let us revisit some very important aspects of our organization. It was a pending debt for our NGO, which has worked for more than 28 years for the children of Salta. Thank you for the warmth, commitment, professionalism and patience of the Alora team. We hope to keep our alliance for the common good!",
          tags: ["Collaborative process", "Social impact", "Committed team"],
          name: "Verónica Figueroa",
          role: "Fundación por Nuestros Niños – Chair of the Board",
        },
        {
          quote: "It was a pleasure working with Bruno and his team — the processes and communication channels, how they managed timelines, and the seriousness with which they approached the work. They took the time to understand the essence of the project, made relevant suggestions, and were always willing to resolve any situation. I was very happy with the work delivered and I recommend them.",
          tags: ["Clear process", "Open communication", "Flawless results"],
          name: "Rulo de Viaje",
          role: "Founder of the Club Rulo de Viaje community",
        },
        {
          quote: "During this time, the work was very professional, with great responsiveness and on-time delivery. Communication was always clear and effective. I'd highlight the commitment and efficiency.",
          tags: ["Consistent professionalism", "Clear communication", "Commitment and efficiency"],
          name: "Fernando Celaya",
          role: "Starley – Manager",
        },
      ],
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
    featuresLabel: { es: "Qué incluye", en: "What's included" },
    featuresHeading: { es: "Qué incluye el servicio de desarrollo web", en: "What our web development service includes" },
    featuresDetailed: {
      es: [
        { icon: "design", title: "Diseño visual alineado a la identidad de marca", body: "Creamos un diseño visual que representa correctamente tu marca y transmite profesionalismo." },
        { icon: "structure", title: "Definición de estructura y jerarquía de contenidos", body: "Organizamos la información de forma lógica para que los usuarios encuentren lo que buscan fácilmente." },
        { icon: "navigation", title: "Navegación clara e intuitiva", body: "Diseñamos una navegación que guíe al usuario hacia los objetivos del sitio web." },
        { icon: "mobile", title: "Experiencia optimizada para dispositivos móviles", body: "Garantizamos que el sitio funcione perfectamente en todos los dispositivos y tamaños de pantalla." },
        { icon: "code", title: "Desarrollo técnico sólido y escalable", body: "Construimos con tecnología moderna que permita el crecimiento y futuras mejoras." },
        { icon: "controls", title: "Sitio web autogestionable", body: "Te entregamos control total para que puedas actualizar contenidos sin necesidad de conocimientos técnicos." },
        { icon: "speed", title: "Optimización básica de rendimiento y SEO técnico", body: "Optimizamos la velocidad y los aspectos técnicos fundamentales para el posicionamiento en buscadores." },
        { icon: "plug", title: "Integración con formularios y herramientas externas", body: "Conectamos el sitio con las herramientas que ya usas para facilitar la gestión de consultas." },
      ],
      en: [
        { icon: "design", title: "Visual design aligned with brand identity", body: "We create a visual design that correctly represents your brand and conveys professionalism." },
        { icon: "structure", title: "Content structure and hierarchy definition", body: "We organize information logically so users easily find what they're looking for." },
        { icon: "navigation", title: "Clear and intuitive navigation", body: "We design navigation that guides users toward the website's objectives." },
        { icon: "mobile", title: "Mobile-optimized experience", body: "We ensure the site works perfectly on all devices and screen sizes." },
        { icon: "code", title: "Solid, scalable technical development", body: "We build with modern technology that allows for growth and future improvements." },
        { icon: "controls", title: "Self-manageable website", body: "We give you full control to update content without needing technical knowledge." },
        { icon: "speed", title: "Basic performance optimization and technical SEO", body: "We optimize speed and the fundamental technical aspects for search engine ranking." },
        { icon: "plug", title: "Integration with forms and external tools", body: "We connect the site with the tools you already use to make managing inquiries easier." },
      ],
    },
    featuresConclusion: {
      es: "Todo lo necesario para contar con un sitio web profesional, funcional y preparado para crecer.",
      en: "Everything you need for a professional, functional website that's ready to grow.",
    },
    projectsIntro: {
      es: "Desarrollamos sitios web para distintos tipos de negocios, siempre con el mismo criterio: claridad, profesionalismo y orientación a resultados.",
      en: "We develop websites for different types of businesses, always with the same criteria: clarity, professionalism and a focus on results.",
    },
    projects: [
      { name: "ALKEMIA", url: "https://goalkemia.com", image: "/images/alkemia.png", es: "Diseño y desarrollo de la nueva plataforma digital de ALKEMIA para acompañar su evolución de marca y consolidar su posicionamiento en tecnología, automatización e inteligencia artificial. El proyecto incluyó estrategia digital, UX/UI, copywriting, desarrollo multilenguaje y una experiencia orientada a comunicar capacidades complejas de forma clara, moderna y escalable.", en: "Design and development of ALKEMIA's new digital platform to support its brand evolution and consolidate its positioning in technology, automation and artificial intelligence. The project included digital strategy, UX/UI, copywriting, multilingual development and an experience geared toward communicating complex capabilities clearly, modernly and at scale." },
      { name: "Castro Yeso", url: "https://castro-yeso.com", image: "/images/castroweb.png", es: "Sitio 100% personalizado desarrollado con WordPress sin uso de plantillas, para empresa de yesería y construcción en seco.", en: "100% custom WordPress site built without templates, for a drywall and plasterwork company." },
      { name: "Asesoría Dialogar", url: "https://asesoriadialogar.com.ar", image: "/images/dialogar.png", es: "Sitio profesional desarrollado con WordPress para consultoría de recursos humanos.", en: "Professional WordPress site for an HR consulting firm." },
      { name: "Fundación Por Nuestros Niños", url: "http://fpnn.org.ar", image: "/images/fpnn.png", es: "Sitio completamente custom, desarrollado a medida con diseño personalizado que refleja la identidad de la fundación, su misión, programas y formas de colaborar.", en: "Fully custom site, built with tailored design that reflects the foundation's identity, mission, programs and ways to collaborate." },
      { name: "Grupo Terra Lauquen", url: "https://grupoterralauquen.com.ar", image: "/images/grupoterralauquen.com.ar_.png", es: "Sitio corporativo para grupo empresarial con múltiples divisiones. Desarrollo web complejo con gestión de contenido y estructura multinivel.", en: "Corporate site for a business group with multiple divisions. Complex web development with content management and a multi-level structure." },
      { name: "Cichic", url: "https://chichicwinerelax.com", image: "/images/chichicImage.png", es: "Plataforma e-commerce de moda y accesorios. Desarrollo web completo con catálogo de productos, carrito de compras y pasarela de pago.", en: "Fashion and accessories e-commerce platform. Full web development with product catalog, shopping cart and payment gateway." },
      { name: "Tenis De Mesa Trenque", url: "https://tenisdemesatrenque.com.ar", image: "/images/tenisdemesatrenque.com.ar_.png", es: "Sitio institucional para club deportivo con sistema de gestión de torneos, inscripciones online y resultados en tiempo real.", en: "Institutional site for a sports club with tournament management system, online registration and real-time results." },
    ],
    process: {
      es: [
        { n: "01", title: "Análisis del negocio", body: "Entendemos objetivos, contexto y prioridades reales. Define qué debe lograr el sitio y qué métricas vamos a mover." },
        { n: "02", title: "Arquitectura y foco", body: "Convertimos objetivos en estructura y alcance técnico. Priorizamos contenidos, integraciones y criterios antes del diseño." },
        { n: "03", title: "Experiencia y contenido", body: "Diseñamos interfaz y mensajes que guían al usuario. Prototipamos layouts y microcopys listos para validar con tu equipo." },
        { n: "04", title: "Desarrollo y QA", body: "Construimos con código mantenible y pruebas en cada iteración. Integramos CMS, automatizaciones y performance antes del lanzamiento." },
        { n: "05", title: "Lanzamiento y mejora continua", body: "Acompañamos la puesta en línea y los ajustes reales. Medimos comportamiento y planificamos evolutivos junto a tu equipo." },
      ],
      en: [
        { n: "01", title: "Business analysis", body: "We understand real objectives, context and priorities. This defines what the site must achieve and which metrics we'll move." },
        { n: "02", title: "Architecture and focus", body: "We turn objectives into structure and technical scope. We prioritize content, integrations and criteria before design." },
        { n: "03", title: "Experience and content", body: "We design the interface and messages that guide the user. We prototype layouts and microcopy ready to validate with your team." },
        { n: "04", title: "Development and QA", body: "We build with maintainable code and testing at every iteration. We integrate CMS, automations and performance before launch." },
        { n: "05", title: "Launch and continuous improvement", body: "We support the go-live and real-world adjustments. We measure behavior and plan evolutions together with your team." },
      ],
    },
    processLabel: { es: "Metodología", en: "Methodology" },
    processHeading: { es: "Un método claro, conectado y medible en cada etapa.", en: "A clear, connected and measurable method at every stage." },
    workPrinciple: { es: "Trabajamos con procesos claros, comunicación directa y solo los pasos necesarios para lograr resultados reales.", en: "We work with clear processes, direct communication and only the steps needed to achieve real results." },
    finalCta: {
      heading: { es: "¿Hablamos de tu sitio web?", en: "Should we talk about your website?" },
      body: {
        es: "Coordinemos una llamada breve para entender tu proyecto y ver cómo ayudarte a crecer.",
        en: "Let's set up a brief call to understand your project and see how we can help you grow.",
      },
      ctaLabel: { es: "Agendar una llamada de 20 minutos", en: "Schedule a 20-minute call" },
      ctaNote: { es: "Respondemos en menos de 24 horas, sin compromiso.", en: "We respond within 24 hours, no strings attached." },
    },
    cta: { es: "Hablar sobre tu proyecto", en: "Talk about your project" },
  },

  {
    slug: "aplicaciones-web",
    theme: { primary: "var(--electric)" },
    meta: {
      es: { title: "Aplicaciones Web y Software a Medida | ALORA", desc: "Diseñamos y desarrollamos aplicaciones web y sistemas de software a medida para digitalizar y escalar tu negocio." },
      en: { title: "Custom Web Applications & Software | ALORA", desc: "We design and develop custom web applications and software systems to digitize and scale your business." },
    },
    hero: {
      es: {
        badge: "Aplicaciones Web",
        headline: "Aplicaciones web que digitalizan y escalan tu negocio",
        headlineLines: ["Aplicaciones web", "que digitalizan y", "escalan tu negocio"],
        sub: "Diseñamos y desarrollamos aplicaciones web y sistemas de software a medida — desde herramientas internas hasta plataformas SaaS — pensados para resolver problemas reales y crecer con vos.",
      },
      en: {
        badge: "Web Applications",
        headline: "Web applications that digitize and scale your business",
        headlineLines: ["Web applications that", "digitize and scale", "your business"],
        sub: "We design and develop custom web applications and software systems — from internal tools to SaaS platforms — built to solve real problems and grow with you.",
      },
    },
    heroNote: { es: "Llamada online de 20 minutos", en: "20-minute online call" },
    appExplainer: {
      label: { es: "Aplicaciones Web", en: "Web Applications" },
      heading: { es: "¿Qué es una aplicación web?", en: "What is a web application?" },
      intro: {
        es: "Antes de construir, vale la pena entender qué es y qué no es una aplicación web, y por qué suele ser la opción más flexible para digitalizar tu negocio.",
        en: "Before building, it's worth understanding what a web application is and isn't, and why it's usually the most flexible option to digitize your business.",
      },
      definition: {
        title: {
          es: "Una herramienta que corre en el navegador, no en una tienda de apps",
          en: "A tool that runs in the browser, not in an app store",
        },
        body: {
          es: "Una aplicación web (o web app) es un sistema que funciona directamente desde el navegador, sin necesidad de instalación. Se diseña entendiendo primero el problema real que tiene que resolver, un flujo de trabajo, una gestión, una operación, y después se construye la arquitectura, la base de datos y la interfaz que lo hacen posible.",
          en: "A web application (or web app) is a system that runs directly from the browser, with no installation required. It's designed by first understanding the real problem it needs to solve, a workflow, a management process, an operation, and then building the architecture, database and interface that make it possible.",
        },
      },
      comparison: {
        heading: {
          es: "Apps nativas, PWAs y aplicaciones web: no son lo mismo",
          en: "Native apps, PWAs and web applications: not the same thing",
        },
        columns: {
          es: [
            { tag: "APP NATIVA", title: "App Store / Google Play", body: "Se instala desde una tienda de aplicaciones. Accede a funciones del dispositivo, pero requiere aprobación de Apple o Google, mantener dos versiones (iOS y Android) y actualizaciones que dependen de que el usuario las instale." },
            { tag: "PWA", title: "Progressive Web App", body: "Un sitio web que se puede \"instalar\" como ícono en el celular. Funciona parcialmente offline y no depende de una tienda de apps, pero tiene acceso limitado a las funciones nativas del dispositivo." },
            { tag: "WEB APP A MEDIDA", title: "Lo que construimos en ALORA", body: "Corre 100% en el navegador, sin instalación. Se actualiza al instante para todos los usuarios y es accesible desde cualquier dispositivo. Ideal para herramientas internas, portales y plataformas de gestión.", highlight: true },
          ],
          en: [
            { tag: "NATIVE APP", title: "App Store / Google Play", body: "Installed from an app store. Accesses device features, but requires Apple or Google approval, maintaining two versions (iOS and Android), and updates that depend on the user installing them." },
            { tag: "PWA", title: "Progressive Web App", body: "A website that can be \"installed\" as an icon on your phone. Works partially offline and doesn't depend on an app store, but has limited access to native device features." },
            { tag: "CUSTOM WEB APP", title: "What we build at ALORA", body: "Runs 100% in the browser, no installation. Updates instantly for every user and is accessible from any device. Ideal for internal tools, portals and management platforms.", highlight: true },
          ],
        },
      },
    },
    whatWeBuild: {
      label: { es: "Qué construimos", en: "What we build" },
      heading: { es: "Sistemas pensados para tu operación, no para una plantilla", en: "Systems built for your operation, not a template" },
      intro: { es: "Sistemas de software diseñados para soportar el crecimiento, la complejidad y las operaciones reales.", en: "Software systems designed to support growth, complexity and real operations." },
      items: {
        es: [
          { icon: "gears", title: "Sistemas de gestión internos", body: "Software a medida para operaciones, logística, finanzas y flujos de trabajo internos." },
          { icon: "portal", title: "Portales para clientes o socios", body: "Plataformas para que clientes y socios interactúen con tu negocio y autogestionen información." },
          { icon: "cloud", title: "Productos y plataformas SaaS", body: "Productos diseñados para usuarios externos, construidos con escalabilidad y crecimiento en mente." },
          { icon: "controls", title: "Paneles de administración y dashboards", body: "Control total sobre datos, usuarios y operaciones desde un solo lugar." },
          { icon: "api", title: "Arquitecturas API-driven", body: "Sistemas construidos para integraciones, flexibilidad y evolución técnica a largo plazo." },
        ],
        en: [
          { icon: "gears", title: "Internal management systems", body: "Custom software for operations, logistics, finance and internal workflows." },
          { icon: "portal", title: "Client or partner portals", body: "Platforms for clients and partners to interact with your business and self-manage information." },
          { icon: "cloud", title: "SaaS products and platforms", body: "Products designed for external users, built with scalability and growth in mind." },
          { icon: "controls", title: "Admin panels and dashboards", body: "Full control over data, users and operations from a single place." },
          { icon: "api", title: "API-driven architectures", body: "Systems built for integrations, flexibility and long-term technical evolution." },
        ],
      },
    },
    approach: {
      label: { es: "Nuestro enfoque", en: "Our approach" },
      heading: { es: "Diseño centrado en el problema, no solo en la tecnología", en: "Design centered on the problem, not just the technology" },
      body: {
        es: "No empezamos por el stack técnico. Empezamos por entender el problema real que tu negocio necesita resolver y cómo trabaja tu equipo. Cada decisión de arquitectura, flujo e interfaz responde a eso, para que el sistema no solo funcione, sino que se use de verdad.",
        en: "We don't start with the tech stack. We start by understanding the real problem your business needs to solve and how your team works. Every architecture, flow and interface decision responds to that, so the system doesn't just function, it actually gets used.",
      },
      bullets: {
        es: ["Foco en el problema de negocio, no solo en la tecnología", "Arquitectura pensada para escalar sin reescribir todo", "Entrega en ciclos cortos, con feedback constante"],
        en: ["Focus on the business problem, not just the technology", "Architecture designed to scale without rewriting everything", "Delivery in short cycles, with constant feedback"],
      },
      cards: {
        es: [
          { icon: "target", title: "Foco en tu negocio y tu operación real", body: "Arquitectura y flujos adaptados a cómo trabaja tu equipo, no a un molde genérico." },
          { icon: "search", title: "Optimizado para SEO, GEO, AIO y LLM", body: "Cuando corresponde, preparado para posicionar en buscadores y motores de IA." },
          { icon: "controls", title: "Sistemas autogestionables", body: "Paneles y controles propios para que gestiones tu sistema sin depender de nosotros." },
          { icon: "spark", title: "Desarrollo AI-first", body: "Combinamos prácticas de ingeniería sólidas con procesos acelerados por IA para construir software más rápido." },
        ],
        en: [
          { icon: "target", title: "Focus on your business and real operation", body: "Architecture and flows adapted to how your team works, not a generic mold." },
          { icon: "search", title: "Optimized for SEO, GEO, AIO and LLM", body: "When relevant, built to rank in search engines and AI engines alike." },
          { icon: "controls", title: "Self-manageable systems", body: "Your own panels and controls to manage your system without depending on us." },
          { icon: "spark", title: "AI-first development", body: "We combine solid engineering practices with AI-accelerated workflows to build software faster." },
        ],
      },
    },
    useCases: {
      label: { es: "Casos de uso", en: "Use cases" },
      heading: { es: "Para qué se usan las aplicaciones web", en: "What web applications are used for" },
      items: {
        es: [
          "Gestionar clientes, pacientes o socios en un solo sistema (CRM)",
          "Crear paneles de administración con reportes y control total",
          "Digitalizar turnos, reservas o inscripciones",
          "Construir portales para que clientes o equipos autogestionen información",
          "Armar sistemas de ranking, puntuación o seguimiento de resultados",
          "Conectar y automatizar procesos entre distintas herramientas",
        ],
        en: [
          "Managing clients, patients or members in one system (CRM)",
          "Building admin panels with reports and full control",
          "Digitizing appointments, bookings or registrations",
          "Building portals for clients or teams to self-manage information",
          "Building ranking, scoring or results-tracking systems",
          "Connecting and automating processes between different tools",
        ],
      },
    },
    featuresLabel: { es: "Qué incluye", en: "What's included" },
    featuresHeading: { es: "Qué incluye el servicio de aplicaciones web", en: "What our web application service includes" },
    featuresDetailed: {
      es: [
        { icon: "search", title: "Diagnóstico y definición del problema a resolver", body: "Entendemos el proceso real de tu negocio antes de escribir una sola línea de código." },
        { icon: "navigation", title: "Diseño de flujos y experiencia para usuarios reales", body: "Diseñamos pantallas y flujos pensados para cómo trabaja tu equipo, no para un molde genérico." },
        { icon: "structure", title: "Arquitectura técnica escalable y mantenible", body: "Definimos una base sólida para que el sistema crezca sin tener que reescribirse." },
        { icon: "code", title: "Desarrollo con tecnología moderna", body: "Construimos con buenas prácticas y tecnología pensada para durar y evolucionar." },
        { icon: "controls", title: "Panel de administración y control total", body: "Te entregamos las herramientas para gestionar datos, usuarios y operaciones vos mismo." },
        { icon: "api", title: "Integraciones con herramientas existentes", body: "Conectamos el sistema con lo que ya usás: CRM, ERP, pagos, comunicaciones." },
        { icon: "speed", title: "Pruebas, seguridad y validación", body: "Testeamos cada flujo y validamos seguridad y performance antes de lanzar." },
        { icon: "plug", title: "Acompañamiento y evolución post-lanzamiento", body: "Seguimos cerca después del lanzamiento para ajustar y sumar funciones reales." },
      ],
      en: [
        { icon: "search", title: "Diagnosis and problem definition", body: "We understand your business's real process before writing a single line of code." },
        { icon: "navigation", title: "Flow design and real user experience", body: "We design screens and flows built for how your team actually works, not a generic mold." },
        { icon: "structure", title: "Scalable, maintainable technical architecture", body: "We define a solid foundation so the system can grow without being rewritten." },
        { icon: "code", title: "Development with modern technology", body: "We build with good practices and technology meant to last and evolve." },
        { icon: "controls", title: "Admin panel and full control", body: "We give you the tools to manage data, users and operations yourself." },
        { icon: "api", title: "Integrations with existing tools", body: "We connect the system with what you already use: CRM, ERP, payments, communications." },
        { icon: "speed", title: "Testing, security and validation", body: "We test every flow and validate security and performance before launch." },
        { icon: "plug", title: "Post-launch support and evolution", body: "We stay close after launch to adjust and add real features." },
      ],
    },
    featuresConclusion: {
      es: "Todo lo necesario para tener una aplicación web sólida, funcional y preparada para escalar.",
      en: "Everything you need for a solid, functional web application that's ready to scale.",
    },
    projectsIntro: {
      es: "Desarrollamos aplicaciones web para distintos tipos de negocios, siempre con el mismo criterio: solidez técnica, usabilidad real y foco en resultados.",
      en: "We develop web applications for different types of businesses, always with the same criteria: technical soundness, real usability and a focus on results.",
    },
    projects: [
      { name: "Soy LIDIA", url: "https://soylidia.com", image: "/images/soylidia.png", es: "Sistema de gestión para profesionales de la salud con WhatsApp integrado. Calendario, pacientes, equipo, sucursales y pagos.", en: "Management system for health professionals with integrated WhatsApp. Calendar, patients, team, branches and payments." },
      { name: "Ranking Tenis de Mesa", url: "https://tenisdemesatrenque.com.ar", image: "/images/tenisDeMesaImageRank.png", es: "Sistema completo de gestión de ranking para Tenis de Mesa con perfiles de jugadores, estadísticas y clasificaciones.", en: "Complete ranking management system for Table Tennis with player profiles, statistics and classifications." },
      { name: "LIDIA Superadmin", url: "https://soylidia.com/superadmin", image: "/images/superadmin.png", es: "Panel de administración del sistema LIDIA con gestión multi-sucursal, reportes y control completo de la plataforma.", en: "LIDIA system administration panel with multi-branch management, reports and full platform control." },
      { name: "Club de Escritura", url: "https://club.rulodeviaje.com", image: "/images/talleres.png", es: "Sistema web con login de usuarios, suscripción y desafíos mensuales de escritura y lectura para comunidades creativas.", en: "Web system with user login, subscriptions and monthly creative writing and reading challenges for communities." },
      { name: "Protorneos", url: "https://protorneos.com", image: "/images/protorneo.png", es: "Sistema de gestión de torneos y rankings deportivos con panel de administración completo.", en: "Tournament and sports ranking management system with full admin panel." },
    ],
    whyUsExtra: {
      heading: { es: "Una aplicación web hecha por gente que entiende de negocio, no solo de código", en: "A web application built by people who understand business, not just code" },
      intro: {
        es: "No solo escribimos código. Construimos herramientas digitales que resuelven problemas reales y hacen crecer tu negocio.",
        en: "We don't just write code. We build digital tools that solve real problems and grow your business.",
      },
      reasons: {
        es: [
          { tag: "ENFOQUE", label: "Cada decisión responde a resolver un problema real, no a una moda" },
          { tag: "VELOCIDAD", label: "Procesos ágiles, sin vueltas ni demoras innecesarias" },
          { tag: "CERCANÍA", label: "Comunicación directa con el equipo que construye tu sistema" },
          { tag: "CALIDAD", label: "Código sólido, mantenible y preparado para escalar" },
          { tag: "AUTONOMÍA", label: "Te dejamos el control total para gestionar tu sistema" },
          { tag: "ACOMPAÑAMIENTO", label: "Seguimos cerca después del lanzamiento, no desaparecemos" },
        ],
        en: [
          { tag: "FOCUS", label: "Every decision responds to solving a real problem, not a trend" },
          { tag: "SPEED", label: "Agile processes, no unnecessary detours or delays" },
          { tag: "PROXIMITY", label: "Direct communication with the team building your system" },
          { tag: "QUALITY", label: "Solid, maintainable code that's ready to scale" },
          { tag: "AUTONOMY", label: "Full control handed to you to manage your system" },
          { tag: "SUPPORT", label: "We stay close after launch, we don't disappear" },
        ],
      },
    },
    testimonials: {
      es: [
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
      en: [
        {
          quote: "Working with Alora was an excellent experience. They developed both our institutional website and a fully custom professional ranking system, which now lets us manage players, statistics and points clearly and efficiently. The platform is fast, easy to use, and gave our table tennis organization a real leap in quality. There was always good communication, commitment and willingness to adapt the system to our real needs.",
          tags: ["Comprehensive system", "Efficient management", "Easy to use"],
          name: "Alejandro",
          role: "President of the Table Tennis Commission",
        },
        {
          quote: "At Fundación por Nuestros Niños we're grateful for the process we shared in creating our website. It's been a wonderful experience that also let us revisit some very important aspects of our organization. It was a pending debt for our NGO, which has worked for more than 28 years for the children of Salta. Thank you for the warmth, commitment, professionalism and patience of the Alora team. We hope to keep our alliance for the common good!",
          tags: ["Collaborative process", "Social impact", "Committed team"],
          name: "Verónica Figueroa",
          role: "Fundación por Nuestros Niños – Chair of the Board",
        },
        {
          quote: "It was a pleasure working with Bruno and his team — the processes and communication channels, how they managed timelines, and the seriousness with which they approached the work. They took the time to understand the essence of the project, made relevant suggestions, and were always willing to resolve any situation. I was very happy with the work delivered and I recommend them.",
          tags: ["Clear process", "Open communication", "Flawless results"],
          name: "Rulo de Viaje",
          role: "Founder of the Club Rulo de Viaje community",
        },
        {
          quote: "During this time, the work was very professional, with great responsiveness and on-time delivery. Communication was always clear and effective. I'd highlight the commitment and efficiency.",
          tags: ["Consistent professionalism", "Clear communication", "Commitment and efficiency"],
          name: "Fernando Celaya",
          role: "Starley – Manager",
        },
      ],
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
    process: {
      es: [
        { n: "01", title: "Llamada de relevamiento", body: "Una primera llamada para conocer tu proyecto, tu negocio y qué necesitás lograr." },
        { n: "02", title: "Análisis del negocio", body: "Entendemos objetivos, contexto y prioridades reales. Definimos qué debe lograr la aplicación y qué métricas vamos a mover." },
        { n: "03", title: "Arquitectura y foco", body: "Convertimos objetivos en estructura técnica y alcance. Priorizamos funcionalidades, integraciones y criterios antes del desarrollo." },
        { n: "04", title: "Experiencia y flujos", body: "Diseñamos interfaz y flujos que guían al usuario. Prototipamos pantallas listas para validar con tu equipo." },
        { n: "05", title: "Desarrollo y QA", body: "Construimos con código mantenible y pruebas en cada iteración. Integramos APIs, seguridad y performance antes del lanzamiento." },
        { n: "06", title: "Lanzamiento y mejora continua", body: "Acompañamos la puesta en producción y los ajustes reales. Medimos comportamiento y planificamos evolutivos junto a tu equipo." },
      ],
      en: [
        { n: "01", title: "Discovery call", body: "A first call to learn about your project, your business and what you need to achieve." },
        { n: "02", title: "Business analysis", body: "We understand real objectives, context and priorities. This defines what the application must achieve and which metrics we'll move." },
        { n: "03", title: "Architecture and focus", body: "We turn objectives into technical structure and scope. We prioritize features, integrations and criteria before development." },
        { n: "04", title: "Experience and flows", body: "We design the interface and flows that guide the user. We prototype screens ready to validate with your team." },
        { n: "05", title: "Development and QA", body: "We build with maintainable code and testing at every iteration. We integrate APIs, security and performance before launch." },
        { n: "06", title: "Launch and continuous improvement", body: "We support the rollout to production and real-world adjustments. We measure behavior and plan evolutions together with your team." },
      ],
    },
    processLabel: { es: "Metodología", en: "Methodology" },
    processHeading: { es: "Un método claro, conectado y medible en cada etapa.", en: "A clear, connected and measurable method at every stage." },
    workPrinciple: { es: "Trabajamos con procesos claros, comunicación directa y solo los pasos necesarios para lograr resultados reales.", en: "We work with clear processes, direct communication and only the steps needed to achieve real results." },
    finalCta: {
      heading: { es: "¿Hablamos de tu aplicación web?", en: "Should we talk about your web application?" },
      body: {
        es: "Coordinemos una llamada breve para entender tu proyecto y ver cómo ayudarte a construirlo.",
        en: "Let's set up a brief call to understand your project and see how we can help you build it.",
      },
      ctaLabel: { es: "Agendar una llamada de 20 minutos", en: "Schedule a 20-minute call" },
      ctaNote: { es: "Respondemos en menos de 24 horas, sin compromiso.", en: "We respond within 24 hours, no strings attached." },
    },
    cta: { es: "Contanos qué necesitás construir", en: "Tell us what you need to build" },
  },

  {
    slug: "ecommerce",
    theme: { primary: "var(--violet)" },
    meta: {
      es: { title: "Ecommerce y Tiendas Online | ALORA", desc: "Diseñamos y desarrollamos tiendas online pensadas para vender, gestionar y escalar." },
      en: { title: "Ecommerce & Online Stores | ALORA", desc: "We design and develop online stores built to sell, manage and scale." },
    },
    hero: {
      es: { badge: "Ecommerce", headline: "Una tienda online que vende todos los días", sub: "Diseñamos y desarrollamos tiendas online funcionales, claras y orientadas a conversión. Una tienda online no es solo un catálogo. Es estructura, confianza, medios de pago y una experiencia de compra que funciona." },
      en: { badge: "Ecommerce", headline: "An online store that sells every day", sub: "We design and develop functional, clear and conversion-oriented online stores. An online store is not just a catalog. It's structure, trust, payment methods and a shopping experience that works." },
    },
    heroNote: { es: "Llamada online de 20 minutos", en: "20-minute online call" },
    whatWeBuild: {
      heading: { es: "Qué construimos", en: "What we build" },
      intro: {
        es: "Tiendas online pensadas para cada tipo de catálogo y modelo de negocio, siempre con la misma base: claridad, confianza y foco en la venta.",
        en: "Online stores built for every type of catalog and business model, always on the same foundation: clarity, trust and a focus on selling.",
      },
      items: {
        es: [
          { icon: "cart", title: "Tiendas WooCommerce completas", body: "Catálogo, carrito, checkout y panel de administración configurados de punta a punta." },
          { icon: "layers", title: "Catálogos con variantes", body: "Productos con talles, colores, combos y variantes, organizados para que el cliente encuentre lo que busca." },
          { icon: "plug", title: "Medios de pago y envíos locales", body: "Pasarelas de pago, reglas de envío, retiro en sucursal y pricing dinámico." },
          { icon: "api", title: "Integraciones con ERP, CRM y marketplaces", body: "Conectamos tu tienda con las herramientas que ya usás para vender y gestionar stock." },
          { icon: "portal", title: "Tiendas multi-idioma y multi-moneda", body: "Para vender a distintos mercados sin duplicar el trabajo de gestión." },
        ],
        en: [
          { icon: "cart", title: "Complete WooCommerce stores", body: "Catalog, cart, checkout and admin panel configured end to end." },
          { icon: "layers", title: "Catalogs with variants", body: "Products with sizes, colors, combos and variants, organized so customers find what they're looking for." },
          { icon: "plug", title: "Local payment methods and shipping", body: "Payment gateways, shipping rules, in-store pickup and dynamic pricing." },
          { icon: "api", title: "ERP, CRM and marketplace integrations", body: "We connect your store with the tools you already use to sell and manage stock." },
          { icon: "portal", title: "Multi-language and multi-currency stores", body: "To sell to different markets without duplicating management work." },
        ],
      },
    },
    approach: {
      label: { es: "Nuestro enfoque", en: "Our approach" },
      heading: { es: "Diseño centrado en vender, no solo en mostrar productos", en: "Design centered on selling, not just showing products" },
      body: {
        es: "No empezamos por el catálogo. Empezamos por entender tu producto, tu cliente y cómo compra. Cada decisión de estructura, contenido y flujo de compra responde a un solo objetivo: que la tienda venda, no que solo se vea bien.",
        en: "We don't start with the catalog. We start by understanding your product, your customer and how they buy. Every structure, content and purchase-flow decision responds to a single objective: making the store sell, not just look good.",
      },
      bullets: {
        es: ["Foco en conversión y ticket promedio, no solo en estética", "Flujo de compra simple, sin fricciones ni pasos de más", "Performance y SEO técnico desde el desarrollo, no como un parche"],
        en: ["Focus on conversion and average ticket, not just aesthetics", "Simple purchase flow, without friction or extra steps", "Performance and technical SEO from development, not as a patch"],
      },
      cards: {
        es: [
          { icon: "target", title: "Foco en conversión y ticket promedio", body: "Cada decisión de diseño y flujo apunta a vender más y mejor." },
          { icon: "search", title: "Optimizado para SEO, GEO, AIO y LLM", body: "Preparado para que tus productos aparezcan en buscadores y motores de IA." },
          { icon: "controls", title: "Gestión autónoma de productos y pedidos", body: "Cargá productos, precios y stock vos mismo, sin depender de nosotros." },
          { icon: "spark", title: "Desarrollo AI-first", body: "Combinamos prácticas de desarrollo sólidas con procesos acelerados por IA para construir tiendas más rápido." },
        ],
        en: [
          { icon: "target", title: "Focus on conversion and average ticket", body: "Every design and flow decision aims to sell more and better." },
          { icon: "search", title: "Optimized for SEO, GEO, AIO and LLM", body: "Built so your products show up in search engines and AI engines alike." },
          { icon: "controls", title: "Self-managed products and orders", body: "Load products, prices and stock yourself, without depending on us." },
          { icon: "spark", title: "AI-first development", body: "We combine solid development practices with AI-accelerated workflows to build stores faster." },
        ],
      },
    },
    beforeAfter: {
      label: { es: "Tienda propia vs. plataforma enlatada", en: "Custom store vs. off-the-shelf platform" },
      heading: {
        es: "¿Por qué una tienda propia es mejor que Tienda Nube, Empretienda o Shopify?",
        en: "Why is a custom store better than Tienda Nube, Empretienda or Shopify?",
      },
      intro: {
        es: "Esto es para vos si ya tenés una tienda armada en una plataforma enlatada, tu negocio está creciendo, y descubriste que para hacer casi cualquier cosa nueva tenés que pagar más o directamente no se puede.",
        en: "This is for you if you already have a store built on an off-the-shelf platform, your business is growing, and you've found that doing almost anything new means paying more or just isn't possible.",
      },
      rows: {
        es: [
          { label: "Costos a largo plazo", before: "Comisión o suscripción mensual de por vida", after: "Sin mensualidades ni comisiones por venta" },
          { label: "Libertad de diseño y funciones", before: "Limitada a plantillas y planes del proveedor", after: "100% a medida: agregás o quitás lo que quieras" },
          { label: "Funcionalidades nuevas", before: "Cada función extra tiene un costo o un límite", after: "Se construye lo que tu negocio necesita, sin techos" },
          { label: "Tracking y anuncios", before: "Datos limitados por la plataforma", after: "Tracking completo para optimizar tus campañas" },
          { label: "Propiedad del sistema", before: "Alquilás una plataforma que no es tuya", after: "El desarrollo es 100% tuyo y de tu negocio" },
        ],
        en: [
          { label: "Long-term costs", before: "Monthly fee or commission forever", after: "No monthly fees or per-sale commissions" },
          { label: "Design and feature freedom", before: "Limited to the provider's templates and plans", after: "100% custom: add or remove whatever you want" },
          { label: "New features", before: "Every extra feature costs more or hits a limit", after: "We build exactly what your business needs, no ceilings" },
          { label: "Tracking and ads", before: "Limited data controlled by the platform", after: "Full tracking to optimize your ad campaigns" },
          { label: "System ownership", before: "You're renting a platform that isn't yours", after: "The development is 100% yours and your business's" },
        ],
      },
      closing: {
        es: "¿Ya tenés una tienda enlatada y sentís que no podés crecer más? Podés convertirla en una tienda 100% personalizada, sin perder lo que ya construiste.",
        en: "Already have an off-the-shelf store and feel like you can't grow any further? You can turn it into a 100% custom store, without losing what you've already built.",
      },
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
      ],
    },
    featuresLabel: { es: "Qué incluye", en: "What's included" },
    featuresHeading: { es: "Qué incluye el servicio de ecommerce", en: "What our ecommerce service includes" },
    featuresDetailed: {
      es: [
        { icon: "structure", title: "Definición de estructura y flujo de compra", body: "Organizamos categorías, navegación y el camino de compra para que sea simple y directo." },
        { icon: "design", title: "Diseño visual alineado a tu marca", body: "Un diseño que representa tu marca y genera confianza para comprar." },
        { icon: "mobile", title: "Experiencia optimizada para dispositivos móviles", body: "La mayoría de las compras se hacen desde el celular: nos aseguramos de que funcione perfecto ahí." },
        { icon: "cart", title: "Desarrollo completo en WooCommerce", body: "Configuramos toda la plataforma: catálogo, carrito, checkout y panel de administración." },
        { icon: "layers", title: "Organización y carga de productos", body: "Te ayudamos a estructurar y cargar tu catálogo con variantes, precios y stock." },
        { icon: "plug", title: "Medios de pago y envíos configurados", body: "Integramos pasarelas de pago locales y reglas de envío, retiro y pricing dinámico." },
        { icon: "api", title: "Integraciones con ERP, CRM y marketplaces", body: "Conectamos tu tienda con las herramientas que ya usás para vender y gestionar stock." },
        { icon: "speed", title: "Optimización de rendimiento", body: "Una tienda rápida vende más: optimizamos velocidad y aspectos técnicos clave." },
      ],
      en: [
        { icon: "structure", title: "Purchase flow structure definition", body: "We organize categories, navigation and the purchase path to keep it simple and direct." },
        { icon: "design", title: "Visual design aligned with your brand", body: "A design that represents your brand and builds trust to buy." },
        { icon: "mobile", title: "Mobile-optimized experience", body: "Most purchases happen on mobile: we make sure it works perfectly there." },
        { icon: "cart", title: "Complete WooCommerce development", body: "We set up the whole platform: catalog, cart, checkout and admin panel." },
        { icon: "layers", title: "Product organization and loading", body: "We help you structure and load your catalog with variants, prices and stock." },
        { icon: "plug", title: "Payment methods and shipping configured", body: "We integrate local payment gateways and shipping, pickup and dynamic pricing rules." },
        { icon: "api", title: "ERP, CRM and marketplace integrations", body: "We connect your store with the tools you already use to sell and manage stock." },
        { icon: "speed", title: "Performance optimization", body: "A fast store sells more: we optimize speed and key technical aspects." },
      ],
    },
    featuresConclusion: {
      es: "Todo lo necesario para tener una tienda online lista para vender, gestionar y crecer.",
      en: "Everything you need for an online store that's ready to sell, manage and grow.",
    },
    projectsIntro: {
      es: "Desarrollamos tiendas online para distintos rubros, siempre con el mismo criterio: claridad, confianza y foco en la venta.",
      en: "We develop online stores for different industries, always with the same criteria: clarity, trust and a focus on selling.",
    },
    projects: [
      { name: "Mimi Kids", url: "https://mimikids.com.ar", image: "/images/case-studies/mimikids/hero-v2.png", es: "Tienda artesanal de portachupetes personalizados con flujo de personalización, panel de administración propio y pagos con MercadoPago.", en: "Handmade personalized pacifier clip store with customization flow, custom admin panel and MercadoPago payments." },
      { name: "Nutriac", url: "https://nutriac.com.ar", image: "/images/nutriac.png", es: "Ecommerce 100% custom de productos nutricionales con integración de pagos local.", en: "100% custom nutritional products ecommerce with local payment integration." },
    ],
    whyUsExtra: {
      heading: { es: "Una tienda online hecha por gente que entiende de ventas, no solo de diseño", en: "An online store built by people who understand sales, not just design" },
      intro: {
        es: "No solo armamos tiendas lindas. Construimos herramientas de venta que funcionan de verdad.",
        en: "We don't just build nice-looking stores. We build sales tools that actually work.",
      },
      reasons: {
        es: [
          { tag: "ENFOQUE", label: "Cada decisión responde a vender más, no a una moda" },
          { tag: "VELOCIDAD", label: "Procesos ágiles, sin vueltas ni demoras innecesarias" },
          { tag: "CERCANÍA", label: "Comunicación directa con el equipo que construye tu tienda" },
          { tag: "CALIDAD", label: "Código sólido, mantenible y preparado para crecer" },
          { tag: "AUTONOMÍA", label: "Te dejamos el control total para gestionar productos y pedidos" },
          { tag: "ACOMPAÑAMIENTO", label: "Seguimos cerca después del lanzamiento, no desaparecemos" },
        ],
        en: [
          { tag: "FOCUS", label: "Every decision responds to selling more, not a trend" },
          { tag: "SPEED", label: "Agile processes, no unnecessary detours or delays" },
          { tag: "PROXIMITY", label: "Direct communication with the team building your store" },
          { tag: "QUALITY", label: "Solid, maintainable code that's ready to grow" },
          { tag: "AUTONOMY", label: "Full control handed to you to manage products and orders" },
          { tag: "SUPPORT", label: "We stay close after launch, we don't disappear" },
        ],
      },
    },
    testimonials: {
      es: [
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
      en: [
        {
          quote: "Working with Alora was an excellent experience. They developed both our institutional website and a fully custom professional ranking system, which now lets us manage players, statistics and points clearly and efficiently. The platform is fast, easy to use, and gave our table tennis organization a real leap in quality. There was always good communication, commitment and willingness to adapt the system to our real needs.",
          tags: ["Comprehensive system", "Efficient management", "Easy to use"],
          name: "Alejandro",
          role: "President of the Table Tennis Commission",
        },
        {
          quote: "At Fundación por Nuestros Niños we're grateful for the process we shared in creating our website. It's been a wonderful experience that also let us revisit some very important aspects of our organization. It was a pending debt for our NGO, which has worked for more than 28 years for the children of Salta. Thank you for the warmth, commitment, professionalism and patience of the Alora team. We hope to keep our alliance for the common good!",
          tags: ["Collaborative process", "Social impact", "Committed team"],
          name: "Verónica Figueroa",
          role: "Fundación por Nuestros Niños – Chair of the Board",
        },
        {
          quote: "It was a pleasure working with Bruno and his team — the processes and communication channels, how they managed timelines, and the seriousness with which they approached the work. They took the time to understand the essence of the project, made relevant suggestions, and were always willing to resolve any situation. I was very happy with the work delivered and I recommend them.",
          tags: ["Clear process", "Open communication", "Flawless results"],
          name: "Rulo de Viaje",
          role: "Founder of the Club Rulo de Viaje community",
        },
        {
          quote: "During this time, the work was very professional, with great responsiveness and on-time delivery. Communication was always clear and effective. I'd highlight the commitment and efficiency.",
          tags: ["Consistent professionalism", "Clear communication", "Commitment and efficiency"],
          name: "Fernando Celaya",
          role: "Starley – Manager",
        },
      ],
    },
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
    processLabel: { es: "Metodología", en: "Methodology" },
    processHeading: { es: "Un método claro, conectado y medible en cada etapa.", en: "A clear, connected and measurable method at every stage." },
    workPrinciple: { es: "Trabajamos con procesos claros, comunicación directa y solo los pasos necesarios para lograr resultados reales.", en: "We work with clear processes, direct communication and only the steps needed to achieve real results." },
    finalCta: {
      heading: { es: "¿Hablamos de tu tienda online?", en: "Should we talk about your online store?" },
      body: {
        es: "Coordinemos una llamada breve para entender tu proyecto y ver cómo ayudarte a vender más.",
        en: "Let's set up a brief call to understand your project and see how we can help you sell more.",
      },
      ctaLabel: { es: "Agendar una llamada de 20 minutos", en: "Schedule a 20-minute call" },
      ctaNote: { es: "Respondemos en menos de 24 horas, sin compromiso.", en: "We respond within 24 hours, no strings attached." },
    },
    cta: { es: "Hablemos de tu tienda online", en: "Let's talk about your online store" },
  },

  {
    slug: "chatbots",
    theme: { primary: "var(--electric)", secondary: "var(--violet)" },
    meta: {
      es: { title: "Chatbots IA para Calificar Leads y Agendar Llamadas | ALORA", desc: "Diseñamos chatbots con flujos guiados paso a paso para calificar leads, agendar llamadas y capturar contactos, automáticamente." },
      en: { title: "AI Chatbots to Qualify Leads and Book Calls | ALORA", desc: "We design chatbots with step-by-step guided flows to qualify leads, book calls and capture contacts, automatically." },
    },
    hero: {
      es: {
        badge: "Chatbots IA",
        headline: "Chatbots que guían a cada visita hacia una acción concreta",
        headlineLines: ["Chatbots que guían", "a cada visita hacia", "una acción concreta"],
        sub: "Diseñamos chatbots con flujos guiados paso a paso para calificar leads, reservar llamadas o capturar datos de contacto, según lo que tu negocio necesite en cada caso.",
      },
      en: {
        badge: "AI Chatbots",
        headline: "Chatbots that guide every visit to a concrete action",
        headlineLines: ["Chatbots that guide", "every visit to a", "concrete action"],
        sub: "We design chatbots with step-by-step guided flows to qualify leads, book calls or capture contact details, depending on what your business needs in each case.",
      },
    },
    heroNote: { es: "Llamada online de 20 minutos", en: "20-minute online call" },
    appExplainer: {
      label: { es: "Chatbots IA", en: "AI Chatbots" },
      heading: { es: "¿Qué es un chatbot con IA?", en: "What is an AI chatbot?" },
      intro: {
        es: "Antes de construir, vale la pena entender qué hace un chatbot y en qué se diferencia de un asistente conversacional con IA.",
        en: "Before building, it's worth understanding what a chatbot does and how it differs from a conversational AI agent.",
      },
      definition: {
        title: {
          es: "Un flujo guiado que lleva al usuario a una acción concreta",
          en: "A guided flow that leads the user to a concrete action",
        },
        body: {
          es: "Un chatbot con IA guía al usuario paso a paso, con opciones y preguntas claras, hacia un objetivo específico: dejar sus datos, calificar su interés o agendar una llamada. No sostiene charlas abiertas, conduce la conversación hacia una acción.",
          en: "An AI chatbot guides the user step by step, with clear options and questions, toward a specific goal: leaving their details, qualifying their interest or booking a call. It doesn't hold open-ended chats, it drives the conversation toward an action.",
        },
      },
      comparison: {
        heading: { es: "Chatbot guiado vs. asistente conversacional: no son lo mismo", en: "Guided chatbot vs. conversational agent: not the same thing" },
        columns: {
          es: [
            { tag: "CHATBOT IA", title: "Flujo guiado paso a paso", body: "Conduce al usuario con opciones y preguntas claras hacia una acción concreta: calificar un lead, reservar una llamada o dejar sus datos. Rápido de implementar y muy efectivo para conversión.", highlight: true },
            { tag: "AGENTE CONVERSACIONAL IA", title: "Conversación humana real", body: "Entiende lenguaje natural y sostiene una conversación genuina, respondiendo lo que el cliente pregunte de verdad. Es nuestro otro servicio de IA.", href: "/es/soluciones/atencion-cliente-ia", linkLabel: "Ver Agentes Conversacionales IA" },
          ],
          en: [
            { tag: "AI CHATBOT", title: "Step-by-step guided flow", body: "Guides the user with clear options and questions toward a concrete action: qualifying a lead, booking a call or leaving their details. Fast to implement and very effective for conversion.", highlight: true },
            { tag: "AI CONVERSATIONAL AGENT", title: "Real human-like conversation", body: "Understands natural language and holds a genuine conversation, actually answering what the customer asks. It's our other AI service.", href: "/en/soluciones/atencion-cliente-ia", linkLabel: "See AI Conversational Agents" },
          ],
        },
      },
    },
    whatWeBuild: {
      label: { es: "Qué construimos", en: "What we build" },
      heading: { es: "Chatbots pensados para convertir, no solo para responder", en: "Chatbots built to convert, not just to reply" },
      intro: { es: "Flujos de conversación diseñados para llevar a cada visitante hacia una acción concreta.", en: "Conversation flows designed to lead every visitor toward a concrete action." },
      items: {
        es: [
          { icon: "chat", title: "Chatbots de calificación de leads", body: "Preguntas guiadas que identifican quién está listo para comprar." },
          { icon: "navigation", title: "Chatbots para agendar llamadas o citas", body: "Reservá turnos y llamadas directo desde la conversación, sin ida y vuelta." },
          { icon: "portal", title: "Chatbots para captura de contacto", body: "Recolectá nombre, email y teléfono de forma natural, dentro del flujo." },
          { icon: "api", title: "Integración con WhatsApp, web e Instagram", body: "El mismo chatbot funciona en los canales donde ya están tus clientes." },
          { icon: "headset", title: "Derivación automática a un humano", body: "Cuando el caso lo requiere, deriva la conversación a tu equipo con todo el contexto." },
          { icon: "speed", title: "Reportes de conversión del flujo", body: "Medí en qué paso se caen los usuarios y optimizá el embudo." },
        ],
        en: [
          { icon: "chat", title: "Lead qualification chatbots", body: "Guided questions that identify who's ready to buy." },
          { icon: "navigation", title: "Chatbots to book calls or appointments", body: "Book slots and calls directly from the conversation, no back and forth." },
          { icon: "portal", title: "Contact capture chatbots", body: "Collect name, email and phone naturally, within the flow." },
          { icon: "api", title: "Integration with WhatsApp, web and Instagram", body: "The same chatbot works on the channels where your customers already are." },
          { icon: "headset", title: "Automatic handoff to a human", body: "When the case requires it, it hands off the conversation to your team with full context." },
          { icon: "speed", title: "Flow conversion reports", body: "See where users drop off and optimize the funnel." },
        ],
      },
    },
    approach: {
      label: { es: "Nuestro enfoque", en: "Our approach" },
      heading: { es: "Un chatbot pensado para tu embudo, no una charla genérica", en: "A chatbot built for your funnel, not a generic chat" },
      body: {
        es: "No armamos un bot que \"conversa por conversar\". Diseñamos un flujo con un objetivo claro, calificar, agendar o capturar contacto, y lo optimizamos según cómo se comportan tus usuarios reales.",
        en: "We don't build a bot that \"chats for the sake of chatting\". We design a flow with a clear objective, qualifying, booking or capturing contact, and optimize it based on how your real users behave.",
      },
      bullets: {
        es: ["Foco en la conversión, no en la charla", "Flujo simple, sin pasos de más", "Medible: sabés en qué paso se pierde cada usuario"],
        en: ["Focus on conversion, not on chatting", "Simple flow, no unnecessary steps", "Measurable: you know exactly where each user drops off"],
      },
      cards: {
        es: [
          { icon: "target", title: "Foco en tu embudo real", body: "El flujo se diseña según cómo tus clientes realmente deciden y compran." },
          { icon: "speed", title: "Optimizado para conversión", body: "Cada paso del chatbot está pensado para minimizar la fricción." },
          { icon: "controls", title: "Editable y autogestionable", body: "Ajustá preguntas y flujos vos mismo, sin depender de nosotros." },
          { icon: "spark", title: "Desarrollo AI-first", body: "Combinamos prácticas sólidas con procesos acelerados por IA para construir más rápido." },
        ],
        en: [
          { icon: "target", title: "Focus on your real funnel", body: "The flow is designed around how your customers actually decide and buy." },
          { icon: "speed", title: "Optimized for conversion", body: "Every step of the chatbot is designed to minimize friction." },
          { icon: "controls", title: "Editable and self-manageable", body: "Adjust questions and flows yourself, without depending on us." },
          { icon: "spark", title: "AI-first development", body: "We combine solid practices with AI-accelerated processes to build faster." },
        ],
      },
    },
    featuresLabel: { es: "Qué incluye", en: "What's included" },
    featuresHeading: { es: "Qué incluye el servicio de chatbots con IA", en: "What our AI chatbot service includes" },
    featuresDetailed: {
      es: [
        { icon: "search", title: "Análisis de tu embudo de conversión", body: "Identificamos en qué momento el chatbot puede calificar, agendar o capturar contacto." },
        { icon: "navigation", title: "Diseño del flujo paso a paso", body: "Armamos las preguntas y opciones que guían al usuario hacia la acción." },
        { icon: "design", title: "Diseño visual alineado a tu marca", body: "El chatbot se ve y se siente parte de tu marca, no un plugin genérico." },
        { icon: "api", title: "Integración con WhatsApp, web e Instagram", body: "Funciona en los canales donde ya están tus clientes." },
        { icon: "plug", title: "Conexión con tu CRM o planilla", body: "Los leads calificados llegan directo a donde los gestionás." },
        { icon: "controls", title: "Panel para editar el flujo", body: "Cambiá preguntas, mensajes y reglas sin tocar código." },
        { icon: "speed", title: "Métricas de conversión por paso", body: "Vemos en qué parte del flujo se caen los usuarios para optimizarlo." },
        { icon: "headset", title: "Derivación a un humano cuando corresponde", body: "El chatbot sabe cuándo pasar la conversación a tu equipo." },
      ],
      en: [
        { icon: "search", title: "Conversion funnel analysis", body: "We identify where the chatbot can qualify, book or capture contact." },
        { icon: "navigation", title: "Step-by-step flow design", body: "We build the questions and options that guide the user toward the action." },
        { icon: "design", title: "Visual design aligned with your brand", body: "The chatbot looks and feels like part of your brand, not a generic plugin." },
        { icon: "api", title: "Integration with WhatsApp, web and Instagram", body: "Works on the channels where your customers already are." },
        { icon: "plug", title: "Connection to your CRM or spreadsheet", body: "Qualified leads land directly where you manage them." },
        { icon: "controls", title: "Panel to edit the flow", body: "Change questions, messages and rules without touching code." },
        { icon: "speed", title: "Step-by-step conversion metrics", body: "We see where users drop off in the flow so we can optimize it." },
        { icon: "headset", title: "Handoff to a human when needed", body: "The chatbot knows when to pass the conversation to your team." },
      ],
    },
    featuresConclusion: {
      es: "Todo lo necesario para tener un chatbot que convierte, no que solo responde.",
      en: "Everything you need for a chatbot that converts, not one that just replies.",
    },
    projectsIntro: {
      es: "Estos son dos ejemplos reales de chatbots con IA que ya están funcionando.",
      en: "These are two real examples of AI chatbots already up and running.",
    },
    projects: [
      { name: "Alora Chatbot", url: "https://www.globalalora.com", image: "/images/alorawha.png", es: "Asistente con IA integrado en nuestro propio sitio y WhatsApp, disponible para resolver consultas y guiar a los visitantes en tiempo real.", en: "AI assistant integrated into our own website and WhatsApp, available to answer questions and guide visitors in real time." },
      { name: "LIDIA", url: "https://soylidia.com", image: "/images/soylidia.png", es: "Chatbot con IA para centros médicos y profesionales de la salud, integrado a WhatsApp para gestionar turnos, pacientes y consultas de forma automática.", en: "AI chatbot for medical centers and health professionals, integrated with WhatsApp to automatically manage appointments, patients and inquiries." },
    ],
    whyUsExtra: {
      heading: { es: "Un chatbot hecho para vender, no solo para responder preguntas", en: "A chatbot built to sell, not just to answer questions" },
      intro: {
        es: "No armamos un bot genérico. Diseñamos un flujo que convierte, adaptado a cómo compran tus clientes.",
        en: "We don't build a generic bot. We design a flow that converts, adapted to how your customers buy.",
      },
      reasons: {
        es: [
          { tag: "ENFOQUE", label: "Cada pregunta del flujo responde a un objetivo de conversión, no a rellenar una charla" },
          { tag: "VELOCIDAD", label: "Procesos ágiles, sin vueltas ni demoras innecesarias" },
          { tag: "CERCANÍA", label: "Comunicación directa con el equipo que construye tu chatbot" },
          { tag: "CALIDAD", label: "Flujos probados y optimizados, no armados a las apuradas" },
          { tag: "AUTONOMÍA", label: "Te dejamos el control total para editar preguntas y mensajes" },
          { tag: "ACOMPAÑAMIENTO", label: "Seguimos cerca después del lanzamiento, no desaparecemos" },
        ],
        en: [
          { tag: "FOCUS", label: "Every question in the flow serves a conversion goal, not small talk" },
          { tag: "SPEED", label: "Agile processes, no unnecessary detours or delays" },
          { tag: "PROXIMITY", label: "Direct communication with the team building your chatbot" },
          { tag: "QUALITY", label: "Tested, optimized flows, not put together in a rush" },
          { tag: "AUTONOMY", label: "Full control handed to you to edit questions and messages" },
          { tag: "SUPPORT", label: "We stay close after launch, we don't disappear" },
        ],
      },
    },
    testimonials: {
      es: [
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
      en: [
        {
          quote: "Working with Alora was an excellent experience. They developed both our institutional website and a fully custom professional ranking system, which now lets us manage players, statistics and points clearly and efficiently. The platform is fast, easy to use, and gave our table tennis organization a real leap in quality. There was always good communication, commitment and willingness to adapt the system to our real needs.",
          tags: ["Comprehensive system", "Efficient management", "Easy to use"],
          name: "Alejandro",
          role: "President of the Table Tennis Commission",
        },
        {
          quote: "At Fundación por Nuestros Niños we're grateful for the process we shared in creating our website. It's been a wonderful experience that also let us revisit some very important aspects of our organization. It was a pending debt for our NGO, which has worked for more than 28 years for the children of Salta. Thank you for the warmth, commitment, professionalism and patience of the Alora team. We hope to keep our alliance for the common good!",
          tags: ["Collaborative process", "Social impact", "Committed team"],
          name: "Verónica Figueroa",
          role: "Fundación por Nuestros Niños – Chair of the Board",
        },
        {
          quote: "It was a pleasure working with Bruno and his team — the processes and communication channels, how they managed timelines, and the seriousness with which they approached the work. They took the time to understand the essence of the project, made relevant suggestions, and were always willing to resolve any situation. I was very happy with the work delivered and I recommend them.",
          tags: ["Clear process", "Open communication", "Flawless results"],
          name: "Rulo de Viaje",
          role: "Founder of the Club Rulo de Viaje community",
        },
        {
          quote: "During this time, the work was very professional, with great responsiveness and on-time delivery. Communication was always clear and effective. I'd highlight the commitment and efficiency.",
          tags: ["Consistent professionalism", "Clear communication", "Commitment and efficiency"],
          name: "Fernando Celaya",
          role: "Starley – Manager",
        },
      ],
    },
    features: {
      es: [
        "Análisis del embudo de conversión",
        "Diseño del flujo paso a paso",
        "Integración con WhatsApp, web e Instagram",
        "Conexión con CRM o planilla",
        "Panel para editar el flujo",
        "Métricas de conversión por paso",
      ],
      en: [
        "Conversion funnel analysis",
        "Step-by-step flow design",
        "Integration with WhatsApp, web and Instagram",
        "Connection to CRM or spreadsheet",
        "Panel to edit the flow",
        "Step-by-step conversion metrics",
      ],
    },
    process: {
      es: [
        { n: "01", title: "Llamada de relevamiento", body: "Una primera llamada para conocer tu negocio, tu embudo de ventas y qué necesitás lograr." },
        { n: "02", title: "Análisis del embudo", body: "Identificamos en qué momento un chatbot puede calificar, agendar o capturar contacto." },
        { n: "03", title: "Diseño del flujo", body: "Armamos las preguntas, opciones y mensajes que guían al usuario paso a paso." },
        { n: "04", title: "Desarrollo e integración", body: "Construimos el chatbot y lo integramos con WhatsApp, web y tus herramientas." },
        { n: "05", title: "Pruebas y ajustes", body: "Testeamos todos los escenarios y ajustamos preguntas y respuestas." },
        { n: "06", title: "Activación y monitoreo", body: "Publicamos el chatbot y medimos su conversión para optimizarlo." },
      ],
      en: [
        { n: "01", title: "Discovery call", body: "A first call to learn about your business, your sales funnel and what you need to achieve." },
        { n: "02", title: "Funnel analysis", body: "We identify where a chatbot can qualify, book or capture contact." },
        { n: "03", title: "Flow design", body: "We build the questions, options and messages that guide the user step by step." },
        { n: "04", title: "Development and integration", body: "We build the chatbot and integrate it with WhatsApp, web and your tools." },
        { n: "05", title: "Testing and adjustments", body: "We test every scenario and adjust questions and responses." },
        { n: "06", title: "Activation and monitoring", body: "We deploy the chatbot and measure its conversion to optimize it." },
      ],
    },
    processLabel: { es: "Metodología", en: "Methodology" },
    processHeading: { es: "Un método claro, conectado y medible en cada etapa.", en: "A clear, connected and measurable method at every stage." },
    workPrinciple: { es: "Trabajamos con procesos claros, comunicación directa y solo los pasos necesarios para lograr resultados reales.", en: "We work with clear processes, direct communication and only the steps needed to achieve real results." },
    finalCta: {
      heading: { es: "¿Hablamos de tu chatbot?", en: "Should we talk about your chatbot?" },
      body: {
        es: "Coordinemos una llamada breve para entender tu embudo y ver cómo un chatbot puede ayudarte a convertir más.",
        en: "Let's set up a brief call to understand your funnel and see how a chatbot can help you convert more.",
      },
      ctaLabel: { es: "Agendar una llamada de 20 minutos", en: "Schedule a 20-minute call" },
      ctaNote: { es: "Respondemos en menos de 24 horas, sin compromiso.", en: "We respond within 24 hours, no strings attached." },
    },
    cta: { es: "Quiero un chatbot para mi negocio", en: "I want a chatbot for my business" },
  },

  {
    slug: "atencion-cliente-ia",
    theme: { primary: "var(--violet)", secondary: "var(--electric)" },
    meta: {
      es: { title: "Agentes Conversacionales con IA | ALORA", desc: "Diseñamos agentes conversacionales con IA que sostienen conversaciones reales con tus clientes y resuelven consultas de verdad." },
      en: { title: "AI Conversational Agents | ALORA", desc: "We design conversational AI agents that hold real conversations with your customers and genuinely resolve their queries." },
    },
    hero: {
      es: {
        badge: "Agentes Conversacionales IA",
        headline: "Agentes de IA que conversan de verdad con tus clientes",
        headlineLines: ["Agentes de IA que", "conversan de verdad", "con tus clientes"],
        sub: "Entienden lenguaje natural, responden lo que el cliente pregunte de verdad y resuelven consultas sin seguir un guion fijo, disponibles las 24 horas.",
      },
      en: {
        badge: "AI Conversational Agents",
        headline: "AI agents that hold real conversations with your customers",
        headlineLines: ["AI agents that hold", "real conversations", "with your customers"],
        sub: "They understand natural language, actually answer what the customer asks and resolve queries without following a fixed script, available around the clock.",
      },
    },
    heroNote: { es: "Llamada online de 20 minutos", en: "20-minute online call" },
    appExplainer: {
      label: { es: "Agentes Conversacionales IA", en: "AI Conversational Agents" },
      heading: { es: "¿Qué es un agente conversacional con IA?", en: "What is a conversational AI agent?" },
      intro: {
        es: "Antes de construir, vale la pena entender qué hace un agente conversacional y en qué se diferencia de un chatbot guiado.",
        en: "Before building, it's worth understanding what a conversational agent does and how it differs from a guided chatbot.",
      },
      definition: {
        title: {
          es: "Una IA que entiende y responde con lenguaje natural, no un guion fijo",
          en: "An AI that understands and responds in natural language, not a fixed script",
        },
        body: {
          es: "Un agente conversacional con IA sostiene una conversación real: entiende lo que el cliente pregunta aunque no siga un camino predefinido, y responde con información genuina sobre tu negocio. No conduce hacia una única acción, resuelve consultas de verdad.",
          en: "A conversational AI agent holds a real conversation: it understands what the customer is asking even if it doesn't follow a predefined path, and responds with genuine information about your business. It doesn't drive toward a single action, it actually resolves queries.",
        },
      },
      comparison: {
        heading: { es: "Agente conversacional vs. chatbot guiado: no son lo mismo", en: "Conversational agent vs. guided chatbot: not the same thing" },
        columns: {
          es: [
            { tag: "AGENTE CONVERSACIONAL IA", title: "Conversación humana real", body: "Entiende lenguaje natural y responde lo que el cliente pregunte de verdad, sin un guion fijo. Ideal para resolver dudas y dar soporte genuino.", highlight: true },
            { tag: "CHATBOT IA", title: "Flujo guiado paso a paso", body: "Conduce al usuario con opciones claras hacia una acción concreta: calificar un lead, reservar una llamada o dejar sus datos. Es nuestro otro servicio de IA.", href: "/es/soluciones/chatbots", linkLabel: "Ver Chatbots IA" },
          ],
          en: [
            { tag: "AI CONVERSATIONAL AGENT", title: "Real human-like conversation", body: "Understands natural language and actually answers what the customer asks, with no fixed script. Ideal for resolving questions and providing genuine support.", highlight: true },
            { tag: "AI CHATBOT", title: "Step-by-step guided flow", body: "Guides the user with clear options toward a concrete action: qualifying a lead, booking a call or leaving their details. It's our other AI service.", href: "/en/soluciones/chatbots", linkLabel: "See AI Chatbots" },
          ],
        },
      },
    },
    whatWeBuild: {
      label: { es: "Qué construimos", en: "What we build" },
      heading: { es: "Agentes de IA pensados para resolver, no para repetir un guion", en: "AI agents built to resolve, not to repeat a script" },
      intro: { es: "Conversaciones reales que entienden a tu cliente y responden con información genuina de tu negocio.", en: "Real conversations that understand your customer and respond with genuine information about your business." },
      items: {
        es: [
          { icon: "chat", title: "Agentes para atención al cliente 24/7", body: "Responden consultas reales en cualquier horario, sin depender de tu equipo." },
          { icon: "headset", title: "Soporte técnico conversacional", body: "Resuelven dudas frecuentes y guían al usuario ante problemas puntuales." },
          { icon: "portal", title: "Agentes con base de conocimiento propia", body: "Entrenados con la información real de tu negocio: productos, precios, políticas." },
          { icon: "api", title: "Integración con WhatsApp, web y redes", body: "El mismo agente conversa en los canales donde ya están tus clientes." },
          { icon: "controls", title: "Derivación inteligente a humanos", body: "Cuando la consulta lo requiere, deriva con todo el contexto de la conversación." },
          { icon: "speed", title: "Analytics de conversaciones", body: "Medimos qué preguntan tus clientes y qué tan bien se resuelve cada consulta." },
        ],
        en: [
          { icon: "chat", title: "24/7 customer service agents", body: "Answer real queries at any time, without depending on your team." },
          { icon: "headset", title: "Conversational technical support", body: "Resolve frequent questions and guide the user through specific issues." },
          { icon: "portal", title: "Agents with their own knowledge base", body: "Trained with your business's real information: products, prices, policies." },
          { icon: "api", title: "Integration with WhatsApp, web and social", body: "The same agent talks on the channels where your customers already are." },
          { icon: "controls", title: "Smart handoff to humans", body: "When the query requires it, hands off with the full context of the conversation." },
          { icon: "speed", title: "Conversation analytics", body: "We measure what your customers ask and how well each query is resolved." },
        ],
      },
    },
    approach: {
      label: { es: "Nuestro enfoque", en: "Our approach" },
      heading: { es: "Un agente que entiende a tu cliente, no que sigue un libreto", en: "An agent that understands your customer, not one that follows a script" },
      body: {
        es: "No armamos respuestas enlatadas. Entrenamos al agente con la información real de tu negocio para que responda como lo haría tu mejor persona de atención, con criterio, no con un árbol de decisiones rígido.",
        en: "We don't build canned responses. We train the agent with your business's real information so it responds the way your best support person would, with judgment, not a rigid decision tree.",
      },
      bullets: {
        es: ["Foco en resolver la consulta real, no en seguir un guion", "Base de conocimiento entrenada con tu información real", "Medible: sabés qué preguntan tus clientes y cómo se resuelve"],
        en: ["Focus on resolving the real query, not following a script", "Knowledge base trained with your real information", "Measurable: you know what your customers ask and how it gets resolved"],
      },
      cards: {
        es: [
          { icon: "target", title: "Foco en tu negocio real", body: "El agente conoce tus productos, precios y políticas reales, no respuestas genéricas." },
          { icon: "chat", title: "Conversación natural", body: "Entiende preguntas con sus propias palabras, no solo comandos exactos." },
          { icon: "controls", title: "Editable y autogestionable", body: "Ajustá el conocimiento y el tono del agente vos mismo, sin depender de nosotros." },
          { icon: "spark", title: "Desarrollo AI-first", body: "Combinamos prácticas sólidas con procesos acelerados por IA para construir más rápido." },
        ],
        en: [
          { icon: "target", title: "Focus on your real business", body: "The agent knows your real products, prices and policies, not generic answers." },
          { icon: "chat", title: "Natural conversation", body: "Understands questions in the customer's own words, not just exact commands." },
          { icon: "controls", title: "Editable and self-manageable", body: "Adjust the agent's knowledge and tone yourself, without depending on us." },
          { icon: "spark", title: "AI-first development", body: "We combine solid practices with AI-accelerated processes to build faster." },
        ],
      },
    },
    featuresLabel: { es: "Qué incluye", en: "What's included" },
    featuresHeading: { es: "Qué incluye el servicio de agentes conversacionales con IA", en: "What our conversational AI agent service includes" },
    featuresDetailed: {
      es: [
        { icon: "search", title: "Análisis de tus consultas frecuentes", body: "Identificamos qué preguntan realmente tus clientes y qué puede resolver el agente." },
        { icon: "design", title: "Entrenamiento con tu marca y tono", body: "El agente responde con la voz y personalidad de tu negocio." },
        { icon: "api", title: "Base de conocimiento con tu información real", body: "Cargamos productos, precios, políticas y todo lo que el agente necesita saber." },
        { icon: "plug", title: "Integración con WhatsApp, web y redes", body: "Funciona en los canales donde ya están tus clientes." },
        { icon: "headset", title: "Derivación inteligente a humanos", body: "Deriva con contexto completo cuando la consulta lo requiere." },
        { icon: "controls", title: "Panel para editar conocimiento y tono", body: "Actualizá información y ajustá respuestas sin tocar código." },
        { icon: "speed", title: "Analytics de conversaciones", body: "Medimos qué se pregunta y qué tan bien se resuelve cada consulta." },
        { icon: "code", title: "Desarrollo técnico sólido y escalable", body: "Construido para crecer en volumen de conversaciones sin perder calidad." },
      ],
      en: [
        { icon: "search", title: "Analysis of your frequent queries", body: "We identify what your customers really ask and what the agent can resolve." },
        { icon: "design", title: "Training with your brand and tone", body: "The agent responds with your business's voice and personality." },
        { icon: "api", title: "Knowledge base with your real information", body: "We load products, prices, policies and everything the agent needs to know." },
        { icon: "plug", title: "Integration with WhatsApp, web and social", body: "Works on the channels where your customers already are." },
        { icon: "headset", title: "Smart handoff to humans", body: "Hands off with full context when the query requires it." },
        { icon: "controls", title: "Panel to edit knowledge and tone", body: "Update information and adjust responses without touching code." },
        { icon: "speed", title: "Conversation analytics", body: "We measure what's asked and how well each query is resolved." },
        { icon: "code", title: "Solid, scalable technical development", body: "Built to grow in conversation volume without losing quality." },
      ],
    },
    featuresConclusion: {
      es: "Todo lo necesario para tener un agente que resuelve consultas de verdad, no que solo responde con un guion.",
      en: "Everything you need for an agent that genuinely resolves queries, not one that just replies with a script.",
    },
    projectsIntro: {
      es: "Estos son dos ejemplos reales de agentes conversacionales con IA que ya están funcionando.",
      en: "These are two real examples of conversational AI agents already up and running.",
    },
    projects: [
      { name: "Alora Chatbot", url: "https://www.globalalora.com", image: "/images/alorawha.png", es: "Asistente con IA integrado en nuestro propio sitio y WhatsApp, disponible para resolver consultas y guiar a los visitantes en tiempo real.", en: "AI assistant integrated into our own website and WhatsApp, available to answer questions and guide visitors in real time." },
      { name: "LIDIA", url: "https://soylidia.com", image: "/images/soylidia.png", es: "Agente conversacional con IA para centros médicos y profesionales de la salud, integrado a WhatsApp para resolver consultas de pacientes de forma automática.", en: "Conversational AI agent for medical centers and health professionals, integrated with WhatsApp to automatically resolve patient queries." },
    ],
    whyUsExtra: {
      heading: { es: "Un agente que representa a tu negocio, no un bot genérico", en: "An agent that represents your business, not a generic bot" },
      intro: {
        es: "No entrenamos una IA con respuestas de manual. La entrenamos con la realidad de tu negocio para que resuelva consultas de verdad.",
        en: "We don't train an AI with textbook answers. We train it with your business's reality so it genuinely resolves queries.",
      },
      reasons: {
        es: [
          { tag: "ENFOQUE", label: "Cada respuesta se basa en la información real de tu negocio, no en un genérico" },
          { tag: "VELOCIDAD", label: "Procesos ágiles, sin vueltas ni demoras innecesarias" },
          { tag: "CERCANÍA", label: "Comunicación directa con el equipo que entrena tu agente" },
          { tag: "CALIDAD", label: "Conversaciones probadas y ajustadas, no una IA suelta sin supervisión" },
          { tag: "AUTONOMÍA", label: "Te dejamos el control total para actualizar conocimiento y tono" },
          { tag: "ACOMPAÑAMIENTO", label: "Seguimos cerca después del lanzamiento, no desaparecemos" },
        ],
        en: [
          { tag: "FOCUS", label: "Every answer is based on your business's real information, not something generic" },
          { tag: "SPEED", label: "Agile processes, no unnecessary detours or delays" },
          { tag: "PROXIMITY", label: "Direct communication with the team training your agent" },
          { tag: "QUALITY", label: "Tested, tuned conversations, not an unsupervised AI running loose" },
          { tag: "AUTONOMY", label: "Full control handed to you to update knowledge and tone" },
          { tag: "SUPPORT", label: "We stay close after launch, we don't disappear" },
        ],
      },
    },
    testimonials: {
      es: [
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
      en: [
        {
          quote: "Working with Alora was an excellent experience. They developed both our institutional website and a fully custom professional ranking system, which now lets us manage players, statistics and points clearly and efficiently. The platform is fast, easy to use, and gave our table tennis organization a real leap in quality. There was always good communication, commitment and willingness to adapt the system to our real needs.",
          tags: ["Comprehensive system", "Efficient management", "Easy to use"],
          name: "Alejandro",
          role: "President of the Table Tennis Commission",
        },
        {
          quote: "At Fundación por Nuestros Niños we're grateful for the process we shared in creating our website. It's been a wonderful experience that also let us revisit some very important aspects of our organization. It was a pending debt for our NGO, which has worked for more than 28 years for the children of Salta. Thank you for the warmth, commitment, professionalism and patience of the Alora team. We hope to keep our alliance for the common good!",
          tags: ["Collaborative process", "Social impact", "Committed team"],
          name: "Verónica Figueroa",
          role: "Fundación por Nuestros Niños – Chair of the Board",
        },
        {
          quote: "It was a pleasure working with Bruno and his team — the processes and communication channels, how they managed timelines, and the seriousness with which they approached the work. They took the time to understand the essence of the project, made relevant suggestions, and were always willing to resolve any situation. I was very happy with the work delivered and I recommend them.",
          tags: ["Clear process", "Open communication", "Flawless results"],
          name: "Rulo de Viaje",
          role: "Founder of the Club Rulo de Viaje community",
        },
        {
          quote: "During this time, the work was very professional, with great responsiveness and on-time delivery. Communication was always clear and effective. I'd highlight the commitment and efficiency.",
          tags: ["Consistent professionalism", "Clear communication", "Commitment and efficiency"],
          name: "Fernando Celaya",
          role: "Starley – Manager",
        },
      ],
    },
    features: {
      es: [
        "Análisis de consultas frecuentes",
        "Entrenamiento con tu marca y tono",
        "Base de conocimiento con tu información real",
        "Integración con WhatsApp, web y redes",
        "Derivación inteligente a humanos",
        "Analytics de conversaciones",
      ],
      en: [
        "Analysis of frequent queries",
        "Training with your brand and tone",
        "Knowledge base with your real information",
        "Integration with WhatsApp, web and social",
        "Smart handoff to humans",
        "Conversation analytics",
      ],
    },
    process: {
      es: [
        { n: "01", title: "Llamada de relevamiento", body: "Una primera llamada para conocer tu negocio y qué consultas necesitás resolver." },
        { n: "02", title: "Análisis de consultas frecuentes", body: "Identificamos qué preguntan tus clientes y qué puede resolver el agente." },
        { n: "03", title: "Entrenamiento y base de conocimiento", body: "Cargamos la información real de tu negocio y definimos el tono del agente." },
        { n: "04", title: "Desarrollo e integración", body: "Construimos el agente e integramos con tus canales." },
        { n: "05", title: "Pruebas y ajustes", body: "Validamos conversaciones reales y ajustamos el comportamiento." },
        { n: "06", title: "Activación y monitoreo", body: "Publicamos el agente y medimos su desempeño para mejorarlo." },
      ],
      en: [
        { n: "01", title: "Discovery call", body: "A first call to learn about your business and what queries you need to resolve." },
        { n: "02", title: "Frequent query analysis", body: "We identify what your customers ask and what the agent can resolve." },
        { n: "03", title: "Training and knowledge base", body: "We load your business's real information and define the agent's tone." },
        { n: "04", title: "Development and integration", body: "We build the agent and integrate it with your channels." },
        { n: "05", title: "Testing and adjustments", body: "We validate real conversations and adjust behavior." },
        { n: "06", title: "Activation and monitoring", body: "We deploy the agent and measure its performance to improve it." },
      ],
    },
    processLabel: { es: "Metodología", en: "Methodology" },
    processHeading: { es: "Un método claro, conectado y medible en cada etapa.", en: "A clear, connected and measurable method at every stage." },
    workPrinciple: { es: "Trabajamos con procesos claros, comunicación directa y solo los pasos necesarios para lograr resultados reales.", en: "We work with clear processes, direct communication and only the steps needed to achieve real results." },
    finalCta: {
      heading: { es: "¿Hablamos de tu agente conversacional?", en: "Should we talk about your conversational agent?" },
      body: {
        es: "Coordinemos una llamada breve para entender tus consultas frecuentes y ver cómo un agente de IA puede resolverlas de verdad.",
        en: "Let's set up a brief call to understand your frequent queries and see how an AI agent can genuinely resolve them.",
      },
      ctaLabel: { es: "Agendar una llamada de 20 minutos", en: "Schedule a 20-minute call" },
      ctaNote: { es: "Respondemos en menos de 24 horas, sin compromiso.", en: "We respond within 24 hours, no strings attached." },
    },
    cta: { es: "Quiero automatizar mi atención al cliente", en: "I want to automate my customer service" },
  },

  {
    slug: "desarrollo-software",
    theme: { primary: "var(--turquoise)", secondary: "var(--violet)" },
    meta: {
      es: { title: "Desarrollo de Software a Medida | ALORA", desc: "Diseñamos y desarrollamos soluciones de software a medida para resolver problemas reales de tu negocio." },
      en: { title: "Custom Software Development | ALORA", desc: "We design and develop custom software solutions to solve your business's real problems." },
    },
    hero: {
      es: {
        badge: "Desarrollo de Software",
        headline: "Software a medida para resolver problemas reales de tu negocio",
        headlineLines: ["Software a medida", "para resolver problemas", "reales de tu negocio"],
        sub: "Analizamos tu negocio y construimos el software, sistema o herramienta que necesitás, adaptado a cómo trabaja tu operación, no al revés.",
      },
      en: {
        badge: "Software Development",
        headline: "Custom software to solve your business's real problems",
        headlineLines: ["Custom software to", "solve your business's", "real problems"],
        sub: "We analyze your business and build the software, system or tool you need, adapted to how your operation works, not the other way around.",
      },
    },
    heroNote: { es: "Llamada online de 20 minutos", en: "20-minute online call" },
    whatWeBuild: {
      label: { es: "Qué construimos", en: "What we build" },
      heading: { es: "Software que se adapta a tu negocio, no al revés", en: "Software that adapts to your business, not the other way around" },
      intro: { es: "Sistemas y herramientas de software diseñados para resolver problemas reales de tu operación.", en: "Software systems and tools designed to solve real problems in your operation." },
      items: {
        es: [
          { icon: "gears", title: "Sistemas de gestión y control interno", body: "Software a medida para operaciones, logística, finanzas y flujos de trabajo internos." },
          { icon: "api", title: "Integraciones entre sistemas", body: "Conectamos las herramientas que ya usás en un solo flujo de trabajo." },
          { icon: "spark", title: "Automatización de procesos", body: "Reemplazamos tareas manuales y repetitivas por procesos automáticos." },
          { icon: "cloud", title: "Plataformas y productos a medida", body: "Software diseñado para tu operación, con potencial de escalar." },
          { icon: "controls", title: "Paneles de control y reporting", body: "Visibilidad completa de tus datos y tu operación en tiempo real." },
          { icon: "layers", title: "Modernización de sistemas existentes", body: "Actualizamos sistemas legacy sin frenar tu operación." },
        ],
        en: [
          { icon: "gears", title: "Internal management and control systems", body: "Custom software for operations, logistics, finance and internal workflows." },
          { icon: "api", title: "System integrations", body: "We connect the tools you already use into a single workflow." },
          { icon: "spark", title: "Process automation", body: "We replace manual, repetitive tasks with automated processes." },
          { icon: "cloud", title: "Custom platforms and products", body: "Software designed for your operation, with the potential to scale." },
          { icon: "controls", title: "Dashboards and reporting", body: "Full visibility into your data and operation in real time." },
          { icon: "layers", title: "Modernizing existing systems", body: "We upgrade legacy systems without stopping your operation." },
        ],
      },
    },
    approach: {
      label: { es: "Nuestro enfoque", en: "Our approach" },
      heading: { es: "Un equipo de tecnología que se adapta a lo que tu negocio necesita", en: "A technology team that adapts to what your business needs" },
      body: {
        es: "No partimos de una solución fija. Partimos de tu negocio, tu objetivo y el problema real que hay que resolver, y elegimos la tecnología correcta para eso, sea un sitio, una aplicación, una integración o una automatización.",
        en: "We don't start from a fixed solution. We start from your business, your objective and the real problem to solve, and choose the right technology for it, whether that's a site, an application, an integration or an automation.",
      },
      bullets: {
        es: ["Foco en el problema de negocio, no en una tecnología fija", "Un solo equipo para todas las etapas de tu proyecto", "Arquitectura pensada para escalar sin reescribir todo"],
        en: ["Focus on the business problem, not a fixed technology", "One team for every stage of your project", "Architecture designed to scale without rewriting everything"],
      },
      cards: {
        es: [
          { icon: "target", title: "Foco en tu negocio y tu objetivo real", body: "Elegimos la tecnología correcta según lo que tu negocio necesita, no al revés." },
          { icon: "code", title: "Arquitectura escalable y mantenible", body: "Sistemas construidos para crecer sin tener que reescribirse desde cero." },
          { icon: "controls", title: "Sistemas autogestionables", body: "Control total para gestionar tu proyecto sin depender de nosotros." },
          { icon: "spark", title: "Desarrollo AI-first", body: "Combinamos prácticas sólidas con procesos acelerados por IA para construir más rápido." },
        ],
        en: [
          { icon: "target", title: "Focus on your business and real objective", body: "We choose the right technology for what your business needs, not the other way around." },
          { icon: "code", title: "Scalable, maintainable architecture", body: "Systems built to grow without having to be rewritten from scratch." },
          { icon: "controls", title: "Self-manageable systems", body: "Full control to manage your project without depending on us." },
          { icon: "spark", title: "AI-first development", body: "We combine solid practices with AI-accelerated processes to build faster." },
        ],
      },
    },
    featuresLabel: { es: "Qué incluye", en: "What's included" },
    featuresHeading: { es: "Qué incluye el servicio de desarrollo de software", en: "What our software development service includes" },
    featuresDetailed: {
      es: [
        { icon: "search", title: "Diagnóstico y definición del proyecto", body: "Entendemos tu negocio y el problema real antes de proponer una solución." },
        { icon: "navigation", title: "Elección de la tecnología correcta", body: "Definimos si tu proyecto necesita un sitio, una app, una integración o una combinación." },
        { icon: "structure", title: "Arquitectura escalable y mantenible", body: "Construimos sobre una base sólida que crece con tu negocio." },
        { icon: "design", title: "Diseño de experiencia e interfaz", body: "Pantallas y flujos pensados para que se usen de verdad." },
        { icon: "code", title: "Desarrollo con tecnología moderna", body: "Buenas prácticas y tecnología pensada para durar y evolucionar." },
        { icon: "api", title: "Integraciones con tus herramientas", body: "Conectamos todo lo que ya usás: CRM, ERP, pagos, comunicaciones." },
        { icon: "speed", title: "Pruebas, seguridad y performance", body: "Validamos cada flujo antes de salir a producción." },
        { icon: "plug", title: "Acompañamiento post-lanzamiento", body: "Seguimos cerca para ajustar y sumar funciones reales." },
      ],
      en: [
        { icon: "search", title: "Project diagnosis and definition", body: "We understand your business and the real problem before proposing a solution." },
        { icon: "navigation", title: "Choosing the right technology", body: "We define whether your project needs a site, an app, an integration or a combination." },
        { icon: "structure", title: "Scalable, maintainable architecture", body: "We build on a solid foundation that grows with your business." },
        { icon: "design", title: "Experience and interface design", body: "Screens and flows designed to actually be used." },
        { icon: "code", title: "Development with modern technology", body: "Good practices and technology built to last and evolve." },
        { icon: "api", title: "Integrations with your tools", body: "We connect everything you already use: CRM, ERP, payments, communications." },
        { icon: "speed", title: "Testing, security and performance", body: "We validate every flow before going to production." },
        { icon: "plug", title: "Post-launch support", body: "We stay close to adjust and add real features." },
      ],
    },
    featuresConclusion: {
      es: "Todo lo necesario para elegir, construir y lanzar la solución correcta para tu negocio.",
      en: "Everything you need to choose, build and launch the right solution for your business.",
    },
    projectsIntro: {
      es: "Desarrollamos soluciones de software para distintos tipos de negocios, siempre con el mismo criterio: resolver un problema real de la operación.",
      en: "We develop software solutions for different types of businesses, always with the same criteria: solving a real problem in the operation.",
    },
    projects: [
      { name: "Soy LIDIA", url: "https://soylidia.com", image: "/images/soylidia.png", es: "Sistema de gestión para profesionales de la salud con WhatsApp integrado. Calendario, pacientes, equipo, sucursales y pagos.", en: "Management system for health professionals with integrated WhatsApp. Calendar, patients, team, branches and payments." },
      { name: "Ranking Tenis de Mesa", url: "https://tenisdemesatrenque.com.ar", image: "/images/tenisDeMesaImageRank.png", es: "Sistema completo de gestión de ranking para Tenis de Mesa con perfiles de jugadores, estadísticas y clasificaciones.", en: "Complete ranking management system for Table Tennis with player profiles, statistics and classifications." },
      { name: "ALKEMIA", url: "https://goalkemia.com", image: "/images/alkemia.png", es: "Diseño y desarrollo de la nueva plataforma digital de ALKEMIA para acompañar su evolución de marca y consolidar su posicionamiento en tecnología, automatización e inteligencia artificial.", en: "Design and development of ALKEMIA's new digital platform to support its brand evolution and consolidate its positioning in technology, automation and artificial intelligence." },
      { name: "Castro Yeso", url: "https://castro-yeso.com", image: "/images/castroweb.png", es: "Sitio 100% personalizado desarrollado con WordPress sin uso de plantillas, para empresa de yesería y construcción en seco.", en: "100% custom WordPress site built without templates, for a drywall and plasterwork company." },
    ],
    whyUsExtra: {
      heading: { es: "Un equipo de tecnología que resuelve problemas, no que impone una única solución", en: "A technology team that solves problems, not one that forces a single solution" },
      intro: {
        es: "No te vendemos un paquete cerrado. Elegimos la tecnología correcta para tu negocio y la construimos con vos.",
        en: "We don't sell you a closed package. We choose the right technology for your business and build it with you.",
      },
      reasons: {
        es: [
          { tag: "ENFOQUE", label: "Cada decisión responde a tu negocio, no a un producto que vendemos siempre igual" },
          { tag: "VELOCIDAD", label: "Procesos ágiles, sin vueltas ni demoras innecesarias" },
          { tag: "CERCANÍA", label: "Comunicación directa con el equipo que construye tu proyecto" },
          { tag: "CALIDAD", label: "Código sólido, mantenible y preparado para escalar" },
          { tag: "AUTONOMÍA", label: "Te dejamos el control total para gestionar tu sistema" },
          { tag: "ACOMPAÑAMIENTO", label: "Seguimos cerca después del lanzamiento, no desaparecemos" },
        ],
        en: [
          { tag: "FOCUS", label: "Every decision responds to your business, not a product we sell the same way to everyone" },
          { tag: "SPEED", label: "Agile processes, no unnecessary detours or delays" },
          { tag: "PROXIMITY", label: "Direct communication with the team building your project" },
          { tag: "QUALITY", label: "Solid, maintainable code that's ready to scale" },
          { tag: "AUTONOMY", label: "Full control handed to you to manage your system" },
          { tag: "SUPPORT", label: "We stay close after launch, we don't disappear" },
        ],
      },
    },
    testimonials: {
      es: [
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
      en: [
        {
          quote: "Working with Alora was an excellent experience. They developed both our institutional website and a fully custom professional ranking system, which now lets us manage players, statistics and points clearly and efficiently. The platform is fast, easy to use, and gave our table tennis organization a real leap in quality. There was always good communication, commitment and willingness to adapt the system to our real needs.",
          tags: ["Comprehensive system", "Efficient management", "Easy to use"],
          name: "Alejandro",
          role: "President of the Table Tennis Commission",
        },
        {
          quote: "At Fundación por Nuestros Niños we're grateful for the process we shared in creating our website. It's been a wonderful experience that also let us revisit some very important aspects of our organization. It was a pending debt for our NGO, which has worked for more than 28 years for the children of Salta. Thank you for the warmth, commitment, professionalism and patience of the Alora team. We hope to keep our alliance for the common good!",
          tags: ["Collaborative process", "Social impact", "Committed team"],
          name: "Verónica Figueroa",
          role: "Fundación por Nuestros Niños – Chair of the Board",
        },
        {
          quote: "It was a pleasure working with Bruno and his team — the processes and communication channels, how they managed timelines, and the seriousness with which they approached the work. They took the time to understand the essence of the project, made relevant suggestions, and were always willing to resolve any situation. I was very happy with the work delivered and I recommend them.",
          tags: ["Clear process", "Open communication", "Flawless results"],
          name: "Rulo de Viaje",
          role: "Founder of the Club Rulo de Viaje community",
        },
        {
          quote: "During this time, the work was very professional, with great responsiveness and on-time delivery. Communication was always clear and effective. I'd highlight the commitment and efficiency.",
          tags: ["Consistent professionalism", "Clear communication", "Commitment and efficiency"],
          name: "Fernando Celaya",
          role: "Starley – Manager",
        },
      ],
    },
    features: {
      es: [
        "Diagnóstico y elección de tecnología",
        "Diseño UX/UI orientado a resultados",
        "Arquitectura y desarrollo escalable",
        "Integraciones con herramientas existentes",
        "Pruebas, seguridad y performance",
        "Acompañamiento post-lanzamiento",
      ],
      en: [
        "Diagnosis and technology choice",
        "Results-oriented UX/UI design",
        "Scalable architecture and development",
        "Integrations with existing tools",
        "Testing, security and performance",
        "Post-launch support",
      ],
    },
    process: {
      es: [
        { n: "01", title: "Llamada de relevamiento", body: "Una primera llamada para conocer tu proyecto, tu negocio y qué necesitás lograr." },
        { n: "02", title: "Análisis y elección de tecnología", body: "Entendemos el problema real y definimos qué tipo de solución lo resuelve mejor." },
        { n: "03", title: "Arquitectura y diseño", body: "Definimos la estructura técnica y diseñamos la experiencia antes de construir." },
        { n: "04", title: "Desarrollo y QA", body: "Construimos con código mantenible y pruebas en cada iteración." },
        { n: "05", title: "Lanzamiento", body: "Acompañamos la puesta en producción y validamos que todo funcione." },
        { n: "06", title: "Mejora continua", body: "Medimos comportamiento y planificamos evolutivos junto a tu equipo." },
      ],
      en: [
        { n: "01", title: "Discovery call", body: "A first call to learn about your project, your business and what you need to achieve." },
        { n: "02", title: "Analysis and technology choice", body: "We understand the real problem and define what type of solution solves it best." },
        { n: "03", title: "Architecture and design", body: "We define the technical structure and design the experience before building." },
        { n: "04", title: "Development and QA", body: "We build with maintainable code and testing at every iteration." },
        { n: "05", title: "Launch", body: "We support the rollout to production and validate that everything works." },
        { n: "06", title: "Continuous improvement", body: "We measure behavior and plan evolutions together with your team." },
      ],
    },
    processLabel: { es: "Metodología", en: "Methodology" },
    processHeading: { es: "Un método claro, conectado y medible en cada etapa.", en: "A clear, connected and measurable method at every stage." },
    workPrinciple: { es: "Trabajamos con procesos claros, comunicación directa y solo los pasos necesarios para lograr resultados reales.", en: "We work with clear processes, direct communication and only the steps needed to achieve real results." },
    finalCta: {
      heading: { es: "¿Hablamos de tu proyecto?", en: "Should we talk about your project?" },
      body: {
        es: "Coordinemos una llamada breve para entender qué necesitás y qué solución tiene más sentido para tu negocio.",
        en: "Let's set up a brief call to understand what you need and which solution makes the most sense for your business.",
      },
      ctaLabel: { es: "Agendar una llamada de 20 minutos", en: "Schedule a 20-minute call" },
      ctaNote: { es: "Respondemos en menos de 24 horas, sin compromiso.", en: "We respond within 24 hours, no strings attached." },
    },
    cta: { es: "Contanos qué necesitás construir", en: "Tell us what you need to build" },
  },
]

export function getSolution(slug: string): SolutionData | undefined {
  return SOLUTIONS.find((s) => s.slug === slug)
}
