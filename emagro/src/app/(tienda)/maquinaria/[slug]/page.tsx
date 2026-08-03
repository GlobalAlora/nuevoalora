import { notFound } from "next/navigation";
import { maquinarias } from "@/data/catalogo";

type Props = { params: Promise<{ slug: string }> };

export default async function MaquinariaDetailPage({ params }: Props) {
  const { slug } = await params;
  const maquinaria = maquinarias.find((m) => m.slug === slug);
  if (!maquinaria) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="aspect-video bg-white border border-border rounded-lg flex items-center justify-center text-muted">
        Galería de fotos
      </div>

      <div>
        <span className="inline-block text-xs font-medium bg-primary-light/20 text-primary-dark px-2 py-0.5 rounded">
          {maquinaria.estado}
        </span>
        <h1 className="text-2xl font-bold text-ink mt-2">
          {maquinaria.marca} {maquinaria.modelo} ({maquinaria.año})
        </h1>
        <p className="text-sm text-muted mt-1">{maquinaria.ubicacion}</p>

        <p className="text-3xl font-bold text-primary mt-4">
          {maquinaria.precio
            ? `$${maquinaria.precio.toLocaleString("es-AR")}`
            : "Consultar precio"}
        </p>

        <button className="mt-6 bg-orange text-white font-medium px-6 py-3 rounded-md hover:opacity-90">
          Consultar por este equipo
        </button>

        <div className="mt-8">
          <h2 className="font-semibold text-ink">Especificaciones</h2>
          <table className="w-full text-sm mt-2 border border-border rounded-md overflow-hidden">
            <tbody>
              <tr className="border-t border-border first:border-t-0">
                <td className="px-3 py-2 bg-surface font-medium">Potencia</td>
                <td className="px-3 py-2">{maquinaria.potenciaHp} HP</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-3 py-2 bg-surface font-medium">
                  Horas de uso
                </td>
                <td className="px-3 py-2">
                  {maquinaria.horasUso.toLocaleString("es-AR")} hs
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-3 py-2 bg-surface font-medium">Estado</td>
                <td className="px-3 py-2">{maquinaria.estado}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-ink">Descripción</h2>
          <p className="text-muted text-sm mt-2">{maquinaria.descripcion}</p>
        </div>
      </div>
    </div>
  );
}
