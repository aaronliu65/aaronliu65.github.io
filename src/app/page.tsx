"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowDown, Download, X } from "lucide-react";
import { profile, projects, skills, experience } from "../data/portfolio";

const container = "mx-auto max-w-[1440px] px-[6%] min-[1600px]:px-[90px]";
const section = `${container} py-20 max-sm:py-14`;
const eyebrow =
    "text-[10px] font-semibold uppercase tracking-[1.6px] text-muted";
const heading =
    "mt-5 mb-8 font-display text-[clamp(36px,4.5vw,64px)] leading-[1.12] font-medium tracking-[-2px]";
const editorial = "font-editorial font-normal italic text-accent";
const reveal = "motion-safe:data-[visible=true]:animate-enter";
const pill = "rounded-full border border-line px-3 py-1.5 text-[11px]";

export default function Home() {
    const [filter, setFilter] = useState("All work");
    const [selected, setSelected] = useState<(typeof projects)[number] | null>(
        null,
    );
    const dialogRef = useRef<HTMLElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (
            !("IntersectionObserver" in window) ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
            return;
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).dataset.visible = "true";
                        observer.unobserve(entry.target);
                    }
                }),
            { threshold: 0.08 },
        );
        document
            .querySelectorAll('[data-reveal]:not([data-visible="true"])')
            .forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, [filter]);

    useEffect(() => {
        if (!selected) return;
        const alreadyLocked =
            document.body.classList.contains("overflow-hidden");
        document.body.classList.add("overflow-hidden");
        closeRef.current?.focus();
        const handle = (event: KeyboardEvent) => {
            if (event.key === "Escape") setSelected(null);
            if (event.key === "Tab") {
                const items =
                    dialogRef.current?.querySelectorAll<HTMLElement>(
                        "button, a[href]",
                    );
                if (!items?.length) return;
                const first = items[0];
                const last = items[items.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };
        window.addEventListener("keydown", handle);
        return () => {
            if (!alreadyLocked)
                document.body.classList.remove("overflow-hidden");
            window.removeEventListener("keydown", handle);
            triggerRef.current?.focus();
        };
    }, [selected]);

    return (
        <>
            <a
                className="fixed -top-24 left-5 z-100 bg-ink p-3 text-white focus:top-4"
                href="#main"
            >
                Skip to content
            </a>
            <header
                className={`${container} flex min-h-24 flex-wrap items-center justify-between gap-4 py-5`}
            >
                <a
                    href="#"
                    className="text-[30px] font-bold tracking-[-2px]"
                    aria-label="Aaron Liu home"
                >
                    aaron<span className="text-accent">.</span>
                </a>
                <nav
                    aria-label="Main navigation"
                    className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs max-sm:gap-x-4"
                >
                    <a className="hover:text-accent" href="#work">
                        Work
                    </a>
                    <a className="hover:text-accent" href="#skills">
                        Skills
                    </a>
                    <a className="hover:text-accent" href="#experience">
                        Experience
                    </a>
                    <a
                        className="border-b border-ink pb-1 hover:text-accent"
                        href="#contact"
                    >
                        Let’s talk ↗
                    </a>
                </nav>
            </header>
            <main id="main">
                <section
                    className={`${container} animate-enter pt-14 pb-8 max-sm:pt-8`}
                >
                    <p className={eyebrow}>
                        Harpenden, UK{" "}
                        <span className="px-2 text-accent">/</span> Front-end
                        Developer
                    </p>
                    <h1 className="my-8 max-w-[1050px] font-display text-[clamp(40px,7.2vw,100px)] leading-[1.08] font-medium tracking-[-.055em]">
                        From considered design
                        <br />
                        to <span className={editorial}>working websites.</span>
                    </h1>
                    <div className="mt-8 flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
                        <p className="max-w-[590px] text-base leading-[1.8] text-muted">
                            I’m Aaron Liu, a front-end developer specialising in
                            Vue.js, Nuxt.js and responsive UI development. I
                            turn supplied designs into reusable components,
                            thoughtful interactions and websites that work
                            across screens.
                        </p>
                        <a
                            href="#work"
                            className="group flex shrink-0 items-center gap-5 text-xs"
                        >
                            Explore my work{" "}
                            <span className="grid size-12 place-items-center rounded-full border border-line transition-colors group-hover:bg-accent">
                                <ArrowDown size={18} />
                            </span>
                        </a>
                    </div>
                    <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line py-7 max-sm:grid-cols-1 max-sm:gap-5">
                        {[
                            ["7+ years", "Commercial website experience"],
                            ["30+ websites", "Front-end implementation"],
                            ["UK work eligible", "Unrestricted right to work"],
                        ].map(([value, label]) => (
                            <div key={value}>
                                <strong className="block text-2xl font-medium tracking-tight">
                                    {value}
                                </strong>
                                <span className="mt-2 block text-xs text-muted">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="work" className={section}>
                    <div data-reveal className={reveal}>
                        <p className={eyebrow}>01 / Selected commercial work</p>
                        <h2 className={heading}>
                            Built for{" "}
                            <span className={editorial}>real audiences.</span>
                        </h2>
                        <p className="max-w-[760px] text-sm leading-[1.8] text-muted">
                            Projects delivered during my time at Hostlink. My
                            role covered front-end setup, Vue/Nuxt UI
                            implementation, animations, responsive testing and
                            coordination with designers and backend programmers.
                            Visual designs were supplied by designers.
                        </p>
                    </div>
                    <div
                        className="my-8 flex flex-wrap gap-2"
                        aria-label="Filter projects"
                    >
                        {["All work", "Property", "Commercial", "NGO"].map(
                            (value) => (
                                <button
                                    key={value}
                                    aria-pressed={filter === value}
                                    onClick={() => setFilter(value)}
                                    className="rounded-full border border-line px-4 py-2 text-xs aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-white"
                                >
                                    {value}
                                </button>
                            ),
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-x-7 gap-y-10 max-sm:grid-cols-1">
                        {projects
                            .filter(
                                (p) =>
                                    filter === "All work" ||
                                    p.category === filter,
                            )
                            .map((project) => (
                                <article
                                    key={project.id}
                                    data-reveal
                                    className={reveal}
                                >
                                    <button
                                        className={`group flex relative min-h-[260px] w-full flex-col justify-between p-8 text-left transition-transform hover:-translate-y-1 max-sm:min-h-[230px] max-sm:p-6 ${project.colour}`}
                                        onClick={(event) => {
                                            triggerRef.current =
                                                event.currentTarget;
                                            setSelected(project);
                                        }}
                                        aria-label={`Read about ${project.name}`}
                                    >
                                        <span className="flex w-full justify-between text-[10px] uppercase tracking-widest">
                                            <span>
                                                {project.category} /{" "}
                                                {project.id}
                                            </span>
                                            <ArrowUpRight size={18} />
                                        </span>
                                        <span className="my-6 font-editorial text-[clamp(30px,3.5vw,48px)] leading-[1.1] tracking-tight">
                                            {project.short}
                                        </span>
                                        <span className="text-[10px] uppercase tracking-widest">
                                            Project overview · {project.tags[0]}
                                        </span>
                                    </button>
                                    <h3 className="mt-5 text-lg font-medium">
                                        {project.name}
                                    </h3>
                                    <p className="mt-1 text-xs text-muted">
                                        {project.client}
                                    </p>
                                    <p className="mt-4 text-sm leading-[1.8] text-muted">
                                        {project.description}
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className={pill}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-5 flex flex-wrap gap-4">
                                        {project.links.map((link) => (
                                            <a
                                                key={link.url}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 border-b border-line pb-1 text-xs hover:text-accent"
                                            >
                                                {link.label}
                                                <ArrowUpRight size={14} />
                                            </a>
                                        ))}
                                    </div>
                                </article>
                            ))}
                    </div>
                </section>

                <section
                    id="skills"
                    data-reveal
                    className={`${section} ${reveal} border-t border-line`}
                >
                    <p className={eyebrow}>02 / Skills & approach</p>
                    <h2 className={heading}>
                        The tools behind
                        <br />
                        <span className={editorial}>the details.</span>
                    </h2>
                    <div className="grid grid-cols-2 gap-x-14 gap-y-8 max-sm:grid-cols-1">
                        {skills.map((group, index) => (
                            <div
                                className="border-t border-line pt-5"
                                key={group.name}
                            >
                                <h3 className="mb-4 text-base font-medium">
                                    <span className="mr-4 text-xs text-muted">
                                        0{index + 1}
                                    </span>
                                    {group.name}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span className={pill} key={item}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section
                    id="experience"
                    data-reveal
                    className={`${section} ${reveal} bg-[#eeeae3]`}
                >
                    <p className={eyebrow}>03 / Experience</p>
                    <h2 className={heading}>
                        A background in
                        <br />
                        <span className={editorial}>design & development.</span>
                    </h2>
                    <div className="space-y-10">
                        {experience.map((job) => (
                            <article
                                className="grid grid-cols-[.85fr_1.5fr] gap-10 border-t border-[#d2cfc7] pt-7 max-md:grid-cols-1 max-md:gap-5"
                                key={job.company}
                            >
                                <div>
                                    <p className={eyebrow}>{job.label}</p>
                                    <h3 className="mt-3 text-xl font-medium">
                                        {job.role}
                                    </h3>
                                    <p className="mt-2 text-sm">
                                        {job.company}
                                    </p>
                                    <p className="mt-2 text-xs text-muted">
                                        {job.dates}
                                    </p>
                                </div>
                                <ul className="list-disc space-y-3 pl-5 text-sm leading-[1.8] text-[#61635c]">
                                    {job.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    id="about"
                    data-reveal
                    className={`${section} ${reveal}`}
                >
                    <p className={eyebrow}>04 / About Aaron</p>
                    <h2 className={heading}>
                        A little more{" "}
                        <span className={editorial}>context.</span>
                    </h2>
                    <div className="grid grid-cols-2 gap-14 max-md:grid-cols-1 max-md:gap-8">
                        <div>
                            <p className="text-lg leading-[1.8]">
                                {profile.summary}
                            </p>
                            <p className="mt-5 text-sm leading-[1.8] text-muted">
                                My commercial work spans property, corporate,
                                e-commerce and organisational websites. Earlier
                                UI/UX and graphic design experience informs how
                                I approach design handoffs and technical
                                feasibility.
                            </p>
                        </div>
                        <div className="space-y-7">
                            <div>
                                <h3 className={eyebrow}>Education</h3>
                                <p className="mt-3 text-lg font-medium">
                                    Bachelor of Computing
                                </p>
                                <p className="mt-2 text-sm text-muted">
                                    The Open University of Hong Kong
                                    <br />
                                    Sep 2015 – Jun 2018
                                </p>
                            </div>
                            <div className="border-t border-line pt-5">
                                <h3 className={eyebrow}>Languages</h3>
                                <ul className="mt-3 space-y-2 text-sm">
                                    <li>Cantonese</li>
                                    <li>Mandarin</li>
                                    <li>English</li>
                                </ul>
                            </div>
                            <div className="border-t border-line pt-5">
                                <h3 className={eyebrow}>Other</h3>
                                <ul className="mt-3 space-y-1 text-sm text-muted">
                                    <li>Unrestricted right to work in the UK</li>
                                    <li>Full UK Driving Licence</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="contact"
                    data-reveal
                    className={`${section} ${reveal} border-t border-line`}
                >
                    <p className={eyebrow}>05 / Get in touch</p>
                    <h2 className={heading}>
                        Let’s build something
                        <br />
                        <span className={editorial}>thoughtful.</span>
                    </h2>
                    <div className="flex items-start justify-between gap-8 max-md:flex-col">
                        <div>
                            <p className="mb-5 text-sm text-muted">
                                {profile.fullName} · {profile.location}
                            </p>
                            <a
                                href={`mailto:${profile.email}`}
                                className="block break-all text-[clamp(18px,2.5vw,30px)] underline decoration-line underline-offset-8 hover:text-accent"
                            >
                                {profile.email}
                            </a>
                            <a
                                href="tel:+447435017688"
                                className="mt-5 block text-sm text-muted hover:text-accent"
                            >
                                {profile.phone}
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <a
                                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-xs hover:bg-ink hover:text-white"
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub <ArrowUpRight size={15} />
                            </a>
                            <a
                                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-xs hover:bg-ink hover:text-white"
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn <ArrowUpRight size={15} />
                            </a>
                            <a
                                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs text-white hover:bg-accent"
                                href="/Aaron_Liu_CV.docx"
                                download
                            >
                                Download CV · Word <Download size={15} />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <footer
                className={`${container} flex justify-between gap-4 border-t border-line py-7 text-xs text-muted`}
            >
                <span>© {new Date().getFullYear()} Aaron Liu</span>
                <a href="#">Back to top ↑</a>
            </footer>
            {/* Project Modal */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 grid place-items-center bg-ink/60 p-5 backdrop-blur-sm"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setSelected(null);
                    }}
                >
                    <section
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-title"
                        className="relative max-h-[90vh] w-full max-w-2xl overflow-auto bg-paper p-8 max-sm:p-6"
                    >
                        <button
                            ref={closeRef}
                            className="absolute top-4 right-4 rounded-full p-2 hover:bg-line"
                            aria-label="Close project"
                            onClick={() => setSelected(null)}
                        >
                            <X size={20} />
                        </button>
                        <Image
                            src={`${selected.cover}`}
                            alt={selected.name}
                            width={1920}
                            height={1080}
                            className="mt-6 mb-4"
                        />

                        <p className={`${eyebrow} pr-10`}>
                            {selected.category} / Hostlink portfolio
                        </p>
                        <h2
                            id="project-title"
                            className="mt-7 font-display text-3xl leading-tight tracking-tight"
                        >
                            {selected.name}
                        </h2>
                        <p className="mt-3 text-sm text-muted">
                            {selected.client}
                        </p>
                        <p className="mt-6 text-base leading-[1.8]">
                            {selected.description}
                        </p>
                        <h3 className="mt-6 text-sm font-semibold">
                            My contribution
                        </h3>
                        <p className="mt-2 text-sm leading-[1.8] text-muted">
                            Front-end setup and implementation, Vue/Nuxt UI
                            development, animations and responsive testing, in
                            collaboration with designers and backend
                            programmers. Visual designs were supplied; CMS
                            connections and data processing were handled by
                            backend programmers.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {selected.tags.map((tag) => (
                                <span className={pill} key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-7 flex flex-wrap gap-4">
                            {selected.links.map((link) => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border-b border-ink pb-1 text-sm"
                                >
                                    {link.label}
                                    <ArrowUpRight size={15} />
                                </a>
                            ))}
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}
