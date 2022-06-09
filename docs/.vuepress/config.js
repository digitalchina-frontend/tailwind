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
      // TODO: close by far due to style chaos issue fix the purge issue by refer to https://v2.tailwindcss.com/docs/optimizing-for-production#removing-unused-css
      // require("@fullhuman/postcss-purgecss")({
      //   content: [ "./docs/**/*.md"],
      //   defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      // }),
    ],
  },
};
