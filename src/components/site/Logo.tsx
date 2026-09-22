import logoDark from "@/assets/logo-rb.png.asset.json";
import logoLight from "@/assets/logo-rb-light.png.asset.json";

type Variant = "principal" | "horizontal" | "reduzido";

/**
 * Logo oficial Raquel Barbosa.
 * `light` usa a versão clara da marca (para fundos escuros/fotos).
 * A imagem nunca é distorcida: proporção preservada via object-contain.
 */
export function Logo({
  variant = "horizontal",
  light = false,
  className = "",
}: {
  variant?: Variant;
  light?: boolean;
  className?: string;
}) {
  const src = light ? logoLight.url : logoDark.url;
  const alt = "Raquel Barbosa — Design de Interiores";

  if (variant === "reduzido") {
    return (
      <span
        className={`inline-flex items-center justify-center overflow-hidden rounded-full border border-current p-[18%] ${className}`}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain object-top"
          style={{ objectPosition: "center 12%", transform: "scale(1.9)" }}
        />
      </span>
    );
  }

  if (variant === "principal") {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-auto object-contain ${className}`}
      />
    );
  }

  return (
    <img src={src} alt={alt} className={`w-auto object-contain ${className}`} />
  );
}
