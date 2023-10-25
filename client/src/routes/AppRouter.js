import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardGames from "../views/Pages/DashboardGames";
import CreateGamePage from "../views/Pages/CreateGamePage";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DashboardGames />} />
				<Route path="/create" element={<CreateGamePage />} />
				{/* <Route path="info" element={<GameInformation />} /> */}

				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
