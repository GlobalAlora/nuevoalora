# Paleta de colores — Emagro

**Origen: estimada a ojo a partir de los dos isotipos que pegaste en el chat (ícono de sol sobre campo + logo "EMAGRO Maquinarias"), no de un manual de marca.** Si en algún momento aparece un manual de marca o códigos hex oficiales, estos valores se reemplazan — dejá una nota cuando eso pase.

| Token | Hex aprox. | Uso |
|---|---|---|
| `--color-green-primary` | `#3C6B35` | Verde principal — texto "EMAGRO", header, botones primarios |
| `--color-green-dark` | `#274A22` | Verde oscuro — hover de botones, texto sobre fondo claro |
| `--color-green-light` | `#7CA653` | Verde campo — acentos, fondos de sección, badges |
| `--color-gold` | `#F2B33D` | Amarillo/dorado del sol — CTAs secundarios, precios, destacados |
| `--color-orange` | `#E8871E` | Naranja del sol (gradiente superior) — hover de CTA, alertas de oferta |
| `--color-ink` | `#20261D` | Texto principal (verde-negro, no negro puro) |
| `--color-muted` | `#6B7566` | Texto secundario / "Maquinarias" gris-verdoso del logo |
| `--color-surface` | `#F7F8F4` | Fondo general (blanco cálido, no blanco puro) |
| `--color-border` | `#E1E4DB` | Bordes, separadores |

## Lógica de uso
- **Verde** = marca, confianza, navegación, estructura (header, footer, textos de marca).
- **Naranja/dorado del sol** = acción y urgencia comercial (botones "Agregar al carrito", "Consultar", precios, ofertas) — el sol es el elemento que más contraste visual aporta contra el verde, conviene reservarlo para lo que el usuario tiene que accionar.
- Evitar usar naranja y dorado en la misma jerarquía — dorado para precio/destacado informativo, naranja para el CTA que se puede clickear.

Estos tokens ya están cargados en `emagro/src/app/globals.css` vía `@theme`, listos para usarse como `bg-primary`, `text-ink`, etc. una vez que confirmes o corrijas los valores.
