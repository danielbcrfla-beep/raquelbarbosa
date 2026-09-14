import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { getNeighbours, getProject } from "@/data/projects";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project, ...getNeighbours(params.slug) };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p
      ? `${p.name} | Raquel Barbosa Design de Interiores`
      : "Projeto | Raquel Barbosa";
    const description = p ? p.concept : "Projeto de interiores por Raquel Barbosa.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProjetoDetalhe,
});

function ProjetoDetalhe() {
  const { project, prev, next } = Route.useLoaderData();

  return (
    <>
      <section className="relative h-[70vh] min-h-[420px] overflow-hidden md:h-[86vh]">
        <img
          src={project.cover}
          alt={`${project.name} — imagem principal`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-graphite/30" />
        <div className="relative mx-auto flex h-full max-w-[1400px] items-end px-6 pb-16 text-background md:px-10 md:pb-24">
          <div className="animate-fade-up">
            <p className="text-[11px] tracking-label uppercase opacity-80">
              {project.category}
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl">{project.name}</h1>
            <p className="mt-5 text-[11px] tracking-label uppercase opacity-80">
              {project.location} · {project.year}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="label-eyebrow">Conceito</p>
            <p className="mt-8 font-display text-xl leading-relaxed md:text-2xl">
              {project.concept}
            </p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <p className="label-eyebrow">Descrição</p>
            <p className="mt-8 text-sm leading-loose text-muted-foreground">
              {project.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-36">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          {project.gallery.map((src, i) => (
            <Reveal
              key={`${src}-${i}`}
              delay={i * 90}
              className={
                i === 0
                  ? "md:col-span-8"
                  : i === 1
                    ? "md:col-span-4 md:mt-16"
                    : "md:col-span-7 md:col-start-4"
              }
            >
              <img
                src={src}
                alt={`${project.name} — imagem ${i + 1} da galeria`}
                loading="lazy"
                className="w-full object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 md:grid-cols-12 md:px-10 md:py-36">
          <Reveal className="md:col-span-5">
            <p className="label-eyebrow">Materiais e acabamentos</p>
            <ul className="mt-8 space-y-4">
              {project.materials.map((m) => (
                <li key={m} className="border-b border-border pb-4 text-sm">
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <p className="label-eyebrow">Resultado</p>
            <p className="mt-8 text-sm leading-loose text-muted-foreground">
              {project.result}
            </p>
            <p className="mt-8 text-[11px] tracking-label uppercase text-muted-foreground">
              Plantas e detalhamentos técnicos disponíveis sob consulta.
            </p>
          </Reveal>
        </div>
      </section>

      <nav className="border-t border-border">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
          <Link
            to="/projetos/$slug"
            params={{ slug: prev.slug }}
            className="group text-left"
          >
            <p className="text-[11px] tracking-label uppercase text-muted-foreground">
              ← Projeto anterior
            </p>
            <p className="mt-4 font-display text-2xl transition-colors group-hover:text-primary">
              {prev.name}
            </p>
          </Link>
          <Link
            to="/projetos/$slug"
            params={{ slug: next.slug }}
            className="group md:text-right"
          >
            <p className="text-[11px] tracking-label uppercase text-muted-foreground">
              Próximo projeto →
            </p>
            <p className="mt-4 font-display text-2xl transition-colors group-hover:text-primary">
              {next.name}
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
}
