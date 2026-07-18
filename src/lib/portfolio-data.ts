export interface PortfolioProject {
  slug: string
  client: string
  url: string
  image?: string
  tags: string[]
  es: { desc: string }
  en: { desc: string }
}

/** Projects that should always sort first, in this exact order, wherever they appear. */
export const PROJECT_PRIORITY = ["autodux", "mimikids", "alkemia", "distrisal", "voutier", "soy-lidia", "lidia-superadmin", "crm-alora", "crm-lidia"];

export function sortByPriority<T extends { slug: string }>(items: T[]): T[] {
  return items.slice().sort((a, b) => {
    const ai = PROJECT_PRIORITY.indexOf(a.slug);
    const bi = PROJECT_PRIORITY.indexOf(b.slug);
    if (ai === -1 && bi === -1) return 0;
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
}

export const PORTFOLIO: PortfolioProject[] = [
  // ── FEATURED CASE STUDIES ───────────────────────────────────────────
  {
    slug: "autodux",
    client: "Autodux",
    url: "https://marketplace-sigma-teal.vercel.app/",
    image: "/images/case-studies/autodux/hero.png",
    tags: ["App", "Web"],
    es: { desc: "Marketplace de compra y venta de autos a medida, para centralizar un mercado fragmentado en Comodoro Rivadavia." },
    en: { desc: "Custom car marketplace that centralized a fragmented market in Comodoro Rivadavia." },
  },
  {
    slug: "mimikids",
    client: "Mimi Kids",
    url: "https://mimikids.com.ar/",
    image: "/images/case-studies/mimikids/hero-v2.png",
    tags: ["E-commerce"],
    es: { desc: "Tienda online con personalización de productos, panel de administración propio y pagos con MercadoPago para una marca artesanal de portachupetes." },
    en: { desc: "Online store with product customization, custom admin panel and MercadoPago payments for a handmade pacifier clip brand." },
  },
  {
    slug: "distrisal",
    client: "Distri-Sal",
    url: "https://nuevodistrisal.globalalora.com/",
    tags: ["E-commerce"],
    es: { desc: "Ecommerce integrado con Centum, su sistema de gestión, para sincronizar productos, stock y precios por cliente en tiempo real." },
    en: { desc: "Ecommerce integrated with Centum, its management system, to sync products, stock and per-client pricing in real time." },
  },
  {
    slug: "voutier",
    client: "Voutier Repuestos",
    url: "https://voutier.globalalora.com/",
    tags: ["E-commerce"],
    es: { desc: "Plataforma de ecommerce robusta para repuestos, con filtros avanzados por marca, modelo y año." },
    en: { desc: "Robust ecommerce platform for auto parts, with advanced filters by make, model and year." },
  },
  // ── WEB DEVELOPMENT ─────────────────────────────────────────────────
  {
    slug: "alkemia",
    client: "ALKEMIA",
    url: "https://goalkemia.com",
    image: "/images/alkemia.png",
    tags: ["Web", "Branding", "IA"],
    es: { desc: "Diseño y desarrollo de la nueva plataforma digital para acompañar la evolución de marca en tecnología, automatización e IA." },
    en: { desc: "Design and development of a new digital platform accompanying brand evolution in technology, automation and AI." },
  },
  {
    slug: "fpnn",
    client: "Fundación Por Nuestros Niños",
    url: "http://fpnn.org.ar",
    image: "/images/fpnn.png",
    tags: ["Web"],
    es: { desc: "Sitio completamente custom con diseño personalizado que refleja la misión, programas y formas de colaborar de la fundación." },
    en: { desc: "Fully custom site with personalized design reflecting the foundation's mission, programs and collaboration methods." },
  },
  {
    slug: "grupo-terra-lauquen",
    client: "Grupo Terra Lauquen",
    url: "https://grupoterralauquen.com.ar",
    image: "/images/grupoterralauquen.com.ar_.png",
    tags: ["Web"],
    es: { desc: "Sitio corporativo para grupo empresarial con múltiples divisiones y presencia regional." },
    en: { desc: "Corporate site for business group with multiple divisions and regional presence." },
  },
  {
    slug: "cichic",
    client: "Cichic",
    url: "https://chichicwinerelax.com",
    image: "/images/chichicImage.png",
    tags: ["Web", "E-commerce"],
    es: { desc: "Plataforma e-commerce de moda y accesorios con catálogo de productos, carrito de compras y pasarela de pago." },
    en: { desc: "Fashion and accessories e-commerce platform with product catalog, shopping cart and payment gateway." },
  },
  {
    slug: "tenis-de-mesa-trenque",
    client: "Tenis de Mesa Trenque",
    url: "https://tenisdemesatrenque.com.ar",
    image: "/images/tenisdemesatrenque.com.ar_.png",
    tags: ["Web", "App"],
    es: { desc: "Sitio institucional para club deportivo desarrollado en React con sistema de torneos, inscripciones y resultados en tiempo real." },
    en: { desc: "Institutional site for sports club built in React with tournament system, registrations and real-time results." },
  },
  {
    slug: "castro-yeso",
    client: "Castro Yeso",
    url: "https://castro-yeso.com",
    image: "/images/castroweb.png",
    tags: ["Web", "SEO"],
    es: { desc: "Sitio 100% personalizado en WordPress para empresa de yesería. Galería, servicios, formulario y CTAs optimizados para SEO local." },
    en: { desc: "100% custom WordPress site for plastering company. Gallery, services, contact form and CTAs optimized for local SEO." },
  },
  {
    slug: "asesoria-dialogar",
    client: "Asesoría Dialogar",
    url: "https://asesoriadialogar.com.ar",
    image: "/images/dialogar.png",
    tags: ["Web", "SEO"],
    es: { desc: "Sitio profesional en WordPress para asesoría contable y financiera, optimizado para generar confianza y convertir leads." },
    en: { desc: "Professional WordPress site for accounting and financial advisory, optimized to build trust and generate leads." },
  },
  {
    slug: "starley",
    client: "Starley",
    url: "https://starley.com.ar",
    image: "/images/starleyweb.png",
    tags: ["Web"],
    es: { desc: "WordPress con Flatsome para catálogo de productos e información empresarial con mejoras personalizadas." },
    en: { desc: "WordPress with Flatsome theme for product catalog and company information with custom improvements." },
  },
  {
    slug: "jose-jose",
    client: "José José",
    url: "https://www.josejoseoficial.com.mx",
    image: "/images/josejose.png",
    tags: ["Web", "Branding"],
    es: { desc: "Sitio en WordPress con tema completamente personalizado en PHP, MySQL, HTML5, SCSS y JavaScript, sin plantillas preexistentes." },
    en: { desc: "WordPress site with fully custom PHP, MySQL, HTML5, SCSS and JavaScript theme, no prebuilt templates." },
  },
  {
    slug: "protorneos",
    client: "Protorneos",
    url: "https://protorneos.com",
    image: "/images/protorneo.png",
    tags: ["Web", "App"],
    es: { desc: "Sitio liviano desarrollado con HTML5, CSS3 y JavaScript puro, optimizado para velocidad y fácil mantenimiento." },
    en: { desc: "Lightweight site built with pure HTML5, CSS3 and JavaScript, optimized for speed and easy maintenance." },
  },
  // ── ECOMMERCE ───────────────────────────────────────────────────────
  {
    slug: "gangafan",
    client: "GangaFan",
    url: "https://gangafan.com",
    image: "/images/gangafan-page.png",
    tags: ["E-commerce"],
    es: { desc: "Plataforma de ventas de merchandising con gestión de promociones, descuentos y pagos integrados." },
    en: { desc: "Merchandise sales platform with promotion management, discounts and integrated payments." },
  },
  {
    slug: "megamayorista",
    client: "Megamayorista",
    url: "https://megamayorista.com",
    image: "/images/megamayorista.png",
    tags: ["E-commerce"],
    es: { desc: "Tienda mayorista con catálogo extenso y configuración de precios por volumen de compra." },
    en: { desc: "Wholesale store with extensive catalog and volume-based pricing configuration." },
  },
  {
    slug: "nutriac",
    client: "Nutriac",
    url: "https://nutriac.com.ar",
    image: "/images/nutriac.png",
    tags: ["E-commerce"],
    es: { desc: "Ecommerce WooCommerce 100% custom en PHP y SCSS integrado al sistema PICASSO para clientes registrados." },
    en: { desc: "100% custom WooCommerce ecommerce in PHP and SCSS integrated with the PICASSO system for registered clients." },
  },
  // ── APPS & SYSTEMS ──────────────────────────────────────────────────
  {
    slug: "soy-lidia",
    client: "Soy LIDIA",
    url: "https://soylidia.com",
    image: "/images/soylidia.png",
    tags: ["App", "IA"],
    es: { desc: "Sistema de gestión para profesionales de la salud con WhatsApp integrado. Calendario, pacientes, equipo, sucursales y pagos." },
    en: { desc: "Management system for health professionals with integrated WhatsApp. Calendar, patients, team, branches and payments." },
  },
  {
    slug: "lidia-superadmin",
    client: "LIDIA Superadmin",
    url: "https://soylidia.com/superadmin",
    image: "/images/superadmin.png",
    tags: ["App", "IA"],
    es: { desc: "Panel de administración del sistema LIDIA con gestión multi-sucursal, reportes y control completo de la plataforma." },
    en: { desc: "LIDIA system administration panel with multi-branch management, reports and full platform control." },
  },
  {
    slug: "talleres-unidos",
    client: "Club de Escritura",
    url: "https://club.rulodeviaje.com",
    image: "/images/talleres.png",
    tags: ["App", "Web"],
    es: { desc: "Sistema web con login de usuarios, suscripción y desafíos mensuales de escritura y lectura para comunidades creativas." },
    en: { desc: "Web system with user login, subscriptions and monthly creative writing and reading challenges for communities." },
  },
  {
    slug: "tenis-ranking",
    client: "Ranking Tenis de Mesa",
    url: "https://tenisdemesatrenque.com.ar",
    image: "/images/tenisDeMesaImageRank.png",
    tags: ["App", "Web"],
    es: { desc: "Sistema completo de gestión de ranking para Tenis de Mesa con perfiles de jugadores, estadísticas y clasificaciones." },
    en: { desc: "Complete ranking management system for Table Tennis with player profiles, statistics and classifications." },
  },
  // ── IA & CHATBOTS ───────────────────────────────────────────────────
  {
    slug: "zerxio",
    client: "Zerxio",
    url: "https://zerxio.com",
    image: "/images/zerxio.com.png",
    tags: ["IA", "Web"],
    es: { desc: "Plataforma tecnológica con integración de IA para automatización de procesos y atención al cliente inteligente." },
    en: { desc: "Technology platform with AI integration for process automation and intelligent customer service." },
  },
]

export type ProjectCategory = "all" | "web" | "ecommerce" | "app" | "ia"
