import {
	ADD_ORDER_SUCCESS,
	ADD_TO_FAVORITES,
	ADD_TO_SHOPPING_BAG_SUCCESS,
	EMPTY_PRODUCT,
	EMPTY_PRODUCTS,
	GET_ORDERS_SUCCESS,
	GET_PRODUCTS_FAIL,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCT_FAIL,
	GET_PRODUCT_SUCCESS,
	GET_SHOPPING_BAG,
	GET_SHOPPING_BAG_SUCCESS,
	REMOVE_FROM_FAVORITES,
	REMOVE_FROM_SHOPPING_BAG_SUCCESS,
} from "./actionTypes";

const INITIAL_STATE = {
	categories: [],
	products: [],
	error: [],
	favorites: [],
	product: null,
	orders: [],
	shoppingBag: [],
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

		case GET_ORDERS_SUCCESS:
			return {
				...state,
				orders: action.payload,
			};

		case ADD_ORDER_SUCCESS:
			return {
				...state,
				orders: [...state.orders, action.payload],
			};

		case GET_SHOPPING_BAG_SUCCESS:
			return {
				...state,
				shoppingBag: action.payload,
			};

		case ADD_TO_SHOPPING_BAG_SUCCESS:
			return {
				...state,
				shoppingBag: [...state.shoppingBag, action.payload],
			};

		case REMOVE_FROM_SHOPPING_BAG_SUCCESS:
			return {
				...state,
				shoppingBag: state.shoppingBag.filter(
					(item) => item.ProductId !== action.payload.ProductId
				),
			};

		default:
			return state;
	}
};

export default reducer;
