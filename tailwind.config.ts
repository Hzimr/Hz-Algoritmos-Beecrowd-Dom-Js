import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryColor: {
          primary: '#65558f',
          on: '#ffffff',
          container: '#eaddff',
          onContainer: '#21005d',
        },
        buttonListColor: {
          1: '#1abc9c',
          2: '#F3A01B',
          3: '#52AF18',
          4: '#E74D3E',
          5: '#8F8372',
          6: '#9B59B6',
          7: '#EF6EA3',
          8: '#34495E',
          9: '#1F78A2',
        },
      },
    },
  },
  plugins: [],
}
export default config
