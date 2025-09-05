module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Trust
        primary: {
          DEFAULT: "#1a1f36", // slate-800
          50: "#f8fafc", // slate-50
          100: "#f1f5f9", // slate-100
          200: "#e2e8f0", // slate-200
          300: "#cbd5e1", // slate-300
          400: "#94a3b8", // slate-400
          500: "#64748b", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1e293b", // slate-800
          900: "#0f172a", // slate-900
        },
        // Secondary Colors - Electric Innovation
        secondary: {
          DEFAULT: "#00ff88", // emerald-400
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
          200: "#a7f3d0", // emerald-200
          300: "#6ee7b7", // emerald-300
          400: "#34d399", // emerald-400
          500: "#10b981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065f46", // emerald-800
          900: "#064e3b", // emerald-900
        },
        // Accent Colors - Success Moments
        accent: {
          DEFAULT: "#ffa500", // orange-500
          50: "#fff7ed", // orange-50
          100: "#ffedd5", // orange-100
          200: "#fed7aa", // orange-200
          300: "#fdba74", // orange-300
          400: "#fb923c", // orange-400
          500: "#f97316", // orange-500
          600: "#ea580c", // orange-600
          700: "#c2410c", // orange-700
          800: "#9a3412", // orange-800
          900: "#7c2d12", // orange-900
        },
        // Background Colors
        background: "#ffffff", // white
        surface: "#f8fafc", // slate-50
        // Text Colors
        text: {
          primary: "#1a202c", // gray-800
          secondary: "#4a5568", // gray-600
        },
        // Status Colors
        success: {
          DEFAULT: "#38a169", // green-600
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          500: "#48bb78", // green-500
          600: "#38a169", // green-600
        },
        warning: {
          DEFAULT: "#ed8936", // orange-500
          50: "#fffaf0", // orange-50
          100: "#feebc8", // orange-100
          500: "#ed8936", // orange-500
          600: "#dd6b20", // orange-600
        },
        error: {
          DEFAULT: "#e53e3e", // red-500
          50: "#fed7d7", // red-100
          100: "#feb2b2", // red-200
          500: "#e53e3e", // red-500
          600: "#c53030", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#e2e8f0", // slate-200
          light: "#f1f5f9", // slate-100
        },
      },
      fontFamily: {
        // Headlines - Space Grotesk
        sans: ['Space Grotesk', 'sans-serif'],
        // Body Text - Inter
        body: ['Inter', 'sans-serif'],
        // Code/Technical - JetBrains Mono
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Responsive Typography Scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      boxShadow: {
        // Subtle depth for floating elements
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        // Deeper shadows for primary CTAs
        'strong': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        // Glow effect for special elements
        'glow': '0 0 20px rgba(0, 255, 136, 0.3)',
        'glow-accent': '0 0 20px rgba(255, 165, 0, 0.3)',
      },
      animation: {
        // Custom animations with proper timing
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        // Animation durations matching design system
        'fast': '200ms',
        'normal': '300ms',
        'slow': '400ms',
      },
      transitionTimingFunction: {
        // Custom easing functions
        'ease-out-custom': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out-custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        // Additional spacing values for precise layouts
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        // Custom border radius values
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        // Custom breakpoints for responsive design
        'xs': '475px',
        '3xl': '1600px',
      },
      zIndex: {
        // Z-index scale for layering
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    // Add any additional plugins here
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}