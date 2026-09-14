import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-40 pb-16 md:px-10 md:pt-52 md:pb-24">
      <p className="label-eyebrow animate-fade-up">{eyebrow}</p>
      <h1
        className="animate-fade-up mt-8 max-w-3xl text-4xl leading-[1.1] md:text-6xl"
        style={{ animationDelay: "120ms" }}
      >
        {title}
      </h1>
      {children ? (
        <div
          className="animate-fade-up mt-8 max-w-xl text-sm leading-loose text-muted-foreground"
          style={{ animationDelay: "240ms" }}
        >
          {children}
        </div>
      ) : null}
      <div className="mt-16 rule-thin" />
    </section>
  );
}
