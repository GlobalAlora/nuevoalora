import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { getBlogPostsByLocale } from "@/lib/blog-data";

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

  const formatDate = (dateStr: string) => {
    const date = new Date(`${dateStr}T12:00:00`);
    return date.toLocaleDateString(isEs ? "es-AR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const categoryColors: Record<string, string> = {
    "Ecommerce": "var(--turquoise)",
    "Inteligencia Artificial": "var(--electric)",
    "Artificial Intelligence": "var(--electric)",
    "Automatización": "var(--violet)",
    "Automation": "var(--violet)",
  };

  return (
    <>
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

          {/* Posts grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const color = categoryColors[post.category] ?? "var(--turquoise)";
              return (
                <Link
                  key={post.slug}
                  href={`/${l}/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {/* Gradient placeholder */}
                  <div
                    className="h-44 flex items-center justify-center"
                    style={{
                      background: `radial-gradient(ellipse at 30% 50%, color-mix(in oklab, ${color} 18%, transparent), transparent 70%), oklch(0.15 0.015 260)`,
                    }}
                  >
                    <span className="text-[40px] opacity-30 group-hover:opacity-50 transition-opacity">
                      {post.category.toLowerCase().includes("ia") || post.category.toLowerCase().includes("artif") ? "🤖" :
                       post.category.toLowerCase().includes("auto") ? "⚡" : "🛍️"}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                        style={{ color, background: `color-mix(in oklab, ${color} 12%, transparent)` }}
                      >
                        {post.category}
                      </span>
                      <span className="text-[12px] text-white/50">{post.readTime} min</span>
                    </div>

                    <h2 className="text-[17px] font-semibold text-white leading-snug mb-3 group-hover:text-[var(--turquoise)] transition-colors" style={{ letterSpacing: "-0.02em" }}>
                      {post.title}
                    </h2>

                    <p className="text-[13px] text-white/50 leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                      <span className="text-[12px] text-white/50">{formatDate(post.date)}</span>
                      <span className="text-[13px] text-white/50 group-hover:text-white/80 transition-colors flex items-center gap-1">
                        {isEs ? "Leer" : "Read"} →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
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
