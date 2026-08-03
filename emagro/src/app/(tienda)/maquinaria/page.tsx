import { categoriasMaquinaria, maquinarias } from "@/data/catalogo";
import { MachineryCard } from "@/components/machinery-card";

export const metadata = { title: "Maquinaria | Emagro" };

export default function MaquinariaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-bold text-ink">Maquinaria agrícola</h1>

      <div className="flex gap-2 mt-4 flex-wrap">
        {categoriasMaquinaria.map((cat) => (
          <span
            key={cat.slug}
            className="text-sm bg-white border border-border rounded-full px-3 py-1 text-ink"
          >
            {cat.nombre}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {maquinarias.map((m) => (
          <MachineryCard key={m.slug} maquinaria={m} />
        ))}
      </div>
    </div>
  );
}
