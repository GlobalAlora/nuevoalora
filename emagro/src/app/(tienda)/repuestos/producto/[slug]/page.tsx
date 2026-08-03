import { notFound } from "next/navigation";
import { productos } from "@/data/catalogo";

type Props = { params: Promise<{ slug: string }> };

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const producto = productos.find((p) => p.slug === slug);
  if (!producto) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="aspect-square bg-white border border-border rounded-lg flex items-center justify-center text-muted">
        Galería de imágenes
      </div>

      <div>
        <p className="text-sm text-muted">SKU: {producto.sku}</p>
        <h1 className="text-2xl font-bold text-ink mt-1">
          {producto.nombre}
        </h1>
        <p className="text-sm text-muted mt-1">
          Nº OEM: {producto.numeroOem}
        </p>

        <p className="text-3xl font-bold text-gold mt-4">
          ${producto.precio.toLocaleString("es-AR")}
        </p>
        <p className="text-sm text-primary mt-1">
          {producto.stock > 0
            ? `${producto.stock} unidades en stock`
            : "Sin stock — consultar"}
        </p>

        <button className="mt-6 bg-orange text-white font-medium px-6 py-3 rounded-md hover:opacity-90">
          Agregar al carrito
        </button>

        <div className="mt-8">
          <h2 className="font-semibold text-ink">Descripción</h2>
          <p className="text-muted text-sm mt-2">{producto.descripcion}</p>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-ink">Compatibilidad</h2>
          <table className="w-full text-sm mt-2 border border-border rounded-md overflow-hidden">
            <thead className="bg-surface text-left">
              <tr>
                <th className="px-3 py-2">Marca</th>
                <th className="px-3 py-2">Modelo</th>
              </tr>
            </thead>
            <tbody>
              {producto.marcasCompatibles.map((marca) =>
                producto.modelosCompatibles.map((modelo) => (
                  <tr key={`${marca}-${modelo}`} className="border-t border-border">
                    <td className="px-3 py-2">{marca}</td>
                    <td className="px-3 py-2">{modelo}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
