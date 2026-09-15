import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import aboutImage from "@/assets/about.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | Raquel Barbosa Móveis Planejados" },
      {
        name: "description",
        content:
          "Conheça Raquel Barbosa, designer de interiores especializada em móveis planejados e marcenaria sob medida para todos os ambientes da casa.",
      },
      { property: "og:title", content: "Sobre | Raquel Barbosa Móveis Planejados" },
      {
        property: "og:description",
        content:
          "Designer de interiores especializada em móveis planejados e ambientes sob medida.",
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 pt-40 pb-24 md:px-10 md:pt-52 md:pb-36">
        <div className="grid items-start gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-6">
            <p className="label-eyebrow animate-fade-up">Sobre</p>
            <h1
              className="animate-fade-up mt-8 text-4xl leading-[1.12] md:text-6xl"
              style={{ animationDelay: "120ms" }}
            >
              Móveis planejados com identidade.
            </h1>
            <div
              className="animate-fade-up mt-10 max-w-lg space-y-6 text-sm leading-loose text-muted-foreground"
              style={{ animationDelay: "240ms" }}
            >
              <p>
                Raquel Barbosa é designer de interiores especializada em móveis
                planejados. Cada projeto nasce da escuta atenta de quem vai viver o
                espaço — e se traduz em marcenaria sob medida, funcional e atemporal.
              </p>
              <p>
                Do primeiro desenho à instalação final, o trabalho acompanha cada
                detalhe: medidas precisas, escolha de materiais, ferragens e
                acabamentos que fazem a diferença no uso diário.
              </p>
              <p>
                Cozinhas, dormitórios, closets, home offices e salas ganham móveis
                desenhados exatamente para o espaço que ocupam — e para o estilo de
                vida de cada cliente.
              </p>
            </div>
            <div
              className="animate-fade-up mt-12"
              style={{ animationDelay: "360ms" }}
            >
              <Link to="/contato" className="btn-primary">
                Fale com Raquel
              </Link>
            </div>
          </div>
          <Reveal delay={150} className="md:col-span-5 md:col-start-8">
            <img
              src={aboutImage}
              alt="Raquel Barbosa em ambiente com marcenaria planejada"
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/60">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
          <Reveal>
            <p className="label-eyebrow">Como trabalho</p>
            <h2 className="mt-6 max-w-xl text-3xl leading-[1.2] md:text-5xl">
              Cada móvel, desenhado para o seu espaço.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {[
              {
                title: "Sob medida de verdade",
                text: "Nada de módulos prontos adaptados. Cada peça é projetada milímetro a milímetro para o ambiente.",
              },
              {
                title: "Materiais selecionados",
                text: "Curadoria de laminados, madeiras, ferragens e acabamentos com durabilidade comprovada.",
              },
              {
                title: "Acompanhamento completo",
                text: "Do projeto à instalação, com orientação em todas as etapas da produção da marcenaria.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="rule-thin" />
                <h3 className="mt-6 text-[11px] tracking-label uppercase">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-loose text-muted-foreground">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
