import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./routes/AppRouter.js";
import { GetAllGames } from "./redux/actions/GetAllGames.js";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(GetAllGames()).then(() => setIsLoading(false));
	}, [dispatch]);

	return !isLoading ? <AppRouter /> : null;
};

export default App;
