/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': 'hsl(0, 0%, 55%)',
        'very-dark-gray': 'hsl(0, 0%, 41%)',
      },
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      fontSize: {
        '15px': '15px',
      },
      height: {
        '26': '104px',
      },
      backgroundImage: {
        'hero': "url('/images/mobile/image-hero.jpg')",
        'curiosity': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-curiosity.jpg')",
        'deep-earth': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-deep-earth.jpg')",
        'fisheye': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-fisheye.jpg')",
        'from-above': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-from-above.jpg')",
        'grid': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-grid.jpg')",
        'night-arcade': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-night-arcade.jpg')",
        'pocket-borealis': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-pocket-borealis.jpg')",
        'soccer-team': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-soccer-team.jpg')",
      },
      letterSpacing: {
        'super-wide': '.4em',
      }
    },
  },
  plugins: [],
}

