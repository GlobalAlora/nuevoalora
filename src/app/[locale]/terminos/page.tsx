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
    title: isEs ? "Términos y Condiciones | ALORA" : "Terms and Conditions | ALORA",
    description: isEs
      ? "Términos y condiciones de uso de los servicios de ALORA."
      : "Terms and conditions for using ALORA's services.",
  };
}

export default async function TerminosPage({ params }: Props) {
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
            <p className="text-[11px] uppercase tracking-widest text-white/30 mb-3">Legal</p>
            <h1 className="text-[36px] font-bold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
              {isEs ? "Términos y Condiciones" : "Terms and Conditions"}
            </h1>
            <p className="text-white/45 text-[14px]">
              {isEs ? "Última actualización: enero 2025" : "Last updated: January 2025"}
            </p>
          </div>

          <div className="space-y-8 text-white/70 leading-relaxed text-[15px]">
            {isEs ? (
              <>
                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">1. Aceptación de los términos</h2>
                  <p>Al acceder y usar el sitio web <strong className="text-white">globalalora.com</strong> y contratar servicios de ALORA, aceptás estos Términos y Condiciones en su totalidad. Si no estás de acuerdo, te pedimos que no uses nuestros servicios.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">2. Descripción de los servicios</h2>
                  <p>ALORA ofrece servicios de desarrollo de software, diseño web, aplicaciones móviles y web, ecommerce, automatización, chatbots e inteligencia artificial para empresas y emprendedores.</p>
                  <p className="mt-3">Las especificaciones de cada proyecto se detallan en la propuesta o contrato particular acordado con cada cliente.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">3. Uso del sitio web</h2>
                  <p>Al usar este sitio, te comprometés a:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2">
                    <li>No usar el sitio para fines ilegales o no autorizados.</li>
                    <li>No intentar acceder a sistemas o áreas restringidas.</li>
                    <li>No reproducir, distribuir ni modificar el contenido sin autorización.</li>
                    <li>Proporcionar información veraz en los formularios de contacto.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">4. Propiedad intelectual</h2>
                  <p>Todo el contenido de este sitio —incluyendo textos, imágenes, diseños, logos y código— es propiedad de ALORA o de sus respectivos titulares y está protegido por las leyes de propiedad intelectual.</p>
                  <p className="mt-3">Los proyectos desarrollados para clientes transfieren la propiedad del código y assets al cliente tras el pago completo, salvo que se acuerde lo contrario en el contrato particular.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">5. Presupuestos y pagos</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Los presupuestos tienen una validez de 30 días desde su emisión.</li>
                    <li>El inicio del proyecto está sujeto al pago del anticipo acordado.</li>
                    <li>Los pagos se realizan según el cronograma definido en la propuesta.</li>
                    <li>La falta de pago puede resultar en la suspensión del servicio.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">6. Garantías y responsabilidades</h2>
                  <p>ALORA se compromete a entregar proyectos funcionales y de calidad. Sin embargo:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2">
                    <li>No garantizamos resultados comerciales específicos (ventas, leads, posicionamiento).</li>
                    <li>No somos responsables por fallas de terceros (hosting, plataformas de pago, etc.).</li>
                    <li>Los cambios solicitados fuera del alcance acordado pueden generar costos adicionales.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">7. Confidencialidad</h2>
                  <p>ALORA se compromete a mantener la confidencialidad de toda información sensible del cliente. Del mismo modo, el cliente se compromete a no divulgar información estratégica, precios ni metodologías de ALORA a terceros.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">8. Cancelaciones</h2>
                  <p>Las condiciones de cancelación se definen en cada contrato particular. Como regla general, los pagos realizados no son reembolsables por trabajo ya ejecutado. Ante cancelación anticipada, se cobrará el trabajo completado hasta esa fecha.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">9. Ley aplicable</h2>
                  <p>Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa se someterá a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">10. Contacto</h2>
                  <p>Para consultas sobre estos términos: <a href="mailto:hola@globalalora.com" className="text-[var(--turquoise)] hover:underline">hola@globalalora.com</a></p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">1. Acceptance of Terms</h2>
                  <p>By accessing and using <strong className="text-white">globalalora.com</strong> and contracting ALORA's services, you accept these Terms and Conditions in full. If you disagree, please do not use our services.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">2. Description of Services</h2>
                  <p>ALORA provides software development, web design, mobile and web applications, ecommerce, automation, chatbots and artificial intelligence services for businesses and entrepreneurs.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">3. Use of the Website</h2>
                  <p>By using this site, you agree to:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2">
                    <li>Not use the site for illegal or unauthorized purposes.</li>
                    <li>Not attempt to access restricted systems or areas.</li>
                    <li>Not reproduce, distribute or modify content without authorization.</li>
                    <li>Provide truthful information in contact forms.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">4. Intellectual Property</h2>
                  <p>All content on this site — including texts, images, designs, logos and code — is the property of ALORA or its respective owners and is protected by intellectual property laws.</p>
                  <p className="mt-3">Projects developed for clients transfer ownership of code and assets to the client upon full payment, unless otherwise agreed in the particular contract.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">5. Quotes and Payments</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Quotes are valid for 30 days from their issue date.</li>
                    <li>Project kickoff is subject to payment of the agreed deposit.</li>
                    <li>Payments follow the schedule defined in the proposal.</li>
                    <li>Non-payment may result in service suspension.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">6. Warranties and Liability</h2>
                  <p>ALORA commits to delivering functional, quality projects. However:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2">
                    <li>We do not guarantee specific commercial results (sales, leads, rankings).</li>
                    <li>We are not responsible for third-party failures (hosting, payment platforms, etc.).</li>
                    <li>Changes requested outside the agreed scope may incur additional costs.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">7. Governing Law</h2>
                  <p>These terms are governed by the laws of the Argentine Republic. Any dispute shall be submitted to the ordinary courts of the Autonomous City of Buenos Aires.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">8. Contact</h2>
                  <p>For inquiries about these terms: <a href="mailto:hola@globalalora.com" className="text-[var(--turquoise)] hover:underline">hola@globalalora.com</a></p>
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
