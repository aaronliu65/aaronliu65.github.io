import Image from "next/image";

const caption = "mt-3 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[1.4px] text-muted";

export function HeroImages() {
    return (
        <div className="mt-12 grid grid-cols-[1.65fr_1fr] items-start gap-5 max-sm:grid-cols-1 max-sm:gap-7" aria-label="Selected website previews">
            <figure className="group">
                <a href="#work" className="relative block aspect-[16/9] overflow-hidden bg-[#dce1e7]">
                    <Image src="/images/projects/harbourcity.png" alt="Harbour City Office website with a waterfront skyline" fill sizes="(max-width: 640px) 88vw, 55vw" className="object-cover object-top transition-transform duration-700 motion-safe:group-hover:scale-[1.03]" />
                    <span className="absolute right-4 bottom-4 grid size-10 place-items-center rounded-full bg-paper text-ink" aria-hidden="true">↗</span>
                </a>
                <figcaption className={caption}><span>Harbour City Office</span><span>01 / Commercial</span></figcaption>
            </figure>
            <figure className="group mt-14 max-sm:mt-0">
                <a href="#work" className="relative block aspect-[4/3] overflow-hidden bg-[#dce6e3]">
                    <Image src="/images/projects/oria.png" alt="ORIA website, featuring a green coastal landscape" fill sizes="(max-width: 640px) 88vw, 34vw" className="object-cover object-[70%_35%] transition-transform duration-700 motion-safe:group-hover:scale-[1.03]" />
                </a>
                <figcaption className={caption}><span>ORIA</span><span>02 / Property</span></figcaption>
            </figure>
        </div>
    );
}

export function SkillsImages() {
    return (
        <figure className="mb-12 grid grid-cols-[1.35fr_1fr] overflow-hidden bg-[#eae7df] max-md:grid-cols-1">
            <div className="relative min-h-[340px] overflow-hidden p-8 max-sm:min-h-[260px] max-sm:p-5">
                <div className="relative aspect-video w-[94%] overflow-hidden rounded-lg border border-white/70 bg-paper shadow-xl">
                    <Image src="/images/projects/hkfa.png" alt="Hong Kong Football Association homepage showing navigation and fixtures" fill sizes="(max-width: 768px) 80vw, 45vw" className="object-cover object-top" />
                </div>
                <div className="absolute right-5 bottom-5 h-[55%] w-[38%] overflow-hidden rounded-lg border-4 border-paper bg-paper shadow-xl" aria-hidden="true">
                    <Image src="/images/projects/hkfa.png" alt="" fill sizes="(max-width: 768px) 35vw, 20vw" className="object-cover object-[65%_bottom]" />
                </div>
            </div>
            <figcaption className="flex flex-col justify-center p-9 max-sm:p-6">
                <span className="text-[10px] uppercase tracking-[1.6px] text-muted">Interface details / HKFA</span>
                <h3 className="mt-5 font-editorial text-4xl leading-tight italic">A whole experience.<br />Every small detail.</h3>
                <p className="mt-5 max-w-sm text-sm leading-[1.8] text-muted">Navigation, content and reusable UI components, brought together in a responsive front end.</p>
                <span className="mt-7 text-[10px] uppercase tracking-wider text-muted">Homepage screenshot & enlarged detail</span>
            </figcaption>
        </figure>
    );
}

export function AboutImages() {
    return (
        <figure className="mt-12">
            <div className="group relative aspect-[21/8] overflow-hidden bg-[#203025] max-sm:aspect-[4/3]">
                <Image src="/images/projects/sutton.png" alt="Sutton website featuring an architectural interior and editorial typography" fill sizes="(max-width: 1440px) 88vw, 1260px" className="object-cover object-center transition-transform duration-700 motion-safe:group-hover:scale-[1.025]" />
            </div>
            <figcaption className={caption}><span>Sutton / A detail from my website work</span><a href="#work" className="shrink-0 border-b border-line pb-1 hover:text-accent">Explore the work ↗</a></figcaption>
        </figure>
    );
}
