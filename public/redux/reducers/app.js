import * as actionTypes from "../constants/action-types";

const initialState = {
	preSignIn: true,
	postSignIn: false,
	error: false,
	message: false,
	listState: false,
	messages: undefined
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.POST_SIGN_IN:
			const { data } = action;
			if (data.statusText === "OK") {
				return {
					...state,
					preSignIn: false,
					postSignIn: true
				}
			}

			return {
				...state
			}

		case actionTypes.ERROR:
			return {
				...state,
				error: true
			}

		case actionTypes.SIGN_OUT:
			return {
				...state,
				error: false,
				preSignIn: true,
				postSignIn: false
			}

		case actionTypes.FETCH_MESSAGE_SUCCESS:
			return {
				...state,
				message: true,
				listState: false
			}

		case actionTypes.POST_USER_SIGN_IN:
			return {
				...state,
				preSignIn: false,
				postSignIn: true
			}

		case actionTypes.FETCH_STATES_ABBREVIATIONS:
			return {
				...state,
				message: false,
				listState: true
			}

		case actionTypes.MESSAGE_SUCCESS:
			return {
				...state,
				messages: action.data.data
			}

		default:
			return state;
	}
}

export default appReducer;
