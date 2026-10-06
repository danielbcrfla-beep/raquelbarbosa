<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep portfolio projects in `src/data/projects.ts` as the single source for home, listing, and detail views so project metadata stays consistent.
- Keep global contact entry points in shared site components and derive their URLs from `src/config/site.ts` so every page uses the same verified channels.
