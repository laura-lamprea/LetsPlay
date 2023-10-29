import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<p style={{ marginLeft: "10px" }}>Lamprea &copy; {currentYear}</p>
		</footer>
	);
};

export default Footer;
