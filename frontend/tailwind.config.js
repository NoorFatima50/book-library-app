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
        medium: "0 4px 25px rgba(0,0,0,0.1)",
        large: "0 10px 40px rgba(0,0,0,0.1)",
        glow: "0 0 20px rgba(78, 84, 200, 0.3)",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
