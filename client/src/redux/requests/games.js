import axios from "../../axios/axios_instance";

export const getAllGames = () => axios.get("/");
export const createGame = (data) => axios.post("/", data);
export const updateGame = (game_id, data) =>
	axios.patch("/", data, {
		params: { game_id },
	});
export const deleteGame = (game_id) => {
	return axios.delete("/", { params: { game_id } });
};
