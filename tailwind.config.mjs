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
        cream: "rgb(var(--color-cream) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        smoke: "rgb(var(--color-smoke) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        sage: "rgb(var(--color-sage) / <alpha-value>)",
        sageDark: "rgb(var(--color-sage-dark) / <alpha-value>)",
        sageSoft: "rgb(var(--color-sage-soft) / <alpha-value>)",
        clay: "rgb(var(--color-clay) / <alpha-value>)",
        claySoft: "rgb(var(--color-clay-soft) / <alpha-value>)",
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        mist: "rgb(var(--color-mist) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
      },
      maxWidth: {
        site: "1200px",
        wide: "1360px",
        text: "720px",
        narrow: "900px",
        /** Legacy / inner pages — prefer `site` or `wide` for new layout */
        content: "980px",
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
