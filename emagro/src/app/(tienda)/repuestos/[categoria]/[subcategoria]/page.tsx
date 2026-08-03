import { notFound } from "next/navigation";
import { categorias, productos } from "@/data/catalogo";
import { ProductCard } from "@/components/product-card";

type Props = { params: Promise<{ categoria: string; subcategoria: string }> };

export default async function SubcategoriaPage({ params }: Props) {
  const { categoria: categoriaSlug, subcategoria: subcategoriaSlug } =
    await params;
  const categoria = categorias.find((c) => c.slug === categoriaSlug);
  const subcategoria = categoria?.subcategorias.find(
    (s) => s.slug === subcategoriaSlug
  );
  if (!categoria || !subcategoria) notFound();

  const productosFiltrados = productos.filter(
    (p) => p.categoria === categoriaSlug && p.subcategoria === subcategoriaSlug
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <p className="text-sm text-muted">{categoria.nombre}</p>
      <h1 className="text-2xl font-bold text-ink">{subcategoria.nombre}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {productosFiltrados.map((p) => (
          <ProductCard key={p.slug} producto={p} />
        ))}
      </div>
      {productosFiltrados.length === 0 && (
        <p className="text-muted mt-8">
          Todavía no hay productos cargados en esta subcategoría.
        </p>
      )}
    </div>
  );
}
