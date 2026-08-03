import Link from "next/link";
import { ShieldCheck, Truck, Clock, ArrowRight } from "lucide-react";
import { categorias, productos, maquinarias, marcas } from "@/data/catalogo";
import { ProductCard } from "@/components/product-card";

export const metadata = { title: "Emagro — Opción 2" };

export default function Opcion2Page() {
  return (
    <div className="bg-white">
      {/* HERO PARTIDO: texto + buscador a la izquierda, foto contenida a la derecha */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Concesionario oficial", "+20 años", "Envíos a todo el país"].map(
                (t) => (
                  <span
                    key={t}
                    className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
            <h1 className="text-ink text-4xl md:text-5xl font-extrabold leading-tight">
              Conseguí el repuesto o la máquina que tu campo necesita
            </h1>
            <p className="text-muted mt-4 max-w-md">
              Tecnología de precisión al servicio de la fuerza del trabajo
              rural.
            </p>

            {/* BUSCADOR — en el flujo normal, sin superposiciones */}
            <div className="bg-surface border border-black/10 rounded-2xl p-4 mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select className="min-w-0 w-full border border-black/10 rounded-lg px-3 py-2.5 text-sm text-ink bg-white">
                  <option>Todas las categorías</option>
                  {categorias.map((c) => (
                    <option key={c.slug}>{c.nombre}</option>
                  ))}
                </select>
                <select className="min-w-0 w-full border border-black/10 rounded-lg px-3 py-2.5 text-sm text-ink bg-white">
                  <option>Todas las marcas</option>
                  {marcas.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-3 mt-3">
                <input
                  type="text"
                  placeholder="Código o modelo"
                  className="min-w-0 flex-1 border border-black/10 rounded-lg px-3 py-2.5 text-sm text-ink bg-white outline-none"
                />
                <button className="shrink-0 bg-primary text-white font-bold rounded-lg px-5 py-2.5 text-sm hover:bg-primary-dark transition-colors">
                  Buscar
                </button>
              </div>
            </div>
          </div>

          {/* FOTO CONTENIDA, con mira de precisión como guiño tech */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[linear-gradient(160deg,#2a4324_0%,#3c6b35_45%,#5b7d3f_100%)]">
            <div className="absolute inset-0 flex items-center justify-center text-white/25 text-sm font-semibold uppercase tracking-widest text-center px-8">
              Foto real de maquinaria en campo
            </div>
            <svg
              className="absolute right-6 top-6 w-16 h-16 text-gold/80"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="4" fill="currentColor" />
              <line x1="50" y1="2" x2="50" y2="18" stroke="currentColor" strokeWidth="1" />
              <line x1="50" y1="82" x2="50" y2="98" stroke="currentColor" strokeWidth="1" />
              <line x1="2" y1="50" x2="18" y2="50" stroke="currentColor" strokeWidth="1" />
              <line x1="82" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </section>

      {/* FRANJA DE CONFIANZA */}
      <div className="bg-surface py-14">
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            [ShieldCheck, "Compatibilidad verificada", "Cada repuesto cruzado contra marca, modelo y año."],
            [Clock, "Entrega 24/48h", "Stock real en catálogo, sin demoras de más."],
            [Truck, "Envíos a todo el país", "Retiro en sucursal o transporte a tu establecimiento."],
          ].map(([Icon, title, text]: any) => (
            <div key={title} className="flex flex-col items-center">
              <Icon size={26} className="text-primary" />
              <h3 className="font-bold text-ink mt-3">{title}</h3>
              <p className="text-muted text-sm mt-1">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIAS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-ink">
            Categorías de repuestos
          </h2>
          <Link
            href="/opcion-2/categoria"
            className="text-primary text-sm font-semibold flex items-center gap-1"
          >
            Ver todas <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categorias.map((cat) => (
            <Link
              key={cat.slug}
              href="/opcion-2/categoria"
              className="group bg-white border border-black/10 rounded-xl p-5 text-center font-semibold text-ink hover:border-primary transition-colors"
            >
              {cat.nombre}
            </Link>
          ))}
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-ink">Repuestos destacados</h2>
          <Link
            href="/opcion-2/categoria"
            className="text-primary text-sm font-semibold flex items-center gap-1"
          >
            Ver todos <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {productos.map((p) => (
            <ProductCard key={p.slug} producto={p} basePath="/opcion-2/producto" />
          ))}
        </div>
      </section>

      {/* MAQUINARIA — bento sobre fondo blanco */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-ink">Maquinaria disponible</h2>
          <Link
            href="/maquinaria"
            className="text-primary text-sm font-semibold flex items-center gap-1"
          >
            Ver todas <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {maquinarias.map((m, i) => (
            <Link
              key={m.slug}
              href="/maquinaria"
              className={`group border border-black/10 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow ${
                i === 0 ? "md:col-span-2 md:row-span-1" : ""
              }`}
            >
              <div className="aspect-[16/10] bg-surface relative flex items-center justify-center">
                <span className="absolute top-3 left-3 bg-white text-primary text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border border-primary/20">
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
              </div>
            </Link>
          ))}
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
