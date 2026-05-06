/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],
  theme: {
    extend: {
        animation: {
            'progress-smooth': 'progress 2s ease-in-out infinite',
        },
        keyframes: {
            progress: {
                '0%': { transform: 'translateX(-100%)' },
                '100%': { transform: 'translateX(100%)' },
            }
        }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
