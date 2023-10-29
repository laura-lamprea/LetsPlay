import React from "react";
import { useSelector } from "react-redux";
import CardGame from "../../components/Card";
import Navbar from "../../components/Navbar";
import Filters from "../../components/Filters";
import BottomBar from "../../components/BottomBar";
import Footer from "../../components/Footer";
import AddIcon from "@mui/icons-material/Add";

const DashboardGames = () => {
	const { games } = useSelector((state) => state.useDashboard);
	return (
		<>
			<Navbar />
			<div className="m-120 p-10">
				<Filters />
				<div
					className={
						"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 pt-3 lg:px-40"
					}
				>
					{games?.map((game, index) => (
						<CardGame key={index} game={game} />
					))}
				</div>
			</div>
			<Footer />
			<BottomBar icon={<AddIcon />} path="create" />
		</>
	);
};

export default DashboardGames;
