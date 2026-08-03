import Link from "next/link";
import { categorias, marcas } from "@/data/catalogo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white mt-16">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-base mb-3">EMAGRO</h3>
          <p className="text-white/70">
            Repuestos y maquinaria agrícola. Nuevo y usado.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Categorías</h4>
          <ul className="space-y-1.5">
            {categorias.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/repuestos/${cat.slug}`}
                  className="text-white/70 hover:text-white"
                >
                  {cat.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Marcas</h4>
          <ul className="space-y-1.5">
            {marcas.slice(0, 5).map((marca) => (
              <li key={marca} className="text-white/70">
                {marca}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contacto</h4>
          <ul className="space-y-1.5 text-white/70">
            <li>WhatsApp: +54 9 351 000-0000</li>
            <li>info@emagro.com.ar</li>
            <li>Córdoba, Argentina</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Emagro. Todos los derechos reservados.
      </div>
    </footer>
  );
}
