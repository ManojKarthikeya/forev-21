import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import reducer from "./store/reducer";
import rootSaga from "./store/saga";

const sageMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ reducer });
const store = configureStore({
	reducer: rootReducer,
	middleware: [sageMiddleware],
});
sageMiddleware.run(rootSaga);
export default store;
