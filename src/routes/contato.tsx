import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { projectTypes } from "@/data/content";
import { emailLink, instagramLink, site, whatsappLink } from "@/config/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Raquel Barbosa Móveis Planejados" },
      {
        name: "description",
        content:
          "Solicite um orçamento de móveis planejados: cozinhas, dormitórios, closets, home office e salas sob medida.",
      },
      { property: "og:title", content: "Contato | Raquel Barbosa Móveis Planejados" },
      {
        property: "og:description",
        content:
          "Solicite um orçamento de móveis planejados sob medida para sua casa.",
      },
    ],
  }),
  component: Contato,
});

const inputClass =
  "w-full border border-input bg-transparent px-5 py-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring";

function Contato() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      `Olá, Raquel! Meu nome é ${data.get("name")}.`,
      `Tenho interesse em: ${data.get("type")}.`,
      `Telefone: ${data.get("phone") || "não informado"}`,
      "",
      String(data.get("message") || ""),
    ].join("\n");

    if (whatsappLink) {
      window.open(
        `${whatsappLink}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noreferrer",
      );
      setSent(true);
      return;
    }
    if (site.email) {
      window.location.href = `${emailLink}?subject=${encodeURIComponent(
        `Orçamento de móveis planejados — ${data.get("name")}`,
      )}&body=${encodeURIComponent(message)}`;
      setSent(true);
      return;
    }
    setSent(true);
  }

  return (
    <>
      <PageIntro eyebrow="Contato" title="Vamos planejar seus móveis?">
        Conte sobre o ambiente que você quer transformar. Retorno com uma proposta
        pensada para o seu espaço.
      </PageIntro>

      <section className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10 md:pb-44">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <Reveal className="md:col-span-7">
            {sent ? (
              <div className="border border-border p-10">
                <h2 className="font-display text-2xl">Mensagem preparada!</h2>
                <p className="mt-4 text-sm leading-loose text-muted-foreground">
                  {whatsappLink || site.email
                    ? "Sua mensagem foi encaminhada. Em breve Raquel retorna o contato."
                    : "Os canais de contato estão sendo configurados. Em breve este formulário estará ativo."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="grid gap-3">
                    <span className="text-[11px] tracking-label uppercase">
                      Nome
                    </span>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      className={inputClass}
                    />
                  </label>
                  <label className="grid gap-3">
                    <span className="text-[11px] tracking-label uppercase">
                      Telefone
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className={inputClass}
                    />
                  </label>
                </div>
                <label className="grid gap-3">
                  <span className="text-[11px] tracking-label uppercase">
                    E-mail
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="voce@email.com"
                    className={inputClass}
                  />
                </label>
                <label className="grid gap-3">
                  <span className="text-[11px] tracking-label uppercase">
                    Qual ambiente?
                  </span>
                  <select name="type" className={inputClass} defaultValue={projectTypes[0]}>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-3">
                  <span className="text-[11px] tracking-label uppercase">
                    Mensagem
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Conte um pouco sobre o espaço, medidas aproximadas e o que você imagina."
                    className={inputClass}
                  />
                </label>
                <div>
                  <button type="submit" className="btn-primary">
                    Enviar mensagem
                  </button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={150} className="md:col-span-4 md:col-start-9">
            <p className="label-eyebrow">Canais diretos</p>
            <ul className="mt-8 space-y-6">
              {whatsappLink ? (
                <li>
                  <a
                    href={`${whatsappLink}?text=${encodeURIComponent("Olá, Raquel Barbosa! Gostaria de solicitar um orçamento para móveis planejados.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary inline-flex"
                  >
                    Falar com Raquel no WhatsApp
                  </a>
                  <p className="mt-4 text-sm text-muted-foreground">
                    (15) 99739-9619
                  </p>
                </li>
              ) : null}
              {instagramLink ? (
                <li>
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-[11px] tracking-label uppercase"
                  >
                    Instagram
                  </a>
                </li>
              ) : null}
              {emailLink ? (
                <li>
                  <a
                    href={emailLink}
                    className="link-underline text-[11px] tracking-label uppercase"
                  >
                    {site.email}
                  </a>
                </li>
              ) : null}
            </ul>
            {!whatsappLink && !instagramLink && !emailLink ? (
              <p className="mt-8 text-sm leading-loose text-muted-foreground">
                Os canais de contato serão adicionados em breve.
              </p>
            ) : null}
            {site.city ? (
              <p className="mt-10 text-[11px] tracking-label uppercase text-muted-foreground">
                {site.city}
              </p>
            ) : null}
          </Reveal>
        </div>
      </section>
    </>
  );
}
