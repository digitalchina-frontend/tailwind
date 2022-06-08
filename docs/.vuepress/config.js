module.exports = {
  base: "/tailwind/",
  title: "tailwind",
  description: "2d",
  serviceWorker: true,
  themeConfig: {},
  plugins: [],
  postcss: {
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
};
