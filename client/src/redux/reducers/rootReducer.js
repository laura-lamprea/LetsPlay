import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";

const appReducer = combineReducers({
	useDashboard: dashboardReducer,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
