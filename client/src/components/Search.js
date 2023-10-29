import React, { useState } from "react";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Searching } from "../redux/actions/Filters";
import { useDispatch } from "react-redux";

export default function SearchAppBar() {
	const [search, setSearch] = useState("");
    const dispatch = useDispatch();

	const handleInputChange = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(Searching(search));
		setSearch("");
		console.log("handleSubmit");
	};

	// onChange={(e) => handleInputChange(e)}

	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder="Search by city or address"
				inputProps={{ "aria-label": "search" }}
				onChange={(e) => handleInputChange(e)}
				value={search}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleSubmit(e);
					}
				}}
			/>
		</Search>
	);
}

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "24ch",
			"&:focus": {
				width: "32ch",
			},
		},
	},
}));
