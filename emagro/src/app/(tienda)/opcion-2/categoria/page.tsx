import { categorias, marcas, productos } from "@/data/catalogo";
import { ProductCard } from "@/components/product-card";

export const metadata = { title: "Motor | Emagro — Opción 2" };

const categoria = categorias[0]; // Motor — categoría de muestra
const productosDeCategoria = productos; // muestra: todo el catálogo demo

export default function CategoriaOpcion2Page() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <p className="text-sm text-muted">Repuestos</p>
        <h1 className="text-3xl font-extrabold text-ink mt-1">
          {categoria.nombre}
        </h1>

        {/* FILTROS — pills, mismo lenguaje que el buscador de la Home */}
        <div className="bg-surface border border-black/10 rounded-2xl p-4 mt-6">
          <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">
            Subcategoría
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {categoria.subcategorias.map((sub, i) => (
              <button
                key={sub.slug}
                className={
                  i === 0
                    ? "bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full"
                    : "bg-white text-ink text-sm font-medium px-4 py-1.5 rounded-full border border-black/10 hover:border-primary"
                }
              >
                {sub.nombre}
              </button>
            ))}
          </div>
          <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">
            Marca
          </p>
          <div className="flex flex-wrap gap-2">
            {marcas.slice(0, 6).map((m) => (
              <button
                key={m}
                className="bg-white text-muted text-xs font-medium px-3 py-1.5 rounded-full border border-black/10 hover:border-primary hover:text-primary"
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 mb-5">
          <p className="text-sm text-muted">
            {productosDeCategoria.length} resultados
          </p>
          <select className="text-sm border border-black/10 rounded-lg px-3 py-1.5 text-ink bg-white">
            <option>Más relevantes</option>
            <option>Menor precio</option>
            <option>Mayor precio</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {productosDeCategoria.map((p) => (
            <ProductCard key={p.slug} producto={p} basePath="/opcion-2/producto" />
          ))}
        </div>
      </div>
    </div>
  );
}
