module.exports = {
  base: "/tailwindcss/",
  title: "tailwindcss",
  description: "2d",
  serviceWorker: true,
  themeConfig: {},
  plugins: [],
  postcss: {
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
};
