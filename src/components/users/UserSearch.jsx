import { useContext, useRef } from "react";
import GithubContext from "../../contexts/github/GithubContext";

const UserSearch = () => {
	const inputRef = useRef();
	const { users, searchUsers, clearUsers } = useContext(GithubContext);
	const handleSubmit = e => {
		e.preventDefault();
		if (inputRef.current.value === "") alert("Please enter something!");
		else {
			searchUsers(inputRef.current.value);
			e.target.reset();
		}
	};
	return (
		<div className="mb-8 grid gap-8 grid-cols-1 md:grid-cols-2">
			<div>
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<div className="relative">
							<input
								ref={inputRef}
								type="text"
								className="w-full pr-40 bg-gray-200 input input-lg text-black"
								placeholder="Search"
							/>
							<button
								type="submit"
								className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
								Go
							</button>
						</div>
					</div>
				</form>
			</div>
			{users.length > 0 && (
				<div>
					<button
						onClick={clearUsers}
						className="btn btn-ghost btn-lg">
						Clear
					</button>
				</div>
			)}
		</div>
	);
};

export default UserSearch;
