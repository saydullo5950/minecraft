/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('./images/bg-image.jpg')"
      },
    },
  },
  plugins: [],
}

