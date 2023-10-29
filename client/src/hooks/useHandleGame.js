import { useSelector, useDispatch } from "react-redux";
import { GetAllGames } from "../redux/actions/GetAllGames";
import { useNavigate } from "react-router-dom";

const useHandleGame = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { games, game, gamesCopy } = useSelector((state) => state.useDashboard);

	const ObtainAllGames = () => {
		navigate("/");
		dispatch(GetAllGames());
	};
	return {
		games,
		game,
		gamesCopy,
		ObtainAllGames,
	};
};

export default useHandleGame;
