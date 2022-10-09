import { ADD_TO_FAVORITES, EMPTY_PRODUCTS, GET_FAVORITES, GET_PRODUCTS, GET_PRODUCTS_SUCCESS, REMOVE_FROM_FAVORITES } from "./actionTypes";

export const getProducts = (id) => ({
	type: GET_PRODUCTS,
	payload : id
});

export const emptyProducts  = () => ({
	type : EMPTY_PRODUCTS
})

export const getProductsSuccess = (products) => ({
	type: GET_PRODUCTS_SUCCESS,
	payload: products,
});

export const getProductsFail = (error) => ({
	type: GET_PRODUCTS_SUCCESS,
	payload: error,
});

export const getFavorites = () => ({
	type : GET_FAVORITES,
})

export const addFavorite = (favorite) => ({
	type : ADD_TO_FAVORITES,
	payload : favorite
})

export const removeFavorite = (favorite) => ({
	type: REMOVE_FROM_FAVORITES,
	payload: favorite
})