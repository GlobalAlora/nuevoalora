import { ShieldCheck } from "lucide-react";
import { productos } from "@/data/catalogo";

export const metadata = { title: "Bomba hidráulica Case IH Puma | Emagro — Opción 1" };

const producto = productos.find((p) => p.slug === "bomba-hidraulica-case-puma")!;

export default function ProductoOpcion1Page() {
  return (
    <div className="bg-white">
      {/* BREADCRUMB banner */}
      <div className="bg-primary-dark py-3">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-white/70 text-xs uppercase tracking-widest font-semibold">
            Repuestos / {producto.categoria} / {producto.subcategoria}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* GALERÍA */}
        <div>
          <div className="aspect-square bg-surface rounded-2xl relative flex items-center justify-center">
            <span className="absolute top-4 left-4 bg-primary-dark text-white text-xs font-bold px-2.5 py-1 rounded-full">
              {producto.sku}
            </span>
            <span className="text-muted text-sm">Foto del repuesto</span>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-surface rounded-lg flex items-center justify-center text-muted text-xs"
              >
                {i}
              </div>
            ))}
          </div>
        </div>

        {/* INFO */}
        <div>
          <h1 className="text-3xl font-extrabold text-ink leading-tight">
            {producto.nombre}
          </h1>
          <p className="text-sm text-muted mt-2">Nº OEM: {producto.numeroOem}</p>

          <div className="flex items-center gap-3 mt-6">
            <span className="text-4xl font-extrabold text-gold">
              ${producto.precio.toLocaleString("es-AR")}
            </span>
            <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full">
              {producto.stock} en stock
            </span>
          </div>

          <div className="flex items-center gap-2 mt-4 text-sm text-primary font-semibold">
            <ShieldCheck size={18} />
            Compatibilidad verificada por marca y modelo
          </div>

          <button className="w-full mt-6 bg-orange text-white font-bold rounded-xl py-4 hover:brightness-95 transition-all">
            Agregar al carrito
          </button>
          <button className="w-full mt-3 border-2 border-primary text-primary font-semibold rounded-xl py-3.5 hover:bg-primary hover:text-white transition-colors">
            Consultar por WhatsApp
          </button>

          <div className="mt-8">
            <h2 className="font-bold text-ink mb-2">Descripción</h2>
            <p className="text-sm text-muted leading-relaxed">
              {producto.descripcion}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="font-bold text-ink mb-3">Compatibilidad</h2>
            <table className="w-full text-sm rounded-xl overflow-hidden border border-black/10">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold">Marca</th>
                  <th className="px-4 py-2.5 text-left font-semibold">Modelo</th>
                </tr>
              </thead>
              <tbody>
                {producto.marcasCompatibles.map((marca) =>
                  producto.modelosCompatibles.map((modelo, i) => (
                    <tr
                      key={`${marca}-${modelo}`}
                      className={i % 2 ? "bg-surface" : "bg-white"}
                    >
                      <td className="px-4 py-2.5 border-t border-black/5">
                        {marca}
                      </td>
                      <td className="px-4 py-2.5 border-t border-black/5">
                        {modelo}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
