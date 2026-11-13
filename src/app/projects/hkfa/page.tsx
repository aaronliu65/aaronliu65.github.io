import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { profile, projects } from "../../../data/portfolio";

const project = projects[0];
const url = "https://aaronliu65.github.io/aaronliu_portfolio/projects/hkfa/";
const description = "Aaron Liu’s HKFA case study: sole front-end ownership with Vue 2 and Nuxt 2, reusable match components, CMS content layouts and multilingual interfaces.";
export const metadata: Metadata = {
    title: "HKFA Case Study | Aaron Liu",
    description,
    alternates: { canonical: url },
    openGraph: { title: "HKFA Case Study | Aaron Liu", description, url, type: "article" },
    twitter: { card: "summary_large_image", title: "HKFA Case Study | Aaron Liu", description },
};

const frame = "mx-auto w-full max-w-[1600px] px-7 sm:px-10 xl:px-14";
const eyebrow = "text-[10px] font-medium uppercase tracking-[.24em] text-white/50";
const heading = "font-display text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-.04em]";
const copy = "text-sm leading-[1.9] text-white/65";
const challenges = [
    {
        title: "Reusable match components",
        challenge: "Fixtures and results needed to present teams, scores, kick-off times and match statuses in different layouts without rebuilding the same interface for each page.",
        solution: "I built configurable Vue components using props and conditional rendering. Match.vue controls dates, team crests, links, row or column layouts and visual styling, with display logic for finished, cancelled, rescheduled, live, half-time and suspended matches. MatchScore.vue composes GameMatch and GameVenue to bring match and venue information into one card while keeping their implementations separate.",
        detail: "Match data and display options are passed into shared components, so the presentation can vary between contexts while retaining a consistent structure.",
        code: '<GameMatch\n  :hasLink="!hasLink"\n  :hasVs="true"\n  :MatchDataDetail="MatchData"\n  :customClass="{\n    color: customClass.color,\n    dateStyle: customClass.dateStyle,\n    teamNameStyle: customClass.teamNameStyle,\n  }"\n/>',
        caption: "Excerpt from MatchScore.vue · composing the match display",
    },
    {
        title: "Content layouts within an existing CMS",
        challenge: "Non-technical staff needed to maintain content-heavy pages through an existing CMS. Editing the underlying HTML or CSS could affect the intended layout.",
        solution: "I prepared content layouts and styling in the CMS so staff could focus mainly on changing text. On the front end, StaticContent.vue receives HTML through its content prop and renders it with v-html. Its hasContainer and hasBg props control the outer container and background, allowing the same presentation component to serve different static content pages.",
        detail: "These layout options do not restrict edits inside the supplied HTML. When content updates affected the layout, I provided front-end fixes. Backend programmers owned the CMS and data services; my work covered presentation, integration and ongoing layout support.",
        code: '<div class="container" v-html="content"></div>',
        caption: "Excerpt from StaticContent.vue · rendering supplied HTML inside the container branch",
    },
    {
        title: "A multilingual, responsive interface",
        challenge: "Traditional Chinese and English navigation needed to stay consistent with the selected language and suit both desktop and mobile interfaces.",
        solution: "I used Nuxt i18n and YAML translations for interface text, with localePath() for language-aware links. The language switcher derives availableLocales in a computed property, filters out the current locale and uses switchLocalePath(locale.code) for its destination. It reads $store.state.viewPort to render a desktop submenu or compact mobile language options.",
        detail: "This keeps language selection connected to the current page while adapting its presentation to the viewport.",
        code: ':to="switchLocalePath(locale.code)"',
        caption: "Excerpt from the supplied language-switcher screenshot · locale-aware navigation",
    },
];

