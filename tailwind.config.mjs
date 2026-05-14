/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F5F8FA",
        cream: "#F5F8FA",
        paper: "#FFFFFF",
        smoke: "#DCE4E8",
        mist: "#D0D8DD",
        sageSoft: "#9DB2BE",
        ink: "#1F2A30",
        muted: "#384850",
        sage: "#435E6D",
        sageDark: "#2C4250",
        sageDeep: "#1F2A30",
        clay: "#8B5E4A",
        claySoft: "#E8DCD5",
        sand: "#B8C5CC",
        line: "#D0D8DD",
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
        soft: "0 18px 45px rgba(31, 42, 48, 0.1)",
        card: "0 12px 32px rgba(31, 42, 48, 0.06)",
        lift: "0 24px 60px rgba(31, 42, 48, 0.1)",
        nav: "0 8px 32px rgba(31, 42, 48, 0.08)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
