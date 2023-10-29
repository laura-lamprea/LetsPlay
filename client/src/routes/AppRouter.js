import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardGames from "../views/Pages/DashboardGames";
import CreateGamePage from "../views/Pages/CreateGamePage";
import EditGamePage from "../views/Pages/EditGamePage";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DashboardGames />} />
				<Route path="/create" element={<CreateGamePage />} />
				<Route path="/edit" element={<EditGamePage />} />
				{/* <Route path="info" element={<GameInformation />} /> */}

				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
