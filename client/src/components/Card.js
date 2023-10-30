import React from "react";
import FieldImg from "../assets/img/FieldImg.jpg";
import moment from "moment";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const CardGame = ({ game }) => {
	return (
		<div className="grid grid-cols-1 bg-white rounded-xl m-3">
			<img
				src={game.picture || FieldImg}
				alt="Imagen de la tarjeta"
				className="w-full h-auto rounded-xl rounded-b-none"
			/>
			<div className="p-4">
				<div className="md:flex justify-between">
					<h2 className="font-semibold">
						{game.address}, {game.city}
					</h2>
					<h2 className="font-semibold">
						{moment.utc(game.date).format("HH:mm")}
					</h2>
				</div>
				<div className="md:flex justify-between">
					<p className="text-sm text-gray-500">{game.type}</p>
					<p className="text-sm text-gray-500 ">
						{game.current}/{game.total} <AccessibilityIcon />
					</p>
				</div>
				<p className="text-xs">with {game.captain}</p>
				<div className="flex justify-between mt-3">
					<DeleteButton game_id={game.id} />
					<EditButton game_id={game.id} />
				</div>
			</div>
		</div>
	);
};

export default CardGame;
