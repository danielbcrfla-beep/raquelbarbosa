import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Logo } from "@/components/site/Logo";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { heroImage, introImage, projects } from "@/data/projects";
import { services, processSteps, testimonials } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raquel Barbosa | Design de Interiores" },
      {
        name: "description",
        content:
          "Projetos de interiores personalizados, sofisticados e funcionais. Ambientes residenciais e comerciais que refletem a essência de cada cliente.",
      },
      { property: "og:title", content: "Raquel Barbosa | Design de Interiores" },
      {
        property: "og:description",
        content:
          "Projetos de interiores personalizados, sofisticados e funcionais para ambientes atemporais.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Sala de estar contemporânea com pedra natural, madeira clara e luz natural"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-graphite/35" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-40 pb-20 text-background md:px-10 md:pb-28">
          <Logo
            variant="principal"
            className="animate-fade-up hidden text-[15px] md:inline-flex"
          />
          <h1
            className="animate-fade-up mt-12 max-w-2xl text-4xl leading-[1.12] md:mt-16 md:text-6xl"
            style={{ animationDelay: "150ms" }}
          >
            Ambientes que refletem sua essência.
          </h1>
          <p
            className="animate-fade-up mt-8 max-w-lg text-sm leading-loose opacity-85"
            style={{ animationDelay: "300ms" }}
          >
            Projetos de interiores pensados para transformar espaços em experiências
            únicas, funcionais e atemporais.
          </p>
          <div
            className="animate-fade-up mt-12 flex flex-wrap gap-4"
            style={{ animationDelay: "450ms" }}
          >
            <Link to="/projetos" className="btn-primary">
              Conheça os projetos
            </Link>
            <Link to="/contato" className="btn-ghost !border-background/50">
              Fale com Raquel
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-44">
        <div className="grid items-center gap-16 md:grid-cols-12 md:gap-20">
          <Reveal className="md:col-span-5 md:col-start-1">
            <p className="label-eyebrow">Estúdio</p>
            <h2 className="mt-8 text-3xl leading-[1.15] md:text-5xl">
              Interiores com identidade.
            </h2>
            <p className="mt-8 max-w-md text-sm leading-loose text-muted-foreground">
              Cada projeto nasce da combinação entre estética, funcionalidade e
              personalidade. Raquel Barbosa desenvolve ambientes que traduzem o estilo de
              vida de cada cliente em espaços sofisticados, acolhedores e atemporais.
            </p>
            <Link
              to="/sobre"
              className="link-underline mt-10 inline-block text-[11px] tracking-label uppercase text-primary"
            >
              Sobre Raquel
            </Link>
          </Reveal>
          <Reveal delay={150} className="md:col-span-6 md:col-start-7">
            <img
              src={introImage}
              alt="Detalhe arquitetônico com bancada em pedra e painel ripado de madeira"
              loading="lazy"
              width={1200}
              height={1504}
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10 md:pb-44">
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="label-eyebrow">Portfólio</p>
            <h2 className="mt-6 text-3xl md:text-5xl">Projetos selecionados</h2>
          </div>
          <Link
            to="/projetos"
            className="link-underline text-[11px] tracking-label uppercase text-primary"
          >
            Ver todos
          </Link>
        </Reveal>
        <div className="mt-16 md:mt-24">
          <ProjectGrid items={projects.slice(0, 4)} />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-muted/60">
        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
          <Reveal>
            <p className="label-eyebrow">Serviços</p>
            <h2 className="mt-6 max-w-xl text-3xl leading-[1.2] md:text-5xl">
              Do conceito ao detalhe final.
            </h2>
          </Reveal>
          <ul className="mt-16 md:mt-24">
            {services.map((s, i) => (
              <Reveal as="li" key={s.number} delay={i * 60}>
                <div className="rule-thin" />
                <div className="grid gap-4 py-10 md:grid-cols-12 md:gap-10 md:py-14">
                  <span className="font-display text-3xl text-primary md:col-span-2 md:text-5xl">
                    {s.number}
                  </span>
                  <h3 className="text-[13px] tracking-label uppercase md:col-span-4">
                    {s.title}
                  </h3>
                  <p className="max-w-md text-sm leading-loose text-muted-foreground md:col-span-6">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="rule-thin" />
          </ul>
          <Reveal className="mt-14">
            <Link to="/servicos" className="btn-ghost">
              Todos os serviços
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-44">
        <Reveal>
          <p className="label-eyebrow">Processo</p>
          <h2 className="mt-6 max-w-2xl text-3xl leading-[1.2] md:text-5xl">
            Do primeiro encontro ao ambiente pronto.
          </h2>
        </Reveal>
        <ol className="mt-16 grid gap-12 md:mt-24 md:grid-cols-5 md:gap-8">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 90}>
              <div className="rule-thin" />
              <span className="mt-6 block font-display text-2xl text-secondary">
                {step.number}
              </span>
              <h3 className="mt-4 text-[11px] tracking-label uppercase">{step.title}</h3>
              <p className="mt-4 text-sm leading-loose text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* DEPOIMENTOS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
          <Reveal>
            <p className="label-eyebrow">Depoimentos</p>
          </Reveal>
          <div className="mt-14 grid gap-14 md:grid-cols-3 md:gap-12">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={i * 120}>
                <p className="font-display text-xl leading-relaxed italic text-foreground/80">
                  “{t.quote}”
                </p>
                <p className="mt-8 text-[11px] tracking-label uppercase">{t.name}</p>
                <p className="mt-2 text-[11px] tracking-label uppercase text-muted-foreground">
                  {t.project}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent/40">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
          <Reveal className="flex flex-wrap items-end justify-between gap-10">
            <h2 className="max-w-xl text-3xl leading-[1.2] md:text-5xl">
              Vamos transformar seu espaço?
            </h2>
            <Link to="/contato" className="btn-primary">
              Fale com Raquel
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
