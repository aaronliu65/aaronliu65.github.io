"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

type SiteHeaderProps = {
    email: string;
};

export default function SiteHeader({ email }: SiteHeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header
            data-intro="header"
            className="relative z-20 mx-auto w-full max-w-[1600px] px-4 sm:px-10 xl:px-14"
        >
            <div className="flex min-h-[72px] items-center justify-between __gap-5 border-b border-white/10">
                <div className="flex min-h-[72px] w-full items-center justify-between gap-8 border-white/10 pr-[2.5vw] min-sm:border-r max-sm:pr-0">
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
                            <div className="text-xs text-white/45">
                                Front-end Developer
                            </div>
                        </div>
                    </div>
                    <nav
                        aria-label="Main navigation"
                        className="flex items-center gap-7 text-[11px] text-white/70 max-md:gap-4 max-sm:hidden"
                    >
                        <a className="transition-colors hover:text-lime" href="#work">
                            Work
                        </a>
                        <a className="transition-colors hover:text-lime" href="#about">
                            About
                        </a>
                        <a className="transition-colors hover:text-lime" href="#experience">
                            Experience
                        </a>
                        <a className="transition-colors hover:text-lime" href="#skills">
                            Stack
                        </a>
                        <a className="transition-colors hover:text-lime" href="#contact">
                            Contact
                        </a>
                    </nav>
                    <button
                        type="button"
                        className="hidden size-10 items-center justify-center border border-white/15 text-white transition-colors hover:border-lime hover:text-lime max-sm:inline-flex max-sm:pr-0"
                        aria-label={
                            mobileMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setMobileMenuOpen((open) => !open)}
                    >
                        {mobileMenuOpen ? (
                            <X size={18} aria-hidden="true" />
                        ) : (
                            <Menu size={18} aria-hidden="true" />
                        )}
                    </button>
                </div>
                <a
                    className="flex items-center gap-8 text-[9px] uppercase tracking-[.18em] text-white/55 max-sm:hidden pl-[2.5vw] max-sm:pl-4"
                    href={`mailto:${email}`}
                >
                    <span className="size-1.5 min-w-[6px] rounded-full bg-lime" />
                    Open to opportunities
                </a>
            </div>
            <nav
                id="mobile-navigation"
                aria-label="Mobile navigation"
                aria-hidden={!mobileMenuOpen}
                className={`fixed inset-0 z-[70] hidden min-h-svh flex-col overflow-y-auto bg-night px-4 py-5 text-white transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none max-sm:flex ${mobileMenuOpen ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none translate-y-3 opacity-0"}`}
                onKeyDown={(event) => {
                    if (event.key === "Escape") setMobileMenuOpen(false);
                }}
            >
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                    <a
                        href="#top"
                        className="font-editorial text-[14px] tracking-[.22em]"
                        tabIndex={mobileMenuOpen ? 0 : -1}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        AARON LIU
                    </a>
                    <button
                        type="button"
                        className="grid size-10 place-items-center border border-white/15 text-white transition-colors hover:border-lime hover:text-lime"
                        aria-label="Close navigation menu"
                        tabIndex={mobileMenuOpen ? 0 : -1}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <X size={18} aria-hidden="true" />
                    </button>
                </div>
                <div className="flex flex-1 flex-col justify-center py-10">
                    {[
                        ["Work", "#work"],
                        ["About", "#about"],
                        ["Experience", "#experience"],
                        ["Stack", "#skills"],
                        ["Contact", "#contact"],
                    ].map(([label, href]) => (
                        <a
                            key={href}
                            className="border-b border-white/10 py-4 font-editorial text-3xl tracking-[-.03em] transition-colors hover:text-lime"
                            href={href}
                            tabIndex={mobileMenuOpen ? 0 : -1}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                </div>
                <a
                    className="flex items-center gap-3 border-t border-white/15 pt-5 text-[9px] uppercase tracking-[.18em] text-white/55"
                    href={`mailto:${email}`}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                >
                    <span className="size-1.5 rounded-full bg-lime" />
                    Open to opportunities
                </a>
            </nav>
        </header>
    );
}
