module.exports = {
  content: ['./src/**/*.{html,js,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#2BB672',
        backgroundColor: '#FAFAFF',
        
      },
      backgroundImage: {
        
      },
      boxShadow: {
        cardShadow: "0 0 0 31px rgba(0,0,0,0.5)"
      },
      spacing: {
        '5px': '5px',
        '10px': '10px',
        '14px': '14px',
        '15px': '15px',
        '18px': '18px',
        '20px': '20px',
        '25px': '25px',
        '30px': '30px',
        '35px': '35px',
        '40px': '40px',
        '45px': '45px',
        '47px': '47x',
        '50px': '50px',
        '55px': '55px',
        '60px': '60px',
        '65px': '65px',
        '70px': '70px',
        '75px': '75px',
        '80px': '80px',
        '85px': '85px',
        '90px': '90px',
        '95px': '95px',
        '100px': '100px',
        '106px': '106px',
        '120px': '120px',
        unset: 'unset',
      },
      fontFamily: {
        montserrat: 'var(--montserrat)',
      },
      fontSize: {
        13: '13px',
        16: '16px',
        18: '18px',
        26: '26px',
        32: '32px',
        36: '36px',
        48: '48px',
        95: '95px',
        unset: 'unset',
      },
      lineHeight: {
        unset: 'unset',
        Normal: 'normal',
      },
      zIndex: {
        1: '9',
        2: '99',
        3: '999',
        4: '9999',
        5: '99999',
        6: '999999',
      },
      borderRadius: {
        '10px': '10px',
        '15px': '15px',
        '20px': '20px',
        '30px': '30px',
        '35px': '35px',
        '37px': '37px',
        '50px': '50px',
      },
      screens: {
        768: '768px',
        992: '992px',
        1200: '1200px',
        1300: '1300px',
        1400: '1400px',
        1500: '1500px',
        1600: '1600px',
        1700: '1700px',
      },
      animation: {
        slow: 'wiggle 2s linear',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'transform(164.25px)' },
          '100%': { transform: 'rotate(0px)' },
        },
      },
    },
  },
}