import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class", "dark"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        quicksand: ['Quicksand',  'SF Pro Display', 'sans-serif'],
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-accent))",
          foreground: "hsl(var(--color-secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent))",
          dark: "hsl(var(--color-accent-dark))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--color-light))",
          foreground: "hsl(var(--color-tertiary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--color-dark))",
          foreground: "hsl(var(--color-muted-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--color-warning))",
          foreground: "hsl(var(--color-warning-foreground))",
        },
        white: {
          DEFAULT: "hsl(var(--color-white))",
          foreground: "hsl(var(--color-white-foreground))",
        },
        banner: {
          DEFAULT: "hsl(var(--color-banner))",
          foreground: "hsl(var(--color-banner-foreground))",
        },
        border: {
          DEFAULT: "hsl(var(--color-border-primary))",
          light: "hsl(var(--color-border-light))",
          lighter: "hsl(var(--color-border-lighter))",
          lightest: "hsl(var(--color-border-lightest))",
          accent: "hsl(var(--color-border-accent))",
        },
        dark: {
          DEFAULT: "hsl(var(--color-dark))",
        },
        footer: {
          DEFAULT: "hsl(var(--color-dark))",
          foreground: "hsl(var(--color-white-foreground))",
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
      },      
    },
  },
  plugins: [animate],
};

export default config;
