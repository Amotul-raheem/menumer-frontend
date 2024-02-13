/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:
        {
            screens: {
                'mobile': {'min': '240px', 'max': '480px'},

                'mini-tablet': {'min': '481px', 'max': '768px'},

                'tablets': {'min': '769px', 'max': '1023px'},

                'laptops': {'min': '1024px', 'max': '1600px'},

                'Desktops': {'min': '1601px'},
            },
            fontFamily: {
                'outfit': ['Outfit', 'sans-serif'],
                'croissant': ['Croissant One', 'cursive'],
                'amaticSc': ['Amatic SC', 'cursive']

            },
            boxShadow: {
                'nav': '0px 4px 18px rgba(131, 151, 136, 0.15)',
                'button': '0px 8px 15px rgba(0, 0, 0, 0.4)',
                'input': '0px 1px 3px rgba(0, 0, 0, 0.1)',
                'box': '0px 3px 16px rgba(131, 151, 136, 0.15)',
                'tile': '0px 4px 14px rgba(131, 151, 136, 0.15)',
                'tile-hover': '4px 8px 20px rgba(150, 160, 138, 0.5)'
            },
            backgroundImage: {
                'comment': 'conic-gradient(from 1.1deg at 50% 38.62%, #F1F7ED -19.01deg, rgba(241, 247, 237, 0.662831) 2deg, rgba(241, 247, 237, 0) 85.69deg, rgba(241, 247, 237, 0.489074) 276.51deg, #F1F7ED 340.99deg, rgba(241, 247, 237, 0.662831) 362deg)'
            }
        },

  },
  plugins: [],
}
