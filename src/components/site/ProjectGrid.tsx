import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal as="article" delay={(index % 2) * 120}>
      <Link to="/projetos/$slug" params={{ slug: project.slug }} className="group block">
        <div className="overflow-hidden bg-muted">
          <img
            src={project.cover}
            alt={project.alt}
            loading="lazy"
            className={`img-zoom w-full object-cover ${
              project.ratio === "portrait"
                ? "aspect-[4/5]"
                : "aspect-[16/11]"
            }`}
          />
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h3 className="font-display text-2xl transition-colors group-hover:text-primary md:text-[1.75rem]">
              {project.name}
            </h3>
            <p className="mt-3 text-[11px] tracking-label uppercase text-muted-foreground">
              {[project.location, project.category, project.year].filter(Boolean).join(" · ")}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="mt-2 shrink-0 text-lg text-primary opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100"
          >
            →
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-24 lg:gap-x-16 lg:gap-y-32">
      {items.map((project, i) => (
        <div key={project.slug} className={i % 3 === 0 ? "md:mt-0" : "md:mt-20"}>
          <ProjectCard project={project} index={i} />
        </div>
      ))}
    </div>
  );
}
