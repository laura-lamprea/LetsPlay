/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{html,js}"],
	
	theme: {
		extend: {
			fontfamily: {
				display: ["Fredoka One", ...defaultTheme.fontFamily.sans],
				// display: ["Like Snow"],
				// display: ['Oswald']
			},
			colors: {
				primary: '#91C8E4',
				secondary: '#749BC2',
				accent: '#4682A9',
				surface: '#F1F3F5',
				white: '#F6F4EB',
			},
		},
	},
	plugins: [],
};
