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
