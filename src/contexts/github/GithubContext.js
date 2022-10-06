import { createContext, useCallback, useReducer } from "react";
import { getUsers } from "./githubActions";
import githubReducer from "./githubReducer";

const GithubContext = createContext();
const initialState = { users: [], isLoading: false };

export const GithubProvider = ({ children }) => {
	const [state, dispatch] = useReducer(githubReducer, initialState);
	const setIsLoading = () => dispatch({ type: "SET_LOADING" });
	const searchUsers = useCallback(async text => {
		setIsLoading();
		const users = await getUsers(text);
		dispatch({ type: "GET_USERS", payload: users });
	}, []);
	const clearUsers = () => dispatch({ type: "CLEAR_USERS" });
	return (
		<GithubContext.Provider
			value={{ ...state, searchUsers, clearUsers, setIsLoading }}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
