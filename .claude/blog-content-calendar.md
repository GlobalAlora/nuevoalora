# Blog content calendar — ALORA

Backlog for the weekly automated blog-post task (`weekly-alora-blog-post`).
Each run takes the first entry with status `pending`, writes the post, flips
it to `done`, and stops — one post per run, never more.

When this list runs low (1-2 pending entries left), the run should still
write that week's post as usual, but its notification to the user must
explicitly flag that the backlog needs refilling.

## Topics

### 1. IA para atención al cliente por industria — status: pending
**Ángulo:** No es un explicador general de qué es un agente de IA — eso ya
existe en `agente-ia-atencion-cliente` (linkear ahí, no repetir la
definición). El foco 100% en un catálogo por rubro: salud/consultorios,
retail, gastronomía, inmobiliarias, servicios profesionales, turismo,
educación, ecommerce. Para cada rubro: 2-3 casos de uso concretos y
específicos de ese rubro (no genéricos). Mensaje central explícito y
repetido: "esto no es teoría, todo lo que se describe acá es implementable
hoy" — sin prometer resultados falsos, pero dejando en claro que la
tecnología ya está madura para cualquier industria.

### 2. SEO, AEO, GEO, SXO y AIO: la guía completa — status: pending
**Ángulo:** Tema nuevo, sin post existente que lo cubra. Explicar cada sigla
por separado con una definición clara y citable (bueno para AEO/GEO del
propio post — meta, ¿no?): SEO (buscadores tradicionales), AEO (answer
engines / featured snippets / voz), GEO (motores generativos tipo ChatGPT,
Perplexity, AI Overviews), SXO (experiencia de búsqueda, UX aplicado a
SEO), AIO (optimización para que asistentes de IA interpreten y
recomienden el negocio — mencionar llms.txt, hay un post dedicado
`llms-txt-contexto-para-interpretacion-ia`, linkear). Sección de cómo se
complementan entre sí (no compiten, se refuerzan). Sección práctica: qué
tener en cuenta específicamente para cada uno (checklist por disciplina).

### 3. Software a medida: qué es, cuándo lo necesitás y cómo lo hacemos en ALORA — status: pending
**Ángulo:** Tema nuevo. Cubrir: (a) señales concretas de que una empresa
necesita desarrollo a medida en vez de una herramienta enlatada/genérica
(procesos que no encajan en un molde, crecimiento que la herramienta no
soporta, falta de integración entre sistemas, etc.), (b) qué es
"software" en sentido amplio — no solo apps con login, sino cualquier
sistema que resuelve un proceso de negocio, para cualquier tipo de
empresa, (c) qué proceso sigue ALORA para construir software (podés
apoyarte en el `process` ya escrito en `src/lib/solutions-data.ts` para
las soluciones aplicaciones-web/desarrollo-software, no inventar uno
nuevo desde cero), (d) ejemplos reales — linkear a casos de éxito
concretos como Autodux, ALORA CRM, Soy LIDIA como prueba de qué se ha
construido.

### 4. La verdad de WhatsApp automático para empresas — status: pending
**Ángulo:** Ya existen `chatbot-whatsapp-para-empresas` (guía de
implementación, 7 casos de uso, WhatsApp Business App vs API) y
`chatbot-vs-agente-conversacional-ia` (diferencia general chatbot/agente)
— NO repetir esos ángulos, linkear a ellos para quien quiera el detalle.
El foco acá es específicamente el ángulo de riesgo/seguridad que ningún
post cubre todavía: automatizar WhatsApp con herramientas no oficiales
(librerías no verificadas, QR-code hacks) puede terminar en el bloqueo
del número — por qué pasa, cómo se evita usando la API oficial de
WhatsApp Business verificada por Meta, y qué preguntarle a un proveedor
antes de contratarlo para no quedar con el número bloqueado en medio de
una campaña. Mencionar la distinción chatbot vs. agente conversacional
solo en relación a este riesgo (cuál es más seguro/estable), no como
comparación general.

## Adding more topics

Append new entries here (status: pending) whenever the user gives new
topics in conversation — don't let the automated run invent topics on
its own unless explicitly told to.
