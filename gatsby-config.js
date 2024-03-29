module.exports = {
    plugins: [
        {
            resolve: require.resolve(`./gatsby-theme-portfolio-minimal`),
            options: {
                // siteUrl: "https://example.com", // Used for sitemap generation
                manifestSettings: {
                    favicon: './content/images/root-labs.jpg', // Path is relative to the root
                    siteName: 'caRoh', // Used in manifest.json
                    shortName: 'caRoh', // Used in manifest.json
                    startUrl: '/', // Used in manifest.json
                    backgroundColor: '#FFFFFF', // Used in manifest.json
                    themeColor: '#000000', // Used in manifest.json
                    display: 'minimal-ui', // Used in manifest.json
                },
                contentDirectory: './content',
                blogSettings: {
                    path: '/blog', // Defines the slug for the blog listing page
                    usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
                },
                googleAnalytics: {
                    trackingId: "UA-197563814-1",
                    anonymize: true, // Default true
                    environments: ["production", "development"] // Default ["production"]
                }
            },
        },
    ],
};