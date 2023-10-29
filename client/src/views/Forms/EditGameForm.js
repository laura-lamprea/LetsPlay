import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField, Box, Alert } from "@mui/material";
import { UpdateGame } from "../../redux/actions/UpdateGame";
import Dropdown from "../../components/Dropdown";
import useHandleGame from "../../hooks/useHandleGame";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const EditGameForm = ({ initial }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [alert, setAlert] = useState(null);
	const { ObtainAllGames } = useHandleGame();
	const [form, setForm] = useState({
		country: initial.country,
		city: initial.city,
		sport: initial.sport,
		address: initial.address,
		type: initial.type,
		date: initial.date,
		captain: initial.captain,
		total: initial.total,
		price: initial.price,
		picture: initial.picture,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validate = isValidated();
		if (validate) {
			const formattedDate = moment(form.date).format("YYYY-MM-DDTHH:mm:ssZ");
			const formData = {
				...form,
				date: formattedDate,
				total: Number(form.total),
				price: Number(form.price),
			};
			const sendData = {
				body: formData,
				game_id: initial.id,
			};
			dispatch(UpdateGame(sendData))
				.then(() => {
					setAlert({
						type: "success",
						message: "Updated successfully!",
					});
					ObtainAllGames();
					navigate("/");
					setTimeout(() => {
						setAlert(null);
					}, 2000);
				})
				.catch(() => {
					setAlert({ type: "error", message: "Error updating event." });
				});
		}
	};

	const isValidated = () => {
		const errors = {};
		if (form.country === "") errors.country = "Country cannot be empty";
		if (form.city === "") errors.city = "City cannot be empty";
		if (form.sport === "") errors.sport = "Sport cannot be empty";
		if (form.address === "") errors.address = "Address cannot be empty";
		if (form.type === "") errors.type = "Type cannot be empty";
		if (form.date === "") errors.date = "Date cannot be empty";
		if (form.captain === "") errors.captain = "Captain cannot be empty";
		if (
			form.captain !== "" &&
			(form.captain.length < 3 || form.captain.length > 20)
		)
			errors.captain = "Captain's name must be valid, between 3-20 characters";

		const isNumeric = (value) => !isNaN(value) && isFinite(value);
		if (form.total === "" || !isNumeric(Number(form.total)))
			errors.total = "Total members cannot be empty and must be a number";
		if (form.price === "" || !isNumeric(Number(form.price)))
			errors.price = "Price cannot be empty and must be a number";

		const urlRegex =
			/^(https?:\/\/)?[a-z0-9-]+(\.[a-z0-9-]+)+(:\d+)?(\/\S*)?\.(jpg|jpeg|png|gif)$/;

		if (form.picture !== "" && !urlRegex.test(form.picture))
			errors.date = "Image url must be valid";

		for (const error in errors) {
			if (errors.hasOwnProperty(error)) {
				setAlert({
					type: "warning",
					message: errors[error],
				});
				return false;
			}
		}
		return true;
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
					required
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
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					SAVE
				</Button>
			</Box>
		</div>
	);
};

export default EditGameForm;

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
