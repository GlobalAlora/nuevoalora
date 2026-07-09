import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/alora/Nav";
import { Footer } from "@/components/layout/Footer";
import { getBlogPost, BLOG_POSTS } from "@/lib/blog-data";

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
    title: `${post.title[l]} | ALORA Blog`,
    description: post.excerpt[l],
    openGraph: {
      title: post.title[l],
      description: post.excerpt[l],
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(md: string): string {
  return md
    .trim()
    .replace(/^## (.+)$/gm, '<h2 class="text-white text-[22px] font-semibold mt-10 mb-4" style="letter-spacing:-0.025em">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-white text-[18px] font-semibold mt-7 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[var(--turquoise)] hover:underline">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/(<li[^>]*>[\s\S]*?<\/li>\n?)+/g, (match) => `<ul class="space-y-2 my-4 text-white/70">${match}</ul>`)
    .replace(/^\| (.+) \|$/gm, (line) => {
      const cells = line.split("|").map((c) => c.trim()).filter(Boolean);
      const isHeader = false;
      return "<tr>" + cells.map((c) => `<td class="px-4 py-2 border border-white/10 text-[14px]">${c}</td>`).join("") + "</tr>";
    })
    .replace(/(<tr>[\s\S]*?<\/tr>\n?)+/g, (match) => `<div class="overflow-x-auto my-6"><table class="w-full border-collapse text-white/70">${match}</table></div>`)
    .replace(/\n\n/g, '</p><p class="mt-4 text-white/70 leading-relaxed text-[16px]">')
    .replace(/^(?!<[h2h3liutalstrd])(.+)$/gm, (line) => line.trim() ? line : "");
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
    new Date(dateStr).toLocaleDateString(isEs ? "es-AR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const htmlContent = renderMarkdown(post.content[langKey]);

  return (
    <>
      <Nav dict={dict} locale={l} />
      <main className="min-h-screen text-white pt-24 pb-20" style={{ background: "oklch(0.13 0.015 260)" }}>
        <div className="mx-auto max-w-3xl px-6">
          {/* Back */}
          <Link
            href={`/${l}/blog`}
            className="inline-flex items-center gap-2 text-[13px] text-white/35 hover:text-white/70 transition-colors mb-8"
          >
            ← {isEs ? "Volver al blog" : "Back to blog"}
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
              <span className="text-[12px] text-white/30">{post.readTime} min</span>
              <span className="text-[12px] text-white/30">·</span>
              <span className="text-[12px] text-white/30">{formatDate(post.date)}</span>
            </div>

            <h1 className="text-[30px] sm:text-[40px] font-bold text-white leading-tight mb-6" style={{ letterSpacing: "-0.035em" }}>
              {post.title[langKey]}
            </h1>

            <p className="text-[17px] text-white/55 leading-relaxed">
              {post.excerpt[langKey]}
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.07] mb-10" />

          {/* Content */}
          <article
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: `<p class="text-white/70 leading-relaxed text-[16px]">${htmlContent}</p>` }}
          />

          {/* CTA */}
          <div
            className="mt-16 rounded-2xl p-8 text-center"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <h2 className="text-[22px] font-bold text-white mb-2" style={{ letterSpacing: "-0.03em" }}>
              {isEs ? "¿Listo para aplicarlo en tu empresa?" : "Ready to apply this to your business?"}
            </h2>
            <p className="text-white/50 mb-6 text-[14px]">
              {isEs
                ? "Hablamos sobre tu proyecto y cómo podemos ayudarte."
                : "Let's talk about your project and how we can help."}
            </p>
            <Link
              href={`/${l}/contacto`}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[14px] font-semibold text-white transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, var(--turquoise), var(--electric))",
                boxShadow: "0 6px 24px color-mix(in oklab, var(--turquoise) 30%, transparent)",
              }}
            >
              {isEs ? "Contactar a ALORA" : "Contact ALORA"}
            </Link>
          </div>
        </div>
      </main>
      <Footer dict={dict} locale={l} />
    </>
  );
}
