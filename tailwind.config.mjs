/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F4F8F8",
        paper: "#FFFFFF",
        smoke: "#E7F0F1",
        mist: "#DCE9EA",
        ink: "#10272D",
        muted: "#405A60",
        sage: "#2F6F66",
        sageDark: "#0F3D3E",
        sageSoft: "#C9DEDE",
        clay: "#B05F45",
        claySoft: "#F0D9CF",
        sand: "#9FB3B5",
        line: "#C7D3D4",
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
