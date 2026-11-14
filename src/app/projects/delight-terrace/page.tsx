import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { profile, projects } from "../../../data/portfolio";

const project = projects.find((item) => item.name === "Delight Terrace")!;
const url = "https://aaronliu65.github.io/aaronliu_portfolio/projects/delight-terrace/";
const description = "Aaron Liu’s Delight Terrace case study: sole front-end development with Vue 3 and Nuxt 3, full-screen navigation, desktop audio/video coordination and multilingual interfaces.";
export const metadata: Metadata = {
    title: "Delight Terrace Case Study | Aaron Liu",
    description,
    alternates: { canonical: url },
    openGraph: { title: "Delight Terrace Case Study | Aaron Liu", description, url, type: "article" },
    twitter: { card: "summary_large_image", title: "Delight Terrace Case Study | Aaron Liu", description },
};

const frame = "mx-auto w-full max-w-[1600px] px-7 sm:px-10 xl:px-14";
const eyebrow = "text-[10px] font-medium uppercase tracking-[.24em] text-white/50";
const heading = "font-display text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-.04em]";
const copy = "text-sm leading-[1.9] text-white/65";
const challenges = [
    {
        title: "Coordinating sections and interface states",
        challenge: "The full-screen experience needed more than page transitions. Header colours, image disclaimers, animations and overlays had to respond to the active section and slide.",
        approach: "I used fullPage.js callbacks to update shared section and slide state, then connected that state to conditional rendering and transition styles. I also coordinated popup visibility with full-page scrolling so users could interact with an overlay without moving the page behind it.",
        detail: "For example, image disclaimers change with the active content and are hidden in the media sections, while header styling responds to both the section index and slide anchor.",
        examples: [
            {
                        "code": "afterSlideLoad: function (\n    section,\n    origin,\n    destination,\n    direction,\n    trigger,\n) {\n    activeSlideIndex.value = destination.index;\n    currentSection.value = {\n        section: activeSectionIndex.value,\n        slide: destination.index,\n    };\n},",
                        "caption": "components/Fullpage.vue · lines 105–117 · source excerpt",
                        "explanation": "After a horizontal slide loads, its index is recorded alongside the active section. Other components can use this shared state to decide which content or transition to show."
            },
            {
                        "code": "<Transition enterActiveClass=\"animate__animated animate__fadeIn\"\n    leaveActiveClass=\"animate__animated animate__fadeOut\">\n    <ImgDisclaimer v-if=\"\n        !activeSection.isLast &&\n        currentSection.section != 8 &&\n        currentSection.section != 9\n    \">",
                        "caption": "pages/index.vue · lines 630–636 · source excerpt",
                        "explanation": "The image-disclaimer component is conditionally rendered from the active section. It is hidden on the last section and on section indices 8 and 9. This excerpt shows the opening of the surrounding transition and component; their closing tags are omitted."
            }
],
    },
    {
        title: "Desktop video and background audio",
        challenge: "Background music needed to pause during video playback and resume according to the user’s music setting.",
        approach: "I connected the desktop video’s play, pause and ended events to shared background-audio state. Playing the video pauses the music; pausing or ending the video restores it only when the user’s music setting is enabled. Leaving the video section pauses the video and resets its playback position.",
        detail: "This coordination belongs to the desktop implementation. Mobile uses a separate video component with inline playback and native controls.",
        examples: [
            {
                        "code": "video.value.addEventListener(\"play\", () => {\n    videoStatus.value = \"play\";\n    activeBgMusic.value = false;\n});",
                        "caption": "components/Section/Desktop/Media.vue · lines 23–26 · source excerpt",
                        "explanation": "The desktop video’s play event updates its own status and disables background music through shared state."
            },
            {
                        "code": "video.value.addEventListener(\"ended\", () => {\n    videoStatus.value = \"ended\";\n    // console.log(videoStatus.value);\n    if (userActiveBgMusic.value) {\n        activeBgMusic.value = true;\n    } else {\n        activeBgMusic.value = false;\n    }\n});",
                        "caption": "components/Section/Desktop/Media.vue · lines 38–46 · source excerpt",
                        "explanation": "When the video ends, the music state follows the user’s existing preference. This avoids unconditionally enabling music after playback."
            },
            {
                        "code": "watch(\n    () => activeSectionIndex.value,\n    (val) => {\n        if (val == 8) {\n            playVideo();\n        } else {\n            pauseVideo();\n            video.value.currentTime = 0;\n        }\n    },\n);",
                        "caption": "components/Section/Desktop/Media.vue · lines 59–69 · source excerpt",
                        "explanation": "The section watcher attempts to play video on section index 8, and pauses and resets it when navigating elsewhere. Background-music playback is handled separately by the music-control component, with a one-second delay."
            }
],
    },
    {
        title: "Detailed layouts across screen sizes",
        challenge: "Information-heavy sections and specific image-positioning requirements were difficult to fit into full-screen layouts, particularly at desktop widths such as 1280px and 1440px.",
        approach: "I combined fluid sizing with separate desktop and mobile components, device-specific imagery and tailored image cropping. Viewport-height variables and header measurements informed the available space. I repeatedly checked and adjusted spacing, content placement and imagery with the client’s designer.",
        detail: "The design section, for example, uses different image assets for desktop and mobile, with a tailored mobile crop rather than simply shrinking the desktop composition.",
        examples: [
            {
                        "code": "<SectionDesktopDesign\n    :main=\"main\"\n    :images=\"images\"\n    @moveSlide=\"$emit('moveSlide', { section: 7, slide: 1 })\"\n    v-if=\"viewPort == 'desktop' || prerender\"\n/>\n<SectionMobileDesign\n    :main=\"main\"\n    :images=\"images\"\n    @moveSlide=\"$emit('moveSlide', { section: 7, slide: 1 })\"\n     v-if=\"viewPort == 'mobile' || prerender\"\n/>",
                        "caption": "components/Section/Design.vue · lines 63–74 · source excerpt",
                        "explanation": "Separate components receive the same content and image configuration, while viewport conditions select the desktop or mobile presentation. The prerender condition also allows either component to be included during that rendering mode."
            },
            {
                        "code": "<div class=\"relative h-[calc(var(--dvh)*57)] w-full overflow-hidden\">\n    <SharpImg\n        :src=\"images.mobile.image\"\n        class=\"h-full w-full object-cover object-[65%] transition-all duration-1000\"\n        :class=\"currentSection.section == 6 ? 'opacity-100 visible' : 'opacity-0 invisible'\"\n    />",
                        "caption": "components/Section/Mobile/Design.vue · lines 17–22 · source excerpt",
                        "explanation": "The mobile image area uses a viewport-height variable and a specific crop position. Visibility is tied to section state. This is a partial template excerpt; closing tags are omitted."
            }
],
    },
    {
        title: "Language switching and interface presentation",
        challenge: "English, Traditional Chinese and Simplified Chinese navigation needed to reflect the selected language and fit the website’s different menu presentations.",
        approach: "I implemented front-end language switching with Nuxt i18n and YAML interface translations. The language switcher reads the configured locales and uses switchLocalePath() to generate language-aware destinations. Its templates provide a dropdown and an in-menu presentation, with language-specific font styling.",
        detail: "These examples demonstrate the language-selection interface and its navigation behaviour.",
        examples: [
    {
        "code": "const { locale, locales } = useI18n();\nconst switchLocalePath = useSwitchLocalePath();\nconst availableLocales = computed(() => {\n    return locales.value;\n});",
        "caption": "components/LangSwitch.vue · lines 2–6 · source excerpt",
        "explanation": "The language switcher reads the configured locales and obtains Nuxt’s locale-path helper. The available choices come from the i18n configuration."
    },
    {
        "code": "<template v-for=\"locale in availableLocales\" :key=\"locale.code\">\n    <NuxtLink :to=\"switchLocalePath(locale.code)\"\n        class=\"leading-1 cursor-pointer text-center min-w-[24px]\" :class=\"{ '!font-quiche-sans' : locale.code == 'en' }\"\n    >\n        {{ locale.name }}\n    </NuxtLink>",
        "caption": "components/LangSwitch.vue · lines 85–90 · source excerpt",
        "explanation": "The menu renders a link for each available language and uses switchLocalePath() to generate its destination. The English option also receives a language-specific font class."
    }
],
    },
];

