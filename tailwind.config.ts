import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      colors: {
        // Page & Surface
        'bg': 'hsl(var(--bg))',
        'surface': 'hsl(var(--surface))',
        'card-bg': 'hsl(var(--card))',
        
        // Typography
        'text': 'hsl(var(--text))',
        'text-heading': 'hsl(var(--text-heading))',
        'text-muted': 'hsl(var(--text-muted))',
        'text-placeholder': 'hsl(var(--text-placeholder))',
        
        // Accents
        'accent': 'hsl(var(--accent))',
        'accent-dot': 'hsl(var(--accent-dot))',
        'accent-soft': 'hsl(var(--accent-soft))',
        
        // Interactive
        'input-bg': 'hsl(var(--input-bg))',
        'badge-bg': 'hsl(var(--badge-bg))',
        'pill-bg': 'hsl(var(--pill-bg))',
        
        // Legacy shadcn support
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: {
        // Custom spacing system using 8px base unit
        '18': '4.5rem',  // 72px
        '22': '5.5rem',  // 88px
        '26': '6.5rem',  // 104px
        '30': '7.5rem',  // 120px
        
        // Layout specific
        'profile': 'var(--profile-width)',
        'profile-min': 'var(--profile-min)',
        'profile-max': 'var(--profile-max)',
        'content-max': 'var(--content-max)',
      },
      maxWidth: {
        'content': 'var(--content-max)',
      },
      minWidth: {
        'profile': 'var(--profile-min)',
      },
      width: {
        'profile': 'var(--profile-width)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      fontSize: {
        // Responsive typography scale
        'hero-xl': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],      // 64px desktop
        'hero-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],       // 48px tablet  
        'hero-md': ['2rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],      // 32px mobile
        
        'accent-xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],     // 48px accent line desktop
        'accent-lg': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 36px tablet
        'accent-md': ['1.625rem', { lineHeight: '1.3' }],                          // 26px mobile
        
        'location-xl': ['2.625rem', { lineHeight: '1.15' }],                       // 42px desktop
        'location-lg': ['2rem', { lineHeight: '1.2' }],                            // 32px tablet
        'location-md': ['1.5rem', { lineHeight: '1.3' }],                          // 24px mobile
        
        'profile-name': ['1.75rem', { lineHeight: '1.2', fontWeight: '700' }],     // 28px
        'stats': ['1.75rem', { lineHeight: '1.1', fontWeight: '600' }],            // 28px stats numbers
        'stats-sm': ['1.375rem', { lineHeight: '1.2', fontWeight: '600' }],        // 22px tablet
      },
      boxShadow: {
        'card': 'var(--card-shadow)',
        'hover': 'var(--hover-lift)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--ease-smooth)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
