import { call, put, takeEvery } from "redux-saga/effects";
import {
	getOrdersData,
	getProductCall,
	getProductsCall,
	getShoppingBagData,
	placeOrderData,
	updateShoppingBagData,
} from "../helpers/apiCalls";
import {
	getOrdersFail,
	getOrdersSuccess,
	getProductFail,
	getProductsFail,
	getProductsSuccess,
	getProductSuccess,
	getSaleItemsFail,
	getSaleItemsSuccess,
	getShoppingBagFail,
	getShoppingBagSuccess,
} from "./actions";
import {
	ADD_ORDER,
	ADD_TO_SHOPPING_BAG,
	GET_ORDERS,
	GET_PRODUCT,
	GET_PRODUCTS,
	GET_SALE_ITEMS,
	GET_SHOPPING_BAG,
	REMOVE_FROM_SHOPPING_BAG,
} from "./actionTypes";

function* getProducts({ payload: id }) {
	try {
		console.log("API called!");
		const response = yield call(getProductsCall, id);
		console.log(response);
		yield put(getProductsSuccess(response));
	} catch (error) {
		yield put(getProductsFail(error));
	}
}

function* getProduct({ payload: id }) {
	try {
		console.log("API called!");
		const response = yield call(getProductCall, id);
		console.log(response);
		yield put(getProductSuccess(response));
	} catch (error) {
		yield put(getProductFail(error));
	}
}

function* getShoppingBag() {
	try {
		const response = yield call(getShoppingBagData);
		console.log(response);
		yield put(getShoppingBagSuccess(response));
	} catch (error) {
		yield put(getShoppingBagFail(error));
	}
}

function* addToShoppingBag({payload : shoppingBag}) {
	try {
		const response = yield call(updateShoppingBagData, shoppingBag);
		console.log(response);
		yield put(getShoppingBagSuccess(response));
	} catch (error) {
		yield put(getShoppingBagFail(error));
	}
}

function* removeFromShoppingBag({payload : shoppingBag}) {
	try {
		const response = yield call(updateShoppingBagData, shoppingBag);
		console.log(response);
		yield put(getShoppingBagSuccess(response));
	} catch (error) {
		yield put(getShoppingBagFail(error));
	}
}

function* getOrders() {
	try {
		const response = yield call(getOrdersData);
		console.log(response);
		yield put(getOrdersSuccess(response));
	} catch (error) {
		yield put(getOrdersFail(error));
	}
}

function* placeOrder({payload : orders}) {
	try {
		const response = yield call(placeOrderData, orders);
		console.log(response);
		yield put(getOrdersSuccess(orders));
		yield put(getShoppingBagSuccess([]))
	} catch (error) {
		yield put(getOrdersFail(error));
	}
}

function* getSaleItems() {
	try {
		console.log('api called')
		const response = yield call(getProductsCall,'activewear');
		console.log(response)
		yield put(getSaleItemsSuccess(response));
	} catch (error) {
		// not successful
		console.log(error)
		yield put(getSaleItemsFail(error));
	}
}

export default function* rootSaga() {
	yield takeEvery(GET_PRODUCTS, getProducts);
	yield takeEvery(GET_PRODUCT, getProduct);
	yield takeEvery(GET_ORDERS, getOrders);
	yield takeEvery(GET_SHOPPING_BAG, getShoppingBag);
	yield takeEvery(ADD_TO_SHOPPING_BAG, addToShoppingBag);
	yield takeEvery(REMOVE_FROM_SHOPPING_BAG, removeFromShoppingBag);
	yield takeEvery(GET_ORDERS, getOrders);
	yield takeEvery(ADD_ORDER, placeOrder);
	yield takeEvery(GET_SALE_ITEMS, getSaleItems);
}
