/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern color palette
        primary: {
          DEFAULT: '#0F172A',    // Dark blue-gray
          light: '#1E293B',      // Lighter shade
          dark: '#020617',       // Darker shade
        },
        secondary: {
          DEFAULT: '#7C3AED',    // Purple
          light: '#8B5CF6',      // Lighter purple
          dark: '#6D28D9',       // Darker purple
        },
        accent: {
          DEFAULT: '#EC4899',    // Pink
          light: '#F472B6',      // Lighter pink
          dark: '#DB2777',       // Darker pink
        },
        neutral: {
          light: '#F8FAFC',      // Light gray
          DEFAULT: '#E2E8F0',    // Medium gray
          dark: '#94A3B8',       // Dark gray
        },
        success: '#10B981',      // Green
        warning: '#F59E0B',      // Yellow
        error: '#EF4444',        // Red
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'neon': '0 0 10px theme("colors.secondary.DEFAULT"), 0 0 20px theme("colors.secondary.DEFAULT")',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'gradient-y': 'gradient-y 8s ease infinite',
        'gradient-xy': 'gradient-xy 8s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
