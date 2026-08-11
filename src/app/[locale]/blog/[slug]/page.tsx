import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { marked } from "marked";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { getBlogPostByRouteSlug, getRelatedPosts, BLOG_POSTS } from "@/lib/blog-data";
import { getCategoryColor } from "@/lib/blog-categories";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { TrackedLink } from "@/components/shared/TrackedLink";
import { WhatsAppLink } from "@/components/shared/WhatsAppLink";
import { buildWhatsAppHref } from "@/lib/whatsapp";

interface Props { params: Promise<{ locale: string; slug: string }> }

export async function generateStaticParams() {
  return BLOG_POSTS.flatMap((post) => [
    { locale: "es", slug: post.slug },
    { locale: "en", slug: post.slugEn },
  ]);
}

// Several post excerpts run well past Google's ~155-160 char SERP cutoff —
// they're written to work as blog-card copy too, where the extra length is
// fine. Meta/OG/Twitter descriptions get a word-boundary-safe trim instead
// of a mid-sentence cut, so they never get truncated in an ugly place.
function truncateForMeta(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max)}…`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const l = locale as "es" | "en";
  const post = getBlogPostByRouteSlug(slug, l);
  if (!post) return { title: "Not found" };
  const metaDescription = truncateForMeta(post.excerpt[l]);
  return {
    title: `${post.title[l]} | ALORA Insights`,
    description: metaDescription,
    alternates: {
      canonical: `https://www.globalalora.com/${l}/blog/${slug}`,
      languages: { es: `/es/blog/${post.slug}`, en: `/en/blog/${post.slugEn}` },
    },
    openGraph: {
      title: post.title[l],
      description: metaDescription,
      url: `https://www.globalalora.com/${l}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      images: post.image ? [{ url: post.image, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title[l],
      description: metaDescription,
      images: post.image ? [post.image] : undefined,
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
  const post = getBlogPostByRouteSlug(slug, l);
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
  const whatsappUrl = buildWhatsAppHref(`/${l}/blog/${slug}`, l);

  const siteUrl = "https://www.globalalora.com";
  const pageUrl = `${siteUrl}/${l}/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title[langKey],
    description: post.excerpt[langKey],
    image: post.image ? [`${siteUrl}${post.image}`] : undefined,
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
        <div className="mx-auto max-w-6xl px-6">
          {/* Back */}
          <Link
            href={`/${l}/blog`}
            className="inline-flex items-center gap-2 text-[13px] text-white/50 hover:text-white/70 transition-colors mb-8"
          >
            ← {isEs ? "Volver a Insights" : "Back to Insights"}
          </Link>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0 max-w-3xl">
          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {post.category[langKey].map((cat) => {
                const color = getCategoryColor(cat);
                return (
                  <span
                    key={cat}
                    className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                    style={{ color, background: `color-mix(in oklab, ${color} 12%, transparent)` }}
                  >
                    {cat}
                  </span>
                );
              })}
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
                alt={post.imageAlt?.[langKey] ?? post.title[langKey]}
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
            .prose-custom a { color: var(--turquoise); text-decoration: underline; text-underline-offset: 2px; }
            .prose-custom a:hover { color: #fff; }
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

          </div>

          {/* Sidebar — CTAs + related posts, sticky on desktop, inline below the article on mobile */}
          <aside className="lg:sticky lg:top-28">
            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(155deg, color-mix(in oklab, var(--turquoise) 14%, transparent), color-mix(in oklab, var(--electric) 8%, transparent) 70%)",
                border: "1px solid color-mix(in oklab, var(--turquoise) 28%, transparent)",
              }}
            >
              <h2 className="text-[16px] font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
                {isEs ? "¿Hablamos de tu proyecto?" : "Should we talk about your project?"}
              </h2>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">
                {isEs ? "Elegí el canal que prefieras — respondemos en menos de 24 horas." : "Pick whichever channel you prefer — we reply within 24 hours."}
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <TrackedLink
                  href={callUrl}
                  event="book_call_click"
                  eventParams={{ landing_page: `/${l}/blog/${slug}` }}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-[13.5px] font-semibold text-white transition-all hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, var(--turquoise), var(--electric))",
                    boxShadow: "0 6px 24px color-mix(in oklab, var(--turquoise) 30%, transparent)",
                  }}
                >
                  {isEs ? "Reservar llamada de estrategia" : "Book a strategy call"}
                </TrackedLink>
                <WhatsAppLink
                  href={whatsappUrl}
                  landingPage={`/${l}/blog/${slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-[13.5px] font-semibold text-white transition-all hover:scale-[1.02]"
                  style={{ background: "#25D366" }}
                >
                  {isEs ? "Hablar por WhatsApp" : "Chat on WhatsApp"}
                </WhatsAppLink>
                <Link
                  href={`/${l}/contacto`}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-[13.5px] font-semibold text-white transition-all hover:scale-[1.02]"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.16)" }}
                >
                  {isEs ? "Escribirnos por formulario" : "Send us a message"}
                </Link>
              </div>
            </div>

            {relatedPosts.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-white/45">
                  {isEs ? "Te puede interesar" : "You might like"}
                </h2>
                <div className="flex flex-col gap-3">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/${l}/blog/${rp.slug}`}
                      className="group flex items-center gap-3 overflow-hidden rounded-xl p-2.5 transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      {rp.image ? (
                        <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={rp.image}
                            alt={rp.imageAlt ?? rp.title}
                            fill
                            sizes="64px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="h-14 w-16 shrink-0 rounded-lg" style={{ background: "radial-gradient(ellipse at 30% 50%, color-mix(in oklab, var(--turquoise) 16%, transparent), transparent 70%), oklch(0.15 0.015 260)" }} />
                      )}
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40">{rp.category[0]}</span>
                        <h3 className="text-[12.5px] font-semibold leading-snug text-white group-hover:text-[var(--turquoise)] transition-colors line-clamp-2">
                          {rp.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
          </div>
        </div>
      </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
