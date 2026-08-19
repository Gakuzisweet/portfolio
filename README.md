# Portfolio — Mohamednur Zeinu

Personal engineering portfolio built with React, TypeScript, Vite, and Tailwind CSS. Single-page site: Hero → About → Featured Projects (with case-study modals) → Skills → Interests → Experience → GitHub → Contact.

## Run it locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Edit any file in `src/` and the browser updates automatically.

To check the production build locally:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/          ← all editable content lives here
    site.ts       name, role, links, resume path, hero/about copy
    projects.ts   every project card + case study
    skills.ts     skill tags by category
    interests.ts  "Engineering Interests" cards
    experience.ts education/work timeline
  components/     reusable UI (Nav, Footer, ProjectCard, ProjectModal, icons, ui/*)
  sections/       one file per page section (Hero, About, Projects, ...)
public/
  resume.pdf      ← replace with your real resume
  favicon.svg
  og-image.svg    ← social-share preview image
```

## Add a new project

Open `src/data/projects.ts` and add a new object to the `projects` array — that's the only file you need to touch. Every field is documented with a comment at the top of the file. Set `status` to `"featured"` for the main grid, or `"coming-soon"` for a placeholder card (used right now for the third, in-progress project — swap it to `"featured"` and fill in the real content once it's ready).

Fields like `problem`, `results`, and `learned` are what turn a project into a case study — write them the way you'd explain the project to an interviewer: what you were trying to do, the decisions you made, what you measured, what actually happened.

## Replace your resume

Drop your PDF at `public/resume.pdf`, overwriting the placeholder. No code changes needed — every "Resume" button already points at `/resume.pdf` (via `site.resumeUrl` in `src/data/site.ts`) and opens it in a new tab.

## Add project photos

Project image galleries are already wired up — the first image also becomes the project card's cover photo. To add one:

1. Put the image file in `src/assets/projects/` (create the folder if it doesn't exist).
2. In `src/data/projects.ts`, import it at the top of the file:
   ```ts
   import maverickRender from "../assets/projects/maverick-render.png";
   ```
3. Add an `images` array to that project's object:
   ```ts
   images: [
     { src: maverickRender, alt: "Maverick PCB, top side, 3D render" },
   ],
   ```
   Add as many as you want; an optional `caption` renders underneath each one in the full case-study view.

Importing from `src/assets/` (rather than pointing at a plain string path) matters: Vite bundles and hashes the file automatically, so the path always resolves correctly on GitHub Pages regardless of the configured base path. Always write a real, descriptive `alt` — screen readers and recruiters skimming quickly both depend on it.

## Update your email

Edit `email` in `src/data/site.ts`. It's used for the `mailto:` link in the Contact section — no HTML/JS changes needed.

## Update your LinkedIn

Edit `linkedin` in `src/data/site.ts`.

## Update your GitHub

Edit `github` (profile URL) and `githubUsername` in `src/data/site.ts`. Individual repo links live per-project in `src/data/projects.ts` (`github` field on each project).

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys automatically on every push to `main`.

**Push this repo to GitHub for the first time:**

```bash
git init
git add -A
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

**One-time setup:**

1. Push this repo to GitHub (see above).
2. In the repo, go to **Settings → Pages**, and under "Build and deployment" set **Source** to **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab). The first run will publish the site to `https://<username>.github.io/<repo-name>/`.

**Important — base path:** `vite.config.ts` has a `BASE_PATH` constant, currently set to `/portfolio/`. This must exactly match your repo name:

- If your repo is named `portfolio`, leave it as `/portfolio/`.
- If you rename the repo (or fork it under a different name), update `BASE_PATH` to `/<your-repo-name>/` before deploying, or the site will load with broken CSS/JS paths.
- If this repo is named exactly `<your-username>.github.io` (a user/org page served from the domain root), set `BASE_PATH` to `/`.

Also update the `og:url`, `og:image`, `twitter:image`, and `<link rel="canonical">` values in `index.html` to match your actual GitHub Pages URL — they're hardcoded (as full URLs, required for social-share previews to work) and won't update automatically when you change `BASE_PATH`. Do the same for the URL inside `public/robots.txt` and `public/sitemap.xml`.

## Uptime and search engines

GitHub Pages serves this as a static site with no server to keep running — once deployed it's up continuously at no cost, with no "sleeping" or manual restarts needed.

For Google to actually index it:

1. It'll get crawled on its own eventually, but to speed that up, add the site in [Google Search Console](https://search.google.com/search-console) (verify ownership via the HTML tag or DNS method), then submit `sitemap.xml` under **Sitemaps**.
2. `public/robots.txt` and `public/sitemap.xml` are already set up to allow crawling — just make sure their hardcoded URLs match your actual GitHub Pages URL (see above).

## Notes on content accuracy

Every project claim on this site (results, hardware, what actually ran on real hardware vs. simulation-only) was pulled directly from the project repos and confirmed, rather than inferred or invented. Fields still marked `[ADD ...]` in `src/data/projects.ts` and `src/data/experience.ts` are genuinely missing information — fill those in with real details rather than generic filler before this goes in front of recruiters.
