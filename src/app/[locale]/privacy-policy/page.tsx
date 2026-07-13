import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs ? "Política de Privacidad | ALORA" : "Privacy Policy | ALORA",
    description: isEs
      ? "Conocé cómo ALORA recopila, usa y protege tus datos personales."
      : "Learn how ALORA collects, uses and protects your personal data.",
    robots: { index: true },
    alternates: { canonical: `https://www.globalalora.com/${locale}/privacy-policy` },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
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
            <p className="text-[11px] uppercase tracking-widest text-white/30 mb-3">
              {isEs ? "Legal" : "Legal"}
            </p>
            <h1 className="text-[36px] font-bold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
              {isEs ? "Política de Privacidad" : "Privacy Policy"}
            </h1>
            <p className="text-white/45 text-[14px]">
              {isEs ? "Última actualización: enero 2025" : "Last updated: January 2025"}
            </p>
          </div>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/70 leading-relaxed">
            {isEs ? (
              <>
                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">1. Responsable del tratamiento</h2>
                  <p>ALORA (en adelante, "la Empresa", "nosotros") es responsable del tratamiento de los datos personales recabados a través del sitio web <strong className="text-white">globalalora.com</strong> y sus subdominios.</p>
                  <p className="mt-3">Contacto: <a href="mailto:info@globalalora.com" className="text-[var(--turquoise)] hover:underline">info@globalalora.com</a></p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">2. Datos que recopilamos</h2>
                  <p>Recopilamos los siguientes tipos de información:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2">
                    <li><strong className="text-white">Datos de contacto:</strong> nombre, correo electrónico, teléfono, país y empresa cuando completás nuestros formularios.</li>
                    <li><strong className="text-white">Datos de uso:</strong> páginas visitadas, tiempo en el sitio, dispositivo y navegador, mediante cookies y herramientas analíticas.</li>
                    <li><strong className="text-white">Comunicaciones:</strong> mensajes que nos enviás por formulario, email o WhatsApp.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">3. Finalidad del tratamiento</h2>
                  <p>Usamos tus datos para:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2">
                    <li>Responder consultas y gestionar solicitudes de servicios.</li>
                    <li>Enviar información comercial sobre nuestros servicios (con tu consentimiento).</li>
                    <li>Mejorar nuestro sitio web y experiencia de usuario.</li>
                    <li>Cumplir con obligaciones legales y contractuales.</li>
                    <li>Gestionar la relación comercial con clientes actuales y potenciales.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">4. Base legal</h2>
                  <p>El tratamiento de tus datos se basa en:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2">
                    <li>Tu consentimiento expreso al completar formularios.</li>
                    <li>El interés legítimo de ALORA en gestionar sus operaciones comerciales.</li>
                    <li>La ejecución de un contrato cuando sos cliente nuestro.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">5. Compartir datos con terceros</h2>
                  <p>No vendemos ni alquilamos tus datos personales. Podemos compartirlos con:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2">
                    <li><strong className="text-white">Proveedores de servicios:</strong> herramientas de email marketing (MailerLite), CRM y automatización (Clay, Make) que nos ayudan a gestionar leads.</li>
                    <li><strong className="text-white">Autoridades:</strong> cuando sea requerido por ley o mandato judicial.</li>
                  </ul>
                  <p className="mt-3">Todos los terceros están sujetos a acuerdos de confidencialidad y tratan los datos según sus propias políticas de privacidad.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">6. Retención de datos</h2>
                  <p>Conservamos tus datos durante el tiempo necesario para cumplir con las finalidades descritas, o mientras la relación comercial esté vigente. Una vez finalizada, los datos se eliminan o anonimizán según corresponda, salvo obligación legal de conservarlos.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">7. Tus derechos</h2>
                  <p>Tenés derecho a:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2">
                    <li>Acceder a los datos que tenemos sobre vos.</li>
                    <li>Rectificar datos inexactos o incompletos.</li>
                    <li>Solicitar la eliminación de tus datos ("derecho al olvido").</li>
                    <li>Oponerte al tratamiento o solicitar su limitación.</li>
                    <li>Revocar tu consentimiento en cualquier momento.</li>
                    <li>Presentar una reclamación ante la autoridad de protección de datos de tu país.</li>
                  </ul>
                  <p className="mt-3">Para ejercer estos derechos, escribinos a <a href="mailto:info@globalalora.com" className="text-[var(--turquoise)] hover:underline">info@globalalora.com</a>.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">8. Seguridad</h2>
                  <p>Implementamos medidas técnicas y organizativas para proteger tus datos contra accesos no autorizados, pérdida o divulgación. Sin embargo, ninguna transmisión por internet es 100% segura.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">9. Cambios en esta política</h2>
                  <p>Podemos actualizar esta política periódicamente. Te notificaremos cambios significativos publicando la nueva versión en esta página con la fecha de actualización.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">10. Contacto</h2>
                  <p>Para consultas sobre privacidad: <a href="mailto:info@globalalora.com" className="text-[var(--turquoise)] hover:underline">info@globalalora.com</a></p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">1. Data Controller</h2>
                  <p>ALORA ("the Company", "we", "us") is responsible for processing personal data collected through <strong className="text-white">globalalora.com</strong> and its subdomains.</p>
                  <p className="mt-3">Contact: <a href="mailto:info@globalalora.com" className="text-[var(--turquoise)] hover:underline">info@globalalora.com</a></p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">2. Data We Collect</h2>
                  <p>We collect the following types of information:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2">
                    <li><strong className="text-white">Contact data:</strong> name, email, phone, country, and company when you fill out our forms.</li>
                    <li><strong className="text-white">Usage data:</strong> pages visited, time on site, device and browser, through cookies and analytics tools.</li>
                    <li><strong className="text-white">Communications:</strong> messages you send us via form, email or WhatsApp.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">3. Purpose of Processing</h2>
                  <p>We use your data to:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2">
                    <li>Respond to inquiries and manage service requests.</li>
                    <li>Send commercial information about our services (with your consent).</li>
                    <li>Improve our website and user experience.</li>
                    <li>Fulfill legal and contractual obligations.</li>
                    <li>Manage the commercial relationship with current and potential clients.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">4. Legal Basis</h2>
                  <p>Processing of your data is based on:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2">
                    <li>Your explicit consent when filling out forms.</li>
                    <li>ALORA's legitimate interest in managing its business operations.</li>
                    <li>Contract performance when you are our client.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">5. Sharing Data with Third Parties</h2>
                  <p>We do not sell or rent your personal data. We may share it with:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2">
                    <li><strong className="text-white">Service providers:</strong> email marketing tools (MailerLite), CRM and automation (Clay, Make) that help us manage leads.</li>
                    <li><strong className="text-white">Authorities:</strong> when required by law or court order.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">6. Data Retention</h2>
                  <p>We retain your data for as long as necessary to fulfill the described purposes, or while the commercial relationship is active. Afterward, data is deleted or anonymized as appropriate, unless legally required to retain it.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">7. Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2">
                    <li>Access the data we hold about you.</li>
                    <li>Rectify inaccurate or incomplete data.</li>
                    <li>Request deletion of your data ("right to be forgotten").</li>
                    <li>Object to processing or request its restriction.</li>
                    <li>Withdraw your consent at any time.</li>
                    <li>Lodge a complaint with your country's data protection authority.</li>
                  </ul>
                  <p className="mt-3">To exercise these rights, contact us at <a href="mailto:info@globalalora.com" className="text-[var(--turquoise)] hover:underline">info@globalalora.com</a>.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">8. Security</h2>
                  <p>We implement technical and organizational measures to protect your data against unauthorized access, loss or disclosure. However, no internet transmission is 100% secure.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">9. Changes to This Policy</h2>
                  <p>We may update this policy periodically. We will notify you of significant changes by posting the new version on this page with the update date.</p>
                </section>

                <section>
                  <h2 className="text-white text-[20px] font-semibold mb-3">10. Contact</h2>
                  <p>For privacy inquiries: <a href="mailto:info@globalalora.com" className="text-[var(--turquoise)] hover:underline">info@globalalora.com</a></p>
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
