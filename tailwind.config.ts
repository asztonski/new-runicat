import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": "var(--font-roboto)",
        "lato": "var(--font-lato)",
        "raleway": "var(--font-raleway)",
        "runic": "var(--font-runic)",
      },
      colors: {
        primary: "var(--color-primary)",
        grey: "var(--color-grey)",
      },
    },
  },
  plugins: [],
}
export default config
