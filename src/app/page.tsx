"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Download,
    MonitorSmartphone,
    X,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper as SwiperCarousel, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/a11y";
import { experience, profile, projects, skills } from "../data/portfolio";

const frame = "mx-auto w-full max-w-[1600px] px-7 sm:px-10 xl:px-14";
const eyebrow =
    "text-[9px] font-medium uppercase tracking-[.24em] text-white/50";
const sectionTitle =
    "mt-4 font-display text-[clamp(34px,5vw,62px)] leading-[1.02] tracking-[-.055em]";

export default function Home() {
    const [selected, setSelected] = useState<(typeof projects)[number] | null>(
        null,
    );
    const swiperRef = useRef<SwiperInstance | null>(null);
    const [projectsBeginning, setProjectsBeginning] = useState(true);
    const [projectsEnd, setProjectsEnd] = useState(false);
    const dialogRef = useRef<HTMLElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const heroRef = useRef<HTMLElement>(null);
    const heroGridGlowRef = useRef<HTMLDivElement>(null);
    const heroImageRef = useRef<HTMLDivElement>(null);
    const heroSharpImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;
        gsap.registerPlugin(ScrollTrigger);
        const context = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
                gsap.fromTo(
                    item,
                    { autoAlpha: 0, y: 26 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 88%",
                            once: true,
                        },
                    },
                );
            });
        });
        return () => context.revert();
    }, []);

    useEffect(() => {
        const section = heroRef.current;
        const gridGlow = heroGridGlowRef.current;
        const image = heroImageRef.current;
        const sharpImage = heroSharpImageRef.current;
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (!section || !gridGlow || !image || !sharpImage) return;

        const imageX = gsap.quickTo(image, "x", {
            duration: reduceMotion ? 0 : 1.1,
            ease: "power2.out",
        });
        const imageY = gsap.quickTo(image, "y", {
            duration: reduceMotion ? 0 : 1.1,
            ease: "power2.out",
        });

        const onMouseMove = (event: MouseEvent) => {
            const bounds = section.getBoundingClientRect();
            const x = event.clientX - bounds.left;
            const y = event.clientY - bounds.top;
            const gridMask = `radial-gradient(circle 320px at ${x}px ${y}px, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.72) 48%, transparent 100%)`;
            const sharpMask = `radial-gradient(circle 300px at ${x}px ${y}px, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 44%, transparent 100%)`;

            gridGlow.style.maskImage = gridMask;
            gridGlow.style.webkitMaskImage = gridMask;
            gsap.to(gridGlow, {
                autoAlpha: 1,
                duration: reduceMotion ? 0 : 0.2,
                overwrite: true,
            });
            sharpImage.style.maskImage = sharpMask;
            sharpImage.style.webkitMaskImage = sharpMask;
            gsap.to(sharpImage, {
                autoAlpha: 1,
                duration: reduceMotion ? 0 : 0.2,
                overwrite: true,
            });
            if (!reduceMotion) {
                imageX(((bounds.width / 2 - x) / bounds.width) * 10);
                imageY(((bounds.height / 2 - y) / bounds.height) * 7);
            }
        };

        const onMouseLeave = () => {
            gsap.to(gridGlow, {
                autoAlpha: 0,
                duration: reduceMotion ? 0 : 0.35,
                overwrite: true,
            });
            gsap.to(sharpImage, {
                autoAlpha: 0,
                duration: reduceMotion ? 0 : 0.35,
                overwrite: true,
            });
            imageX(0);
            imageY(0);
        };

        section.addEventListener("mousemove", onMouseMove);
        section.addEventListener("mouseleave", onMouseLeave);

        return () => {
            section.removeEventListener("mousemove", onMouseMove);
            section.removeEventListener("mouseleave", onMouseLeave);
            gsap.killTweensOf([gridGlow, sharpImage, image]);
        };
    }, []);

    useEffect(() => {
        if (!selected) return;
        const wasLocked = document.body.classList.contains("overflow-hidden");
        document.body.classList.add("overflow-hidden");
        closeRef.current?.focus();
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setSelected(null);
            if (event.key !== "Tab") return;
            const controls = dialogRef.current?.querySelectorAll<HTMLElement>(
                'button, a[href], [tabindex]:not([tabindex="-1"])',
            );
            if (!controls?.length) return;
            const first = controls[0];
            const last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => {
            if (!wasLocked) document.body.classList.remove("overflow-hidden");
            window.removeEventListener("keydown", onKeyDown);
            triggerRef.current?.focus();
        };
    }, [selected]);

    const moveProjects = (direction: -1 | 1) => {
        if (direction < 0) swiperRef.current?.slidePrev();
        else swiperRef.current?.slideNext();
    };

    const toolkit = [
        { name: "Vue.js", icon: "/images/icons/vue.svg" },
        { name: "Nuxt.js", icon: "/images/icons/nuxt.svg" },
        { name: "JavaScript", icon: "/images/icons/javascript.svg" },
        { name: "Tailwind CSS", icon: "/images/icons/tailwindcss.svg" },
        { name: "Swiper", icon: "/images/swiper-logo.svg" },
        { name: "Responsive UI", icon: null },
        { name: "Git", icon: "/images/icons/git.svg" },
        { name: "GitHub", icon: "/images/icons/github.svg" },
    ];

    return (
        <div className="min-h-screen overflow-hidden bg-night text-white">
            <a
                className="fixed -top-24 left-5 z-[100] bg-lime px-4 py-3 text-sm text-night focus:top-4"
                href="#main"
            >
                Skip to content
            </a>

            <header className={`${frame} relative z-20`}>
                <div className="flex min-h-[72px] items-center justify-between __gap-5 border-b border-white/10">
                    <div className="flex items-center justify-between w-full min-h-[72px] gap-8 min-sm:border-r border-white/10  pr-[2.5vw] max-sm:pr-4">
                        <div className="flex items-center gap-8">
                            <a
                                href="#top"
                                className="font-editorial text-[14px] tracking-[.22em]"
                                aria-label="Aaron Liu home"
                            >
                                AARON LIU
                            </a>
                            <div className="flex items-center gap-3 max-lg:hidden">
                                <div className="text-lime">•</div>
                                <div className="text-xs text-white/45">Front-end Developer</div>
                            </div>
                        </div>                   
                        <nav
                            aria-label="Main navigation"
                            className="flex items-center gap-7 text-[11px] text-white/70 max-md:gap-4 max-sm:hidden"
                        >
                            <a className="transition-colors hover:text-lime" href="#work">Work</a>
                            <a className="transition-colors hover:text-lime" href="#about">About</a>
                            <a className="transition-colors hover:text-lime" href="#experience">Experience</a>
                            <a className="transition-colors hover:text-lime" href="#skills">Stack</a>
                            <a className="transition-colors hover:text-lime" href="#contact">Contact</a>
                        </nav>
                    </div>
                    <a
                        className="flex items-center gap-8 text-[9px] uppercase tracking-[.18em] text-white/55 max-sm:hidden pl-[2.5vw] max-sm:pl-4"
                        href={`mailto:${profile.email}`}
                    >
                        <span className="size-1.5 min-w-[6px] rounded-full bg-lime" />
                            Open to opportunities
                    </a>
                </div>
                <nav
                    aria-label="Mobile navigation"
                    className="hidden gap-5 overflow-x-auto border-b border-white/10 py-3 text-[10px] text-white/70 max-sm:flex"
                >
                    <a href="#work">Work</a><a href="#about">About</a>
                    <a href="#experience">Experience</a><a href="#skills">Stack</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <main id="main">
                <section
                    id="top"
                    ref={heroRef}
                    className="relative isolate min-h-[760px] overflow-hidden bg-night sm:min-h-[650px] md:min-h-[570px] lg:min-h-[540px]"
                >
                    <div className="absolute inset-0 z-0 overflow-hidden motion-safe:animate-media-in" aria-hidden="true">
                        <div ref={heroImageRef} className="absolute inset-0 will-change-transform">
                            <Image
                                src="/images/projects/harbourcity.png"
                                alt=""
                                fill
                                priority
                                sizes="100vw"
                                className="scale-[1.03] object-cover object-center opacity-45 blur-[3px]"
                            />
                            <div
                                ref={heroSharpImageRef}
                                className="pointer-events-none absolute inset-0 z-[1] opacity-0"
                            >
                                <Image
                                    src="/images/projects/harbourcity.png"
                                    alt=""
                                    fill
                                    priority
                                    sizes="100vw"
                                    className="scale-[1.03] object-cover object-center opacity-60"
                                />
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/65 to-night/40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-night/30" />
                        <div
                            ref={heroGridGlowRef}
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 z-[3] grid grid-cols-12 opacity-0 mix-blend-screen"
                        >
                            {Array.from({ length: 13 }, (_, i) => (
                                <span
                                    key={i}
                                    className="border-r border-lime/65 drop-shadow-[0_0_6px_rgba(198,239,80,0.6)]"
                                />
                            ))}
                            <span className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_71px,rgba(198,239,80,0.22)_72px,transparent_73px)]" />
                        </div>
                        <div className="absolute inset-0 grid grid-cols-12 opacity-15">
                            {Array.from({ length: 13 }, (_, i) => <span key={i} className="border-r border-white/30" />)}
                        </div>
                        <div className="absolute inset-0 mx-auto max-w-[1600px] px-7 sm:px-10 xl:px-14">
                            <div className="relative h-full w-full">
                                <div className="absolute top-7 right-0 text-[9px] uppercase tracking-[.2em] text-white/55 max-md:hidden">Selected project / 01 <span className="ml-5">01 — 08</span></div>
                                <div className="absolute right-0 bottom-20 max-w-[420px] text-right max-md:hidden">
                                    <p className="text-[9px] uppercase tracking-[.2em] text-white/50">Commercial · Hong Kong</p>
                                    <p className="mt-2 font-editorial text-3xl text-white/90">Harbour City Office</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${frame} relative z-10 grid min-h-[760px] grid-cols-[.92fr_1.08fr] items-center gap-8 py-10 sm:min-h-[650px] md:min-h-[570px] lg:min-h-[540px] lg:py-12 max-md:grid-cols-1 max-md:gap-8`}>
                    <div className="relative z-10 py-6 motion-safe:animate-hero-in">
                        <div className="flex items-center gap-4">
                            <div className={eyebrow}>
                                {profile.location}
                            </div>
                            <div className="w-26 h-[1px] bg-white/50"></div>
                        </div>
                        <h1 className="mt-7 max-w-[690px] font-editorial text-[clamp(54px,8vw,104px)] leading-[.88] tracking-[-.055em]">
                            Interfaces<br />with intent<span className="text-lime">.</span>
                        </h1>
                        <h2 className="my-5 text-white/75 text-[clamp(16px,2.5vw,18px)] tracking-wider">Front-end Developer <span className="text-lime">/</span> UI/UX Engineer</h2>
                        <p className="mt-5 max-w-[510px] text-sm leading-[1.8] text-white/65 sm:text-[15px]">
                            I’m Aaron, a front-end developer with 7+ years of experience building thoughtful, responsive websites with Vue.js and Nuxt.js.
                        </p>
                        <div className="mt-7 flex flex-wrap items-center gap-7">
                            <a
                                href="#work"
                                className="group inline-flex items-center gap-7 rounded-full bg-lime px-5 py-3 text-[11px] font-semibold text-night transition-transform hover:-translate-y-0.5"
                            >
                                View my work <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                            </a>
                            <a href="#about" className="border-b border-white/35 pb-1 text-[11px] text-white/70 transition-colors hover:border-lime hover:text-lime">About me</a>
                        </div>
                    </div>

                    <div className="hidden md:block" aria-hidden="true" />
                    <a href="#work" className="absolute right-7 bottom-7 z-10 hidden items-center gap-3 text-[9px] uppercase tracking-[.25em] text-white/50 xl:flex">
                        Scroll to explore <span className="h-8 border-l border-white/35" />
                    </a>
                    </div>
                </section>

                <section id="skills" className="border-y border-white/10 bg-[#101314]">
                    <div className={`${frame} flex min-h-[68px] items-center gap-8 overflow-x-auto py-4`}>
                        <p className="shrink-0 text-[9px] uppercase tracking-[.25em] text-white/40">Technical stack</p>
                        <span className="h-7 border-l border-white/15" />
                        <div className="flex min-w-max items-center gap-7 text-[11px] text-white/75 sm:gap-9">
                            {toolkit.map((item) => (
                                <span key={item.name} className="flex items-center gap-2.5">
                                    {item.icon ? (
                                        <Image src={item.icon} alt="" aria-hidden="true" width={18} height={18} className="size-[18px] shrink-0 object-contain" />
                                    ) : (
                                        <MonitorSmartphone size={18} strokeWidth={1.7} className="shrink-0 text-white/80" aria-hidden="true" />
                                    )}
                                    {item.name}
                                </span>
                            ))}
                        </div>
                        <p className="ml-auto hidden shrink-0 text-right text-[8px] uppercase leading-[1.8] tracking-[.2em] text-white/35 lg:block">Modern tools<br />Thoughtful experiences</p>
                    </div>
                </section>

                <section id="work" className="py-11 sm:py-14">
                    <div className={frame}>
                        <div className="flex items-end justify-between gap-6">
                            <div>
                                <p className={eyebrow}>02 / Featured work <span className="text-lime">— {String(projects.length).padStart(2, "0")}</span></p>
                                <p className="mt-3 max-w-[650px] text-[11px] leading-[1.7] text-white/55">
                                    A selection of responsive commercial websites I implemented at Hostlink, working with supplied designs and collaborating with design and backend teams.
                                </p>
                            </div>
                            <div className="mb-1 flex shrink-0 items-center gap-2 max-sm:hidden">
                                <span className="mr-3 text-[9px] uppercase tracking-[.2em] text-white/40">{String(projects.length).padStart(2, "0")} projects</span>
                                <button onClick={() => moveProjects(-1)} disabled={projectsBeginning} className="grid size-10 place-items-center rounded-full border border-white/25 text-white/65 transition-colors hover:border-lime hover:text-lime disabled:cursor-not-allowed disabled:opacity-35" aria-label="Previous projects"><ArrowLeft size={16} /></button>
                                <button onClick={() => moveProjects(1)} disabled={projectsEnd} className="grid size-10 place-items-center rounded-full border border-lime text-lime transition-colors hover:bg-lime hover:text-night disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-lime" aria-label="Next projects"><ArrowRight size={16} /></button>
                            </div>
                        </div>
                    </div>

                    <SwiperCarousel
                        className="mt-8 !overflow-hidden !px-7 sm:!px-10 xl:!px-[max(calc((100vw-1488px)/2),56px)]"
                        modules={[A11y]}
                        slidesPerView={1.12}
                        spaceBetween={16}
                        breakpoints={{
                            640: { slidesPerView: 2.15, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 20 },
                        }}
                        grabCursor
                        watchOverflow={false}
                        a11y={{
                            containerRoleDescriptionMessage: "carousel",
                            containerMessage: "Selected portfolio projects",
                            slideLabelMessage: "{{index}} of {{slidesLength}}",
                            prevSlideMessage: "Previous project",
                            nextSlideMessage: "Next project",
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            setProjectsBeginning(swiper.isBeginning);
                            setProjectsEnd(swiper.isEnd);
                        }}
                        onSlideChange={(swiper) => {
                            setProjectsBeginning(swiper.isBeginning);
                            setProjectsEnd(swiper.isEnd);
                        }}
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={project.id} className="!h-auto">
                            <article data-reveal className="group h-full">
                                <button
                                    className="relative block aspect-[1.65/1] w-full overflow-hidden border border-white/10 bg-[#1c2021] text-left"
                                    onClick={(event) => { triggerRef.current = event.currentTarget; setSelected(project); }}
                                    aria-label={`Open ${project.short} project details`}
                                >
                                    <Image src={project.cover} alt={`${project.short} website project screenshot`} fill sizes="(max-width: 640px) 82vw, (max-width: 1024px) 44vw, 25vw" className="object-cover object-top transition duration-700 group-hover:scale-[1.04] group-hover:opacity-80" />
                                    <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5" />
                                    <span className="absolute top-3 left-3 text-[9px] uppercase tracking-[.18em] text-white/85">{String(index + 1).padStart(2, "0")} <span className="text-lime">/</span> {project.category}</span>
                                    <span className="absolute right-3 bottom-3 grid size-9 place-items-center rounded-full border border-white/55 bg-black/20 transition-colors group-hover:border-lime group-hover:bg-lime group-hover:text-night"><ArrowUpRight size={15} /></span>
                                </button>
                                <div className="mt-4 flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-editorial text-xl">{project.short}</h3>
                                        <p className="mt-1 text-[10px] text-white/45">{project.client}</p>
                                    </div>
                                    <span className="pt-1 text-[9px] uppercase tracking-[.13em] text-white/35">{project.tags[0]}</span>
                                </div>
                                <p className="mt-3 line-clamp-2 text-[11px] leading-[1.7] text-white/50">{project.description || "Responsive front-end implementation and interactive website experience."}</p>
                                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                                    {project.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 border-b border-white/20 pb-1 text-[9px] text-white/65 transition-colors hover:border-lime hover:text-lime">Visit website <ArrowUpRight size={11} /></a>)}
                                </div>
                            </article>
                            </SwiperSlide>
                        ))}
                    </SwiperCarousel>
                    <p className={`${frame} mt-1 text-[9px] text-white/35 sm:hidden`}>Swipe to explore all projects →</p>
                </section>

                <section id="about" className="border-y border-white/10 bg-[#101314] py-16 sm:py-20" data-reveal>
                    <div className={`${frame} grid grid-cols-[.8fr_1.2fr] gap-12 max-md:grid-cols-1 max-md:gap-8`}>
                        <div>
                            <p className={eyebrow}>02 / About & approach</p>
                            <h2 className={sectionTitle}>Code, design<br />and <span className="font-editorial italic text-lime">people.</span></h2>
                        </div>
                        <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
                            <div>
                                <p className="text-[15px] leading-[1.9] text-white/80">{profile.summary}</p>
                                <p className="mt-5 text-[12px] leading-[1.9] text-white/50">My earlier UI/UX and graphic design experience helps me work through design handoffs, responsive details and technical feasibility with care.</p>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <p className={eyebrow}>Education</p>
                                    <p className="mt-2 text-sm">Bachelor of Computing</p>
                                    <p className="mt-1 text-[11px] leading-[1.7] text-white/50">The Open University of Hong Kong<br />Sep 2015 – Jun 2018</p>
                                </div>
                                <div className="border-t border-white/10 pt-5">
                                    <p className={eyebrow}>Languages & eligibility</p>
                                    <p className="mt-2 text-[11px] leading-[1.9] text-white/65">Cantonese · Mandarin · English<br />Unrestricted right to work in the UK<br />Full UK Driving Licence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="experience" className="py-16 sm:py-20" data-reveal>
                    <div className={frame}>
                        <p className={eyebrow}>03 / Experience</p>
                        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
                            <h2 className={sectionTitle}>A background in<br /><span className="font-editorial italic text-lime">building for the web.</span></h2>
                            <p className="max-w-[360px] text-[11px] leading-[1.8] text-white/50">Front-end delivery, interaction, responsive implementation and thoughtful collaboration.</p>
                        </div>
                        <div>
                            {experience.map((job, index) => (
                                <article key={job.company} className="grid grid-cols-[.8fr_1.2fr] gap-10 border-t border-white/15 py-7 max-md:grid-cols-1 max-md:gap-5">
                                    <div>
                                        <p className={eyebrow}>0{index + 1} / {job.label}</p>
                                        <h3 className="mt-3 font-editorial text-2xl">{job.role}</h3>
                                        <p className="mt-2 text-[12px] text-white/65">{job.company}</p>
                                        <p className="mt-1 text-[10px] text-white/40">{job.dates}</p>
                                    </div>
                                    <ul className="space-y-2.5 text-[11px] leading-[1.8] text-white/60">
                                        {job.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-[7px] size-1 shrink-0 rounded-full bg-lime" />{point}</li>)}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="border-y border-white/10 bg-[#101314] py-16 sm:py-20" data-reveal>
                    <div className={frame}>
                        <p className={eyebrow}>04 / Skills & tools</p>
                        <h2 className={sectionTitle}>The tools behind <span className="font-editorial italic text-lime">the details.</span></h2>
                        <div className="mt-9 grid grid-cols-2 gap-x-10 gap-y-7 max-sm:grid-cols-1">
                            {skills.map((group, index) => (
                                <div key={group.name} className="border-t border-white/15 pt-4">
                                    <h3 className="text-[12px] font-medium"><span className="mr-3 font-editorial text-lime">0{index + 1}</span>{group.name}</h3>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {group.items.map((item) => <span key={item} className="rounded-full border border-white/15 px-3 py-1.5 text-[9px] text-white/60">{item}</span>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-16 sm:py-20" data-reveal>
                    <div className={`${frame} grid grid-cols-[1fr_auto] items-end gap-8 max-sm:grid-cols-1`}>
                        <div>
                            <p className={eyebrow}>05 / Get in touch</p>
                            <h2 className="mt-5 font-editorial text-[clamp(44px,8vw,92px)] leading-[.95] tracking-[-.05em]">Let’s make<br />something <span className="italic text-lime">matter.</span></h2>
                            <p className="mt-5 text-[11px] text-white/50">{profile.fullName} · {profile.location} · Open to opportunities</p>
                            <a href={`mailto:${profile.email}`} className="mt-6 inline-block break-all border-b border-lime pb-2 text-[clamp(16px,2.2vw,24px)] transition-colors hover:text-lime">{profile.email}</a>
                            <a href={`tel:${profile.phone.replaceAll(" ", "")}`} className="mt-4 block text-[12px] text-white/55 transition-colors hover:text-lime">{profile.phone}</a>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:max-w-[230px] sm:justify-end">
                            <a className="rounded-full border border-white/20 px-4 py-2.5 text-[10px] transition-colors hover:border-lime hover:text-lime" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                            <a className="rounded-full border border-white/20 px-4 py-2.5 text-[10px] transition-colors hover:border-lime hover:text-lime" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                            <a className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2.5 text-[10px] text-night transition-colors hover:bg-white" href="/Aaron_Liu_CV.docx" download>Download CV <Download size={13} /></a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className={`${frame} flex flex-wrap justify-between gap-3 border-t border-white/10 py-6 text-[9px] uppercase tracking-[.16em] text-white/35`}>
                <span>© {new Date().getFullYear()} Aaron Liu · Front-end Developer</span>
                <a href="#top" className="transition-colors hover:text-lime">Back to top ↑</a>
            </footer>

            {selected && (
                <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm" onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
                    <section ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="project-title" className="relative max-h-[92vh] w-full max-w-3xl overflow-auto border border-white/15 bg-[#111415] p-6 text-white sm:p-8">
                        <button ref={closeRef} className="absolute top-4 right-4 z-10 grid size-9 place-items-center rounded-full border border-white/25 bg-night/70 transition-colors hover:border-lime hover:text-lime" aria-label="Close project details" onClick={() => setSelected(null)}><X size={17} /></button>
                        <div className="relative mt-6 aspect-video overflow-hidden border border-white/10 bg-[#202324]">
                            <Image src={selected.cover} alt={`${selected.short} website`} fill sizes="(max-width: 768px) 90vw, 700px" className="object-cover object-top" />
                        </div>
                        <p className={`${eyebrow} mt-6`}>{selected.category} / Hostlink portfolio</p>
                        <h2 id="project-title" className="mt-2 font-editorial text-3xl">{selected.name}</h2>
                        <p className="mt-2 text-[11px] text-white/45">{selected.client}</p>
                        <p className="mt-5 text-[13px] leading-[1.8] text-white/75">{selected.description || "Responsive front-end implementation and interactive website experience."}</p>
                        <h3 className="mt-6 text-[11px] font-semibold">My contribution</h3>
                        <p className="mt-2 text-[11px] leading-[1.8] text-white/50">Front-end setup and implementation, Vue/Nuxt UI development, animations and responsive testing, in collaboration with designers and backend programmers. Visual designs were supplied; CMS connections and data processing were handled by backend programmers.</p>
                        <div className="mt-5 flex flex-wrap gap-2">{selected.tags.map((tag) => <span key={tag} className="rounded-full border border-white/15 px-3 py-1.5 text-[9px] text-white/65">{tag}</span>)}</div>
                        <div className="mt-6 flex flex-wrap gap-5">{selected.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-lime pb-1 text-[11px] text-lime">{link.label}<ArrowUpRight size={14} /></a>)}</div>
                    </section>
                </div>
            )}
        </div>
    );
}
