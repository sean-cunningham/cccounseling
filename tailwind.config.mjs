/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}",
    // Required so @apply(...) in CSS picks up custom theme utilities (e.g. bg-canvas) under JIT
    "./src/**/*.css",
  ],
  // Ensures utilities used only via @apply in CSS resolve under Astro/Vite + Tailwind JIT
  safelist: ["bg-canvas", "ring-offset-canvas"],
  theme: {
    extend: {
      colors: {
        /** Cool page shell (between sections) — Wix-style off-white, not warm beige */
        canvas: "#F2F5F3",
        paper: "#FFFFFF",
        smoke: "#E4EBE6",
        mist: "#DDE5E0",
        /** Legacy name: subtle cool tint if referenced; prefer canvas/smoke */
        cream: "#E8EFEA",
        ink: "#141C1A",
        muted: "#55635C",
        sageDark: "#1A3D32",
        sage: "#2F6D52",
        sageSoft: "#BFD9CC",
        clay: "#A84832",
        claySoft: "#EEE6E2",
        sand: "#A8B4AE",
        line: "#94A39B",
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
        soft: "0 18px 45px rgba(20, 40, 32, 0.09)",
        card: "0 12px 32px rgba(20, 40, 32, 0.07)",
        lift: "0 24px 60px rgba(20, 40, 32, 0.12)",
        nav: "0 8px 32px rgba(20, 40, 32, 0.09)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
