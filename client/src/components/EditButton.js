import React from "react";
import { useDispatch } from "react-redux";
import { GetGame } from "../redux/actions/GetGame";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditButton = ({ game_id }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleClick = () => {
		dispatch(GetGame(game_id)).then(() => {
			navigate("/edit");
		});
	};
	return (
		<Button
			variant="contained"
			onClick={() => handleClick()}
			startIcon={<EditIcon />}
		>
			Edit
		</Button>
	);
};

export default EditButton;
