import Link from "next/link";
import { notFound } from "next/navigation";
import { categorias, productos } from "@/data/catalogo";
import { ProductCard } from "@/components/product-card";

type Props = { params: Promise<{ categoria: string }> };

export default async function CategoriaPage({ params }: Props) {
  const { categoria: categoriaSlug } = await params;
  const categoria = categorias.find((c) => c.slug === categoriaSlug);
  if (!categoria) notFound();

  const productosDeCategoria = productos.filter(
    (p) => p.categoria === categoriaSlug
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-bold text-ink">{categoria.nombre}</h1>

      <div className="flex gap-2 mt-4 flex-wrap">
        {categoria.subcategorias.map((sub) => (
          <Link
            key={sub.slug}
            href={`/repuestos/${categoria.slug}/${sub.slug}`}
            className="text-sm bg-white border border-border rounded-full px-3 py-1 text-ink hover:border-primary hover:text-primary"
          >
            {sub.nombre}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {productosDeCategoria.map((p) => (
          <ProductCard key={p.slug} producto={p} />
        ))}
      </div>
      {productosDeCategoria.length === 0 && (
        <p className="text-muted mt-8">
          Todavía no hay productos cargados en esta categoría.
        </p>
      )}
    </div>
  );
}
