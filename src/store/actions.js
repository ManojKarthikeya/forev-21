import {
	ADD_ORDER,
	ADD_ORDER_FAIL,
	ADD_ORDER_SUCCESS,
	ADD_TO_FAVORITES,
	ADD_TO_SHOPPING_BAG,
	ADD_TO_SHOPPING_BAG_FAIL,
	ADD_TO_SHOPPING_BAG_SUCCESS,
	EMPTY_PRODUCT,
	EMPTY_PRODUCTS,
	GET_FAVORITES,
	GET_ORDERS,
	GET_ORDERS_FAIL,
	GET_ORDERS_SUCCESS,
	GET_PRODUCT,
	GET_PRODUCTS,
	GET_PRODUCTS_FAIL,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCT_FAIL,
	GET_PRODUCT_SUCCESS,
	GET_SHOPPING_BAG,
	GET_SHOPPING_BAG_FAIL,
	GET_SHOPPING_BAG_SUCCESS,
	REMOVE_FROM_FAVORITES,
	REMOVE_FROM_SHOPPING_BAG,
	REMOVE_FROM_SHOPPING_BAG_FAIL,
	REMOVE_FROM_SHOPPING_BAG_SUCCESS,
} from "./actionTypes";

export const getProducts = (id) => ({
	type: GET_PRODUCTS,
	payload: id,
});

export const emptyProducts = () => ({
	type: EMPTY_PRODUCTS,
});

export const getProductsSuccess = (products) => ({
	type: GET_PRODUCTS_SUCCESS,
	payload: products,
});

export const getProductsFail = (error) => ({
	type: GET_PRODUCTS_FAIL,
	payload: error,
});

export const getFavorites = () => ({
	type: GET_FAVORITES,
});

export const addFavorite = (favorite) => ({
	type: ADD_TO_FAVORITES,
	payload: favorite,
});

export const removeFavorite = (favorite) => ({
	type: REMOVE_FROM_FAVORITES,
	payload: favorite,
});

export const emptyProduct = () => ({
	type: EMPTY_PRODUCT,
});

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
	payload: id,
});

export const getOrders = () => ({
	type: GET_ORDERS,
});

export const getOrdersSuccess = (orders) => ({
	type: GET_ORDERS_SUCCESS,
	payload: orders,
});

export const getOrdersFail = (error) => ({
	type: GET_ORDERS_FAIL,
	payload: error,
});

export const addOrder = (order) => ({
	type: ADD_ORDER,
	payload: order,
});

export const addOrderSuccess = (order) => ({
	type: ADD_ORDER_SUCCESS,
	payload: order,
});

export const addOrderFail = (order) => ({
	type: ADD_ORDER_FAIL,
	payload: order,
});

export const getShoppingBag = () => ({
	type: GET_SHOPPING_BAG,
});

export const getShoppingBagSuccess = (shoppingBag) => ({
	type: GET_SHOPPING_BAG_SUCCESS,
	payload: shoppingBag,
});

export const getShoppingBagFail = (error) => ({
	type: GET_SHOPPING_BAG_FAIL,
	payload: error,
});

export const addToShoppingBag = (item) => ({
	type: ADD_TO_SHOPPING_BAG,
	payload: item,
});

export const addToShoppingBagSuccess = (item) => ({
	type: ADD_TO_SHOPPING_BAG_SUCCESS,
	payload: item,
});

export const addToShoppingBagFail = (error) => ({
	type: ADD_TO_SHOPPING_BAG_FAIL,
	payload: error,
});

export const removeFromShoppingBag = (item) => ({
	type: REMOVE_FROM_SHOPPING_BAG,
	payload: item,
});

export const removeFromShoppingBagSuccess = (item) => ({
	type: REMOVE_FROM_SHOPPING_BAG_SUCCESS,
	payload: item,
});

export const removeFromShoppingBagFail = (error) => ({
	type: REMOVE_FROM_SHOPPING_BAG_FAIL,
	payload: error,
});
