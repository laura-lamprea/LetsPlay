import React from "react";
import { useSelector } from "react-redux";

const DashboardGames = () => {
	const { games } = useSelector((state) => state.useDashboard);
	console.log(games);
	return <h1 className="text-3xl font-bold underline">este es el dashboard</h1>;
};

export default DashboardGames;
