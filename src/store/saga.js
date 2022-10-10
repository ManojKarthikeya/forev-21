import { call, put, takeEvery } from "redux-saga/effects";
import {
	getProductCall,
	getProductsCall,
	getShoppingBagData,
	updateShoppingBagData,
} from "../helpers/apiCalls";
import {
	getProductFail,
	getProductsFail,
	getProductsSuccess,
	getProductSuccess,
	getShoppingBagFail,
	getShoppingBagSuccess,
} from "./actions";
import {
	ADD_TO_SHOPPING_BAG,
	GET_ORDERS,
	GET_PRODUCT,
	GET_PRODUCTS,
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

function* getOrders() {
	try {
		console.log("API called!");
		const response = yield call(getProductCall);
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

export default function* rootSaga() {
	yield takeEvery(GET_PRODUCTS, getProducts);
	yield takeEvery(GET_PRODUCT, getProduct);
	yield takeEvery(GET_ORDERS, getOrders);
	yield takeEvery(GET_SHOPPING_BAG, getShoppingBag);
	yield takeEvery(ADD_TO_SHOPPING_BAG, addToShoppingBag);
	yield takeEvery(REMOVE_FROM_SHOPPING_BAG, removeFromShoppingBag);
}
