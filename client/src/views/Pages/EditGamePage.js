import React from "react";
import EditGameForm from "../Forms/EditGameForm";
import BottomBar from "../../components/BottomBar";
import { useSelector } from "react-redux";

const EditGamePage = () => {
	const { game } = useSelector((state) => state.useDashboard);
	return (
		<div style={customStyle}>
			<EditGameForm initial={game} />
			<BottomBar />
		</div>
	);
};

export default EditGamePage;

const customStyle = {
	display: "flex",
	alignContent: "center",
	justifyContent: "center",
	marginTop: "30px",
};

