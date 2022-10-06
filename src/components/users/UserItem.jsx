import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login: username, avatar_url } }) => {
	return (
		<div className="card shadow-2xl card-compact bg-base-100 glass">
			<div className="flex-row items-center space-x-4 card-body">
				<div>
					<div className="avatar">
						<div className="rounded-full shadow w-14 h-14">
							<img src={avatar_url} alt="Profile Pic" />
						</div>
					</div>
				</div>
				<div>
					<h2 className="card-title text-primary-content">
						{username}
					</h2>
					<Link
						className="text-gray-300 text-opacity-50"
						to={`/user/${username}`}>
						Visit Profile
					</Link>
				</div>
			</div>
		</div>
	);
};
UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};
export default UserItem;
