import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro } from "@/components/site/PageIntro";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos | Raquel Barbosa Móveis Planejados" },
      {
        name: "description",
        content:
          "Portfólio de móveis planejados: cozinhas, dormitórios, closets, home offices, banheiros e salas sob medida por Raquel Barbosa.",
      },
      { property: "og:title", content: "Projetos | Raquel Barbosa Móveis Planejados" },
      {
        property: "og:description",
        content:
          "Cozinhas, dormitórios, home offices, banheiros e salas com marcenaria sob medida.",
      },
    ],
  }),
  component: Projetos,
});

const categories = ["Todos", "Cozinhas", "Dormitórios", "Home Office", "Banheiros", "Salas"];

function Projetos() {
  const [filter, setFilter] = useState("Todos");
  const items =
    filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageIntro eyebrow="Portfólio" title="Projetos">
        Uma seleção de ambientes com marcenaria planejada, desenvolvidos com atenção
        às medidas, à luz e aos materiais.
      </PageIntro>

      <section className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10 md:pb-44">
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`text-[11px] tracking-label uppercase transition-colors ${
                filter === c
                  ? "text-foreground underline underline-offset-8"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <ProjectGrid items={items} />
        </div>
      </section>
    </>
  );
}
