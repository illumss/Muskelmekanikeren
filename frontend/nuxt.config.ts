export default {
  axios: {
    baseURL: "http://localhost:5000/api",
  },

  target: "server",
  ssr: true,
  app: {
    baseURL: "/",
  },

  compatibilityDate: "2024-12-09",
  css: ["@/styles/global.css"],
};
