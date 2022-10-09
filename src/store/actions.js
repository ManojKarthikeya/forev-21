import { ADD_TO_FAVORITES, EMPTY_PRODUCT, EMPTY_PRODUCTS, GET_FAVORITES, GET_PRODUCT, GET_PRODUCTS, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS, REMOVE_FROM_FAVORITES } from "./actionTypes";

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
	type: GET_PRODUCTS_FAIL,
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

export const emptyProduct  = () => ({
	type : EMPTY_PRODUCT
})

export const getProductSuccess = (products) => ({
	type: GET_PRODUCT_SUCCESS,
	payload: products,
});

export const getProductFail = (error) => ({
	type: GET_PRODUCT_FAIL,
	payload: error,
});

export const getProduct = (id) => ({
	type: GET_PRODUCT,
	payload : id
});
