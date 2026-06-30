import { NextRequest, NextResponse } from "next/server";

const REQUEST_TIMEOUT_MS = 10_000;
const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

const CONTACT = {
  whatsapp: "+541124629452",
  email: "info@globalalora.com",
};

const log = {
  info:  (event: string, ctx: Record<string, unknown> = {}) => console.log(JSON.stringify({ level: "INFO",  event, ...ctx, ts: new Date().toISOString() })),
  warn:  (event: string, ctx: Record<string, unknown> = {}) => console.warn(JSON.stringify({ level: "WARN",  event, ...ctx, ts: new Date().toISOString() })),
  error: (event: string, ctx: Record<string, unknown> = {}) => console.error(JSON.stringify({ level: "ERROR", event, ...ctx, ts: new Date().toISOString() })),
};

function jaccardSimilarity(a: string, b: string): number {
  const sa = new Set(a.split(/\s+/).filter(Boolean));
  const sb = new Set(b.split(/\s+/).filter(Boolean));
  const inter = new Set([...sa].filter((x) => sb.has(x)));
  const union = new Set([...sa, ...sb]);
  return union.size ? inter.size / union.size : 0;
}

const FRUSTRATION_SIGNALS: Record<string, string[]> = {
  es: ["leiste","leíste","no me escuchas","no entiendes","automática","automatica","robot","pésimo","pesimo","inútil","inutil","ridículo","ridiculo","sin sentido","que clase","qué clase","no sirve","mal servicio"],
  en: ["did you read","are you a bot","don't understand","not listening","useless","ridiculous","makes no sense","terrible service","stupid bot","not helpful"],
};

const EXIT_SIGNALS: Record<string, string[]> = {
  es: ["chau","adios","adiós","hasta luego","me voy","olvida","olvídalo","olvidalo","déjalo","dejalo","no gracias"],
  en: ["bye","goodbye","forget it","never mind","i'm leaving","cya","no thanks","leave it"],
};

interface ChatMessage { from: "user" | "bot"; text: string; }

function analyzeConversation(messages: ChatMessage[], lang: string) {
  const userMsgs = messages.filter((m) => m.from === "user");
  const botMsgs  = messages.filter((m) => m.from === "bot");

  const lastUserText = (userMsgs.at(-1)?.text ?? "").toLowerCase();
  const lastBotText  = botMsgs.at(-1)?.text ?? null;
  const prevBotText  = botMsgs.at(-2)?.text ?? null;

  const frustSignals = FRUSTRATION_SIGNALS[lang] ?? FRUSTRATION_SIGNALS.es;
  const exitSignals  = EXIT_SIGNALS[lang] ?? EXIT_SIGNALS.es;

  const isFrustrated = frustSignals.some((s) => lastUserText.includes(s));
  const isExiting    = exitSignals.some((s) => lastUserText.includes(s));
  const hasLoop = !!(lastBotText && prevBotText &&
    jaccardSimilarity(lastBotText.toLowerCase(), prevBotText.toLowerCase()) > 0.55
  );
  const isAtRisk = isFrustrated || isExiting || hasLoop;

  return { isFrustrated, isExiting, hasLoop, isAtRisk, lastBotText, msgCount: messages.length };
}

