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
        'desktop': '650px',
      },
      backgroundImage: {
        'hero-mobile': "url('/images/mobile/image-hero.jpg')",
        'curiosity-mobile': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-curiosity.jpg')",
        'deep-earth-mobile': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-deep-earth.jpg')",
        'fisheye-mobile': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-fisheye.jpg')",
        'from-above-mobile': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-from-above.jpg')",
        'grid-mobile': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-grid.jpg')",
        'night-arcade-mobile': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-night-arcade.jpg')",
        'pocket-borealis-mobile': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-pocket-borealis.jpg')",
        'soccer-team-mobile': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/mobile/image-soccer-team.jpg')",
        'hero-desktop': "linear-gradient(to right, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/desktop/image-hero.jpg')",
        'curiosity-desktop': "linear-gradient(to top, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/desktop/image-curiosity.jpg')",
        'deep-earth-desktop': "linear-gradient(to top, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/desktop/image-deep-earth.jpg')",
        'fisheye-desktop': "linear-gradient(to top, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/desktop/image-fisheye.jpg')",
        'from-above-desktop': "linear-gradient(to top, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/desktop/image-from-above.jpg')",
        'grid-desktop': "linear-gradient(to top, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/desktop/image-grid.jpg')",
        'night-arcade-desktop': "linear-gradient(to top, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/desktop/image-night-arcade.jpg')",
        'pocket-borealis-desktop': "linear-gradient(to top, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/desktop/image-pocket-borealis.jpg')",
        'soccer-team-desktop': "linear-gradient(to top, hsla(0, 0%, 0%, 50%), hsla(0, 0%, 100%, 0%)), url('/images/desktop/image-soccer-team.jpg')",
      },
      letterSpacing: {
        'super-wide': '.4em',
      },
    },
  },
  plugins: [],
}

