import Link from "next/link";
import Image from "next/image";
import type { RelatedCard } from "@/lib/related-content";

interface Props {
  heading: string;
  items: RelatedCard[];
}

export function RelatedContentGrid({ heading, items }: Props) {
  if (items.length === 0) return null;

  return (
    <div className="mt-14">
      <h2 className="text-[22px] font-bold text-white mb-6" style={{ letterSpacing: "-0.025em" }}>
        {heading}
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {item.image ? (
              <div className="relative h-28 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="h-28" style={{ background: "radial-gradient(ellipse at 30% 50%, color-mix(in oklab, var(--turquoise) 16%, transparent), transparent 70%), oklch(0.15 0.015 260)" }} />
            )}
            <div className="flex flex-1 flex-col p-4">
              <span className="mb-2 text-[10.5px] font-semibold uppercase tracking-wider text-white/45">{item.eyebrow}</span>
              <h3 className="text-[13.5px] font-semibold leading-snug text-white group-hover:text-[var(--turquoise)] transition-colors">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
