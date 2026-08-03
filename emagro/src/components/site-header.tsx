import Link from "next/link";
import { Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import { categorias } from "@/data/catalogo";

export function SiteHeader() {
  return (
    <header className="bg-white border-b border-black/10 sticky top-0 z-30">
      <div className="h-1.5 bg-gradient-to-r from-primary via-primary-light to-gold" />
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-8">
        <Link href="/" className="shrink-0 flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-primary">
            EMAGRO
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-ink">
          <div className="group relative">
            <button className="py-2 flex items-center gap-1 hover:text-primary transition-colors">
              Repuestos <ChevronDown size={14} />
            </button>
            <div className="hidden group-hover:block absolute left-0 top-full bg-white text-ink shadow-xl border border-black/5 rounded-lg p-5 grid grid-cols-2 gap-x-10 gap-y-2 min-w-[440px] z-10">
              {categorias.map((cat) => (
                <div key={cat.slug}>
                  <Link
                    href={`/repuestos/${cat.slug}`}
                    className="font-semibold hover:text-primary"
                  >
                    {cat.nombre}
                  </Link>
                  <ul className="mt-1 space-y-1">
                    {cat.subcategorias.map((sub) => (
                      <li key={sub.slug}>
                        <Link
                          href={`/repuestos/${cat.slug}/${sub.slug}`}
                          className="text-muted hover:text-primary text-xs"
                        >
                          {sub.nombre}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <Link href="/maquinaria" className="py-2 hover:text-primary transition-colors">
            Maquinaria
          </Link>
          <Link href="/nosotros" className="py-2 hover:text-primary transition-colors">
            Nosotros
          </Link>
          <Link href="/contacto" className="py-2 hover:text-primary transition-colors">
            Contacto
          </Link>
        </nav>

        <div className="flex-1 hidden lg:flex items-center bg-surface border border-black/10 rounded-full overflow-hidden">
          <input
            type="search"
            placeholder="Buscar por código, repuesto o modelo..."
            className="flex-1 px-4 py-2 text-sm text-ink outline-none bg-transparent"
          />
          <button
            className="p-2.5 mr-1 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
            aria-label="Buscar"
          >
            <Search size={16} />
          </button>
        </div>

        <div className="flex items-center gap-4 shrink-0 text-ink">
          <Link href="/cuenta" aria-label="Mi cuenta">
            <User size={20} />
          </Link>
          <Link href="/carrito" aria-label="Carrito" className="relative">
            <ShoppingCart size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
