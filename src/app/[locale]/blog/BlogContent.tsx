"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { BLOG_CATEGORIES, getCategoryColor } from "@/lib/blog-categories";

function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string[];
  readTime: number;
  image?: string;
  imageAlt?: string;
}

interface Props {
  posts: Post[];
  locale: Locale;
}

export function BlogContent({ posts, locale: l }: Props) {
  const isEs = l === "es";
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onQueryChange = (value: string) => {
    setQuery(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (value.trim()) params.set("q", value.trim());
      else params.delete("q");
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }, 300);
  };

  useEffect(() => {
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, []);

  const filters = BLOG_CATEGORIES.map((c) => (isEs ? c.es : c.en));
  const byCategory = active ? posts.filter((p) => p.category.includes(active)) : posts;
  const normalizedQuery = normalize(query.trim());
  const visible = normalizedQuery
    ? byCategory.filter((p) => normalize(p.title).includes(normalizedQuery) || normalize(p.excerpt).includes(normalizedQuery))
    : byCategory;

  const formatDate = (dateStr: string) => {
    const date = new Date(`${dateStr}T12:00:00`);
    return date.toLocaleDateString(isEs ? "es-AR" : "en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <>
      {/* Search */}
      <div className="mb-6 mx-auto max-w-md">
        <div className="relative">
          <svg viewBox="0 0 20 20" fill="none" width="16" height="16" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
            <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder={isEs ? "Buscar en el blog..." : "Search the blog..."}
            aria-label={isEs ? "Buscar en el blog" : "Search the blog"}
            className="w-full rounded-full py-2.5 pl-11 pr-4 text-[14px] text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/25"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          />
        </div>
      </div>

      {/* Category filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2.5">
        <button
          type="button"
          onClick={() => setActive(null)}
          className="rounded-full px-4 py-1.5 text-[12.5px] font-semibold transition-colors"
          style={
            active === null
              ? { color: "#05070c", background: "#fff" }
              : { color: "rgba(255,255,255,0.65)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }
          }
        >
          {isEs ? "Todos" : "All"}
        </button>
        {filters.map((name) => {
          const color = getCategoryColor(name);
          const isActive = active === name;
          return (
            <button
              key={name}
              type="button"
              onClick={() => setActive(isActive ? null : name)}
              className="rounded-full px-4 py-1.5 text-[12.5px] font-semibold transition-colors"
              style={
                isActive
                  ? { color: "#05070c", background: color }
                  : { color, background: `color-mix(in oklab, ${color} 12%, transparent)`, border: `1px solid color-mix(in oklab, ${color} 30%, transparent)` }
              }
            >
              {name}
            </button>
          );
        })}
      </div>

      {/* Posts grid */}
      {visible.length === 0 ? (
        <p className="py-16 text-center text-[14px] text-white/50">
          {isEs ? "No encontramos posts que coincidan con tu búsqueda." : "No posts match your search."}
        </p>
      ) : (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post, i) => {
          const primaryColor = getCategoryColor(post.category[0]);
          return (
            <Link
              key={post.slug}
              href={`/${l}/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Cover image (falls back to gradient placeholder) */}
              {post.image ? (
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt ?? post.title}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div
                  className="h-44 flex items-center justify-center"
                  style={{
                    background: `radial-gradient(ellipse at 30% 50%, color-mix(in oklab, ${primaryColor} 18%, transparent), transparent 70%), oklch(0.15 0.015 260)`,
                  }}
                >
                  <span className="text-[40px] opacity-30 group-hover:opacity-50 transition-opacity">
                    {post.category[0].includes("Inteligencia") || post.category[0].includes("Artificial") ? "💬" :
                     post.category[0].includes("Ecommerce") ? "🛍️" :
                     post.category[0].includes("Software") ? "⚙️" : "🌐"}
                  </span>
                </div>
              )}

              <div className="flex flex-col flex-1 p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {post.category.map((cat) => {
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
      )}
    </>
  );
}
