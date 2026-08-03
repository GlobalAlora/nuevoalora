# Estructura de fichas: producto (repuesto) y maquinaria

Son dos plantillas distintas — distinto objetivo de negocio (compra transaccional vs. consulta de alto ticket).

## Ficha de producto (repuesto)

| Sección | Campos |
|---|---|
| Identificación | SKU, nombre del repuesto, número OEM, números alternativos/equivalentes |
| Clasificación | Categoría, subcategoría, marca(s) compatible(s), modelos de maquinaria compatibles (tabla) |
| Media | Galería de imágenes (múltiples ángulos), foto de despiece si aplica |
| Comercial | Precio, stock/disponibilidad, tiempo de entrega, unidad de venta (por unidad, por kit, por juego) |
| Descripción técnica | Descripción, material, dimensiones, peso |
| Compatibilidad | Tabla: Marca — Modelo — Año/Rango |
| Documentos | Ficha técnica (PDF), manual o despiece si existe |
| Relacionados | Repuestos del mismo kit, "otros clientes también compraron" |
| Acción | Agregar al carrito / Consultar stock por WhatsApp si no hay stock online |

## Ficha de maquinaria (equipo completo)

| Sección | Campos |
|---|---|
| Identificación | Marca, modelo, año, tipo (nuevo/usado) |
| Media | Galería de fotos, video si existe |
| Estado | Horas de uso, estado general, service al día (sí/no) |
| Especificaciones técnicas | Potencia (HP), tracción, capacidad de tanque/tolva, ancho de labor, cabina, transmisión |
| Comercial | Precio o "Consultar precio", financiación disponible, permuta |
| Ubicación | Sucursal / localidad donde está el equipo |
| Repuestos relacionados | Link a `/repuestos/marca/[marca]` filtrado por ese modelo |
| Acción | Botón "Consultar por este equipo" → WhatsApp + formulario (sin carrito) |

## Diferencia clave de UX
- **Repuesto**: flujo ecommerce clásico (catálogo → ficha → carrito → checkout).
- **Maquinaria**: flujo consultivo/lead (catálogo → ficha → contacto), sin carrito ni checkout — es como una landing de producto individual.
