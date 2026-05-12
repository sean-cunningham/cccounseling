/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}",
    // Required so @apply(...) in CSS picks up custom theme utilities (e.g. bg-cream) under JIT
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F1",
        paper: "#FFFDF8",
        ink: "#263238",
        muted: "#66746C",
        sage: "#5F7F6A",
        sageDark: "#3F5F4A",
        sageSoft: "#E8EFE8",
        clay: "#B9785F",
        claySoft: "#F0DDD4",
        sand: "#E8D8C3",
        mist: "#EEF2EF",
        line: "#DED4C6",
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
      },
      maxWidth: {
        site: "1200px",
        wide: "1320px",
        text: "680px",
        narrow: "860px",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(38, 50, 56, 0.08)",
        card: "0 12px 32px rgba(38, 50, 56, 0.06)",
        lift: "0 24px 60px rgba(38, 50, 56, 0.10)",
        nav: "0 8px 32px rgba(38, 50, 56, 0.08)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
