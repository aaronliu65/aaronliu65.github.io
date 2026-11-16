import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { profile, projects } from "../../../data/portfolio";

const project = projects[2];
const url = "https://aaronliu65.github.io/aaronliu_portfolio/projects/the-haddon/";
const description =
    "The Haddon case study: Vue 3 front-end ownership, static HTML delivery, responsive design systems and multilingual property website interactions.";

export const metadata: Metadata = {
    title: "The Haddon Case Study | Aaron Liu",
    description,
    alternates: { canonical: url },
    openGraph: {
        title: "The Haddon Case Study | Aaron Liu",
        description,
        url,
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "The Haddon Case Study | Aaron Liu",
        description,
    },
};

const frame = "mx-auto w-full max-w-[1600px] px-7 sm:px-10 xl:px-14";
const eyebrow = "text-[10px] font-medium uppercase tracking-[.24em] text-white/50";
const heading = "font-display text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-.04em]";
const copy = "text-sm leading-[1.9] text-white/65";

const challenges = [
    {
        number: "01",
        title: "Vue components within a static delivery model",
        challenge:
            "The client required static HTML delivery, while the interface was being developed with Vue single-file components.",
        approach:
            "A former colleague found vue3-sfc-loader on GitHub. I worked with the programmer to adopt and extend that approach for the project, loading and compiling Vue components in the browser while keeping the delivery as static pages.",
        detail: "The loader was a collaborative solution; my contribution was applying and developing it as part of the front-end implementation.",
        tags: ["Static HTML", "Vue 3", "vue3-sfc-loader"],
        code: `async getFile(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw Object.assign(new Error(res.statusText + " " + url), { res });
  }
  return {
    getContentData: (asBinary) =>
      asBinary ? res.arrayBuffer() : res.text(),
  };
}`,
        caption: "Project excerpt · runtime component loader hook, adapted collaboratively",
    },
    {
        number: "02",
        title: "Scaling design-led layouts responsively",
        challenge:
            "The supplied visual layouts used fixed design proportions that needed to adapt to different screen shapes and viewport sizes.",
        approach:
            "I built a reusable LayoutBoard component with configurable design dimensions, sizing modes and alignment. It calculates the scale against its container, while sections can use distinct desktop and mobile compositions where needed.",
        detail: "I tested the experience on iPhone and across Safari, Chrome and Edge.",
        tags: ["LayoutBoard", "Responsive design", "Cross-browser testing"],
        code: `const parent = this.$el.parentNode;
const containerAspect = parent.clientWidth / parent.clientHeight;
const designAspect = this.width / this.height;

if (containerAspect < designAspect) {
  this.scale = parent.clientWidth / this.width;
} else {
  this.scale = parent.clientHeight / this.height;
}

this.$emit("resize", this.scale);`,
        caption: "Simplified excerpt · LayoutBoard contain scaling calculation",
    },
    {
        number: "03",
        title: "Refining image and media interactions",
        challenge:
            "The gallery and media experience needed to follow the client’s design while remaining practical to use in the finished website.",
        approach:
            "I implemented the Swiper gallery and its full-screen image view, video switching and Fancybox image previews. Where an interaction in the supplied design was not practical, I discussed the constraint with the designer and refined the implementation together.",
        detail: "The main and full-screen galleries pass image data and index changes between components, keeping navigation aligned.",
        tags: ["Swiper", "Fancybox", "Video interaction"],
        code: `watch: {
  fsRealIndex(value) {
    this.swiperSlider.slideTo(value);
  },
},
methods: {
  onSwiperNext() {
    this.swiperSlider.slideNext();
    this.$emit("swiperNext");
  },
}`,
        caption: "Project excerpt · synchronising full-screen Swiper index and navigation",
    },
];

const technologies = [
    "JavaScript",
    "HTML",
    "CSS",
    "Vue 3",
    "Vue I18n",
    "vue3-sfc-loader",
    "Tailwind CSS",
    "PostCSS",
    "fullPage.js",
    "Swiper",
    "Fancybox",
    "Animate.css",
    "Smooth Scrollbar",
    "PDF.js / wowBook (third-party viewer)",
];

