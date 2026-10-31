import { convertFlightRouterStateToRouteTree } from "next/dist/client/components/segment-cache/cache";

export const profile = {
    name: "Aaron Liu",
    fullName: "Hin Tung Liu (Aaron)",
    role: "Front-end Developer",
    location: "Harpenden, UK",
    email: "aaron.in.uk.614@gmail.com",
    phone: "+44 7435 017688",
    github: "https://github.com/aaronliu65",
    linkedin: "https://www.linkedin.com/in/aaronliu65/",
    summary:
        "Front-end Developer with 7+ years of commercial website experience, specialising in Vue.js, Nuxt.js, JavaScript and responsive UI development. I translate designer-supplied concepts into functional websites, build reusable components and collaborate with backend programmers to validate CMS-driven content.",
};
export const projects = [
    {
        id: "01",
        name: "Hong Kong Football Association",
        short: "HKFA",
        category: "Commercial",
        client: "Hong Kong Football Association",
        tags: [
            "Nuxt.js", 
            "Vue.js", 
            "Element UI", 
            "Swiper"
        ],
        description:
            "Developed bilingual responsive front-end pages for news, competition information and multi-section navigation, implementing supplied designs for fans and stakeholders.",
        links: [{ label: "Visit website", url: "https://www.hkfa.com/" }],
        colour: "bg-[#fac9c9] text-[#980918]",
        cover: "/images/projects/hkfa.png",
    },
    {
        id: "02",
        name: "The Haddon",
        short: "The Haddon",
        category: "Property",
        client: "Henderson Land",
        tags: [
            "Vue.js", 
            "DaisyUI", 
            "fullPage.js", 
            "Swiper", 
        ],
        description:
            "Implemented an interactive bilingual property website with full-page scrolling, image galleries and a digital sales brochure (flipbook).",
        links: [
            { label: "Visit website", url: "https://www.thehaddon.com.hk/en/" },
        ],
        colour: "bg-[#e8c4bc] text-[#9d2509]",
        cover: "/images/projects/thehaddon.png",
    },
    {
        id: "03",
        name: "Harbour City Office",
        short: "Harbour City",
        category: "Commercial",
        client: "Carbour City",
        tags: [
            "Nuxt.js", 
            "Vue.js", 
            "AOS", 
            "Swiper", 
            "DaisyUI", 
            "Animate.css"
        ],
        description:
            "Built responsive front-end pages with scroll-triggered visual effects, office galleries, location information and leasing-enquiry UI.",
        links: [
            {
                label: "Visit website",
                url: "https://www.office.harbourcity.com.hk/",
            },
        ],
        colour: "bg-[#dce1e7] text-[#2c3d50]",
        cover: "/images/projects/harbourcity.png",
    },
    {
        id: "04",
        name: "Delight Terrace",
        short: "Delight Terrace",
        category: "Property",
        client: "Hong Kong Housing Society",
        tags: [
            "Nuxt.js",
            "Vue.js",
            "fullPage.js",
            "Fancyapps (Panzoom)",
            "Swiper",
            "Animate.css",
        ],
        description:
            "Created a bilingual property-sales front end with full-page scrolling, section navigation, residential development details and responsive layouts.",
        links: [
            {
                label: "Visit website",
                url: "https://delightterrace.hkhs.com/en/",
            },
        ],
        colour: "bg-[#e4e8df] text-[#394633]",
        cover: "/images/projects/delightterrace.png",
    },
    {
        id: "05",
        name: "Eminence Terrace I",
        short: "Eminence Terrace I",
        category: "Property",
        client: "Hong Kong Housing Society",
        tags: [
            "Nuxt.js",
            "Vue.js",
            "Plyr.js",
            "Swiper",
            "Animate.css",
            "Fancyapps (Fancybox)",
        ],
        description:
            "Built bilingual property-sales website front ends with responsive layouts and video content presentation.",
        links: [
            {
                label: "Visit website",
                url: "https://eminenceterrace1.hkhs.com/en",
            },
        ],
        colour: "bg-[#A8C9C2] text-[#40534f]",
        cover: "/images/projects/eminenceterrace1.png",
    },
    {
        id: "06",
        name: "Sierra Terrace I",
        short: "Sierra Terrace I",
        category: "Property",
        client: "Hong Kong Housing Society",
        tags: [
            "Nuxt.js",
            "Vue.js",
            "Plyr.js",
            "Swiper",
            "Animate.css",
            "Fancyapps (Fancybox)",
        ],
        description:
            "Built bilingual property-sales website front ends with responsive layouts and video content presentation.",
        links: [
            {
                label: "Visit website",
                url: "https://sierraterrace.hkhs.com/en/",
            },
        ],
        colour: "bg-[#BEDBE5] text-[#495e65]",
        cover: "/images/projects/sierraterrace.png",
    },
    // {
    //     id: "07",
    //     name: "UNI Residence",
    //     short: "UNI Residence",
    //     category: "Property",
    //     client: "Wing Tai Asia",
    //     tags: [
    //         "Nuxt.js", 
    //         "Vue.js", 
    //         "fullpage.js", 
    //         "Swiper"
    //     ],
    //     description:
    //         "Implemented responsive bilingual property-sales pages with full-screen section navigation and interactive presentation.",
    //     links: [
    //         { label: "Visit website", url: "https://www.uniresidence.hk/en" },
    //     ],
    //     colour: "bg-[#dcc3ad] text-[#856140]",
    //     cover: "/images/projects/uniresidence.png",
    // },
    {
        id: "08",
        name: "Oria",
        short: "Oria",
        category: "Property",
        client: "Hip Shing Hong",
        tags: [
            "Nuxt.js", 
            "Vue.js", 
            "Swiper"
        ],
        description:
            "Developed responsive bilingual property-sales pages with full-screen section navigation, interactive presentation and video content.",
        links: [{ label: "Visit website", url: "https://oria.hk/en" }],
        colour: "bg-[#a3c0d6] text-[#295576]",
        cover: "/images/projects/oria.png",
    },
    {
        id: "09",
        name: "Sutton",
        short: "Sutton",
        category: "Property",
        client: "K & K Property",
        tags: [
            "Nuxt.js", 
            "Vue.js", 
            "AOS", 
            "Swiper"
        ],
        description: "",
        links: [{ label: "Visit website", url: "https://sutton.hk/" }],
        colour: "bg-[#bedcc4] text-[#1e2c21]",
        cover: "/images/projects/sutton.png",
    },
    // {
    //     id: "10",
    //     name: "Wan Fau Sin Koon",
    //     short: "Wan Fau Sin Koon",
    //     category: "NGO",
    //     client: "N/A",
    //     tags: [
    //         "Wordpress"
    //     ],
    //     description: "",
    //     links: [
    //         { label: "Visit website", url: "https://www.wanfausinkoon.com.hk" },
    //     ],
    //     colour: "bg-[#c9d1c0] text-[#576745cc]",
    //     cover: "/images/projects/wanfausinkoon.png",
    // },
];
export const skills = [
    {
        name: "Front-end development",
        items: [
            "JavaScript (ES6+)",
            "Vue.js",
            "Nuxt.js",
            "HTML5",
            "CSS3",
            "jQuery",
        ],
    },
    {
        name: "UI & components",
        items: [
            "Reusable Vue components",
            "Composition API",
            "Props & reactive state",
            "Tailwind CSS",
            "DaisyUI",
            "Bootstrap",
        ],
    },
    {
        name: "Interaction & media",
        items: [
            "Custom animations & transitions",
            "Swiper",
            "fullPage.js",
            "AOS",
            "Plyr.js",
            "Form UI & validation",
            "FormKit",
            "Element UI",
            "Fancyapps",
            "Animate.css",
        ],
    },
    {
        name: "Tools & workflow",
        items: [
            "npm",
            "Git / GitHub",
            "Branching & merging",
            "GitHub Actions — development-server deployment",
        ],
    },
    {
        name: "Quality & collaboration",
        items: [
            "Responsive & cross-browser testing",
            "CMS content validation",
            "Lighthouse",
            "Basic SEO & accessibility",
            "Design handoff",
        ],
    },
];
export const experience = [
    {
        role: "Senior Website Designer",
        company: "Hostlink Limited Company",
        dates: "Apr 2018 – Jun 2025",
        label: "Core front-end experience",
        points: [
            "Took primary ownership of front-end development for 30+ commercial websites across property sales, corporate, e-commerce and organisational sites.",
            "Started Nuxt projects from scratch, configuring the front end and installing packages such as Tailwind CSS and Swiper to meet project requirements.",
            "Translated approved designs into responsive Vue/Nuxt pages, discussing feasibility with designers and recommending practical changes.",
            "Built reusable, data-driven Vue components, custom animations, visual effects and interactive behaviours.",
            "Coordinated with backend programmers on CMS requirements and content presentation; backend programmers handled CMS connections and data processing.",
            "Validated CMS-managed content and repeatedly tested layouts, interactions and forms across desktop, tablet, mobile and browsers.",
            "Used Git and GitHub Actions to support automated development-server deployments, retaining previous versions for recovery.",
            "Applied metadata, sitemaps, image optimisation and Lighthouse checks, and collaborated with clients and tender teams.",
        ],
    },
    {
        role: "Warehouse Operative / Admin",
        company: "Sainsbury’s (Agency)",
        dates: "Nov 2025 – Present",
        label: "Additional employment",
        points: [
            "Support pick-list and work-order administration, monitor daily issues and liaise across departments.",
            "Received a Recognizing Excellence / Employee of the Month award for identifying and resolving a potential order-processing issue.",
        ],
    },
    {
        role: "UI/UX & Graphic Designer",
        company: "PowerMew Technology Limited Company",
        dates: "Jun 2016 – Jun 2017",
        label: "Design background",
        points: [
            "Designed UI/UX for web and mobile applications, producing wireframes, user flows, mock-ups and interactive prototypes.",
            "Created branding and digital marketing assets using Adobe Photoshop and Illustrator.",
        ],
    },
];
