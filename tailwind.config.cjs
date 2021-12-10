const config = {
  // mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('daisyui')
  ],
};

module.exports = config;
