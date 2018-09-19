import { actionTypes as types } from '../actions/action.account';

const initialState = {
	loginLoading: false,
	isLoggedIn: false,
	isSetPasscode: false,
	auth: {
		access_token: null,
		id_token: null,
		expires_in: null,
		refresh_token: null,
		resource: null,
		scope: null,
		token_type: null,
	},
	profileLoading: false,
	profile: {},
	updateLoading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.ACCOUNT_LOGIN:
			return {
				...state,
				loginLoading: false,
				isLoggedIn: true,
				auth: {
					...state.auth,
					...action.payload,
				},
			};
		case types.ACCOUNT_LOGOUT:
			return {
				...state,
				...initialState,
			};
		case types.RESET_TOKEN:
			return {
				...state,
				auth: {
					...state.auth,
					...action.payload,
				},
			};
		case types.ACCOUNT_GET_PROFILE:
			return {
				...state,
				profileLoading: true,
			};
		case types.ACCOUNT_GET_PROFILE_SUCCESS:
			return {
				...state,
				profileLoading: false,
				profile: {
					...action.payload,
				},
			};
		case types.ACCOUNT_GET_PROFILE_FAILED:
			return {
				...state,
				profileLoading: false,
			};
		case types.ACCOUNT_UPDATE_PROFILE:
			return {
				...state,
				updateLoading: true,
			};
		case types.ACCOUNT_UPDATE_PROFILE_SUCCESS:
			return {
				...state,
				updateLoading: false,
				profile: {
					...action.payload,
				},
			};
		case types.ACCOUNT_UPDATE_PROFILE_FAILED:
			return {
				...state,
				updateLoading: false,
			};
		default:
			return state;
	}
};