const BASE_PROMPT: Record<string, string> = {
  es: `Sos Alora, asistente virtual de Alora — agencia especializada en inteligencia artificial, automatización y desarrollo web para empresas de todo el mundo.

REGLAS ABSOLUTAS:
1. IDIOMA: Respondé siempre en el idioma del usuario.
2. BREVEDAD: Máximo 2-3 oraciones. Más de 60 palabras = muy largo.
3. SIN PRECIOS: Nunca menciones montos. Si piden precio, derivá a WhatsApp o email.
4. SIN LISTAS: Sin bullets ni numeraciones.
5. NO REPETIR: Jamás repitas lo que ya dijiste antes. Cada respuesta debe aportar algo nuevo.
6. PREGUNTAR ANTES DE ASUMIR: Si un mensaje es ambiguo, preguntá qué necesitan — no asumas nada.
7. TONO HUMANO: Cálido, directo, curioso, útil. Nunca corporativo ni robótico.

SERVICIOS (mencioná solo los relevantes según la consulta):
- Chatbots con IA: chatbots inteligentes para WhatsApp, sitio web y otros canales. Responden 24/7, agendan turnos y capturan leads automáticamente.
- Atención al cliente con IA: agentes de IA entrenados con la información real del negocio. Responden en minutos, clasifican leads y derivan consultas complejas.
- LIDIA: producto propio de Alora para gestión de turnos por WhatsApp en clínicas de salud y estética. Si alguien pregunta por un chatbot para turnos o gestión de citas médicas/estéticas, mencioná LIDIA y derivá a soylidia.com.
- Automatización con IA: flujos automáticos con Make.com, n8n y Zapier integrados a WhatsApp, CRM y otras herramientas del negocio.
- Desarrollo web: sitios web a medida, corporativos y aplicaciones web. Especialistas en WordPress.
- Landing pages: páginas optimizadas para conversión.
- E-commerce: tiendas online con WooCommerce y soluciones a medida.
- Google Ads: gestión de campañas publicitarias en Google.
- Mantenimiento web: soporte técnico, actualizaciones y optimización de rendimiento.

TECNOLOGÍA: GPT-4, Claude, Gemini. Integraciones con WhatsApp Business API, HubSpot, Salesforce, Google Calendar. Automatización con Make.com, n8n, Zapier.
MERCADOS: Todo el mundo. Fuerte presencia en Argentina, México, España, Colombia y Chile.

CONTACTO (solo compartirlo cuando el usuario lo pide explícitamente o quiere agendar):
  📱 WhatsApp: ${CONTACT.whatsapp}
  📧 Email: ${CONTACT.email}
  📅 Llamada gratuita de 20 min: https://www.globalalora.com/es/llamada-de-relevamiento

MANEJO DE CASOS DIFÍCILES:
- Mensaje con "pedido", "envío", "producto" u otro término de tienda → ANTES de decir que no vendemos, preguntá: "¿Estás buscando soporte de una tienda que desarrollamos, o tenés una consulta de desarrollo?" — puede ser cliente de uno de nuestros clientes.
- Usuario confundido → Preguntá con curiosidad genuina qué están buscando.
- Enojo o frustración → Primero reconocé la emoción brevemente ("Entiendo tu frustración"). Pedí disculpas si corresponde. Ofrecé una nueva vía de ayuda.
- Conversación estancada → Ofrecé conectar con una persona real por WhatsApp o agendar una llamada gratuita.`,

  en: `You are Alora, Alora's virtual assistant — an agency specializing in artificial intelligence, automation, and web development for businesses worldwide.

ABSOLUTE RULES:
1. LANGUAGE: Always reply in the user's language.
2. BREVITY: Max 2-3 sentences. Over 60 words = too long.
3. NO PRICES: Never mention amounts. If asked for pricing, point to contact info.
4. NO LISTS: No bullets or numbers.
5. NO REPETITION: Never repeat what you've already said. Every response must add new value.
6. ASK BEFORE ASSUMING: If a message is ambiguous, ask what they need — don't assume.
7. HUMAN TONE: Warm, direct, curious, helpful. Never corporate or robotic.

SERVICES (mention only those relevant to the query):
- AI Chatbots: intelligent chatbots for WhatsApp, website, and other channels. They respond 24/7, schedule appointments, and capture leads automatically.
- AI Customer Service: AI agents trained on the business's real information. They respond in minutes, qualify leads, and escalate complex queries.
- LIDIA: Alora's own product for WhatsApp appointment management in health and aesthetic clinics. If someone asks about a chatbot for appointments or medical/aesthetic scheduling, mention LIDIA and point them to soylidia.com.
- AI Automation: automated workflows using Make.com, n8n, and Zapier, integrated with WhatsApp, CRMs, and other business tools.
- Web development: custom websites, corporate sites, and web applications. WordPress specialists.
- Landing pages: conversion-optimized pages.
- E-commerce: online stores with WooCommerce and custom solutions.
- Google Ads: Google advertising campaign management.
- Web maintenance: technical support, updates, and performance optimization.

TECHNOLOGY: GPT-4, Claude, Gemini. Integrations with WhatsApp Business API, HubSpot, Salesforce, Google Calendar. Automation with Make.com, n8n, Zapier.
MARKETS: Worldwide. Strong presence in Argentina, Mexico, Spain, Colombia, and Chile.

CONTACT (only share when user explicitly asks or wants to schedule):
  📱 WhatsApp: ${CONTACT.whatsapp}
  📧 Email: ${CONTACT.email}
  📅 Free 20-min call: https://www.globalalora.com/en/discovery-call

HANDLING DIFFICULT CASES:
- "Order", "shipping", "product" or retail terms → BEFORE saying we don't sell products, ask: "Are you looking for support on a store we built, or do you have a development question?" — they may be a client's customer.
- Confused user → Ask with genuine curiosity what they're looking for.
- Anger or frustration → Briefly acknowledge the emotion ("I understand your frustration"). Apologize if warranted. Offer a new way to help.
- Stalled conversation → Offer to connect with a real person via WhatsApp or schedule a free call.`,
};

