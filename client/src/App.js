import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppRouter from "./routes/AppRouter.js";
// import { getUserByEmail } from "./redux/actionsRedux/auth.js";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(getUserByEmail(payload)).then(() => setIsLoading(false));
		setIsLoading(false);
	}, []);

	return !isLoading ? <AppRouter /> : null;
};

export default App;
