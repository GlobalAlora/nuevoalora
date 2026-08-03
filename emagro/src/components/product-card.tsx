import Link from "next/link";
import type { Producto } from "@/data/catalogo";

export function ProductCard({
  producto,
  basePath = "/repuestos/producto",
}: {
  producto: Producto;
  basePath?: string;
}) {
  return (
    <Link
      href={`${basePath}/${producto.slug}`}
      className="block bg-white rounded-lg border border-border p-4 hover:shadow-md transition-shadow"
    >
      <div className="aspect-square bg-surface rounded-md mb-3 flex items-center justify-center text-muted text-xs">
        Imagen
      </div>
      <p className="text-xs text-muted">{producto.sku}</p>
      <h3 className="font-medium text-ink leading-snug mt-0.5">
        {producto.nombre}
      </h3>
      <p className="text-xs text-muted mt-1">
        {producto.marcasCompatibles.join(", ")}
      </p>
      <p className="text-gold font-bold mt-2">
        ${producto.precio.toLocaleString("es-AR")}
      </p>
    </Link>
  );
}
