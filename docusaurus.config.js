// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Glific",
    tagline: "An open source two way communication platform",
    url: "https://glific.github.io",
    baseUrl: `/${process.env.BASE_URL ? process.env.BASE_URL : ""}`,
    customFields: {
        baseUrlRedirect: process.env.BASE_URL,
    },
    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "ignore",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "glific", // Usually your GitHub org/user name.
    projectName: "docs",
    deploymentBranch: "gh-pages",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/glific/docs/tree/main",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig: {
        navbar: {
            title: "Glific",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "doc",
                    docId: "intro",
                    position: "left",
                    label: "Documentation",
                },
                {
                    to: "https://glific.org/blogs",
                    label: "Blogs",
                    position: "left",
                },
                {
                    href: "https://github.com/glific",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Documentation",
                            to: "/docs/Introduction",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Stack Overflow",
                            href: "https://stackoverflow.com/questions/tagged/glific",
                        },
                        {
                            label: "Discord",
                            href: "https://discord.gg/rcBxTA4wnf",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Blog",
                            to: "https://glific.org/blogs",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/glific",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Glific, Inc. Built with Docusaurus.`,
        },

        // ...
        algolia: {
            // The application ID provided by Algolia
            appId: process.env.ALGOLIA_APP_ID,

            // Public API key: it is safe to commit it
            apiKey: process.env.ALGOLIA_API_KEY,

            indexName: process.env.ALGOLIA_INDEX_NAME,

            // Optional: see doc section below
            contextualSearch: true,

            // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            // externalUrlRegex: "external\\.com|domain\\.com",

            // Optional: Algolia search parameters
            searchParameters: {},

            // Optional: path for search page that enabled by default (`false` to disable it)
            searchPagePath: "search",

            //... other Algolia params
        },
    },
};

module.exports = config;
