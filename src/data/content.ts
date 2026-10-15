const mk = (items: [string, string][]) =>
  items.map(([title, description], i) => ({
    number: String(i + 1).padStart(2, "0"),
    title,
    description,
  }));

export const services = mk([
  ["Projeto de interiores completo", "Concepção estética, layout, iluminação, revestimentos e marcenaria integrados em um único projeto."],
  ["Marcenaria sob medida e detalhamento", "Móveis planejados desenhados para otimizar o espaço e a rotina, com detalhamento técnico preciso."],
  ["Consultoria de interiores", "Orientação pontual para layout, paleta de cores, mobiliário e acabamentos."],
  ["Produção e ambientação", "Curadoria de tecidos, tapetes, iluminação decorativa e objetos que finalizam o espaço."],
  ["Acompanhamento de obra e montagem", "Alinhamento com marcenaria e fornecedores para que o projeto seja executado como foi pensado."],
]);

export const processSteps = mk([
  ["Briefing e imersão", "Entendimento da rotina, das necessidades e do estilo de cada cliente."],
  ["Estudo preliminar e 3D", "Layout, conceito e imagens para visualizar o ambiente antes da obra."],
  ["Projeto executivo", "Detalhamento técnico de marcenaria, iluminação e revestimentos."],
  ["Curadoria e especificação", "Seleção de materiais, mobiliário e complementos."],
  ["Produção e entrega", "Acompanhamento da execução até o ambiente pronto para viver."],
]);

/** Placeholders editáveis — substituir pelos depoimentos reais dos clientes. */
export const testimonials = [
  { id: 1, quote: "Depoimento do cliente", name: "Nome do cliente", project: "Projeto" },
  { id: 2, quote: "Depoimento do cliente", name: "Nome do cliente", project: "Projeto" },
  { id: 3, quote: "Depoimento do cliente", name: "Nome do cliente", project: "Projeto" },
];

export const projectTypes = [
  "Projeto residencial completo",
  "Ambiente específico (cozinha, suíte, living)",
  "Móveis planejados / marcenaria",
  "Consultoria de interiores",
  "Comercial",
  "Outro",
];
