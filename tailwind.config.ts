import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B5563",
          50: "#E6F3F5",
          100: "#CCE7EB",
          200: "#99CFD7",
          300: "#66B7C3",
          400: "#339FAF",
          500: "#0B5563",
          600: "#094750",
          700: "#073A3D",
          800: "#052C2A",
          900: "#021E1B",
        },
        accent: {
          DEFAULT: "#F26522",
          light: "#F5834A",
          dark: "#C4501A",
        },
        success: "#16A34A",
        body: "#475569",
        heading: "#0F172A",
        muted: "#94A3B8",
        border: "#E2E8F0",
        surface: "#F8FAFC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        section: "6rem",
        "section-mobile": "4rem",
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        "card-hover": "0 4px 16px 0 rgb(0 0 0 / 0.10), 0 2px 6px -1px rgb(0 0 0 / 0.08)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#475569",
            a: { color: "#0B5563" },
            h1: { color: "#0F172A" },
            h2: { color: "#0F172A" },
            h3: { color: "#0F172A" },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
