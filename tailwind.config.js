/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'dark-gray': 'hsl(0, 0%, 55%)',
        'very-dark-gray': 'hsl(0, 0%, 41%)',
      },
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        'curiosity': "url('/images/mobile/image-curiosity.jpg')",
        'deep-earth': "url('/images/mobile/image-deep-earth.jpg')",
        'fisheye': "url('/images/mobile/image-fisheye.jpg')",
        'from-above': "url('/images/mobile/image-from-above.jpg')",
        'grid': "url('/images/mobile/image-grid.jpg')",
        'hero': "url('/images/mobile/image-hero.jpg')",
        'night-arcade': "url('/images/mobile/image-night-arcade.jpg')",
        'pocket-borealis': "url('/images/mobile/image-pocket-borealis.jpg')",
        'soccer-team': "url('/images/mobile/image-soccer-team.jpg')",
      }
    },
  },
  plugins: [],
}

