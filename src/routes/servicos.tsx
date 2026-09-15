import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { processSteps, services } from "@/data/content";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços | Raquel Barbosa Móveis Planejados" },
      {
        name: "description",
        content:
          "Projeto de móveis planejados, cozinhas sob medida, dormitórios, closets, home office e salas. Do conceito à instalação.",
      },
      { property: "og:title", content: "Serviços | Raquel Barbosa Móveis Planejados" },
      {
        property: "og:description",
        content:
          "Móveis planejados e marcenaria sob medida para todos os ambientes da casa.",
      },
    ],
  }),
  component: Servicos,
});

function Servicos() {
  return (
    <>
      <PageIntro eyebrow="Serviços" title="Do conceito à instalação.">
        Projetos de móveis planejados para cada ambiente da casa, com atenção às
        medidas, aos materiais e ao seu estilo de vida.
      </PageIntro>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-36">
        <ul>
          {services.map((s, i) => (
            <Reveal as="li" key={s.number} delay={i * 60}>
              <div className="rule-thin" />
              <div className="grid gap-4 py-10 md:grid-cols-12 md:gap-10 md:py-14">
                <span className="font-display text-3xl text-primary md:col-span-2 md:text-5xl">
                  {s.number}
                </span>
                <h2 className="text-[13px] tracking-label uppercase md:col-span-4">
                  {s.title}
                </h2>
                <p className="max-w-md text-sm leading-loose text-muted-foreground md:col-span-6">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="rule-thin" />
        </ul>
      </section>

      <section className="bg-muted/60">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
          <Reveal>
            <p className="label-eyebrow">Processo</p>
            <h2 className="mt-6 max-w-2xl text-3xl leading-[1.2] md:text-5xl">
              Da primeira conversa ao ambiente pronto.
            </h2>
          </Reveal>
          <ol className="mt-16 grid gap-12 md:mt-24 md:grid-cols-5 md:gap-8">
            {processSteps.map((step, i) => (
              <Reveal as="li" key={step.number} delay={i * 90}>
                <div className="rule-thin" />
                <span className="mt-6 block font-display text-2xl text-secondary">
                  {step.number}
                </span>
                <h3 className="mt-4 text-[11px] tracking-label uppercase">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-loose text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-16">
            <Link to="/contato" className="btn-primary">
              Solicite um orçamento
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
