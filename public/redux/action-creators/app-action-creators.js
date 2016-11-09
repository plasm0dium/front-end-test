import * as actionTypes from "../constants/action-types";

export function postSignIn(data) {
	return {
		type: actionTypes.POST_SIGN_IN,
		data
	}
}

export function onSignInError(data) {
 	return {
 		type: actionTypes.ERROR,
 		data
 	}
}

export function onSignOut(data) {
	return {
		type: actionTypes.SIGN_OUT,
		data
	}
}

export function onMessageSuccess(data) {
	return {
		type: actionTypes.MESSAGE_SUCCESS,
		data
	}
}

export function onFetchMessageSuccess() {
	return {
		type: actionTypes.FETCH_MESSAGE_SUCCESS
	}
}

export function postUserSignIn() {
	return {
		type: actionTypes.POST_USER_SIGN_IN
	}
}

export function onFetchStatesAbbre() {
	return {
		type: actionTypes.FETCH_STATES_ABBREVIATIONS
	}
}