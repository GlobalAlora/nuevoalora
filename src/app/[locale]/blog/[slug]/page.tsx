import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { marked } from "marked";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { getBlogPost, getRelatedPosts, BLOG_POSTS } from "@/lib/blog-data";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { TrackedLink } from "@/components/shared/TrackedLink";

interface Props { params: Promise<{ locale: string; slug: string }> }

export async function generateStaticParams() {
  const locales = ["es", "en"];
  return locales.flatMap((locale) =>
    BLOG_POSTS.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Not found" };
  const l = locale as "es" | "en";
  return {
    title: `${post.title[l]} | ALORA Insights`,
    description: post.excerpt[l],
    openGraph: {
      title: post.title[l],
      description: post.excerpt[l],
      type: "article",
      publishedTime: post.date,
      images: post.image ? [{ url: post.image, width: 1200, height: 630 }] : undefined,
    },
  };
}

function renderMarkdown(md: string): string {
  return marked.parse(md.trim(), { gfm: true, breaks: false }) as string;
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) notFound();
  const l = locale as Locale;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const dict = await getDictionary(l);
  const isEs = l === "es";
  const langKey = l as "es" | "en";

  const formatDate = (dateStr: string) =>
    new Date(`${dateStr}T12:00:00`).toLocaleDateString(isEs ? "es-AR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const htmlContent = renderMarkdown(post.content[langKey]);
  const faqItems = post.faq?.[langKey];
  const relatedPosts = getRelatedPosts(slug, langKey);
  const callUrl = l === "es" ? "/es/llamada-de-relevamiento" : "/en/discovery-call";

  const siteUrl = "https://www.globalalora.com";
  const pageUrl = `${siteUrl}/${l}/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title[langKey],
    description: post.excerpt[langKey],
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    author: { "@type": "Organization", name: "ALORA" },
    publisher: { "@type": "Organization", name: "ALORA", url: siteUrl },
  };

  const faqSchema = faqItems
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: isEs ? "Inicio" : "Home", url: `https://www.globalalora.com/${l}` },
    { name: "Insights", url: `https://www.globalalora.com/${l}/blog` },
    { name: post.title[langKey], url: pageUrl },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <Nav dict={dict} locale={l} />
      <main className="min-h-screen text-white pt-24 pb-20" style={{ background: "oklch(0.13 0.015 260)" }}>
        <div className="mx-auto max-w-3xl px-6">
          {/* Back */}
          <Link
            href={`/${l}/blog`}
            className="inline-flex items-center gap-2 text-[13px] text-white/50 hover:text-white/70 transition-colors mb-8"
          >
            ← {isEs ? "Volver a Insights" : "Back to Insights"}
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                style={{ color: "var(--turquoise)", background: "color-mix(in oklab, var(--turquoise) 12%, transparent)" }}
              >
                {post.category[langKey]}
              </span>
              <span className="text-[12px] text-white/50">{post.readTime} min</span>
              <span className="text-[12px] text-white/50">·</span>
              <span className="text-[12px] text-white/50">{formatDate(post.date)}</span>
            </div>

            <h1 className="text-[30px] sm:text-[40px] font-bold text-white leading-tight mb-6" style={{ letterSpacing: "-0.035em" }}>
              {post.title[langKey]}
            </h1>

            <p className="text-[17px] text-white/55 leading-relaxed">
              {post.excerpt[langKey]}
            </p>
          </div>

          {/* Cover image */}
          {post.image && (
            <div className="relative mb-10 h-64 sm:h-80 overflow-hidden rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <Image
                src={post.image}
                alt={post.title[langKey]}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Divider */}
          <div className="border-t border-white/[0.07] mb-10" />

          {/* Content */}
          <article className="prose-custom" dangerouslySetInnerHTML={{ __html: htmlContent }} />
          <style>{`
            .prose-custom h2 { color: #fff; font-size: 22px; font-weight: 600; margin-top: 40px; margin-bottom: 16px; letter-spacing: -0.025em; }
            .prose-custom h3 { color: #fff; font-size: 18px; font-weight: 600; margin-top: 28px; margin-bottom: 12px; }
            .prose-custom p { color: rgba(255,255,255,0.7); line-height: 1.7; font-size: 16px; margin-top: 16px; }
            .prose-custom strong { color: #fff; }
            .prose-custom a { color: var(--turquoise); }
            .prose-custom a:hover { text-decoration: underline; }
            .prose-custom ul, .prose-custom ol { color: rgba(255,255,255,0.7); margin: 16px 0; padding-left: 20px; display: flex; flex-direction: column; gap: 8px; }
            .prose-custom ul { list-style: disc; }
            .prose-custom ol { list-style: decimal; }
            .prose-custom li { padding-left: 4px; }
            .prose-custom table { width: 100%; display: block; overflow-x: auto; border-collapse: collapse; color: rgba(255,255,255,0.7); margin: 24px 0; font-size: 14px; }
            .prose-custom th, .prose-custom td { padding: 8px 16px; border: 1px solid rgba(255,255,255,0.1); text-align: left; }
            .prose-custom th { color: #fff; font-weight: 600; background: rgba(255,255,255,0.03); }
            .prose-custom blockquote { border-left: 2px solid var(--turquoise); padding-left: 16px; margin: 16px 0; color: rgba(255,255,255,0.55); font-style: italic; }
            .prose-custom code { background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px; font-size: 13.5px; }
          `}</style>

          {/* FAQ */}
          {faqItems && (
            <div className="mt-14">
              <h2 className="text-[22px] font-bold text-white mb-6" style={{ letterSpacing: "-0.025em" }}>
                {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
              </h2>
              <div className="flex flex-col gap-3">
                {faqItems.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl px-5 py-4"
                    style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-white">
                      {item.q}
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                      >
                        <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(4.5 4)" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-[14px] leading-relaxed text-white/60">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-14">
              <h2 className="text-[22px] font-bold text-white mb-6" style={{ letterSpacing: "-0.025em" }}>
                {isEs ? "Te puede interesar" : "You might also like"}
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/${l}/blog/${rp.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    {rp.image ? (
                      <div className="relative h-28 overflow-hidden">
                        <Image
                          src={rp.image}
                          alt={rp.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="h-28" style={{ background: "radial-gradient(ellipse at 30% 50%, color-mix(in oklab, var(--turquoise) 16%, transparent), transparent 70%), oklch(0.15 0.015 260)" }} />
                    )}
                    <div className="flex flex-1 flex-col p-4">
                      <span className="mb-2 text-[10.5px] font-semibold uppercase tracking-wider text-white/45">{rp.category}</span>
                      <h3 className="text-[13.5px] font-semibold leading-snug text-white group-hover:text-[var(--turquoise)] transition-colors">
                        {rp.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div
            className="mt-16 rounded-2xl p-8 text-center"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <h2 className="text-[22px] font-bold text-white mb-2" style={{ letterSpacing: "-0.03em" }}>
              {isEs ? "Hablemos de tu proyecto." : "Let's talk about your project."}
            </h2>
            <p className="text-white/50 mb-6 text-[14px]">
              {isEs
                ? "Contanos qué necesitás y te respondemos en menos de 24 horas."
                : "Tell us what you need and we'll get back to you within 24 hours."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <TrackedLink
                href={callUrl}
                event="book_call_click"
                eventParams={{ landing_page: `/${l}/blog/${slug}` }}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[14px] font-semibold text-white transition-all hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, var(--turquoise), var(--electric))",
                  boxShadow: "0 6px 24px color-mix(in oklab, var(--turquoise) 30%, transparent)",
                }}
              >
                {isEs ? "Reservar llamada gratuita" : "Book a free call"}
              </TrackedLink>
              <Link
                href={`/${l}/contacto`}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[14px] font-semibold text-white transition-all hover:scale-[1.02]"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)" }}
              >
                {isEs ? "Contactar a ALORA" : "Contact ALORA"}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
