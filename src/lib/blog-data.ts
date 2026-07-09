export interface BlogPost {
  slug: string;
  title: { es: string; en: string };
  excerpt: { es: string; en: string };
  date: string;
  category: { es: string; en: string };
  readTime: number;
  image?: string;
  content: { es: string; en: string };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "tienda-nube-vs-woocommerce",
    title: {
      es: "Tienda Nube vs WooCommerce: ¿cuál elegir para tu ecommerce?",
      en: "Tienda Nube vs WooCommerce: which one to choose for your ecommerce?",
    },
    excerpt: {
      es: "Comparamos las dos plataformas de ecommerce más populares en Latinoamérica para ayudarte a tomar la mejor decisión para tu negocio.",
      en: "We compare the two most popular ecommerce platforms in Latin America to help you make the best decision for your business.",
    },
    date: "2024-11-15",
    category: { es: "Ecommerce", en: "Ecommerce" },
    readTime: 8,
    content: {
      es: `
## Introducción

Elegir la plataforma correcta para tu tienda online es una de las decisiones más importantes que tomarás como emprendedor digital. En este artículo comparamos en profundidad **Tienda Nube** y **WooCommerce**, las dos opciones más populares en Latinoamérica.

## Tienda Nube

Tienda Nube es una plataforma **SaaS** (Software as a Service) diseñada específicamente para el mercado latinoamericano. Con más de 100.000 tiendas activas en la región, se ha convertido en la opción preferida por muchos emprendedores por su simplicidad y enfoque local.

### Ventajas de Tienda Nube

- **Facilidad de uso**: No necesitás conocimientos técnicos para crear y gestionar tu tienda.
- **Integraciones locales**: Mercado Pago, Mercado Envíos, OCA, Andreani y otras soluciones latinoamericanas están integradas de forma nativa.
- **Soporte en español**: Atención al cliente en español 24/7.
- **Planes accesibles**: Precios pensados para el mercado local.
- **Actualizaciones automáticas**: No tenés que preocuparte por la seguridad ni las actualizaciones.

### Desventajas de Tienda Nube

- **Personalización limitada**: Estás atado a las funcionalidades que ofrece la plataforma.
- **Comisiones por venta**: Según el plan, pagas un porcentaje de cada transacción.
- **Menos control sobre el código**: No podés modificar el backend de la plataforma.

## WooCommerce

WooCommerce es un **plugin de código abierto** para WordPress que convierte cualquier sitio en una tienda online completamente funcional. Es la plataforma de ecommerce más usada del mundo, con más del 28% del mercado global.

### Ventajas de WooCommerce

- **Personalización total**: Podés modificar absolutamente todo el código.
- **Sin comisiones por venta**: Solo pagás los gastos de tu hosting y pasarela de pago.
- **Ecosistema enorme**: Miles de plugins y themes disponibles.
- **SEO avanzado**: Mayor control sobre el SEO técnico de tu tienda.
- **Escalabilidad**: Podés construir tiendas de cualquier tamaño y complejidad.

### Desventajas de WooCommerce

- **Requiere conocimientos técnicos**: Necesitás saber de WordPress o contratar a alguien.
- **Mantenimiento**: Vos sos responsable de las actualizaciones, seguridad y backups.
- **Costos variables**: El hosting, dominio, plugins premium y temas pueden sumar.

## Comparativa directa

| Factor | Tienda Nube | WooCommerce |
|--------|-------------|-------------|
| Facilidad de uso | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Personalización | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Costo inicial | Bajo | Variable |
| Integraciones LATAM | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Control técnico | Bajo | Total |
| SEO | Bueno | Excelente |

## ¿Cuál elegir?

**Elegí Tienda Nube si:**
- Recién estás empezando y no tenés experiencia técnica.
- Tu mercado principal es Argentina, México o Brasil.
- Querés lanzar rápido sin complicaciones.
- Tenés un presupuesto mensual predecible.

**Elegí WooCommerce si:**
- Necesitás personalización avanzada.
- Tenés o podés contratar soporte técnico.
- Querés control total sobre tu tienda.
- Planeás escalar con funcionalidades complejas.

## Conclusión

No existe una respuesta universal. La mejor plataforma es la que se adapta mejor a tus necesidades, presupuesto y capacidades técnicas. En ALORA trabajamos con ambas plataformas y podemos ayudarte a tomar la decisión correcta y ejecutar el proyecto.
      `,
      en: `
## Introduction

Choosing the right platform for your online store is one of the most important decisions you'll make as a digital entrepreneur. In this article we compare **Tienda Nube** and **WooCommerce** in depth — the two most popular options in Latin America.

## Tienda Nube

Tienda Nube is a **SaaS** (Software as a Service) platform designed specifically for the Latin American market. With over 100,000 active stores in the region, it has become the preferred choice for many entrepreneurs due to its simplicity and local focus.

### Advantages of Tienda Nube

- **Ease of use**: No technical knowledge required to create and manage your store.
- **Local integrations**: Mercado Pago, Mercado Envíos, and other Latin American solutions are natively integrated.
- **Spanish support**: 24/7 customer service in Spanish.
- **Accessible pricing**: Plans designed for the local market.
- **Automatic updates**: No need to worry about security or updates.

### Disadvantages of Tienda Nube

- **Limited customization**: You're tied to the features the platform offers.
- **Transaction fees**: Depending on the plan, you pay a percentage of each sale.
- **Less code control**: You can't modify the platform's backend.

## WooCommerce

WooCommerce is an **open-source plugin** for WordPress that turns any site into a fully functional online store. It's the world's most used ecommerce platform, with over 28% of the global market.

### Advantages of WooCommerce

- **Total customization**: You can modify absolutely everything in the code.
- **No transaction fees**: You only pay for hosting and payment gateway fees.
- **Huge ecosystem**: Thousands of plugins and themes available.
- **Advanced SEO**: Greater control over your store's technical SEO.
- **Scalability**: Build stores of any size and complexity.

### Disadvantages of WooCommerce

- **Requires technical knowledge**: You need WordPress experience or someone to hire.
- **Maintenance**: You're responsible for updates, security, and backups.
- **Variable costs**: Hosting, domain, premium plugins and themes can add up.

## Which one to choose?

**Choose Tienda Nube if:**
- You're just starting out with no technical experience.
- Your main market is Argentina, Mexico or Brazil.
- You want to launch fast without complications.

**Choose WooCommerce if:**
- You need advanced customization.
- You have or can hire technical support.
- You want full control over your store.
- You plan to scale with complex features.

## Conclusion

There's no universal answer. The best platform is the one that best fits your needs, budget, and technical capabilities. At ALORA we work with both platforms and can help you make the right decision.
      `,
    },
  },
  {
    slug: "que-es-un-agente-ia",
    title: {
      es: "¿Qué es un agente de IA y cómo puede transformar tu negocio?",
      en: "What is an AI agent and how can it transform your business?",
    },
    excerpt: {
      es: "Los agentes de inteligencia artificial son la siguiente evolución de los chatbots. Aprende qué son, cómo funcionan y qué casos de uso tienen en empresas reales.",
      en: "AI agents are the next evolution of chatbots. Learn what they are, how they work, and what use cases they have in real businesses.",
    },
    date: "2024-12-08",
    category: { es: "Inteligencia Artificial", en: "Artificial Intelligence" },
    readTime: 6,
    content: {
      es: `
## ¿Qué es un agente de IA?

Un **agente de inteligencia artificial** es un sistema autónomo que percibe su entorno, toma decisiones y ejecuta acciones para alcanzar objetivos específicos, sin intervención humana constante.

A diferencia de un chatbot tradicional que simplemente responde preguntas con respuestas predefinidas, un agente de IA puede:

- **Razonar** sobre el problema que tiene delante.
- **Planificar** una secuencia de pasos para resolverlo.
- **Ejecutar acciones** como buscar en internet, consultar bases de datos, enviar emails o llamar APIs.
- **Aprender y adaptarse** basándose en los resultados de sus acciones.

## La diferencia entre chatbot y agente

| | Chatbot tradicional | Agente de IA |
|---|---|---|
| Respuestas | Predefinidas | Generadas dinámicamente |
| Acciones | Ninguna | Múltiples y complejas |
| Memoria | Sin contexto | Memoria a corto y largo plazo |
| Autonomía | Mínima | Alta |
| Casos de uso | FAQ, soporte básico | Ventas, operaciones, análisis |

## ¿Cómo funciona un agente de IA?

1. **Percepción**: El agente recibe información (un mensaje, un email, datos de un sistema).
2. **Razonamiento**: Usando un modelo de lenguaje grande (LLM), analiza la situación y decide qué hacer.
3. **Planificación**: Divide el objetivo en subtareas.
4. **Ejecución**: Usa "herramientas" (tools) para ejecutar cada subtarea: buscar en Google, consultar una base de datos, enviar un email, etc.
5. **Retroalimentación**: Evalúa el resultado y ajusta si es necesario.

## Casos de uso en empresas reales

### Atención al cliente 24/7
Un agente puede manejar consultas de clientes, verificar estados de pedidos, procesar devoluciones y escalar a un humano solo cuando sea necesario. No solo responde — actúa.

### Calificación de leads
Cuando un prospecto llena un formulario, el agente puede investigar la empresa, analizar el fit, enviar una propuesta inicial personalizada y agendar una reunión, todo de forma automática.

### Asistente de ventas interno
Ayuda al equipo comercial a preparar propuestas, buscar información de clientes, generar reportes de pipeline y recordar seguimientos pendientes.

### Automatización de procesos
Puede monitorear sistemas, detectar anomalías, generar reportes y ejecutar acciones correctivas sin intervención humana.

## ¿Tu empresa está lista para un agente de IA?

Los agentes de IA generan más valor cuando:

- Tenés procesos repetitivos que consumen tiempo del equipo.
- Manejás grandes volúmenes de consultas o datos.
- Necesitás operar 24/7 sin contratar más personal.
- Querés escalar sin aumentar proporcionalmente los costos.

En ALORA diseñamos e implementamos agentes de IA a medida para empresas de todos los tamaños. Si te interesa explorar cómo esta tecnología puede transformar tu operación, [hablemos](/es/contacto).
      `,
      en: `
## What is an AI agent?

An **AI agent** is an autonomous system that perceives its environment, makes decisions, and executes actions to achieve specific goals — without constant human intervention.

Unlike a traditional chatbot that simply answers questions with predefined responses, an AI agent can:

- **Reason** about the problem at hand.
- **Plan** a sequence of steps to solve it.
- **Execute actions** like searching the internet, querying databases, sending emails, or calling APIs.
- **Learn and adapt** based on the results of its actions.

## Chatbot vs AI agent

| | Traditional chatbot | AI agent |
|---|---|---|
| Responses | Predefined | Dynamically generated |
| Actions | None | Multiple and complex |
| Memory | No context | Short and long-term memory |
| Autonomy | Minimal | High |
| Use cases | FAQ, basic support | Sales, operations, analysis |

## How does an AI agent work?

1. **Perception**: The agent receives information (a message, an email, data from a system).
2. **Reasoning**: Using a large language model (LLM), it analyzes the situation and decides what to do.
3. **Planning**: Breaks the goal into subtasks.
4. **Execution**: Uses "tools" to execute each subtask: Google search, database query, email sending, etc.
5. **Feedback**: Evaluates the result and adjusts if needed.

## Real business use cases

### 24/7 customer service
An agent can handle customer inquiries, check order statuses, process returns and escalate to a human only when necessary.

### Lead qualification
When a prospect fills out a form, the agent can research the company, analyze fit, send a personalized initial proposal, and schedule a meeting — all automatically.

### Sales assistant
Helps the commercial team prepare proposals, search for client information, generate pipeline reports, and remind about pending follow-ups.

## Is your business ready for an AI agent?

AI agents generate the most value when:

- You have repetitive processes consuming team time.
- You handle large volumes of queries or data.
- You need to operate 24/7 without hiring more staff.
- You want to scale without proportionally increasing costs.

At ALORA we design and implement custom AI agents for businesses of all sizes. If you'd like to explore how this technology can transform your operations, [let's talk](/en/contact).
      `,
    },
  },
  {
    slug: "automatizacion-empresas-make",
    title: {
      es: "Automatización para empresas: cómo Make transforma operaciones sin escribir código",
      en: "Business automation: how Make transforms operations without writing code",
    },
    excerpt: {
      es: "Make (antes Integromat) es la herramienta de automatización visual más poderosa del mercado. Descubrí cómo usarla para eliminar tareas repetitivas y conectar tus sistemas.",
      en: "Make (formerly Integromat) is the most powerful visual automation tool on the market. Discover how to use it to eliminate repetitive tasks and connect your systems.",
    },
    date: "2025-01-20",
    category: { es: "Automatización", en: "Automation" },
    readTime: 7,
    content: {
      es: `
## ¿Qué es Make?

**Make** (anteriormente conocido como Integromat) es una plataforma de automatización visual que permite conectar aplicaciones y servicios sin necesidad de escribir código. A través de una interfaz de arrastrar y soltar, podés crear flujos de trabajo automatizados llamados "escenarios".

Make se destaca entre herramientas como Zapier por su mayor flexibilidad, capacidad para manejar lógica compleja y su relación precio-potencia.

## ¿Cómo funciona Make?

Un escenario en Make tiene tres componentes principales:

1. **Trigger (disparador)**: El evento que inicia el flujo. Puede ser la llegada de un email, el envío de un formulario, una nueva fila en una hoja de cálculo, etc.

2. **Módulos**: Las acciones que Make ejecuta. Cada app conectada tiene sus propios módulos (crear registro, enviar email, actualizar dato, etc.).

3. **Conexiones**: Los canales que unen los módulos y definen el flujo de datos.

## Casos de uso en empresas

### Gestión de leads automática

Cuando un prospecto completa un formulario web:
1. Make captura los datos.
2. Crea el contacto en tu CRM.
3. Envía un email de bienvenida personalizado.
4. Notifica al equipo de ventas por Slack o WhatsApp.
5. Agenda un seguimiento automático en el calendario.

Todo esto en menos de 1 segundo, sin intervención humana.

### Sincronización de inventario

Si vendés en múltiples canales (tu web, Mercado Libre, Instagram):
- Make mantiene el stock sincronizado en tiempo real.
- Actualiza precios automáticamente.
- Alerta cuando un producto está por agotarse.

### Reportes automáticos

- Consolida datos de múltiples fuentes (Google Analytics, CRM, planillas).
- Genera el reporte y lo envía al equipo todos los lunes a las 9am.
- Sin tocar nada.

### Gestión de redes sociales

- Publica automáticamente en Instagram, Facebook y LinkedIn cuando publicás en tu blog.
- Guarda los comentarios en una base de datos para análisis.
- Responde con un mensaje automático a nuevos followers.

## Make vs Zapier: ¿cuál elegir?

| | Make | Zapier |
|---|---|---|
| Precio | Más económico | Más caro |
| Flexibilidad | Alta | Media |
| Lógica compleja | ✅ | Limitada |
| Apps disponibles | 1.500+ | 5.000+ |
| Curva de aprendizaje | Media | Baja |
| Ideal para | Empresas técnicas | Emprendedores sin técnica |

## ¿Cuánto tiempo y dinero ahorra?

Nuestros clientes reportan ahorros de:
- **5 a 20 horas semanales** en tareas manuales.
- **30-60% de reducción** en errores de carga de datos.
- **ROI positivo** en el primer mes de implementación.

## Cómo empezar

1. **Identificá tus procesos manuales**: ¿Qué hacés repetidamente que podría hacerse solo?
2. **Priorizar por impacto**: ¿Cuál de esos procesos consume más tiempo o genera más errores?
3. **Diseñar el escenario**: Mapeá el flujo en papel antes de construirlo.
4. **Implementar y medir**: Activá el escenario y monitoreá los resultados.

En ALORA implementamos soluciones Make para empresas que quieren operar más eficientemente. Desde flujos simples hasta automatizaciones complejas multi-sistema. [Contactanos](/es/contacto) para explorar qué podemos automatizar en tu negocio.
      `,
      en: `
## What is Make?

**Make** (formerly known as Integromat) is a visual automation platform that allows you to connect applications and services without writing code. Through a drag-and-drop interface, you can create automated workflows called "scenarios."

Make stands out from tools like Zapier for its greater flexibility, ability to handle complex logic, and price-to-power ratio.

## How Make works

A Make scenario has three main components:

1. **Trigger**: The event that starts the flow — a form submission, a new spreadsheet row, an incoming email, etc.

2. **Modules**: The actions Make executes. Each connected app has its own modules (create record, send email, update data, etc.).

3. **Connections**: The channels linking modules that define data flow.

## Business use cases

### Automatic lead management

When a prospect fills out a web form:
1. Make captures the data.
2. Creates the contact in your CRM.
3. Sends a personalized welcome email.
4. Notifies the sales team via Slack or WhatsApp.
5. Schedules an automatic follow-up on the calendar.

All in less than 1 second, without human intervention.

### Inventory synchronization

If you sell across multiple channels (your website, Amazon, Instagram):
- Make keeps stock synchronized in real time.
- Updates prices automatically.
- Alerts when a product is running low.

### Automatic reports

- Consolidates data from multiple sources (Google Analytics, CRM, spreadsheets).
- Generates the report and sends it to the team every Monday at 9am.
- Without touching anything.

## Make vs Zapier: which to choose?

| | Make | Zapier |
|---|---|---|
| Price | More affordable | More expensive |
| Flexibility | High | Medium |
| Complex logic | ✅ | Limited |
| Available apps | 1,500+ | 5,000+ |
| Learning curve | Medium | Low |
| Best for | Technical businesses | Non-technical entrepreneurs |

## How much time and money does it save?

Our clients report savings of:
- **5 to 20 hours weekly** on manual tasks.
- **30-60% reduction** in data entry errors.
- **Positive ROI** in the first month of implementation.

At ALORA we implement Make solutions for businesses that want to operate more efficiently. [Contact us](/en/contact) to explore what we can automate in your business.
      `,
    },
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostsByLocale(locale: "es" | "en"): Array<{
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: number;
}> {
  return BLOG_POSTS.map((p) => ({
    slug: p.slug,
    title: p.title[locale],
    excerpt: p.excerpt[locale],
    date: p.date,
    category: p.category[locale],
    readTime: p.readTime,
  }));
}
