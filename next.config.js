const withAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    images: {
        domains: ["i.pravatar.cc"],
    },
};

module.exports = withAnalyzer(config);
