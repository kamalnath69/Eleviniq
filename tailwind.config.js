/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-', // Adds "tw-" prefix to all Tailwind classes
	important: false, // If true, will apply Tailwind styles with !important
	content: [
	  "**/*.{html,jsx,js}", // Scan all HTML, JSX, and JS files in your project
	  "**/*.js", // Also scan all JS files
	  "**/*.html", // Also scan all HTML files
	],
	darkMode: 'class', // Enables manual dark mode using class (use "dark" class to enable dark mode)
	theme: {
	  extend: {
		colors: {
		  'custom-light': '#e2dada', // Example of adding a custom color (light mode)
		  'custom-dark': '#000000',  // Example of adding a custom color (dark mode)
		},
		fontFamily: {
		  poly: ['"poly"', "serif"], // Example of adding a custom font family
		},
	  },
	},
	plugins: [
	  function({ addVariant }) {
		addVariant('firefox', ':-moz-any(&)'); // Custom variant for Firefox
	  }
	],
  }
  