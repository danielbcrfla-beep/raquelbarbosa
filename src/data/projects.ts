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
    slug: "cozinha-planejada",
    name: "Cozinha Planejada",
    location: "Sorocaba, SP",
    category: "Cozinhas",
    year: "2025",
    concept:
      "Uma cozinha integrada à sala, com marcenaria em tom claro, bancada em pedra natural e luz abundante.",
    description:
      "O projeto reorganiza a cozinha em um gesto contínuo de armários planejados, do piso ao teto. Cada porta, gaveta e nicho foi desenhado para a rotina da família: despensa organizada, torre de eletrodomésticos e uma ilha que recebe as refeições do dia a dia.",
    cover: p1,
    ratio: "landscape",
    gallery: [p1, p5, p4],
    materials: ["MDF laminado amadeirado claro", "Pedra natural", "Ferragens com amortecimento", "Puxadores perfil metal"],
    result:
      "Uma cozinha ampla, silenciosa e funcional, com aproveitamento total do espaço e forte presença da luz natural.",
  },
  {
    slug: "dormitorio-sob-medida",
    name: "Dormitório Sob Medida",
    location: "São Paulo, SP",
    category: "Dormitórios",
    year: "2025",
    concept:
      "Um refúgio íntimo com guarda-roupa planejado, cabeceira estofada e camadas suaves de tecido.",
    description:
      "A suíte principal foi tratada como um ambiente de descanso absoluto. O guarda-roupa planejado ocupa a parede inteira com portas de correr em tom neutro, a cabeceira em tecido texturizado aconchega a cama e a iluminação indireta cria uma atmosfera serena.",
    cover: p2,
    ratio: "portrait",
    gallery: [p2, p4, p5],
    materials: ["MDF em tom neutro", "Tecidos texturizados", "Carvalho", "Iluminação indireta em LED"],
    result:
      "Um dormitório acolhedor e organizado, com conforto térmico, acústico e visual.",
  },
  {
    slug: "home-office-planejado",
    name: "Home Office Planejado",
    location: "São Paulo, SP",
    category: "Home Office",
    year: "2024",
    concept:
      "Um escritório em casa com atmosfera de galeria: madeira escura, superfícies minerais e iluminação escultural.",
    description:
      "O home office foi desenhado para longas jornadas de trabalho: bancada ampla em madeira escura, estantes planejadas que organizam livros e objetos, e marcenaria que esconde fios e equipamentos. O resultado equilibra presença e discrição.",
    cover: p3,
    ratio: "landscape",
    gallery: [p3, p5, p1],
    materials: ["Nogueira", "Laminado texturizado", "Latão escovado", "Iluminação focal"],
    result:
      "Um escritório memorável em casa, que organiza a rotina de trabalho sem excessos.",
  },
  {
    slug: "banheiro-sob-medida",
    name: "Banheiro Sob Medida",
    location: "Sorocaba, SP",
    category: "Banheiros",
    year: "2024",
    concept:
      "Gabinete planejado e continuidade material para um banho sereno e de manutenção simples.",
    description:
      "Grandes placas de travertino criam uma superfície contínua que amplia a percepção do espaço. O gabinete suspenso em carvalho e a marcenaria sob medida organizam o uso diário com discrição, com gavetas internas e nichos para cada item.",
    cover: p4,
    ratio: "portrait",
    gallery: [p4, p2, p5],
    materials: ["Travertino", "Carvalho", "Vidro temperado", "Metais em grafite"],
    result: "Um banho sereno, com marcenaria precisa e presença mineral.",
  },
  {
    slug: "living-planejado",
    name: "Living Planejado",
    location: "São Paulo, SP",
    category: "Salas",
    year: "2026",
    concept:
      "Painel de TV, estante e rack planejados em uma composição única para a sala de estar.",
    description:
      "O living ganhou uma parede inteira de marcenaria planejada: painel para a TV, estante com nichos iluminados e rack suspenso que esconde os equipamentos. Madeira, pedra e metal em proporções calibradas garantem coerência com o restante da casa.",
    cover: p5,
    ratio: "landscape",
    gallery: [p5, p1, p2],
    materials: ["Carvalho", "Pedra bege", "Linho", "Latão"],
    result:
      "Uma sala integrada e elegante, com cada móvel desenhado para o espaço exato que ocupa.",
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
