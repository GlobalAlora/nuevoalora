import { ShieldCheck, Clock } from "lucide-react";
import { productos } from "@/data/catalogo";

export const metadata = { title: "Bomba hidráulica Case IH Puma | Emagro — Opción 2" };

const producto = productos.find((p) => p.slug === "bomba-hidraulica-case-puma")!;

export default function ProductoOpcion2Page() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-sm text-muted mb-6">
          Repuestos / {producto.categoria} / {producto.subcategoria}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* GALERÍA — foto contenida con mira de precisión, mismo lenguaje del hero */}
          <div>
            <div className="relative rounded-3xl overflow-hidden aspect-square bg-[linear-gradient(160deg,#2a4324_0%,#3c6b35_45%,#5b7d3f_100%)]">
              <div className="absolute inset-0 flex items-center justify-center text-white/25 text-sm font-semibold uppercase tracking-widest text-center px-8">
                Foto real del repuesto
              </div>
              <svg
                className="absolute right-5 top-5 w-14 h-14 text-gold/80"
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
              <span className="absolute bottom-5 left-5 bg-white/90 backdrop-blur text-ink text-xs font-bold px-2.5 py-1 rounded-full">
                SKU {producto.sku}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-surface rounded-xl flex items-center justify-center text-muted text-xs"
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

            <p className="text-4xl font-extrabold text-ink mt-6">
              ${producto.precio.toLocaleString("es-AR")}
            </p>

            <button className="w-full mt-6 bg-orange text-white font-bold rounded-xl py-4 hover:brightness-95 transition-all">
              Agregar al carrito
            </button>
            <button className="w-full mt-3 border border-black/10 text-ink font-semibold rounded-xl py-3.5 hover:border-primary transition-colors">
              Consultar por WhatsApp
            </button>

            {/* FRANJA DE CONFIANZA, mismo componente visual que la Home */}
            <div className="grid grid-cols-2 gap-4 mt-8 bg-surface rounded-2xl p-5">
              <div className="flex items-start gap-2.5">
                <ShieldCheck size={20} className="text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-ink font-medium">
                  Compatibilidad verificada
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={20} className="text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-ink font-medium">
                  {producto.stock} unidades — entrega 24/48h
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-bold text-ink mb-2">Descripción</h2>
              <p className="text-sm text-muted leading-relaxed">
                {producto.descripcion}
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-bold text-ink mb-3">Compatibilidad</h2>
              <div className="space-y-2">
                {producto.marcasCompatibles.map((marca) =>
                  producto.modelosCompatibles.map((modelo) => (
                    <div
                      key={`${marca}-${modelo}`}
                      className="flex items-center justify-between text-sm bg-surface rounded-xl px-4 py-2.5"
                    >
                      <span className="font-medium text-ink">{marca}</span>
                      <span className="text-muted">{modelo}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
