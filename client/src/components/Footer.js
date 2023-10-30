import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Footer = () => {
	return (
		<div
			className="text-center px-6 py-4"
			style={{
				bottom: 0,
				left: 0,
				right: 0,
				height: "50px",
			}}
		>
			<a
				href="https://github.com/laura-lamprea"
				target="_blank"
				rel="noopener noreferrer"
				className="mr-2"
				title="My Github"
			>
				<GitHubIcon />
			</a>
			<a
				href="https://www.linkedin.com/in/lauralamprea/"
				target="_blank"
				rel="noopener noreferrer"
				title="My LinkedIn"
			>
				<LinkedInIcon />
			</a>
			<a
				href="https://github.com/laura-lamprea/LetsPlay"
				target="_blank"
				rel="noopener noreferrer"
				title="Source"
			>
				<ArrowOutwardIcon />
			</a>
		</div>
	);
};

export default Footer;
