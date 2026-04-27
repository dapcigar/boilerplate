import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        muted: '#64748b',
      },
    },
  },
  plugins: [],
} satisfies Config;
