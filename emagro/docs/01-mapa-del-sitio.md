# Mapa del sitio — Emagro

Ecommerce de repuestos + catálogo/venta de maquinaria agrícola. Dos "familias" de contenido conviven en el mismo sitio: **repuestos** (compra transaccional, catálogo grande, SKU) y **maquinaria** (equipos completos, ficha consultiva, menor volumen, mayor ticket).

```
Home (/)
│
├── Tienda de Repuestos (/repuestos)
│   ├── Categoría (/repuestos/[categoria])                    → ej. /repuestos/motor
│   │   └── Subcategoría (/repuestos/[categoria]/[subcategoria]) → ej. /repuestos/motor/filtros
│   │       └── Ficha de producto (/repuestos/producto/[slug])
│   ├── Por marca (/repuestos/marca/[marca])                  → ej. /repuestos/marca/john-deere
│   └── Buscador + filtros (/repuestos?buscar=...)
│
├── Maquinaria (/maquinaria)
│   ├── Categoría de maquinaria (/maquinaria/[categoria])     → ej. /maquinaria/tractores
│   └── Ficha de maquinaria (/maquinaria/[slug])
│
├── Nosotros (/nosotros)
├── Contacto (/contacto)                → formulario + WhatsApp + ubicación/sucursales
├── Carrito (/carrito)
├── Checkout (/checkout)
├── Mi cuenta (/cuenta)
│   ├── Mis pedidos (/cuenta/pedidos)
│   └── Datos de la cuenta (/cuenta/datos)
├── Blog / Novedades (/blog)             → contenido técnico, SEO (mantenimiento, guías de repuestos)
├── Políticas
│   ├── Envíos y devoluciones (/envios-y-devoluciones)
│   ├── Términos y condiciones (/terminos)
│   └── Privacidad (/privacidad)
└── 404 / Buscador de emergencia
```

## Header (navegación global)
- Logo
- Buscador prominente (por código de pieza, nombre, o modelo de máquina — el buscador es el componente más usado en este tipo de sitio)
- Menú: Repuestos ▾ (mega-menú con categorías) · Maquinaria ▾ · Nosotros · Contacto
- Ícono cuenta / Ícono carrito con contador

## Footer
- Categorías principales de repuestos (link building interno + SEO)
- Marcas trabajadas (logos)
- Contacto y sucursales
- Redes sociales
- Políticas y medios de pago

## Notas de arquitectura
- El buscador con autocompletado es crítico: la mayoría de los clientes de repuestos llegan sabiendo el código de pieza o el modelo de máquina, no navegando por categoría.
- `/repuestos/marca/[marca]` y `/repuestos/[categoria]` son dos entradas distintas al mismo catálogo (filtros combinables), no jerarquías excluyentes — pensar el modelo de datos así desde el inicio (ver [02-arquitectura-categorias.md](./02-arquitectura-categorias.md)).
- Maquinaria no lleva "agregar al carrito": el CTA es consulta (WhatsApp/formulario), típico en venta de equipos agrícolas de alto ticket.
