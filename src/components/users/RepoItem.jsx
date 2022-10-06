import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";

const RepoItem = ({ repo }) => {
	const {
		name,
		description,
		html_url,
		forks,
		open_issues,
		watchers_count,
		stargazers_count,
	} = repo;
	return (
		<div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
			<div className="card-body">
				<h3 className="mb-2 card-title text-primary-content text-2xl">
					<a href={html_url}>
						<FaLink className="inline mr-1" /> {name}
					</a>
				</h3>
				<p className="mb-3">{description}</p>
				<div className="card-actions">
					<div className="mr-2 badge badge-info badge-outline badge-lg">
						<FaEye className="mr-2" /> {watchers_count}
					</div>
					<div className="mr-2 badge badge-success badge-outline badge-lg">
						<FaStar className="mr-2" /> {stargazers_count}
					</div>
					<div className="mr-2 badge badge-error badge-outline badge-lg">
						<FaInfo className="mr-2" /> {open_issues}
					</div>
					<div className="mr-2 badge badge-warning badge-outline badge-lg">
						<BiGitRepoForked className="mr-2" /> {forks}
					</div>
				</div>
			</div>
		</div>
	);
};
RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
};
export default RepoItem;
