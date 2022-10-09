import { call, put, takeEvery } from "redux-saga/effects";
import { getProductsCall } from "../helpers/apiCalls";
import { getProductsFail, getProductsSuccess } from "./actions";
import { GET_PRODUCTS } from "./actionTypes";

function* getProducts({payload : id}) {
	try {
		console.log('API called!')
		const response = yield call(getProductsCall, id);
		console.log(response)
		yield put(getProductsSuccess(response));
	} catch (error) {
		yield put(getProductsFail(error));
	}
}

export default function* rootSaga() {
	yield takeEvery(GET_PRODUCTS, getProducts);
}
