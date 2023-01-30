import axios from 'axios';
const API_SERVER = 'http://localhost:8080';

export const getProducts = async () => {
	const result = await axios.get(`${API_SERVER}/products`);
	return result.data;
	// fetch(`${API_SERVER}/products`).then((res) => res.json());
};

export const getProductById = async (id) => {
	const result = await axios.get(`${API_SERVER}/products/${id}`);
	return result.data;
};

export const currency = new Intl.NumberFormat('en-AU', {
	style: 'currency',
	currency: 'AUS',
});
