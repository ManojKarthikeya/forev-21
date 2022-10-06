import { GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS } from "./actionTypes";

const INITIAL_STATE = {
	categories: [],
	products: [],
	error: [],
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.payload,
			};

		case GET_PRODUCTS_FAIL:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
