import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GH_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GH_TOKEN;

const github = axios.create({
	baseURL: GITHUB_URL,
	headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

export const getUsers = async text => {
	const params = new URLSearchParams({ q: text });
	const {
		data: { items: users },
	} = await github.get(`/search/users?${params}`);
	return users;
};

export const getUserDetails = async username => {
	const params = new URLSearchParams({ sort: "created", per_page: 10 });
	const [userData, reposData] = await Promise.all([
		github.get(`/users/${username}`),
		github.get(`/users/${username}/repos?${params}`),
	]);
	return { user: userData.data, repos: reposData.data };
};
