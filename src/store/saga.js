import { call, put, takeEvery } from "redux-saga/effects";
import { getProductsCall } from "../helpers/apiCalls";
import { getProductsFail, getProductsSuccess } from "./actions";
import { GET_PRODUCTS } from "./actionTypes";

function* getProducts() {
	try {
		const response = yield call(getProductsCall);
		yield put(getProductsSuccess(response));
	} catch (error) {
		yield put(getProductsFail(error));
	}
}

export default function* rootSaga() {
	yield takeEvery(GET_PRODUCTS, getProducts);
}
