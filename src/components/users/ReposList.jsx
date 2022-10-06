import { useContext } from "react";
import GithubContext from "../../contexts/github/GithubContext";
import RepoItem from "./RepoItem";

const ReposList = () => {
	const { repos } = useContext(GithubContext);
	return (
		<div className="rounded-lg shadow-lg card bg-base-100">
			<div className="card-body">
				<h2 className="text-3xl my-3 font-bold card-title">
					Latest Repositories
				</h2>
				{repos.map(repo => (
					<RepoItem key={repo.node_id} repo={repo} />
				))}
			</div>
		</div>
	);
};

export default ReposList;
