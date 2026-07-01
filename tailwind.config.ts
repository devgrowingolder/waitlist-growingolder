import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm egg-white canvas
        eggshell: "#FAF6EC",
        cream: "#FFFDF7",
        sand: "#ECE4D3",

        // Headway greens
        forest: "#0B663D",
        forestHover: "#084428",
        forestDeep: "#052E1B",
        leaf: "#13AA65",
        mint: "#E8F7F0",
        mintDeep: "#D0EEE0",

        // Warmth accents
        honey: "#E7B54A",
        honeySoft: "#F7EBCB",

        // Ink
        ink: "#1C1E1C",
        inkSoft: "#4A4E4B",
        inkMuted: "#7C807C",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "16px",
        sm: "10px",
        lg: "24px",
        xl: "32px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 2px 10px 0 rgba(11, 40, 25, 0.06)",
        card: "0 16px 44px -16px rgba(11, 40, 25, 0.18)",
        lift: "0 26px 70px -24px rgba(11, 40, 25, 0.28)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
}
export default config
