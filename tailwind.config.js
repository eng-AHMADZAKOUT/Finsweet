/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // يشمل جميع ملفات HTML
    './js/*.js',   // يشمل جميع ملفات JavaScript
    './css/*.css',  // يشمل جميع ملفات CSS
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // إضافة خط Poppins
      },
    },
  },
  plugins: [],
};

