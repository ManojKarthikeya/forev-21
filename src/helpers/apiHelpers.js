import axios from "axios";

const axiosApi = axios.create({
	baseURL: "https://api.escuelajs.co",
});

export async function get(url, config = {}) {
	return await axiosApi
		.get(url, { ...config })
		.then((response) => response.data);
}

export async function post(url, data, config = {}) {
	return axiosApi
		.post(url, { ...data }, { ...config })
		.then((response) => response.data);
}

export async function put(url, data, config = {}) {
	return axiosApi
		.put(url, { ...data }, { ...config })
		.then((response) => response.data);
}

export async function del(url, config = {}) {
	return await axiosApi
		.delete(url, { ...config })
		.then((response) => response.data);
}