function buildPrompt(lang: string, state: ReturnType<typeof analyzeConversation>): string {
  const { isFrustrated, isExiting, hasLoop, lastBotText } = state;
  let prompt = BASE_PROMPT[lang] ?? BASE_PROMPT.es;

  if (hasLoop) {
    prompt += lang === "en"
      ? "\n\n⚠️ ANTI-LOOP (CRITICAL): Your last two replies were nearly identical. Give a completely different response now. Do NOT echo or paraphrase the previous message in any form."
      : "\n\n⚠️ ANTI-LOOP (CRÍTICO): Tus últimas dos respuestas fueron casi iguales. Dá una respuesta completamente diferente ahora. NO repitas ni parafrasees el mensaje anterior.";
  }
  if (isFrustrated) {
    prompt += lang === "en"
      ? "\n\n🔴 FRUSTRATED USER: Acknowledge their frustration first (1 short, genuine sentence). Do NOT repeat previous responses. Ask a real clarifying question. Offer human help if needed."
      : "\n\n🔴 USUARIO FRUSTRADO: Reconocé su frustración primero (1 oración corta y genuina). NO repitas respuestas anteriores. Hacé una pregunta de aclaración real. Ofrecé ayuda humana si es necesario.";
  }
  if (isExiting) {
    prompt += lang === "en"
      ? "\n\n🔴 USER IS LEAVING: Warm recovery — briefly acknowledge any frustration, offer one genuine path forward (WhatsApp or a quick callback). Not desperate, not pushy."
      : "\n\n🔴 USUARIO SE VA: Recuperación cálida — reconocé brevemente cualquier frustración y ofrecé un camino genuino (WhatsApp o un callback rápido). Sin desesperación ni insistencia.";
  }
  if (lastBotText) {
    const preview = lastBotText.slice(0, 100).replace(/"/g, "'");
    prompt += lang === "en"
      ? `\n\n📝 YOUR LAST RESPONSE STARTED WITH: "${preview}…" — Do NOT repeat or paraphrase this.`
      : `\n\n📝 TU ÚLTIMA RESPUESTA EMPEZÓ CON: "${preview}…" — NO repitas ni parafrasees esto.`;
  }

  return prompt;
}

const FALLBACK: Record<string, string> = {
  es: `Disculpá, tuve un problema técnico. Podés contactarnos directamente:\n\n📱 WhatsApp: ${CONTACT.whatsapp}\n📧 Email: ${CONTACT.email}`,
  en: `Sorry, I ran into a technical issue. You can reach us directly:\n\n📱 WhatsApp: ${CONTACT.whatsapp}\n📧 Email: ${CONTACT.email}`,
};

export async function POST(req: NextRequest) {
  let body: { messages?: ChatMessage[]; conversationId?: string; language?: string } = {};
  try {
    body = await req.json();
  } catch {
    return new NextResponse("invalid json", { status: 400 });
  }

  const lang = body.language === "en" ? "en" : "es";
  const fallbackText = FALLBACK[lang];
  const { messages, conversationId } = body;

  if (!Array.isArray(messages)) {
    return new NextResponse("invalid messages format", { status: 400 });
  }

  if (!process.env.GROQ_API_KEY) {
    log.error("MISSING_API_KEY", { conversationId });
    return new NextResponse(fallbackText, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }

  const state = analyzeConversation(messages, lang);

  log.info("CHAT_REQUEST", { conversationId, lang, msgCount: state.msgCount, isFrustrated: state.isFrustrated, isExiting: state.isExiting, hasLoop: state.hasLoop, isAtRisk: state.isAtRisk });
  if (state.isFrustrated) log.warn("FRUSTRATED_USER", { conversationId, lastUserMsg: messages.filter((m) => m.from === "user").at(-1)?.text?.slice(0, 80) });
  if (state.hasLoop) log.warn("LOOP_DETECTED", { conversationId, lastBotText: state.lastBotText?.slice(0, 80) });
  if (state.isExiting) log.warn("USER_EXITING", { conversationId });

  const systemPrompt = buildPrompt(lang, state);
  const temperature  = state.isFrustrated || state.isExiting ? 0.78 : 0.55;

  const history = messages
    .filter((m) => m.from === "user" || m.from === "bot")
    .slice(-10)
    .map((m) => ({ role: m.from === "user" ? "user" : "assistant", content: m.text }));

  if (!history.length) {
    history.push({ role: "user", content: lang === "en" ? "Hi, I need some information." : "Hola, necesito información." });
  }

  try {
    const groqRes = await Promise.race([
      fetch(GROQ_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.GROQ_API_KEY}` },
        body: JSON.stringify({ model: GROQ_MODEL, temperature, max_tokens: 200, messages: [{ role: "system", content: systemPrompt }, ...history] }),
      }),
      new Promise<never>((_, rej) => setTimeout(() => rej(new Error("timeout")), REQUEST_TIMEOUT_MS)),
    ]);

    if (!groqRes.ok) {
      const errBody = await groqRes.text();
      throw new Error(`Groq ${groqRes.status}: ${errBody}`);
    }

    const data = await groqRes.json() as { choices?: Array<{ message?: { content?: string } }> };
    const text = (data?.choices?.[0]?.message?.content ?? "").trim();

    if (!text || text.length < 5) {
      log.warn("EMPTY_RESPONSE", { conversationId });
      return new NextResponse(fallbackText, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
    }

    log.info("CHAT_RESPONSE", { conversationId, len: text.length, temperature, isAtRisk: state.isAtRisk });

    return new NextResponse(text, {
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-cache" },
    });
  } catch (err) {
    const e = err as Error;
    log.error("CHAT_ERROR", { message: e.message, stack: e.stack?.slice(0, 200) });
    return new NextResponse(fallbackText, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }
}
