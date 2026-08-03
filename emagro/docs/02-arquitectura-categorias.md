# Arquitectura de categorías y subcategorías de repuestos

## Principio de diseño
El catálogo de repuestos agrícolas se navega de **tres formas distintas** según cómo llega el cliente, y las tres deben apuntar al mismo producto (no son árboles separados, son filtros sobre el mismo dataset):

1. **Por sistema/función** (no sabe la marca, sabe qué pieza rompió) → `/repuestos/[categoria]/[subcategoria]`
2. **Por marca de maquinaria** (sabe que es un repuesto para su Case IH) → `/repuestos/marca/[marca]`
3. **Por código/nombre exacto** (sabe el SKU o número de parte) → buscador

## 1. Categorías por sistema (taxonomía funcional)

| Categoría | Subcategorías |
|---|---|
| **Motor** | Filtros (aire, aceite, combustible), Inyectores y bombas de inyección, Turbo, Correas y tensores, Juntas y empaquetaduras, Radiadores y sistema de refrigeración, Bujías y precalentamiento |
| **Transmisión y embrague** | Discos de embrague, Cajas de cambio (componentes), Cardanes y cruces, Diferenciales |
| **Sistema hidráulico** | Bombas hidráulicas, Cilindros, Válvulas y distribuidores, Mangueras y conexiones, Filtros hidráulicos |
| **Tren de rodaje** | Neumáticos agrícolas, Rodados y llantas, Orugas (si aplica), Rodamientos y bujes |
| **Sistema eléctrico** | Baterías, Alternadores, Motores de arranque, Sensores, Luces y balizas |
| **Frenos** | Pastillas y discos, Cilindros de freno, Sistema neumático de freno |
| **Cabina y confort** | Filtros de cabina, Aire acondicionado, Asientos, Vidrios |
| **Enganches y aperos** | Discos y cuchillas, Puntas y rejas de siembra, Cadenas y engranajes, Rodillos |
| **Mantenimiento general** | Aceites y lubricantes, Grasas, Kits de service |

## 2. Categorías por marca (cross-cutting, no jerárquica)

Tractores/cosechadoras: John Deere, Case IH, New Holland, Massey Ferguson, Valtra, Deutz-Fahr, Claas, Fendt, Agco Allis, Pauny, Vassalli (ajustar a marcas reales que vaya a manejar Emagro).

Cada producto tiene: `categoría` + `subcategoría` + `marca[]` + `modelos_compatibles[]` como atributos independientes — así un mismo filtro de aire aparece tanto en `/repuestos/motor/filtros` como en `/repuestos/marca/john-deere`.

## 3. Categorías de maquinaria (árbol separado, no repuestos)

| Categoría |
|---|
| Tractores |
| Cosechadoras |
| Sembradoras |
| Pulverizadoras |
| Implementos de labranza (arados, rastras, discos) |
| Fertilizadoras |
| Maquinaria vial / otros |

## Modelo de datos sugerido (resumen)

```
Producto (repuesto)
├── sku
├── nombre
├── categoria_id → Categoria
├── subcategoria_id → Subcategoria
├── marcas_compatibles: Marca[]
├── modelos_compatibles: ModeloMaquinaria[]
├── precio, stock, imagenes[]
└── numero_oem, numeros_alternativos[]

Maquinaria (equipo)
├── slug
├── categoria_maquinaria_id
├── marca, modelo, año
├── horas_uso, estado (nuevo/usado)
├── precio | "consultar"
└── especificaciones{}
```

Ver estructura completa de campos en [03-fichas.md](./03-fichas.md).
