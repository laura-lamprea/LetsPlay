import React, { useState, useEffect } from "react";
import { MenuItem, Select } from "@mui/material";
import { optionsMock } from "../mocks/data";

const Dropdown = ({ name, value, type, onChange, style }) => {
	const [options, setOptions] = useState([]);
	useEffect(() => {
		setOptions(optionsMock[type] || []);
	}, []);
	return (
		<Select
			required
			fullWidth
			variant="outlined"
			name={name}
			value={value}
			onChange={onChange}
			autoComplete="off"
			placeholder="Select a country"
			displayEmpty={false}
			style={{ marginTop: "9px", ...style }}
		>
			<MenuItem value="" disabled>
				Select {type}
			</MenuItem>
			{options.map((option, index) => {
				return (
					<MenuItem value={option} key={index}>
						{option}
					</MenuItem>
				);
			})}
		</Select>
	);
};

export default Dropdown;
