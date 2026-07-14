import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs ? "Política de Cookies | ALORA" : "Cookie Policy | ALORA",
    description: isEs
      ? "Información sobre el uso de cookies en el sitio web de ALORA."
      : "Information about cookie usage on the ALORA website.",
    alternates: { canonical: `https://www.globalalora.com/${locale}/cookies` },
  };
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const isEs = l === "es";

  return (
    <>
      <Nav dict={dict} locale={l} />
      <main className="min-h-screen text-white pt-24 pb-20" style={{ background: "oklch(0.13 0.015 260)" }}>
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10">
            <p className="text-[11px] uppercase tracking-widest text-white/50 mb-3">Legal</p>
            <h1 className="text-[36px] font-bold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
              {isEs ? "Política de Cookies" : "Cookie Policy"}
            </h1>
            <p className="text-white/45 text-[14px]">
              {isEs ? "Última actualización: enero 2025" : "Last updated: January 2025"}
            </p>
          </div>

          <div className="space-y-8 text-white/70 leading-relaxed text-[15px]">
            {isEs ? (
              <>
                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">¿Qué son las cookies?</h2>
                  <p>Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo cuando los visitás. Nos permiten recordar tus preferencias, analizar cómo usás el sitio y mejorar tu experiencia.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">Cookies que usamos</h2>
                  <div className="space-y-4">
                    <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <h3 className="text-white font-semibold mb-1">Cookies esenciales</h3>
                      <p className="text-[14px]">Necesarias para el funcionamiento básico del sitio. No requieren consentimiento y no pueden desactivarse.</p>
                      <p className="mt-2 text-[13px] text-white/40">Ejemplos: cookie de sesión, preferencia de idioma, consentimiento de cookies.</p>
                    </div>
                    <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <h3 className="text-white font-semibold mb-1">Cookies analíticas</h3>
                      <p className="text-[14px]">Nos permiten entender cómo los visitantes interactúan con el sitio, qué páginas visitan y cuánto tiempo permanecen. Usamos estos datos de forma agregada y anónima.</p>
                      <p className="mt-2 text-[13px] text-white/40">Herramientas: Google Analytics (anonimización de IP activada).</p>
                    </div>
                    <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <h3 className="text-white font-semibold mb-1">Cookies de marketing</h3>
                      <p className="text-[14px]">Se usan para mostrar anuncios relevantes y medir la efectividad de campañas. Solo se activan con tu consentimiento.</p>
                      <p className="mt-2 text-[13px] text-white/40">Herramientas: Meta Pixel, Google Ads.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">Duración de las cookies</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-white">Cookies de sesión:</strong> se eliminan al cerrar el navegador.</li>
                    <li><strong className="text-white">Cookies persistentes:</strong> permanecen hasta 24 meses o hasta que las eliminés manualmente.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">Cómo gestionar tus preferencias</h2>
                  <p>Podés aceptar o rechazar las cookies no esenciales a través del banner que aparece cuando visitás el sitio por primera vez. También podés cambiar tus preferencias en cualquier momento limpiando las cookies de tu navegador o usando las opciones de configuración del mismo.</p>
                  <p className="mt-3">Ten en cuenta que desactivar ciertas cookies puede afectar la funcionalidad del sitio.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">Cookies de terceros</h2>
                  <p>Algunos servicios integrados en nuestro sitio (como herramientas de chat, videos o mapas) pueden establecer sus propias cookies. Estos terceros tienen sus propias políticas de privacidad que te recomendamos revisar.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">Contacto</h2>
                  <p>Para consultas sobre el uso de cookies: <a href="mailto:info@globalalora.com" className="text-[var(--turquoise)] hover:underline">info@globalalora.com</a></p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">What are cookies?</h2>
                  <p>Cookies are small text files that websites store on your device when you visit them. They allow us to remember your preferences, analyze how you use the site, and improve your experience.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">Cookies we use</h2>
                  <div className="space-y-4">
                    <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <h3 className="text-white font-semibold mb-1">Essential cookies</h3>
                      <p className="text-[14px]">Required for basic site functionality. They do not require consent and cannot be disabled.</p>
                      <p className="mt-2 text-[13px] text-white/40">Examples: session cookie, language preference, cookie consent.</p>
                    </div>
                    <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <h3 className="text-white font-semibold mb-1">Analytics cookies</h3>
                      <p className="text-[14px]">Help us understand how visitors interact with the site, which pages they visit and how long they stay. We use this data in aggregate and anonymous form.</p>
                      <p className="mt-2 text-[13px] text-white/40">Tools: Google Analytics (IP anonymization enabled).</p>
                    </div>
                    <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <h3 className="text-white font-semibold mb-1">Marketing cookies</h3>
                      <p className="text-[14px]">Used to show relevant ads and measure campaign effectiveness. Only activated with your consent.</p>
                      <p className="mt-2 text-[13px] text-white/40">Tools: Meta Pixel, Google Ads.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">Cookie duration</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-white">Session cookies:</strong> deleted when you close the browser.</li>
                    <li><strong className="text-white">Persistent cookies:</strong> remain up to 24 months or until manually deleted.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">Managing your preferences</h2>
                  <p>You can accept or reject non-essential cookies through the banner that appears when you first visit the site. You can also change your preferences at any time by clearing cookies in your browser or using its settings.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">Contact</h2>
                  <p>For cookie-related inquiries: <a href="mailto:info@globalalora.com" className="text-[var(--turquoise)] hover:underline">info@globalalora.com</a></p>
                </section>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
