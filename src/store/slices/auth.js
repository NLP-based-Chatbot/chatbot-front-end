import { createSlice, createSelector } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'auth',
	initialState: {
		userDetails: [],
		signedIn: false,
		loading: false
	},
	reducers: {
		userRequested: (user, action) => {
			user.loading = true;
		},
		userRequestFailed: (user, action) => {
			user.loading = false;
		},
		userReceived: (user, action) => {
			user.userDetails = action.payload;
			user.signedIn = true;
			user.loading = false;
		},
		userSignOutRequested: (user, action) => {
			user.loading = true;
		},
		userSignOutRequestFailed: (user, action) => {
			user.loading = false;
		},
		userSignedOut: (user, action) => {
			user.signedIn = false;
			user.userDetails = [];
			user.loading = false;
		}
	}
});

export const {
	userRequested,
	userRequestFailed,
	userReceived,
	userSignOutRequested,
	userSignOutRequestFailed,
	userSignedOut
} = slice.actions;

export default slice.reducer;

export const getUser = createSelector(
	state => state.auth,
	auth => auth.userDetails
);

export const getUserSignedIn = createSelector(
	state => state.auth,
	auth => auth.signedIn
);
