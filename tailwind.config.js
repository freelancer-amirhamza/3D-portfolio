
/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily:{
        primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        box: "0px 35px 120px -10px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes:{
        upDown: {
          '0%, 100%': { transform: 'translateY(-25px)'},
          '50%': { transform: 'translateY(25px)' },
        },
        rightToLeft:{
          '0%':{
            transform: 'translateX(-10px)',
            opacity: "0.5"
          },
          '100%':{
            transform: 'translateX(10px)',
            opacity: "1"
          }
        }
        
      },
      animation: {
        upDown: 'upDown 4s ease-in-out infinite',
        rightToLeft: 'rightToLeft 3s ease-in-out infinity'
      }
    },
  },
  plugins: [],
};