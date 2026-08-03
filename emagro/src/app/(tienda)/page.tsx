import Link from "next/link";
import { Wrench, PackageCheck, Tractor } from "lucide-react";
import { categorias, productos, maquinarias, marcas } from "@/data/catalogo";
import { ProductCard } from "@/components/product-card";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[560px] md:h-[620px] overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
          {/* textura de campo (líneas de cultivo) */}
          <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(100deg,transparent,transparent_38px,rgba(255,255,255,0.5)_39px)]" />
          {/* overlay tecnológico: puntos conectados */}
          <svg
            className="absolute inset-0 w-full h-full opacity-40"
            viewBox="0 0 800 600"
            preserveAspectRatio="none"
          >
            <g stroke="#F2B33D" strokeWidth="1" opacity="0.6">
              <line x1="560" y1="120" x2="660" y2="180" />
              <line x1="660" y1="180" x2="640" y2="280" />
              <line x1="660" y1="180" x2="740" y2="160" />
              <line x1="640" y1="280" x2="720" y2="340" />
            </g>
            <g fill="#F2B33D">
              <circle cx="560" cy="120" r="3.5" />
              <circle cx="660" cy="180" r="3.5" />
              <circle cx="640" cy="280" r="3.5" />
              <circle cx="740" cy="160" r="3.5" />
              <circle cx="720" cy="340" r="3.5" />
            </g>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 h-full flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Repuestos y maquinaria agrícola
            </span>
            <h1 className="text-white text-4xl md:text-6xl font-extrabold mt-4 max-w-2xl leading-[1.05]">
              La <span className="font-normal">fuerza del campo</span>, con la
              precisión de la tecnología.
            </h1>
            <p className="text-white/80 mt-5 max-w-lg text-lg">
              Repuestos con compatibilidad verificada y maquinaria de alto
              rendimiento, para que tu producción no pare.
            </p>
          </div>
        </div>

        {/* BUSCADOR FLOTANTE */}
        <div className="relative mx-auto max-w-5xl px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-black/5 -mt-14 md:-mt-16 p-5 md:p-6 grid grid-cols-2 md:grid-cols-5 gap-4 items-end">
            <div className="col-span-2 md:col-span-1">
              <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                Busco
              </label>
              <select className="w-full mt-1.5 border border-black/10 rounded-lg px-3 py-2.5 text-sm text-ink bg-white">
                <option>Repuestos</option>
                <option>Maquinaria</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                Categoría
              </label>
              <select className="w-full mt-1.5 border border-black/10 rounded-lg px-3 py-2.5 text-sm text-ink bg-white">
                <option>Todas</option>
                {categorias.map((c) => (
                  <option key={c.slug}>{c.nombre}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                Marca
              </label>
              <select className="w-full mt-1.5 border border-black/10 rounded-lg px-3 py-2.5 text-sm text-ink bg-white">
                <option>Todas</option>
                {marcas.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted uppercase tracking-wide">
                Código o modelo
              </label>
              <input
                type="text"
                placeholder="Ej. RE504836"
                className="w-full mt-1.5 border border-black/10 rounded-lg px-3 py-2.5 text-sm text-ink bg-white outline-none"
              />
            </div>
            <button className="bg-orange text-white font-bold rounded-lg px-4 py-2.5 text-sm hover:brightness-95 transition-all">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="mx-auto max-w-7xl px-4 pt-20 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-ink max-w-lg">
          Una solución para cada necesidad de tu campo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[
            {
              icon: <Wrench size={22} />,
              title: "Repuestos originales",
              text: "Catálogo técnico con compatibilidad verificada por marca y modelo. Stock real, envío a todo el país.",
              cta: "Ver repuestos",
              href: "/repuestos",
            },
            {
              icon: <Tractor size={22} />,
              title: "Maquinaria nueva",
              text: "Equipos 0km de las principales marcas, con asesoramiento técnico y financiación a medida.",
              cta: "Ver catálogo",
              href: "/maquinaria",
            },
            {
              icon: <PackageCheck size={22} />,
              title: "Maquinaria usada",
              text: "Equipos revisados y con service al día. La mejor relación entre rendimiento y precio.",
              cta: "Ver disponibles",
              href: "/maquinaria",
            },
          ].map((f) => (
            <div key={f.title}>
              <span className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                {f.icon}
              </span>
              <h3 className="font-bold text-lg text-ink mt-4">{f.title}</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                {f.text}
              </p>
              <Link
                href={f.href}
                className="inline-block mt-4 text-primary font-semibold text-sm border-b-2 border-primary/30 hover:border-primary transition-colors"
              >
                {f.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-ink">
              Categorías de repuestos
            </h2>
            <Link href="/repuestos" className="text-primary text-sm font-semibold">
              Ver todas →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categorias.map((cat) => (
              <Link
                key={cat.slug}
                href={`/repuestos/${cat.slug}`}
                className="bg-white border border-black/5 rounded-xl p-5 text-center font-semibold text-ink hover:border-primary hover:shadow-md transition-all"
              >
                {cat.nombre}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-ink">Repuestos destacados</h2>
          <Link href="/repuestos" className="text-primary text-sm font-semibold">
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {productos.map((p) => (
            <ProductCard key={p.slug} producto={p} />
          ))}
        </div>
      </section>

      {/* MAQUINARIA — franja verde */}
      <section id="maquinaria-destacada" className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-white/70 text-sm text-center max-w-lg mx-auto">
            Concesionario autorizado de las principales marcas del mercado
          </p>
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center mt-2">
            Maquinaria disponible
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {maquinarias.map((m) => (
              <Link
                key={m.slug}
                href="/maquinaria"
                className="bg-white rounded-xl overflow-hidden hover:-translate-y-1 transition-transform shadow-lg"
              >
                <div className="aspect-[4/3] bg-surface relative flex items-center justify-center">
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                    {m.estado}
                  </span>
                  <span className="text-muted text-xs">Foto del equipo</span>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {m.marca}
                  </p>
                  <h3 className="font-bold text-ink mt-0.5">{m.modelo}</h3>
                  <p className="text-xs text-muted mt-1">
                    {m.año} · {m.potenciaHp} HP
                  </p>
                  <p className="text-ink font-extrabold mt-2">
                    {m.precio
                      ? `USD ${m.precio.toLocaleString("es-AR")}`
                      : "Consultar precio"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section className="py-12 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-muted mb-6 text-center">
            Trabajamos con las principales marcas
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {marcas.map((m) => (
              <span key={m} className="font-bold text-sm text-ink/40">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
