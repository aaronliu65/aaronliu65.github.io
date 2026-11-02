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
            "JavaScript",
            "LESS",
            "Bootstrap",
            "Element UI",
            "Flickity",
            "i18n",
            "YAML",
            "Fancyapps (Panzoom)",
        ],
        description:
            "Built the responsive bilingual HKFA website from designer-provided layouts, implementing front-end pages and interactions for news, fixtures, results and league tables.",
        contribution:
            "Implemented every website page, front-end interaction logic and visual effects from designer-supplied layouts. Built reusable Vue components for recurring competition content, using conditional rendering and props to handle layout variations and make future API integration straightforward. Managed Traditional Chinese and English translations with i18n and YAML files, added Flickity sliders for news and fixtures/results, built the front-end presentation for league tables, and added Panzoom controls for shop image zoom. Also handled responsive layouts, cross-browser compatibility and image compression. Programmers handled the API, database, CMS for client content updates, and shopping functionality.",
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
            "Vue 3",
            "vue3-sfc-loader",
            "i18n",
            "YAML",
            "fullPage.js",
            "Tailwind CSS",
            "PostCSS CLI",
            "Swiper",
            "Fancyapps (Fancybox)",
            "Smooth Scrollbar",
        ],
        description:
            "Implemented a bilingual property website from designer-provided layouts, with full-page scrolling, image galleries and a digital sales brochure.",
        contribution:
            "Independently handled the full front end, translating designer-supplied layouts for a client-requested static HTML delivery while developing the interface with Vue 3. Managed language support with i18n and YAML translation files, and used vue3-sfc-loader to compile Vue single-file components at runtime. Structured the experience around fullPage.js and used Tailwind CSS compiled through PostCSS CLI with postcss-nesting. Implemented image galleries with Swiper, image pop-ups with Fancybox, and a customised scrollbar experience with Smooth Scrollbar, alongside clubhouse, landscape and project-media sections.",
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
        client: "Harbour City",
        tags: [
            "Nuxt.js",
            "Vue.js",
            "JavaScript",
            "Tailwind CSS",
            "Swiper",
            "i18n",
            "YAML",
            "Font Awesome",
            "AOS",
            "Animate.css",
            "DaisyUI",
        ],
        description:
            "Built the Harbour City Office website from designer-provided layouts, with office listings, floor plans, transport information and leasing enquiries.",
        contribution:
            "Built the website from the ground up based on designer-supplied layouts using Nuxt, Vue, JavaScript, Tailwind CSS, Swiper, i18n, YAML translation files and Font Awesome. Implemented front-end presentation for the office portfolio, floor plans and specifications, transport routes and journey times, and the Experience page's Lifestyle, Dining, Living and Revelling sections. Independently developed the Experience page front end and its Animate.css/JavaScript effects; also designed and implemented animations for the Office and Access pages. Built the Enquiries form interface with DaisyUI. The programmer-built CMS lets the client update website content.",
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
            "Animate.css",
            "Swiper",
            "i18n",
            "YAML",
            "Fancyapps Panzoom",
            "Smooth Scrollbar",
        ],
        description:
            "Led the front-end build of Delight Terrace from tender designer layouts, creating an interactive trilingual property website with location, school, transport, floor-plan and media sections.",
        contribution:
            "Led the front-end implementation from the ground up, working directly with the tender designer to discuss website behaviour and the feasibility of translating layouts into a functioning website. Managed Traditional Chinese, Simplified Chinese and English translations with i18n and YAML files. Built interactive sections for location and transport, school networks, design features, floor plans and the media bank. Built with Nuxt.js and Vue.js, using fullPage.js for full-page navigation, Animate.css for effects, Swiper for galleries, Fancyapps Panzoom for image zoom and drag-to-pan, and Smooth Scrollbar for a customised scrollbar. Developed reusable components with conditional rendering and props. Programmers handled the API, database, CMS for client content updates, sales information and form functionality.",
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
            "i18n",
            "YAML",
            "FormKit",
            "Smooth Scrollbar",
            "Swiper",
            "Fancyapps Fancybox",
            "Animate.css",
            "Plyr.js",
        ],
        description:
            "Built a trilingual property-sales front end with language-aware sales-information routes, image galleries and booking forms.",
        contribution:
            "Built the front end from tender designer layouts using Nuxt.js and Vue.js. Managed Traditional Chinese, Simplified Chinese and English translations with i18n and YAML files, keeping page-specific copy separate and shared strings in global.yml. Implemented Sales Information with a shared layout and dynamic paths that preserve the selected language and resolve the different brochure and price-list file paths. Built booking and other form interfaces with FormKit, image galleries with Swiper, full-screen image viewing with Fancyapps Fancybox, video presentation with Plyr.js, effects with Animate.css, and customised scrolling with Smooth Scrollbar. Programmers handled APIs, databases, CMS for client content updates, sales data and form processing.",
        links: [
            {
                label: "Eminence Terrace I",
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
            "i18n",
            "YAML",
            "FormKit",
            "Smooth Scrollbar",
            "Swiper",
            "Fancyapps Fancybox",
            "Animate.css",
            "Plyr.js",
        ],
        description:
            "Built a trilingual property-sales front end with language-aware sales-information routes, image galleries and booking forms.",
        contribution:
            "Built the front end from tender designer layouts using Nuxt.js and Vue.js. Managed Traditional Chinese, Simplified Chinese and English translations with i18n and YAML files, keeping page-specific copy separate and shared strings in global.yml. Implemented Sales Information with a shared layout and dynamic paths that preserve the selected language and resolve the different brochure and price-list file paths. Built booking and other form interfaces with FormKit, image galleries with Swiper, full-screen image viewing with Fancyapps Fancybox, video presentation with Plyr.js, effects with Animate.css, and customised scrolling with Smooth Scrollbar. Programmers handled APIs, databases, CMS for client content updates, sales data and form processing.",
        links: [
            {
                label: "Sierra Terrace I",
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
    // {
    //     id: "08",
    //     name: "Oria",
    //     short: "Oria",
    //     category: "Property",
    //     client: "Hip Shing Hong",
    //     tags: [
    //         "Nuxt.js", 
    //         "Vue.js", 
    //         "Swiper"
    //     ],
    //     description:
    //         "Developed responsive bilingual property-sales pages with full-screen section navigation, interactive presentation and video content.",
    //     links: [{ label: "Visit website", url: "https://oria.hk/en" }],
    //     colour: "bg-[#a3c0d6] text-[#295576]",
    //     cover: "/images/projects/oria.png",
    // },
    {
        id: "09",
        name: "Sutton",
        short: "Sutton",
        category: "Property",
        client: "K & K Property",
        tags: [
            "Nuxt.js",
            "Vue.js",
            "JavaScript",
            "i18n",
            "YAML",
            "Swiper",
            "Fancyapps Fancybox",
            "AOS",
            "Animate.css",
            "Canvas",
        ],
        description:
            "Built the Sutton front end from tender designer layouts, creating a trilingual property website with interactive galleries, scroll effects and a custom Living Circle video treatment.",
        contribution:
            "Built the front end from the ground up based on tender designer layouts, discussing website behaviour and layout-to-web feasibility with the design team. Developed with Nuxt.js and Vue.js, managing Traditional Chinese, Simplified Chinese and English translations with i18n and YAML files. Used Swiper for galleries and selected page content, Fancyapps Fancybox to enlarge selected images in a full-screen view, and AOS, Animate.css and JavaScript for page effects. Canvas was used only for the Living Circle video on the Transportation page to remove its background colour and prevent browser-specific colour mismatches; other imagery used PNGs. The programmer-built CMS lets the client update website content.",
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
            "HTML Canvas",
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
            "i18n / YAML translation files",
            "Git / GitHub",
            "Branching & merging",
            "GitHub Actions — development-server deployment",
        ],
    },
    {
        name: "Quality & collaboration",
        items: [
            "Chrome, Microsoft Edge (Windows) & Safari support",
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
            "Worked in a small business with a two-person front-end team, independently owning the front-end delivery of each assigned project across 30+ commercial websites.",
            "Started Nuxt projects from scratch, configuring the front end and installing packages such as Tailwind CSS and Swiper to meet project requirements.",
            "Translated approved designs into responsive Vue/Nuxt pages, discussing feasibility with designers and recommending practical changes.",
            "Built reusable Vue components where layouts allowed, and used props and conditional logic to handle page-specific variations; also created custom animations and interactive behaviours.",
            "Worked with programmers responsible for APIs, databases and CMS development; the CMS lets clients update content on dynamic websites. Selected reusable components according to each project's layout needs.",
            "Implemented language support across assigned websites with i18n and YAML translation files, with the supported languages varying by project.",
            "Supported common Hong Kong site languages—Traditional Chinese, Simplified Chinese and English—and tested browser compatibility for Chrome, Microsoft Edge on Windows and Safari.",
            "Validated CMS-managed content and repeatedly tested layouts, interactions and forms across desktop, tablet and mobile.",
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
