import {
	ADD_TO_FAVORITES,
	EMPTY_PRODUCTS,
	GET_PRODUCTS_FAIL,
	GET_PRODUCTS_SUCCESS,
	REMOVE_FROM_FAVORITES,
} from "./actionTypes";

const INITIAL_STATE = {
	categories: [],
	products: [],
	error: [],
	favorites: [],
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

		default:
			return state;
	}
};

export default reducer;
