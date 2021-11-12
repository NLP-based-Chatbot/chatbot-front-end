import { createSlice, createSelector } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'sessions',
	initialState: {
		sessions_list: [],
		loading: false
	},
	reducers: {
		sessionsRequested: store => {
			store.loading = true;
		},
		sessionsRequestFailed: store => {
			store.loading = false;
		},
		sessionsReceived: (store, action) => {
			store.sessions_list = action.payload;
			store.loading = false;
		}
	}
});

export const { sessionsRequested, sessionsRequestFailed, sessionsReceived } =
	slice.actions;

export default slice.reducer;

export const getSessionsLoading = createSelector(
	state => state.entities.sessions,
	sessions => sessions.loading
);

export const getSessions = createSelector(
	state => state.entities.sessions,
	sessions => sessions.sessions_list
);
