import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import intro from "@/assets/intro.jpg";
import hero from "@/assets/hero.jpg";

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: string;
  year: string;
  concept: string;
  description: string;
  cover: string;
  /** Proporção do card na grade editorial */
  ratio: "portrait" | "landscape";
  gallery: string[];
  materials: string[];
  result: string;
};

export const projects: Project[] = [
  {
    slug: "casa-contemporanea",
    name: "Casa Contemporânea",
    location: "Sorocaba, SP",
    category: "Residencial",
    year: "2025",
    concept:
      "Integração entre estar, jantar e cozinha em um único gesto arquitetônico, com materiais naturais e luz abundante.",
    description:
      "O projeto parte da leitura da rotina da família para reorganizar os ambientes sociais em uma sequência contínua. Marcenaria em madeira clara, pedra natural e tons neutros criam uma base atemporal, enquanto a iluminação foi desenhada em camadas para acompanhar o uso ao longo do dia.",
    cover: p1,
    ratio: "landscape",
    gallery: [p1, p5, p4],
    materials: ["Madeira clara", "Pedra natural", "Linho", "Metais em tom fosco"],
    result:
      "Ambientes amplos, silenciosos e funcionais, com circulação generosa e forte presença da luz natural.",
  },
  {
    slug: "elegancia-natural",
    name: "Elegância Natural",
    location: "São Paulo, SP",
    category: "Interiores",
    year: "2025",
    concept:
      "Um refúgio íntimo construído a partir de texturas suaves, camadas de tecido e uma paleta serena.",
    description:
      "A suíte principal foi tratada como um ambiente de descanso absoluto. As cortinas em linho difundem a luz, a pedra natural aparece em pontos precisos e a paleta permanece em tons neutros com um acento discreto em verde-azulado.",
    cover: p2,
    ratio: "portrait",
    gallery: [p2, p4, p5],
    materials: ["Linho natural", "Mármore travertino", "Carvalho", "Tecidos texturizados"],
    result:
      "Um ambiente acolhedor e sofisticado, com conforto térmico, acústico e visual.",
  },
  {
    slug: "essencia-urbana",
    name: "Essência Urbana",
    location: "São Paulo, SP",
    category: "Comercial",
    year: "2024",
    concept:
      "Um espaço comercial com atmosfera de galeria: superfícies minerais, madeira escura e iluminação escultural.",
    description:
      "A recepção foi concebida como primeira narrativa da marca. Paredes em cimento queimado, balcão em madeira escura e luminárias esculturais compõem um ambiente que equilibra presença e discrição.",
    cover: p3,
    ratio: "landscape",
    gallery: [p3, p5, p1],
    materials: ["Cimento queimado", "Nogueira", "Latão escovado", "Concreto polido"],
    result:
      "Uma recepção memorável, que traduz o posicionamento da marca sem excessos.",
  },
  {
    slug: "banho-mineral",
    name: "Banho Mineral",
    location: "Sorocaba, SP",
    category: "Reforma",
    year: "2024",
    concept:
      "Reforma integral de um banho com foco em continuidade material e luz difusa.",
    description:
      "Grandes placas de travertino criam uma superfície contínua que amplia a percepção do espaço. A bancada suspensa em carvalho e a marcenaria sob medida organizam o uso diário com discrição.",
    cover: p4,
    ratio: "portrait",
    gallery: [p4, p2, p5],
    materials: ["Travertino", "Carvalho", "Vidro temperado", "Metais em grafite"],
    result: "Um espaço sereno, de manutenção simples e presença mineral.",
  },
  {
    slug: "curadoria-de-materiais",
    name: "Curadoria de Materiais",
    location: "São Paulo, SP",
    category: "Decoração",
    year: "2026",
    concept:
      "Seleção de acabamentos, tecidos e objetos para um projeto residencial em fase de execução.",
    description:
      "O trabalho concentrou-se na composição de materiais: madeira, pedra, linho e metal em proporções calibradas. A curadoria orienta cada decisão de compra e garante coerência entre todos os ambientes.",
    cover: p5,
    ratio: "landscape",
    gallery: [p5, p1, p2],
    materials: ["Carvalho", "Pedra bege", "Linho", "Latão"],
    result:
      "Uma paleta material consistente, aplicável a todos os ambientes do projeto.",
  },
];

export const heroImage = hero;
export const introImage = intro;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNeighbours(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return { prev, next };
}
