import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Open Sans"],
		},
		extend: {
			// Additional font sizes without line heights
			fontSize: {
				1: "1rem",
				1.25: "1.25rem",
			},
			colors: {
				gray: {
					b: colors.gray["400"],
				},
				select: {
					200: colors.sky["200"],
					600: colors.sky["600"],
				},
			},
		},
	},
	plugins: [],
};

