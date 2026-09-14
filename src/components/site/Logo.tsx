type Variant = "principal" | "horizontal" | "reduzido";

const monogram = (
  <span className="font-display leading-none tracking-[-0.08em]">
    R<span className="-ml-[0.18em] inline-block">B</span>
  </span>
);

export function Logo({
  variant = "horizontal",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  if (variant === "reduzido") {
    return (
      <span
        className={`inline-flex aspect-square items-center justify-center rounded-full border border-current text-current ${className}`}
        aria-hidden="true"
      >
        <span className="text-[0.95em]">{monogram}</span>
      </span>
    );
  }

  if (variant === "principal") {
    return (
      <span className={`inline-flex flex-col items-center text-current ${className}`}>
        <span className="text-[2.6em]">{monogram}</span>
        <span className="mt-[0.5em] font-display text-[1em] tracking-[0.22em] uppercase">
          Raquel Barbosa
        </span>
        <span className="mt-[0.45em] text-[0.42em] tracking-brand uppercase">
          Design de Interiores
        </span>
        <span className="mt-[0.9em] h-px w-[3.5em] bg-secondary" />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-[0.9em] text-current ${className}`}>
      <span className="flex flex-col">
        <span className="font-display text-[1em] leading-none tracking-[0.2em] uppercase">
          Raquel Barbosa
        </span>
        <span className="mt-[0.4em] text-[0.4em] leading-none tracking-brand uppercase opacity-70">
          Design de Interiores
        </span>
      </span>
      <span className="h-[1.7em] w-px bg-current opacity-30" />
      <span className="text-[1.5em]">{monogram}</span>
    </span>
  );
}