export default function TheHaddonCaseStudy() {
    return (
        <div className="min-h-screen bg-night text-white">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-lime focus:p-4 focus:text-night"
            >
                Skip to content
            </a>
            <header className={frame}>
                <div className="flex min-h-[72px] flex-wrap items-center justify-between gap-4 border-b border-white/10 py-4">
                    <Link
                        href="/"
                        className="font-editorial text-[14px] tracking-[.22em]"
                        aria-label="Aaron Liu home"
                    >
                        AARON LIU
                    </Link>
                    <Link
                        href="/#work"
                        className="inline-flex items-center gap-2 text-[11px] text-white/70 transition-colors hover:text-lime"
                    >
                        <ArrowLeft size={14} aria-hidden="true" /> Back to selected work
                    </Link>
                </div>
            </header>

            <main id="main" className={frame}>
                <section className="py-14 sm:py-20" aria-labelledby="project-title">
                    <p className={eyebrow}>Case study / Front-end development</p>
                    <h1
                        id="project-title"
                        className="mt-6 max-w-[1000px] font-editorial text-[clamp(42px,7vw,88px)] leading-[1.04] tracking-[-.045em]"
                    >
                        The Haddon<span className="text-lime">.</span>
                    </h1>
                    <p className="mt-7 max-w-[720px] text-base leading-[1.8] text-white/65">
                        Delivering a multilingual property website with Vue components inside a static HTML setup, alongside responsive layouts and considered image and media interactions.
                    </p>
                    <dl className="mt-10 grid gap-7 border-y border-white/10 py-7 sm:grid-cols-3">
                        {[
                            ["Role", "Sole Front-end Developer"],
                            ["Languages & framework", "JavaScript · HTML · CSS · Vue 3"],
                            ["Site languages", "Traditional Chinese · Simplified Chinese · English"],
                        ].map(([label, value]) => (
                            <div key={label}>
                                <dt className={eyebrow}>{label}</dt>
                                <dd className="mt-3 text-sm leading-relaxed text-white/85">{value}</dd>
                            </div>
                        ))}
                    </dl>

                    <figure className="mt-10">
                        <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#1c2021] sm:aspect-video">
                            <Image
                                src={project.cover}
                                alt="The Haddon property website screenshot"
                                fill
                                priority
                                sizes="(max-width: 640px) 100vw, 90vw"
                                className="object-cover object-top"
                            />
                        </div>
                        <figcaption className="mt-3 text-[11px] text-white/45">
                            The Haddon website · Project screenshot
                        </figcaption>
                    </figure>
                    <a
                        href="https://www.thehaddon.com.hk/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 border-b border-lime pb-1 text-[11px] text-lime"
                    >
                        Visit website <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                </section>

                <section
                    className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[1fr_2fr] lg:gap-16"
                    aria-labelledby="overview"
                >
                    <div>
                        <p className={eyebrow}>01 / Project overview</p>
                        <h2 id="overview" className={`${heading} mt-4`}>Front-end ownership within a static delivery setup</h2>
                    </div>
                    <div className={`${copy} max-w-[850px] space-y-5`}>
                        <p>
                            The Haddon is a multilingual property marketing website built from designer-supplied layouts. The client required a static HTML delivery, while the front end used Vue 3 single-file components.
                        </p>
                        <p>
                            I owned the front-end pages, responsive behaviour, interaction logic and Traditional Chinese, Simplified Chinese and English content. I also handled the front-end integration for external Follow Us feeds and sales-information resources.
                        </p>
                    </div>
                </section>

                <section
                    className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[1fr_2fr] lg:gap-16"
                    aria-labelledby="responsibilities"
                >
                    <div>
                        <p className={eyebrow}>02 / My role & responsibilities</p>
                        <h2 id="responsibilities" className={`${heading} mt-4`}>From layouts to working interfaces</h2>
                    </div>
                    <div className={`${copy} max-w-[850px]`}>
                        <ul className="space-y-4">
                            <li className="border-l border-lime/70 pl-4">Built and maintained the website’s front-end pages and responsive layouts from supplied designs.</li>
                            <li className="border-l border-lime/70 pl-4">Managed the site’s three language experiences and translated content.</li>
                            <li className="border-l border-lime/70 pl-4">Integrated external content feeds and sales-information resources on the front end.</li>
                            <li className="border-l border-lime/70 pl-4">Implemented video switching and Fancybox previews; the PDF sales booklet uses a third-party viewer.</li>
                            <li className="border-l border-lime/70 pl-4">Discussed design and implementation constraints with the designer and refined interactions where needed.</li>
                        </ul>
                    </div>
                </section>

                <section className="border-t border-white/10 py-12" aria-labelledby="technical">
                    <p className={eyebrow}>03 / Technical challenges & solutions</p>
                    <h2 id="technical" className={`${heading} mt-4`}>Adapting the architecture. Tuning the experience.</h2>
                    <div className="mt-10">
                        {challenges.map((item) => (
                            <article
                                key={item.number}
                                className="grid gap-8 border-t border-white/10 py-10 lg:grid-cols-[1fr_2fr] lg:gap-16"
                            >
                                <div>
                                    <p className="text-[11px] text-lime">{item.number}</p>
                                    <h3 className="mt-4 max-w-[360px] font-editorial text-3xl leading-tight">{item.title}</h3>
                                </div>
                                <div className={`${copy} min-w-0 max-w-[850px] space-y-5`}>
                                    <p><strong className="font-medium text-white/90">Challenge. </strong>{item.challenge}</p>
                                    <p><strong className="font-medium text-white/90">Approach. </strong>{item.approach}</p>
                                    <p>{item.detail}</p>
                                    <div className="flex flex-wrap gap-2" aria-label={`${item.title} technologies`}>
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="rounded-full border border-white/15 px-3 py-1.5 text-[9px] text-white/55">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <figure className="min-w-0 border border-white/10 bg-white/[.025] p-4 sm:p-5">
                                        <pre className="overflow-x-auto text-[11px] leading-[1.8] text-lime/90 sm:text-xs"><code>{item.code}</code></pre>
                                        <figcaption className="mt-4 border-t border-white/10 pt-3 text-[10px] leading-relaxed text-white/45">
                                            {item.caption}
                                        </figcaption>
                                    </figure>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[1fr_2fr] lg:gap-16"
                    aria-labelledby="delivery"
                >
                    <div>
                        <p className={eyebrow}>04 / Delivery & outcome</p>
                        <h2 id="delivery" className={`${heading} mt-4`}>A responsive, multilingual experience</h2>
                    </div>
                    <div className={`${copy} max-w-[850px] space-y-5`}>
                        <p>
                            The delivered front end brings together three language experiences, responsive property sections, interactive image and video features, external content feeds and sales-information resources.
                        </p>
                        <p>
                            I manually checked the experience on iPhone and across Safari, Chrome and Edge. The PDF-based sales booklet is powered by a third-party viewer rather than a custom PDF reader.
                        </p>
                    </div>
                </section>

                <section className="border-t border-white/10 py-12" aria-labelledby="technologies">
                    <p className={eyebrow}>05 / Technologies used</p>
                    <h2 id="technologies" className={`${heading} mt-4`}>Tools behind the experience</h2>
                    <ul className="mt-8 flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                            <li key={technology} className="rounded-full border border-white/15 px-4 py-2 text-[10px] text-white/65">
                                {technology}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="my-10 flex flex-wrap items-center justify-between gap-6 border-y border-white/10 py-8" aria-label="Continue exploring">
                    <Link href="/#work" className="inline-flex items-center gap-3 text-sm transition-colors hover:text-lime">
                        <ArrowLeft size={16} aria-hidden="true" /> Explore more work
                    </Link>
                    <a href={`mailto:${profile.email}`} className="rounded-full bg-lime px-5 py-3 text-[11px] font-semibold text-night transition-transform hover:scale-[1.03]">
                        Get in touch
                    </a>
                </section>
            </main>

            <footer className={`${frame} py-6 text-[10px] text-white/45`}>
                Aaron Liu · Front-end Developer · {profile.location}
            </footer>
        </div>
    );
}
