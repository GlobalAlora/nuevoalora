export type Categoria = {
  slug: string;
  nombre: string;
  subcategorias: { slug: string; nombre: string }[];
};

export const categorias: Categoria[] = [
  {
    slug: "motor",
    nombre: "Motor",
    subcategorias: [
      { slug: "filtros", nombre: "Filtros" },
      { slug: "inyectores", nombre: "Inyectores y bombas" },
      { slug: "correas", nombre: "Correas y tensores" },
    ],
  },
  {
    slug: "hidraulico",
    nombre: "Sistema hidráulico",
    subcategorias: [
      { slug: "bombas", nombre: "Bombas hidráulicas" },
      { slug: "cilindros", nombre: "Cilindros" },
      { slug: "mangueras", nombre: "Mangueras y conexiones" },
    ],
  },
  {
    slug: "tren-de-rodaje",
    nombre: "Tren de rodaje",
    subcategorias: [
      { slug: "neumaticos", nombre: "Neumáticos agrícolas" },
      { slug: "rodamientos", nombre: "Rodamientos y bujes" },
    ],
  },
  {
    slug: "electrico",
    nombre: "Sistema eléctrico",
    subcategorias: [
      { slug: "baterias", nombre: "Baterías" },
      { slug: "alternadores", nombre: "Alternadores" },
    ],
  },
];

export const marcas = [
  "John Deere",
  "Case IH",
  "New Holland",
  "Massey Ferguson",
  "Valtra",
  "Deutz-Fahr",
];

export type Producto = {
  slug: string;
  sku: string;
  nombre: string;
  categoria: string;
  subcategoria: string;
  marcasCompatibles: string[];
  modelosCompatibles: string[];
  precio: number;
  stock: number;
  numeroOem: string;
  descripcion: string;
};

export const productos: Producto[] = [
  {
    slug: "filtro-aceite-motor-6068",
    sku: "EM-FA-6068",
    nombre: "Filtro de aceite motor serie 6068",
    categoria: "motor",
    subcategoria: "filtros",
    marcasCompatibles: ["John Deere"],
    modelosCompatibles: ["6110J", "6120J", "6130J"],
    precio: 18500,
    stock: 24,
    numeroOem: "RE504836",
    descripcion:
      "Filtro de aceite de motor compatible con tractores serie 6000 de John Deere. Alta capacidad de retención de partículas.",
  },
  {
    slug: "bomba-hidraulica-case-puma",
    sku: "EM-BH-PUMA",
    nombre: "Bomba hidráulica Case IH Puma",
    categoria: "hidraulico",
    subcategoria: "bombas",
    marcasCompatibles: ["Case IH"],
    modelosCompatibles: ["Puma 165", "Puma 180"],
    precio: 412000,
    stock: 3,
    numeroOem: "84475542",
    descripcion:
      "Bomba hidráulica de reemplazo para tractores Case IH línea Puma. Caudal y presión originales de fábrica.",
  },
  {
    slug: "bateria-12v-new-holland",
    sku: "EM-BT-NH12",
    nombre: "Batería 12V 180Ah",
    categoria: "electrico",
    subcategoria: "baterias",
    marcasCompatibles: ["New Holland", "Case IH"],
    modelosCompatibles: ["T7", "Puma", "Magnum"],
    precio: 95000,
    stock: 12,
    numeroOem: "84036827",
    descripcion:
      "Batería de arranque 12V 180Ah libre de mantenimiento, apta para tractores de mediana y alta potencia.",
  },
  {
    slug: "neumatico-radial-18-4r34",
    sku: "EM-NM-1834",
    nombre: "Neumático radial 18.4R34",
    categoria: "tren-de-rodaje",
    subcategoria: "neumaticos",
    marcasCompatibles: ["John Deere", "Massey Ferguson", "Valtra"],
    modelosCompatibles: ["Serie 6000", "Serie 7000"],
    precio: 780000,
    stock: 8,
    numeroOem: "—",
    descripcion:
      "Neumático agrícola radial trasero, banda de rodamiento en espiga para máxima tracción en suelo blando.",
  },
];

export type CategoriaMaquinaria = { slug: string; nombre: string };

export const categoriasMaquinaria: CategoriaMaquinaria[] = [
  { slug: "tractores", nombre: "Tractores" },
  { slug: "cosechadoras", nombre: "Cosechadoras" },
  { slug: "sembradoras", nombre: "Sembradoras" },
  { slug: "pulverizadoras", nombre: "Pulverizadoras" },
];

export type Maquinaria = {
  slug: string;
  marca: string;
  modelo: string;
  año: number;
  categoria: string;
  estado: "Nuevo" | "Usado";
  horasUso: number;
  potenciaHp: number;
  precio: number | null;
  ubicacion: string;
  descripcion: string;
};

export const maquinarias: Maquinaria[] = [
  {
    slug: "john-deere-6120j-2019",
    marca: "John Deere",
    modelo: "6120J",
    año: 2019,
    categoria: "tractores",
    estado: "Usado",
    horasUso: 3200,
    potenciaHp: 120,
    precio: 58000000,
    ubicacion: "Córdoba, Argentina",
    descripcion:
      "Tractor John Deere 6120J, 3200 horas de uso, service al día, cabina con aire acondicionado.",
  },
  {
    slug: "case-ih-puma-180-2022",
    marca: "Case IH",
    modelo: "Puma 180",
    año: 2022,
    categoria: "tractores",
    estado: "Usado",
    horasUso: 900,
    potenciaHp: 180,
    precio: null,
    ubicacion: "Santa Fe, Argentina",
    descripcion:
      "Case IH Puma 180 con muy bajas horas de uso, transmisión semi powershift, excelente estado general.",
  },
  {
    slug: "new-holland-tc5-70-2023",
    marca: "New Holland",
    modelo: "TC5.70",
    año: 2023,
    categoria: "cosechadoras",
    estado: "Nuevo",
    horasUso: 0,
    potenciaHp: 218,
    precio: null,
    ubicacion: "Buenos Aires, Argentina",
    descripcion:
      "Cosechadora New Holland TC5.70 0km, plataforma flexible disponible, financiación a medida.",
  },
];
