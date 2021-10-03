import { createSlice, createSelector } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'auth',
	initialState: {
		userDetails: {},
		signedIn: false,
		loading_user: false,
		loading_token: false,
		token: {}
	},
	reducers: {
		userTokenRequested: (user, action) => {
			user.loading_token = true;
		},
		userTokenRequestFailed: (user, action) => {
			user.loading_token = false;
		},
		userTokenReceived: (user, action) => {
			user.token = action.payload;
			user.loading_token = false;
		},
		userRequested: (user, action) => {
			user.loading_user = true;
		},
		userRequestFailed: (user, action) => {
			user.loading_user = false;
		},
		userReceived: (user, action) => {
			user.userDetails = action.payload;
			user.signedIn = true;
			user.loading_user = false;
		},
		userSignOutRequested: (user, action) => {
			user.loading_user = true;
		},
		userSignOutRequestFailed: (user, action) => {
			user.loading_user = false;
		},
		userSignedOut: (user, action) => {
			user.signedIn = false;
			user.userDetails = {};
			user.token = {};
			user.loading_user = false;
		}
	}
});

export const {
	userTokenRequested,
	userTokenRequestFailed,
	userTokenReceived,
	userRequested,
	userRequestFailed,
	userReceived,
	userSignOutRequested,
	userSignOutRequestFailed,
	userSignedOut
} = slice.actions;

export default slice.reducer;

export const getToken = createSelector(
	state => state.auth,
	auth => auth.token
);

export const getTokenStatus = createSelector(
	state => state.auth,
	auth => auth.loading_token
);

export const getUser = createSelector(
	state => state.auth,
	auth => auth.userDetails
);

export const getUserStatus = createSelector(
	state => state.auth,
	auth => auth.loading_user
);

export const getUserSignedIn = createSelector(
	state => state.auth,
	auth => auth.signedIn
);
