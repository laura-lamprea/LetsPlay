import React from "react";
import CreateGameForm from "../Forms/CreateGameForm";
import BottomBar from "../../components/BottomBar";

const CreateGamePage = () => {
	return (
		<div style={customStyle}>
			{/* <div className="flex shadow-lg p-7 m-8"> */}
			<CreateGameForm />
			<BottomBar />
		</div>
	);
};

export default CreateGamePage;

const customStyle = {
	display: "flex",
	alignContent: "center",
	justifyContent: "center",
	marginTop: "30px",
};
