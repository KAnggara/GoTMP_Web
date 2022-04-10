module.exports = {
	content: [
		"./resources/**/*.blade.php",
		"./resources/**/*.js",
		"./resources/**/*.vue",
	],
	theme: {
		container: {
			center: true,
			padding: "30px",
		},
		extend: {
			dropShadow: {
				"3xl": "0 50px 50px rgba(0, 0, 0, 0.25)",
			},
			colors: {
				javascript: "#F7DF1E",
				secondary: "#64748b",
				primary: "#0ea5e9",
				react: "#61DAFB",
				mysql: "#4479A1",
				mongo: "#47A248",
				dark: "#0f172a",
				node: "#339933",
				html: "#E34F26",
				php: "#777BB4",
				css: "#1572B6",
			},
			screen: {
				"2xl": "1320px",
			},
		},
	},
	plugins: [],
};
