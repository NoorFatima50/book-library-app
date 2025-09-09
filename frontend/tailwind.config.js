module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            DEFAULT: "#4e54c8", // indigo gradient start
            dark: "#3f46a3",
            light: "#6e70f1",
          },
          accent: {
            DEFAULT: "#ffcc00",
            light: "#ffdd33",
            dark: "#d4a900",
          },
          surface: {
            DEFAULT: "#ffffff",
            muted: "#f5f7fb",
          },
          text: {
            DEFAULT: "#111827",
            muted: "#6b7280",
          },
        },
      },
      boxShadow: {
        soft: "0 4px 15px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
