/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: { black: "#2f2f2f", smoke: "#f6f6f6", light_orange: "#ffcb74" },
		},
		screens: {
			mobile: "480px",
			tablet: "860px",
			// => @media (min-width: 640px) { ... }

			laptop: "1024px",
			// => @media (min-width: 1024px) { ... }

			desktop: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
		fontSize: {
			"1xl": "1.5rem",
			"2xl": "2rem",
			"3xl": "3rem",
			"4xl": "4em",
			"5xl": "5rem",
			"6xl": "6rem",
			"7xl": "7rem",
		},
	},
	plugins: [require("flowbite/plugin")],
};
