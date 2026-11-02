# Aaron Liu — Front-end Developer Portfolio

This repository contains the source code for my personal portfolio website. It introduces my front-end experience and selected commercial projects, with a clear summary of the work I contributed to each one.

**Live portfolio:** [aaronliu65.github.io](https://aaronliu65.github.io/)

## About me

I am a front-end developer with more than seven years of commercial website experience. I build responsive interfaces from designer-provided layouts, develop front-end interactions and animations, and work with designers and programmers to deliver complete websites.

At Hostlink, a small company with a two-person front-end team, each project was independently owned by one front-end developer. I handled the front end for my assigned projects. Programmers handled APIs, databases and CMS development; clients used the CMS to update content on dynamic websites.

## Selected projects

The portfolio highlights these projects and describes my contribution to each:

- **Hong Kong Football Association (HKFA)** — Built the website pages and front-end interactions, including reusable competition components, bilingual content, news and fixture/result sliders, and shop image zoom.
- **The Haddon** — Independently built the front end from designer layouts for a static HTML delivery, using Vue 3, runtime SFC compilation, full-page navigation, galleries and image pop-ups.
- **Harbour City Office** — Built office and Experience pages, front-end animations, transport information and the enquiries interface.
- **Delight Terrace** — Led the front-end build and designer coordination; implemented interactive property sections, multilingual content, galleries and image pan/zoom.
- **Eminence Terrace I and Sierra Terrace I** — Built multilingual front ends, language-aware Sales Information routes, galleries and form interfaces.
- **Sutton** — Built the multilingual front end, galleries and page effects; used Canvas to remove the background from a video on the Transportation page.

Across the projects, language support was implemented with i18n and YAML translation files. The supported languages varied by website; for Eminence Terrace I and Sierra Terrace I, page-specific translations were kept separately and shared text was placed in `global.yml`.

For dynamic projects, programmers were responsible for API and database work and CMS development. I worked on the front end and presentation of CMS-managed content. The Haddon was delivered as static HTML, as requested by the client.

## Portfolio website features

- Responsive layout for desktop and mobile screens
- Project carousel and project-detail dialogs
- Scroll-triggered reveals and interactive hero effects
- Loading transition that waits for fonts, eager images and the project slider layout
- Reduced-motion support
- Downloadable CV

## Technology

This portfolio website is built with:

- Next.js and React
- TypeScript
- Tailwind CSS 4
- GSAP and ScrollTrigger
- Swiper
- Lucide React icons

The project case studies also mention tools used on those client websites. Those tools are not necessarily dependencies of this portfolio repository.

## Run locally

Requires Node.js 20 or later and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build locally:

```bash
npm run build
```

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages when changes are pushed to the `main` branch. The workflow is in [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml).

## Repository structure

```text
src/
  app/          Next.js page and global styles
  components/   Shared interface components
  data/         Profile, project, skills and experience content
public/
  images/       Portfolio and project imagery
  Aaron_Liu_CV.docx
.github/
  workflows/   GitHub Pages deployment workflow
```

## Client work and assets

Project descriptions document my individual front-end contribution. Client APIs, databases, CMS implementations and other proprietary code are not included in this repository. Project names and images are shown for portfolio purposes; third-party assets remain the property of their respective owners.
