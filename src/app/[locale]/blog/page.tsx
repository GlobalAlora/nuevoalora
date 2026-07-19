import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { getBlogPostsByLocale } from "@/lib/blog-data";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { BlogContent } from "./BlogContent";

interface Props { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs ? "Insights | ALORA — Software, IA y Automatización" : "Insights | ALORA — Software, AI & Automation",
    description: isEs
      ? "Artículos sobre desarrollo de software, inteligencia artificial, automatización y ecommerce para empresas en crecimiento."
      : "Articles about software development, artificial intelligence, automation and ecommerce for growing businesses.",
    alternates: { canonical: `https://www.globalalora.com/${locale}/blog` },
    openGraph: {
      title: isEs ? "Insights de ALORA" : "ALORA Insights",
      description: isEs
        ? "Insights sobre tecnología, IA y automatización para negocios."
        : "Insights on technology, AI and automation for businesses.",
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = await getDictionary(l);
  const isEs = l === "es";
  const posts = getBlogPostsByLocale(l);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: isEs ? "Inicio" : "Home", url: `https://www.globalalora.com/${l}` },
    { name: isEs ? "Insights" : "Insights", url: `https://www.globalalora.com/${l}/blog` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav dict={dict} locale={l} />
      <main className="min-h-screen text-white pt-24 pb-20" style={{ background: "oklch(0.13 0.015 260)" }}>
        {/* Hero */}
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="mb-10 mx-auto max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-widest text-white/50 mb-3">Insights</p>
            <h1
              className="whitespace-nowrap font-bold text-white mb-4"
              style={{ fontSize: "clamp(22px, 5vw, 48px)", letterSpacing: "-0.035em" }}
            >
              {isEs ? "Insights de tecnología" : "Technology insights"}
            </h1>
            <p className="mx-auto max-w-lg text-[16px] text-white/55 leading-relaxed">
              {isEs
                ? "Análisis y estrategia sobre software, inteligencia artificial y ecosistemas digitales para empresas que quieren crecer."
                : "Analysis and strategy on software, artificial intelligence and digital ecosystems for businesses that want to grow."}
            </p>
          </div>

          <BlogContent posts={posts} locale={l} />
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <h2 className="text-[24px] font-bold text-white mb-3" style={{ letterSpacing: "-0.03em" }}>
              {isEs ? "¿Querés aplicar esto en tu empresa?" : "Want to apply this to your business?"}
            </h2>
            <p className="text-white/50 mb-6 text-[15px]">
              {isEs
                ? "Hablemos sobre cómo la tecnología puede transformar tu operación."
                : "Let's talk about how technology can transform your operation."}
            </p>
            <Link
              href={`/${l}/contacto`}
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-[14px] font-semibold text-white transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, var(--turquoise), var(--electric))",
                boxShadow: "0 6px 24px color-mix(in oklab, var(--turquoise) 30%, transparent)",
              }}
            >
              {isEs ? "Hablar con un experto" : "Talk to an expert"}
            </Link>
          </div>
        </div>
      </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
