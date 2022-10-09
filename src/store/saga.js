import { call, put, takeEvery } from "redux-saga/effects";
import { getProductCall, getProductsCall } from "../helpers/apiCalls";
import {
	getProductFail,
	getProductsFail,
	getProductsSuccess,
	getProductSuccess,
} from "./actions";
import { GET_PRODUCT, GET_PRODUCTS } from "./actionTypes";

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

export default function* rootSaga() {
	yield takeEvery(GET_PRODUCTS, getProducts);
	yield takeEvery(GET_PRODUCT, getProduct);
}
