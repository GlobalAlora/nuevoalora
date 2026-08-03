import Link from "next/link";
import type { Maquinaria } from "@/data/catalogo";

export function MachineryCard({ maquinaria }: { maquinaria: Maquinaria }) {
  return (
    <Link
      href={`/maquinaria/${maquinaria.slug}`}
      className="block bg-white rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-video bg-surface flex items-center justify-center text-muted text-xs">
        Imagen
      </div>
      <div className="p-4">
        <span className="inline-block text-xs font-medium bg-primary-light/20 text-primary-dark px-2 py-0.5 rounded">
          {maquinaria.estado}
        </span>
        <h3 className="font-semibold text-ink mt-2">
          {maquinaria.marca} {maquinaria.modelo}
        </h3>
        <p className="text-sm text-muted">
          {maquinaria.año} · {maquinaria.horasUso.toLocaleString("es-AR")} hs ·{" "}
          {maquinaria.potenciaHp} HP
        </p>
        <p className="text-primary font-bold mt-2">
          {maquinaria.precio
            ? `$${maquinaria.precio.toLocaleString("es-AR")}`
            : "Consultar precio"}
        </p>
      </div>
    </Link>
  );
}
