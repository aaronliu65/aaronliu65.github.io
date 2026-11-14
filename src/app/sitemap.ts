import type { MetadataRoute } from "next";
import { projects } from "../data/portfolio";

export const dynamic = "force-static";

const siteUrl = "https://aaronliu65.github.io/aaronliu_portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
        ...projects.filter((project) => project.caseStudy).map((project) => ({
            url: `${siteUrl}${project.caseStudy}/`,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
    ];
}
