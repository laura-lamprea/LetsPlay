import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