export default function DelightTerraceCaseStudy() {
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
                    <h1 id="project-title" className="mt-6 max-w-[1000px] font-editorial text-[clamp(42px,7vw,88px)] leading-[1.04] tracking-[-.045em]">Delight Terrace<span className="text-lime">.</span></h1>
                    <p className="mt-7 max-w-[650px] text-base leading-[1.8] text-white/65">Building a multilingual property website with full-screen navigation, responsive layouts and coordinated desktop media playback.</p>
                    <dl className="mt-10 grid gap-7 border-y border-white/10 py-7 sm:grid-cols-3">
                        {[["Role", "Sole Front-end Developer"], ["Core stack", "Vue 3 · Nuxt 3 · JavaScript"], ["Client", project.client]].map(([label, value]) => (
                            <div key={label}><dt className={eyebrow}>{label}</dt><dd className="mt-3 text-sm text-white/85">{value}</dd></div>
                        ))}
                    </dl>
                    <figure className="mt-10">
                        <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#1c2021] sm:aspect-video">
                            <Image src={project.cover} alt="Delight Terrace property website screenshot" fill priority sizes="(max-width: 640px) 100vw, 90vw" className="object-cover object-top" />
                        </div>
                        <figcaption className="mt-3 text-[11px] text-white/45">Delight Terrace website · Project screenshot</figcaption>
                    </figure>
                    <a href={project.links[0].url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 border-b border-lime pb-1 text-[11px] text-lime">Visit website <ArrowUpRight size={14} aria-hidden="true" /></a>
                </section>
                <section className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[1fr_2fr] lg:gap-16" aria-labelledby="overview">
                    <div><p className={eyebrow}>01 / Project background & role</p><h2 id="overview" className={`${heading} mt-4`}>From supplied designs to a complete front end</h2></div>
                    <div className={`${copy} max-w-[850px] space-y-5`}>
                        <p>Delight Terrace is a property development website for the Hong Kong Housing Society, presenting location, education, transport, design, floor plans and media content in English, Traditional Chinese and Simplified Chinese.</p>
                        <p>As the sole front-end developer, I built the front end from the client’s supplied designs. I worked directly with their designer to discuss layout feasibility, interaction behaviour and adjustments for desktop and mobile.</p>
                        <p>I owned page implementation, animations, responsive behaviour, front-end language switching and front-end testing. Backend programmers handled API and CMS development and integration.</p>
                    </div>
                </section>
                <section className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[1fr_2fr] lg:gap-16" aria-labelledby="technologies">
                    <div><p className={eyebrow}>02 / Technologies</p><h2 id="technologies" className={`${heading} mt-4`}>Tools behind the experience</h2></div>
                    <div className={`${copy} max-w-[850px] space-y-5`}>
                        <ul className="flex flex-wrap gap-2" aria-label="Project technologies">{project.tags.map((tag) => <li key={tag} className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-white/75">{tag}</li>)}</ul>
                        <p>fullPage.js provides section and slide navigation, Swiper powers image galleries, and Fancybox and Panzoom provide image viewing and zoom controls.</p>
                    </div>
                </section>
                <section className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[1fr_2fr] lg:gap-16" aria-labelledby="responsibilities">
                    <div><p className={eyebrow}>03 / Features & responsibilities</p><h2 id="responsibilities" className={`${heading} mt-4`}>Layouts, interactions and content</h2></div>
                    <ul className={`${copy} max-w-[850px] list-disc space-y-3 pl-5 marker:text-lime`}>
                        <li>Built tailored desktop and mobile layouts with device-specific imagery.</li>
                        <li>Implemented full-screen sections, horizontal slides, fade effects and section-triggered animations.</li>
                        <li>Coordinated navigation styling, contextual disclaimers, overlays and scroll controls.</li>
                        <li>Connected desktop video playback with the background music controls.</li>
                        <li>Implemented multilingual navigation and interface translations.</li>
                        <li>Built gallery interfaces with image viewing and pan/zoom controls.</li>
                    </ul>
                </section>
                <section className="border-t border-white/10 py-12" aria-labelledby="technical">
                    <p className={eyebrow}>04 / Technical challenges & solutions</p><h2 id="technical" className={`${heading} mt-4`}>Keeping the experience coordinated</h2>
                    <p className="mt-5 max-w-[850px] text-sm leading-[1.9] text-white/55">Selected excerpts from the project source are shown below with their original file names and line references. Each excerpt illustrates the implementation discussed; surrounding code is omitted.</p>
                    <div className="mt-10">{challenges.map((item, index) => (
                        <article key={item.title} className="grid gap-8 border-t border-white/10 py-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
                            <div><p className="text-[11px] text-lime">0{index + 1}</p><h3 className="mt-4 max-w-[360px] font-editorial text-3xl leading-tight">{item.title}</h3></div>
                            <div className={`${copy} min-w-0 max-w-[850px] space-y-5`}>
                                <p><strong className="font-medium text-white/90">Challenge. </strong>{item.challenge}</p>
                                <p><strong className="font-medium text-white/90">Approach. </strong>{item.approach}</p>
                                <p>{item.detail}</p>
                                {item.examples.map((example) => (
                                    <figure key={example.caption} className="min-w-0 border border-white/10 bg-white/[.025] p-5 sm:p-6">
                                        <pre tabIndex={0} aria-label={example.caption} className="max-w-full overflow-x-auto text-[12px] leading-[1.8] text-lime/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"><code>{example.code}</code></pre>
                                        <figcaption className="mt-4 border-t border-white/10 pt-4">
                                            <p className="break-words font-mono text-[10px] leading-relaxed text-white/45">{example.caption}</p>
                                            <p className="mt-3 text-[12px] leading-[1.8] text-white/65">{example.explanation}</p>
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        </article>
                    ))}</div>
                </section>
                <section className="grid gap-8 border-t border-white/10 py-12 lg:grid-cols-[1fr_2fr] lg:gap-16" aria-labelledby="delivery">
                    <div><p className={eyebrow}>05 / Delivery & outcome</p><h2 id="delivery" className={`${heading} mt-4`}>Testing & layout refinement</h2></div>
                    <div className={`${copy} max-w-[850px] space-y-5`}>
                        <p>I delivered the front-end implementation, covering responsive layouts, full-screen navigation, multilingual interfaces, galleries and desktop audio/video coordination.</p>
                        <p>I carried out manual layout checks on desktop and mobile, refining spacing, imagery and content placement to meet the client’s visual requirements.</p>
                    </div>
                </section>
                <section className="my-10 flex flex-wrap items-center justify-between gap-6 border-y border-white/10 py-8" aria-label="Continue exploring">
                    <Link href="/projects/hkfa" className="inline-flex items-center gap-3 text-sm hover:text-lime"><ArrowLeft size={16} aria-hidden="true" /> Read the HKFA case study</Link>
                    <a href={`mailto:${profile.email}`} className="rounded-full bg-lime px-5 py-3 text-[11px] font-semibold text-night">Get in touch</a>
                </section>
            </main>
            <footer className={`${frame} py-6 text-[10px] text-white/45`}>Aaron Liu · Front-end Developer · {profile.location}</footer>
        </div>
    );
}
