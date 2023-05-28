/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'3': "url('src/assets/3.jpg')",
			  },
		  },
		container: {
			center: true,
		},
	},
	plugins: [],
};
