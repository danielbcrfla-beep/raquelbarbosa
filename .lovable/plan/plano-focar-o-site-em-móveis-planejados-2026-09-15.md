# Plano: Focar o site em móveis planejados

## Objetivo

Reposicionar o site da Raquel Barbosa como especialista em **móveis planejados** (cozinhas, dormitórios, home offices, salas, banheiros e ambientes sob medida), mantendo a identidade visual editorial já construída, e finalizar as páginas que faltam para o site funcionar por completo.

## O que será feito

### 1. Criar as páginas que faltam (site hoje não abre por causa de links quebrados)
- **Sobre** (`/sobre`): apresentação da Raquel, foto, trajetória e foco em marcenaria sob medida.
- **Serviços** (`/servicos`): lista completa de serviços voltada a planejados + processo de trabalho.
- **Contato** (`/contato`): formulário (nome, e-mail, telefone, tipo de ambiente, mensagem) com envio via WhatsApp/e-mail, além dos canais de contato. Dados de contato ficam como campos editáveis até você enviar os reais.

### 2. Reescrever os textos com foco em móveis planejados
- **Home**: título e textos passam a falar de móveis planejados e ambientes sob medida (ex.: "Móveis planejados que transformam seu espaço").
- **Serviços (dados)**: Projeto de móveis planejados, Cozinhas sob medida, Dormitórios e closets, Home office e salas, Reforma com marcenaria, Consultoria e decoração.
- **Projetos (dados)**: os 5 projetos passam a ser ambientes com marcenaria planejada (cozinha planejada, dormitório com closet, home office, banheiro sob medida, living com painel e estante planejados), com materiais típicos de marcenaria (MDF, laminados melamínicos, laca, carvalho, ferragens, puxadores).
- Categorias do filtro de projetos ajustadas: Cozinhas, Dormitórios, Salas, Home Office, Banheiros.

### 3. Fotografia
- As 8 imagens atuais serão avaliadas; as que não combinarem com móveis planejados serão regeneradas (cozinhas planejadas, closets, painéis de TV, home offices sob medida), mantendo a paleta off white / tons neutros da marca.

### 4. SEO
- Títulos e descrições de todas as páginas atualizados para "móveis planejados" e "sob medida".

## Detalhes técnicos
- Novos arquivos: `src/routes/sobre.tsx`, `src/routes/servicos.tsx`, `src/routes/contato.tsx`.
- Edições: `src/data/content.ts`, `src/data/projects.ts`, `src/routes/index.tsx`, `src/routes/projetos/index.tsx`, metas de SEO.
- Sem banco de dados: o formulário de contato abre o WhatsApp/e-mail da Raquel com a mensagem preenchida.
- Sem mudanças na identidade visual, no menu ou no rodapé.

## Fora do escopo (aguardando você)
- Dados reais de contato (WhatsApp, Instagram, e-mail) — os links ficam prontos e fáceis de preencher.
- Depoimentos reais de clientes — permanecem os espaços reservados.
