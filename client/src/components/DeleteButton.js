import React from "react";
import { useDispatch } from "react-redux";
import { DeleteGame } from "../redux/actions/DeleteGame";
import useHandleGame from "../hooks/useHandleGame";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = ({ game_id }) => {
	const dispatch = useDispatch();
	const { ObtainAllGames } = useHandleGame();
	const handleClick = () => {
		dispatch(DeleteGame(game_id)).then(() => {
			ObtainAllGames();
		});
	};
	return (
		<Button
			variant="outlined"
			size="small"
			color="error"
			onClick={() => handleClick()}
			startIcon={<DeleteIcon />}
		>
			Delete
		</Button>
	);
};

export default DeleteButton;
