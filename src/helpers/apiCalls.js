import axios from "axios";
import { del, get, post, put } from "./apiHelpers";
import { XRapidAPIHost, XRapidAPIKey } from "./Key";

export const getProductsCall = async (id) => {
    let data = {}
	const options = {
		method: "GET",
		url: `https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?categoryName=${id}`,
		headers: {
			"X-RapidAPI-Key":
				"8f53d9fae0msh4de888d8490c60ap1fcc93jsn547fef1c5e4c",
			"X-RapidAPI-Host": "apidojo-forever21-v1.p.rapidapi.com",
		},
	};
	await axios
		.request(options)
		.then(function (response) {
			data =  response.data;
		})
		.catch(function (error) {
			console.error(error);
		});
    return data
};
