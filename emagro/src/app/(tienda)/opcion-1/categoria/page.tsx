import Link from "next/link";
import { categorias, marcas, productos } from "@/data/catalogo";
import { ProductCard } from "@/components/product-card";

export const metadata = { title: "Motor | Emagro — Opción 1" };

const categoria = categorias[0]; // Motor — categoría de muestra
const productosDeCategoria = productos; // muestra: todo el catálogo demo

export default function CategoriaOpcion1Page() {
  return (
    <div className="bg-white">
      {/* BANNER VERDE con overlay tecnológico, igual lenguaje que el hero de Opción 1 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-14">
        <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(100deg,transparent,transparent_38px,rgba(255,255,255,0.5)_39px)]" />
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
        >
          <g stroke="#F2B33D" strokeWidth="1" opacity="0.6">
            <line x1="600" y1="60" x2="680" y2="110" />
            <line x1="680" y1="110" x2="740" y2="70" />
          </g>
          <g fill="#F2B33D">
            <circle cx="600" cy="60" r="3" />
            <circle cx="680" cy="110" r="3" />
            <circle cx="740" cy="70" r="3" />
          </g>
        </svg>
        <div className="relative mx-auto max-w-7xl px-4">
          <p className="text-white/60 text-xs uppercase tracking-widest font-semibold">
            Repuestos
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-extrabold mt-1">
            {categoria.nombre}
          </h1>
          <div className="flex flex-wrap gap-2 mt-5">
            {categoria.subcategorias.map((sub, i) => (
              <span
                key={sub.slug}
                className={
                  i === 0
                    ? "bg-white text-primary-dark text-xs font-bold px-3 py-1.5 rounded-full"
                    : "bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20"
                }
              >
                {sub.nombre}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
        <aside>
          <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-3">
            Marca
          </h3>
          <ul className="space-y-2.5 mb-8">
            {marcas.slice(0, 6).map((m) => (
              <li key={m}>
                <label className="flex items-center gap-2 text-sm text-ink cursor-pointer">
                  <input type="checkbox" className="accent-primary" />
                  {m}
                </label>
              </li>
            ))}
          </ul>
          <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-3">
            Disponibilidad
          </h3>
          <label className="flex items-center gap-2 text-sm text-ink cursor-pointer">
            <input type="checkbox" className="accent-primary" />
            Solo con stock
          </label>
        </aside>

        <div>
          <div className="flex items-center justify-between border-b border-black/10 pb-3 mb-6">
            <p className="text-sm text-muted">
              {productosDeCategoria.length} resultados
            </p>
            <select className="text-sm border border-black/10 rounded-lg px-3 py-1.5 text-ink">
              <option>Más relevantes</option>
              <option>Menor precio</option>
              <option>Mayor precio</option>
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {productosDeCategoria.map((p) => (
              <ProductCard key={p.slug} producto={p} basePath="/opcion-1/producto" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
