import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "on-primary": "#ffffff",
        "surface-tint": "#5e5e5e",
        "inverse-surface": "#313030",
        "surface-container-lowest": "#ffffff",
        "secondary-container": "#dddddd",
        "on-surface-variant": "#4c4546",
        "surface-bright": "#fcf9f8",
        outline: "#7e7576",
        background: "#fcf9f8",
        "on-tertiary-container": "#e05814",
        "primary-fixed": "#e2e2e2",
        tertiary: "#000000",
        "surface-variant": "#e5e2e1",
        "surface-container": "#f0eded",
        "surface-container-low": "#f6f3f2",
        primary: "#000000",
        secondary: "#5d5f5f",
        "surface-container-highest": "#e5e2e1",
        "surface-dim": "#dcd9d9",
        surface: "#fcf9f8",
        "on-surface": "#1c1b1b",
        "primary-container": "#1b1b1b",
        "on-background": "#1c1b1b",
        "outline-variant": "#cfc4c5",
        "inverse-on-surface": "#f3f0ef",
        "surface-container-high": "#eae7e7"
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px"
      },
      spacing: {
        unit: "8px",
        "container-max": "1440px",
        gutter: "24px",
        "margin-desktop": "64px",
        "margin-mobile": "20px"
      },
      fontFamily: {
        anton: ["var(--font-anton)", "Anton", "sans-serif"],
        hanken: ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "headline-lg": ["64px", { lineHeight: "110%", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "160%", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "120%", fontWeight: "400" }],
        "headline-sm": ["20px", { lineHeight: "140%", letterSpacing: "0.1em", fontWeight: "800" }],
        "display-hero": ["96px", { lineHeight: "100%", letterSpacing: "0.02em", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "100%", letterSpacing: "0.2em", fontWeight: "700" }],
        "headline-lg-mobile": ["48px", { lineHeight: "110%", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "160%", fontWeight: "400" }]
      }
    }
  },
  plugins: []
};

export default config;
