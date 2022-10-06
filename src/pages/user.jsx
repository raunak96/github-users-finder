import { useContext, useEffect } from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import ReposList from "../components/users/ReposList";
import GithubContext from "../contexts/github/GithubContext";

const User = () => {
	const { username } = useParams();
	const { getUser, user, isLoading } = useContext(GithubContext);
	useEffect(() => {
		getUser(username);
		console.log("Yo", username);
	}, [username, getUser]);
	const {
		name,
		type,
		avatar_url,
		location,
		bio,
		blog,
		twitter_username,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;
	return isLoading ? (
		<Spinner />
	) : (
		<>
			<div className="w-full mx-auto lg:w-10/12">
				<div className="mb-4">
					<Link to="/" className="btn btn-ghost">
						Back To Search
					</Link>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 mb-8">
					<div className="mb-6 md:mb-0 custom-card-image">
						<div className="shadow-xl card image-full">
							<figure>
								<img src={avatar_url} alt="Avatar" />
							</figure>
							<div className="card-body justify-end">
								<h2 className="card-title mb-0 text-white">
									{name}
								</h2>
								<p className="flex-grow-0 text-white opacity-80">
									{login}
								</p>
							</div>
						</div>
					</div>
					<div className="col-span-2">
						<div className="mb-6">
							<h1 className="text-3xl card-title text-white">
								{name}
								<div className="ml-2 mr-1 badge badge-success badge-outline">
									{type}
								</div>
								{hireable && (
									<div className="mx-1 badge badge-info badge-outline">
										Hireable
									</div>
								)}
							</h1>
							<p>{bio}</p>
							<div className="mt-6 card-actions">
								<a
									href={html_url}
									target="_blank"
									rel="noreferrer"
									className="btn btn-outline">
									Visit Github Page
								</a>
							</div>
						</div>
						<div className="w-full rounded-lg shadow-md bg-base-100 stats">
							{location && (
								<div className="stat">
									<div className="stat-title text-md">
										Location
									</div>
									<div className="text-lg stat-value text-white opacity-80">
										{location}
									</div>
								</div>
							)}
							{blog && (
								<div className="stat">
									<div className="stat-title text-md">
										Website
									</div>
									<div className="text-lg stat-value text-white opacity-80">
										<a
											href={
												blog?.startsWith("http")
													? blog
													: "https://" + blog
											}
											target="_blank"
											rel="noreferrer">
											{blog?.startsWith("http")
												? blog
												: "https://" + blog}
										</a>
									</div>
								</div>
							)}
							{twitter_username && (
								<div className="stat">
									<div className="stat-title text-md">
										Twitter
									</div>
									<div className="text-lg stat-value text-white opacity-80">
										<a
											href={`https://twitter.com/${twitter_username}`}
											target="_blank"
											rel="noreferrer">
											{twitter_username}
										</a>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats stats-vertical lg:stats-horizontal">
					<div className="stat">
						<div className="stat-figure text-secondary">
							<FaUsers className="text-3xl md:text-5xl" />
						</div>
						<div className="stat-title pr-5">Followers</div>
						<div className="stat-value pr-5 text-3xl md:text-4xl">
							{followers}
						</div>
					</div>
					<div className="stat">
						<div className="stat-figure text-secondary">
							<FaUserFriends className="text-3xl md:text-5xl" />
						</div>
						<div className="stat-title pr-5">Following</div>
						<div className="stat-value pr-5 text-3xl md:text-4xl">
							{following}
						</div>
					</div>
					<div className="stat">
						<div className="stat-figure text-secondary">
							<FaCodepen className="text-3xl md:text-5xl" />
						</div>
						<div className="stat-title pr-5">Public Repos</div>
						<div className="stat-value pr-5 text-3xl md:text-4xl">
							{public_repos}
						</div>
					</div>

					<div className="stat">
						<div className="stat-figure text-secondary">
							<FaStore className="text-3xl md:text-5xl" />
						</div>
						<div className="stat-title pr-5">Public Gists</div>
						<div className="stat-value pr-5 text-3xl md:text-4xl">
							{public_gists}
						</div>
					</div>
				</div>
				<ReposList />
			</div>
		</>
	);
};

export default User;
