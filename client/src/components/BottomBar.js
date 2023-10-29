import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function BottomBar({ path = "/", icon = <ArrowBackIcon /> }) {
	const navigate = useNavigate();
	const handleCreateClick = () => {
		navigate(path);
	};
	return (
		<React.Fragment>
			<CssBaseline />
			<Paper square sx={{ pb: "10px" }}></Paper>
			<AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
				<Toolbar>
					<StyledFab
						color="secondary"
						aria-label="create"
						onClick={handleCreateClick}
					>
						{icon}
					</StyledFab>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

const StyledFab = styled(Fab)({
	position: "absolute",
	zIndex: 1,
	top: -30,
	left: 0,
	right: 0,
	margin: "0 auto",
});
