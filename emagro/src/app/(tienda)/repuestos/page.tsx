import Link from "next/link";
import { categorias, productos } from "@/data/catalogo";
import { ProductCard } from "@/components/product-card";

export const metadata = { title: "Repuestos | Emagro" };

export default function RepuestosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
      <aside>
        <h2 className="font-semibold text-ink mb-3">Categorías</h2>
        <ul className="space-y-2 text-sm">
          {categorias.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/repuestos/${cat.slug}`}
                className="text-muted hover:text-primary"
              >
                {cat.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div>
        <h1 className="text-2xl font-bold text-ink mb-6">
          Todos los repuestos
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {productos.map((p) => (
            <ProductCard key={p.slug} producto={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
