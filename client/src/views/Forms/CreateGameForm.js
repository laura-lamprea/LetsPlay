import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField, Box } from "@mui/material";
import { CreateGame } from "../../redux/actions/CreateGame";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import moment from "moment";
import useHandleGame from "../../hooks/useHandleGame";

const CreateGameForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { ObtainAllGames } = useHandleGame();
	const [form, setForm] = useState({
		country: "",
		city: "",
		sport: "",
		address: "",
		type: "",
		date: "",
		captain: "",
		total: "",
		price: "",
		picture: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formattedDate = moment(form.date).format("YYYY-MM-DDTHH:mm:ssZ");
		const formData = {
			...form,
			date: formattedDate,
			total: Number(form.total),
			price: Number(form.price),
		};
		dispatch(CreateGame(formData));
		ObtainAllGames();
	};

	return (
		<div style={customStyle}>
			<Box
				component="form"
				onSubmit={handleSubmit}
				noValidate
				style={{ width: "100%", padding: "30px", boxShadow: 24 }}
				className="shadow-lg"
			>
				<Dropdown
					name={"country"}
					value={form.country}
					onChange={handleChange}
					style={{ ...inputStyle }}
					type="country"
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="city"
					label="City"
					id="city"
					className="h-30"
					value={form.city}
					onChange={handleChange}
					size="small"
				/>
				<Dropdown
					name={"sport"}
					value={form.sport}
					onChange={handleChange}
					style={{ ...inputStyle }}
					type="sport"
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="address"
					label="Address"
					id="address"
					value={form.address}
					onChange={handleChange}
					size="small"
				/>
				<Dropdown
					name={"type"}
					value={form.type}
					onChange={handleChange}
					style={{ ...inputStyle }}
					type="type"
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="date"
					id="date"
					type="datetime-local"
					format="YYYY-MM-DDTHH:mm:ssZ"
					value={form.date}
					onChange={handleChange}
					size="small"
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="captain"
					label="Captain"
					id="captain"
					value={form.captain}
					onChange={handleChange}
					size="small"
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="total"
					label="Total"
					id="total"
					type="number"
					value={form.total}
					onChange={handleChange}
					size="small"
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="price"
					label="price"
					id="price"
					type="number"
					value={form.price}
					onChange={handleChange}
					size="small"
				/>
				<TextField
					margin="normal"
					fullWidth
					name="picture"
					label="picture"
					id="picture"
					value={form.picture}
					onChange={handleChange}
					size="small"
				/>
				{/* <input type="file" onChange={handleImageUpload} accept="image/*" /> */}
				<Button
					type="submit"
					fullWidth
					variant="outlined"
					sx={{ mt: 3, mb: 2 }}
				>
					Create
				</Button>
			</Box>
		</div>
	);
};

export default CreateGameForm;

const inputStyle = {
	height: "40px",
	marginTop: "18px",
};

const customStyle = {
	display: "flex",
	alignContent: "center",
	justifyContent: "center",
	maxWidth: "500px",
};