export default function HKFACaseStudy() {
    return (
        <div className="min-h-screen bg-night text-white">
            <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-lime focus:p-4 focus:text-night">Skip to content</a>
            <header className={frame}>
                <div className="flex min-h-[72px] flex-wrap items-center justify-between gap-4 border-b border-white/10 py-4">
                    <Link href="/" className="font-editorial text-[14px] tracking-[.22em]" aria-label="Aaron Liu home">AARON LIU</Link>
                    <Link href="/#work" className="inline-flex items-center gap-2 text-[11px] text-white/70 hover:text-lime"><ArrowLeft size={14} aria-hidden="true" /> Back to selected work</Link>
                </div>
            </header>
            <main id="main" className={frame}>
                <section className="py-14 sm:py-20" aria-labelledby="project-title">
                    <p className={eyebrow}>Case study / Front-end development</p>
                    <h1 id="project-title" className="mt-6 max-w-[1000px] font-editorial text-[clamp(42px,7vw,88px)] leading-[1.04] tracking-[-.045em]">Hong Kong Football Association<span className="text-lime">.</span></h1>
                    <p className="mt-7 max-w-[650px] text-base leading-[1.8] text-white/65">Building a content-rich football website from scratch, with reusable interfaces for match information and ongoing content updates.</p>
                    <dl className="mt-10 grid gap-7 border-y border-white/10 py-7 sm:grid-cols-3">
                        {[["Role", "Sole Front-end Developer"], ["Core stack", "Vue 2 · Nuxt 2 · JavaScript"], ["Presentation", "Bootstrap · Less · Nuxt i18n"]].map(([label, value]) => (
                            <div key={label}><dt className={eyebrow}>{label}</dt><dd className="mt-3 text-sm text-white/85">{value}</dd></div>
                        ))}
                    </dl>
                    <figure className="mt-10">
                        <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#1c2021] sm:aspect-video">
                            <Image src={project.cover} alt="HKFA website screenshot showing its football news and competition content" fill priority sizes="(max-width: 640px) 100vw, 90vw" className="object-cover object-top" />
                        </div>
                        <figcaption className="mt-3 text-[11px] text-white/45">HKFA website · Existing project screenshot</figcaption>
                    </figure>
                    <a href="https://www.hkfa.com/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 border-b border-lime pb-1 text-[11px] text-lime">Visit website <ArrowUpRight size={14} aria-hidden="true" /></a>
                </section>
                <section className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[1fr_2fr] lg:gap-16" aria-labelledby="overview">
                    <div><p className={eyebrow}>01 / Overview & ownership</p><h2 id="overview" className={`${heading} mt-4`}>My role</h2></div>
                    <div className={`${copy} max-w-[850px] space-y-5`}>
                        <p>The HKFA website brings together football news, fixtures, results, league tables and association information. As the sole front-end developer on this project, I built its complete front end from scratch using Vue 2 and Nuxt 2, translating designer-supplied layouts into responsive pages and interactive features.</p>
                        <p>I owned page implementation, reusable components, multilingual interfaces, responsive behaviour and front-end testing. I worked with backend programmers to connect the interface to CMS-managed and database-driven content. They handled APIs, databases, CMS development and shopping functionality.</p>
                    </div>
                </section>
                <section className="border-t border-white/10 py-12" aria-labelledby="technical">
                    <p className={eyebrow}>02 / Technical challenges & solutions</p><h2 id="technical" className={`${heading} mt-4`}>Shared components. Flexible content.</h2>
                    <div className="mt-10">
                        {challenges.map((item, index) => (
                            <article key={item.title} className="grid gap-8 border-t border-white/10 py-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
                                <div><p className="text-[11px] text-lime">0{index + 1}</p><h3 className="mt-4 max-w-[360px] font-editorial text-3xl leading-tight">{item.title}</h3></div>
                                <div className={`${copy} min-w-0 max-w-[850px] space-y-5`}>
                                    <p><strong className="font-medium text-white/90">Challenge. </strong>{item.challenge}</p>
                                    <p><strong className="font-medium text-white/90">Approach. </strong>{item.solution}</p>
                                    <p>{item.detail}</p>
                                    <figure className="min-w-0 border border-white/10 bg-white/[.025] p-5 sm:p-6">
                                        <pre className="overflow-x-auto text-[12px] leading-[1.8] text-lime/90"><code>{item.code}</code></pre>
                                        <figcaption className="mt-4 border-t border-white/10 pt-4 text-[10px] leading-relaxed text-white/45">{item.caption}</figcaption>
                                    </figure>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
                <section className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[1fr_2fr] lg:gap-16" aria-labelledby="delivery">
                    <div><p className={eyebrow}>03 / Delivery & outcome</p><h2 id="delivery" className={`${heading} mt-4`}>Testing & ongoing support</h2></div>
                    <div className={`${copy} max-w-[850px] space-y-5`}>
                        <p>I delivered the complete front-end implementation, covering responsive layouts, reusable match components, multilingual navigation and CMS-integrated content presentation.</p>
                        <p>My delivery work included front-end testing, cross-browser compatibility checks and visual fixes. I supported content updates and corrected layout issues as they arose.</p>
                        <p>I prepared production builds using the project’s existing npm scripts and followed its established GitHub deployment workflow. This was delivery within an existing process, alongside the programmers responsible for backend services.</p>
                    </div>
                </section>
                <section className="my-10 flex flex-wrap items-center justify-between gap-6 border-y border-white/10 py-8" aria-label="Continue exploring">
                    <Link href="/#work" className="inline-flex items-center gap-3 text-sm hover:text-lime"><ArrowLeft size={16} aria-hidden="true" /> Explore more work</Link>
                    <a href={`mailto:${profile.email}`} className="rounded-full bg-lime px-5 py-3 text-[11px] font-semibold text-night">Get in touch</a>
                </section>
            </main>
            <footer className={`${frame} py-6 text-[10px] text-white/45`}>Aaron Liu · Front-end Developer · {profile.location}</footer>
        </div>
    );
}
