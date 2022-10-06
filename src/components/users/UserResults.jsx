import { useContext } from "react";
import GithubContext from "../../contexts/github/GithubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const UserResults = () => {
	const { users, isLoading } = useContext(GithubContext);
	/* useEffect(() => {
		console.log("Go");
		fetchUsers();
	}, [fetchUsers]);
 */
	return !isLoading ? (
		<div className="grid gap-8 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
			{users.map(user => (
				<UserItem key={user.node_id} user={user} />
			))}
		</div>
	) : (
		<Spinner />
	);
};

export default UserResults;
