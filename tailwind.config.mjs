/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2a30",
        muted: "#647078",
        accent: "#4f6b78",
        mist: "#eef2f4",
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        display: ['"Outfit"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "980px",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(31, 42, 48, 0.08), 0 12px 48px -12px rgba(31, 42, 48, 0.12)",
        nav: "0 8px 32px -8px rgba(31, 42, 48, 0.1)",
        card: "0 1px 0 rgba(31, 42, 48, 0.06), 0 12px 40px -16px rgba(31, 42, 48, 0.08)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
