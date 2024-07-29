/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'Testimonial': "url('./assets/images/wavy1.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
    plugins: [],
  }
