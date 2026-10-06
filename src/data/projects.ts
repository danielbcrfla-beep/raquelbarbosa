import cozinhaIntegrada from "@/assets/proj-cozinha-integrada.jpg.asset.json";
import cozinhaBancada from "@/assets/proj-cozinha-bancada.jpg.asset.json";
import cozinhaU from "@/assets/proj-cozinha-u.jpg.asset.json";
import painelTv from "@/assets/proj-painel-tv.jpg.asset.json";
import aptoIntegrado from "@/assets/proj-apartamento-integrado.jpg.asset.json";
import suiteMadeira from "@/assets/proj-suite-madeira-natural.jpeg.asset.json";

const p1 = cozinhaIntegrada.url;
const p2 = cozinhaBancada.url;
const p3 = cozinhaU.url;
const p4 = painelTv.url;
const p5 = aptoIntegrado.url;
const p6 = suiteMadeira.url;

export type Project = {
  slug: string;
  name: string;
  location?: string;
  category: string;
  year: string;
  concept: string;
  description: string;
  cover: string;
  alt: string;
  /** Proporção do card na grade editorial */
  ratio: "portrait" | "landscape";
  gallery: string[];
  materials: string[];
  result: string;
};

export const projects: Project[] = [
  {
    slug: "suite-em-madeira-natural",
    name: "Suíte em Madeira Natural",
    category: "Dormitórios",
    year: "2026",
    concept:
      "Marcenaria em madeira natural envolve a suíte e cria uma composição acolhedora em tons neutros.",
    description:
      "A cabeceira ripada percorre a parede e se integra aos armários superiores. A iluminação indireta destaca a madeira, enquanto as mesas laterais claras e os tecidos neutros equilibram o ambiente.",
    cover: p6,
    alt: "Suíte em tons neutros com marcenaria de madeira natural, cabeceira ripada e iluminação indireta",
    ratio: "landscape",
    gallery: [p6],
    materials: [
      "Marcenaria em acabamento de madeira natural",
      "Cabeceira ripada",
      "Iluminação indireta",
      "Mesas laterais em tom claro",
    ],
    result:
      "Uma suíte de atmosfera acolhedora, marcada pela continuidade da madeira e pela luz suave.",
  },
  {
    slug: "cozinha-integrada",
    name: "Cozinha Integrada",
    location: "Sorocaba, SP",
    category: "Cozinhas",
    year: "2025",
    concept:
      "Cozinha integrada ao living, com marcenaria off white, detalhes amadeirados e bancada em pedra escura.",
    description:
      "O projeto reorganiza a cozinha em uma composição contínua de armários planejados, do piso ao teto. Torre para forno, nicho para micro-ondas e gavetas de diferentes alturas foram desenhados para a rotina da família. A mesa em madeira avança sobre o ambiente de estar e cria um único espaço de convivência.",
    cover: p1,
    alt: "Cozinha integrada com marcenaria off white, madeira e bancada escura",
    ratio: "landscape",
    gallery: [p1, p4, p5],
    materials: [
      "MDF off white com acabamento fosco",
      "Detalhes em MDF amadeirado",
      "Bancada em granito preto",
      "Iluminação em LED embutida",
    ],
    result:
      "Uma cozinha ampla e organizada, integrada ao living, com aproveitamento total do espaço e muita luz natural.",
  },
  {
    slug: "cozinha-com-bancada",
    name: "Cozinha com Bancada",
    location: "Sorocaba, SP",
    category: "Cozinhas",
    year: "2025",
    concept:
      "Bancada em madeira que une cozinha e sala, com armários até o teto e torre para eletrodomésticos.",
    description:
      "A marcenaria sobe até o teto para ganhar volume de armazenamento e esconder a estrutura do ambiente. A bancada em madeira funciona como mesa de refeições e apoio de trabalho, enquanto a torre planejada organiza geladeira, forno e lava-louças em um mesmo alinhamento.",
    cover: p2,
    alt: "Cozinha planejada com bancada de madeira integrada à sala",
    ratio: "landscape",
    gallery: [p2, p1, p3],
    materials: [
      "MDF off white",
      "Frentes em MDF amadeirado",
      "Bancada em madeira maciça",
      "Fita de LED sob os aéreos",
    ],
    result:
      "Um ambiente compacto que ganhou mesa, armazenamento e circulação livre sem abrir mão da estética.",
  },
  {
    slug: "cozinha-em-u",
    name: "Cozinha em U",
    location: "Sorocaba, SP",
    category: "Cozinhas",
    year: "2024",
    concept:
      "Layout em U com nichos iluminados, torre quente e bancada que avança como mesa.",
    description:
      "Cada centímetro foi medido para acomodar o essencial: nichos abertos com iluminação para cafeteira e air fryer, armários fechados para o restante e uma bancada que se estende como mesa de refeições. O revestimento claro e a marcenaria neutra ampliam a percepção do espaço.",
    cover: p3,
    alt: "Cozinha em U com marcenaria clara, nichos em madeira e iluminação embutida",
    ratio: "landscape",
    gallery: [p3, p5, p2],
    materials: [
      "MDF em tom areia",
      "Nichos em MDF amadeirado",
      "Bancada em granito preto",
      "Tampo em madeira",
    ],
    result:
      "Uma cozinha funcional e iluminada, com tudo à mão e visual leve no ambiente integrado.",
  },
  {
    slug: "living-com-painel",
    name: "Living com Painel",
    location: "Sorocaba, SP",
    category: "Salas",
    year: "2026",
    concept:
      "Painel ripado, prateleira suspensa e rack iluminado em uma composição única para a sala.",
    description:
      "A parede inteira do living recebeu marcenaria planejada: painel para a TV com recortes alinhados, prateleira em madeira na altura dos olhos e rack suspenso com iluminação indireta que valoriza o piso. A porta do corredor foi integrada ao painel para manter a leitura contínua da parede.",
    cover: p4,
    alt: "Living com painel de televisão, ripado de madeira e iluminação indireta",
    ratio: "landscape",
    gallery: [p4, p1, p5],
    materials: [
      "Painel em MDF tom areia",
      "Prateleira e rack em MDF amadeirado",
      "Iluminação indireta em LED",
      "Ferragens com amortecimento",
    ],
    result:
      "Uma sala elegante e sem excessos, com cada peça desenhada para o espaço exato que ocupa.",
  },
  {
    slug: "apartamento-integrado",
    name: "Apartamento Integrado",
    location: "Sorocaba, SP",
    category: "Salas",
    year: "2026",
    concept:
      "Cozinha, sala e refeições em um só ambiente, unidos pela marcenaria planejada.",
    description:
      "O projeto desenha todo o apartamento como um ambiente contínuo: os armários da cozinha seguem o mesmo padrão dos móveis da sala, a bancada em madeira organiza as refeições e a torre planejada concentra eletrodomésticos e armazenamento. O resultado é um espaço pequeno que funciona como um espaço grande.",
    cover: p5,
    alt: "Apartamento integrado com cozinha e sala unidas por marcenaria planejada",
    ratio: "landscape",
    gallery: [p5, p3, p4],
    materials: [
      "MDF off white e amadeirado",
      "Bancada em granito preto",
      "Tampo em madeira",
      "Nichos com iluminação",
    ],
    result:
      "Um apartamento integrado, arrumado e acolhedor, com marcenaria sob medida em todos os ambientes.",
  },
];

export const heroImage = p1;
export const introImage = p4;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNeighbours(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) throw new Error("Projeto não encontrado");
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  if (!prev || !next) throw new Error("Navegação entre projetos indisponível");
  return { prev, next };
}
