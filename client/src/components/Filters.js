import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import { FilterCountry, FilterDate } from "../redux/actions/Filters";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import useHandleGame from "../hooks/useHandleGame";

export default function SearchAppBar() {
	const dispatch = useDispatch();
	const { ObtainAllGames } = useHandleGame();
	const [country, setCountry] = useState("");
	const [date, setDate] = useState("");

	const handleCountryChange = (e) => {
		setCountry(e.target.value);
		dispatch(FilterCountry(e.target.value));
	};
	const handleDateChange = (e) => {
		setDate(e.target.value);
		dispatch(FilterDate(e.target.value));
	};
	const handleCleanFilters = () => {
		ObtainAllGames();
	};

	return (
		<div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:pt-100 p-10">
			<Dropdown
				name={"country"}
				value={country}
				onChange={handleCountryChange}
				type="country"
			/>
			<TextField
				margin="normal"
				fullWidth
				name={"date"}
				type="date"
				value={date}
				onChange={handleDateChange}
			/>

			<Button
				variant="outlined"
				onClick={(e) => {
					handleCleanFilters(e);
				}}
			>
				Clean filters
			</Button>
		</div>
	);
}
