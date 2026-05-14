/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F2F5F3",
        cream: "#F2F5F3",
        paper: "#FFFFFF",
        smoke: "#E6EDEA",
        mist: "#DCE6E2",
        sageSoft: "#CFE0D8",
        sage: "#3E715F",
        sageDark: "#245246",
        sageDeep: "#183A33",
        ink: "#141C1A",
        muted: "#4F615B",
        clay: "#A8644C",
        claySoft: "#EEDBD2",
        sand: "#AEBDB8",
        line: "#CAD5D1",
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
        content: "980px",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(20, 28, 26, 0.1)",
        card: "0 12px 32px rgba(20, 28, 26, 0.06)",
        lift: "0 24px 60px rgba(20, 28, 26, 0.1)",
        nav: "0 8px 32px rgba(20, 28, 26, 0.08)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
