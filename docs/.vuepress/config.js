module.exports = {
  base: "/tailwind/",
  title: "tailwind",
  description: "2d",
  serviceWorker: true,
  themeConfig: {},
  plugins: [],
  postcss: {
    plugins: [
      require("tailwindcss"),
      require("autoprefixer"),
      require("@fullhuman/postcss-purgecss")({
        content: ["./docs/**/*.vue", "./docs/**/*.md"],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
    ],
  },
};
