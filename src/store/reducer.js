import {
	ADD_TO_FAVORITES,
	EMPTY_PRODUCT,
	EMPTY_PRODUCTS,
	GET_PRODUCTS_FAIL,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCT_FAIL,
	GET_PRODUCT_SUCCESS,
	REMOVE_FROM_FAVORITES,
} from "./actionTypes";

const INITIAL_STATE = {
	categories: [],
	products: [],
	error: [],
	favorites: [],
	product: null,
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_TO_FAVORITES:
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};

		case REMOVE_FROM_FAVORITES:
			return {
				...state,
				favorites: state.favorites.filter(
					(item) => item.ProductId !== action.payload.ProductId
				),
			};

		case EMPTY_PRODUCTS:
			return {
				...state,
				products: [],
			};
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

		case EMPTY_PRODUCT:
			return {
				...state,
				product: null,
			};
		case GET_PRODUCT_SUCCESS:
			return {
				...state,
				product: action.payload,
			};

		case GET_PRODUCT_FAIL:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
