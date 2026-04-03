import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        brand: ['"Fraunces"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'serif'],
        // Standard mappings for easy implementation
        display: ['"Fraunces"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-dark': 'var(--bg-dark)',
        'accent-gold': 'var(--accent-gold)',
        'accent-gold-light': 'var(--accent-gold-light)',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        'border-warm': 'var(--border)',
        'card-bg': 'var(--card-bg)',
        // Legacy references
        border: "var(--border)",
        input: "hsl(var(--input, 0 0% 90%))",
        ring: "var(--accent-gold)",
        background: "var(--bg-primary)",
        foreground: "var(--text-primary)",
        primary: {
          DEFAULT: "var(--accent-gold)",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "var(--bg-secondary)",
          foreground: "var(--text-primary)",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "var(--card-bg)",
          foreground: "var(--text-primary)",
        },
        card: {
          DEFAULT: "var(--card-bg)",
          foreground: "var(--text-primary)",
        },
        gold: '#C8861A',
        'gold-light': '#F0B84B',
        ink: '#1C1208',
        cream: '#FFFBF5',
        saffron: '#F0B84B',
        muted: '#6B5744',
        walnut: '#1C1208',
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      boxShadow: {
        'card': '0 4px 24px rgba(200,134,26,0.10)',
        'card-hover': '0 8px 40px rgba(200,134,26,0.18)',
        'nav': '0 2px 16px rgba(0,0,0,0.06)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-tag": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.7" },
          "50%": { transform: "translateY(-20px)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "float-tag": "float-tag 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
