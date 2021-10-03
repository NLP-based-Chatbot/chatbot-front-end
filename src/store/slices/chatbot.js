import { createSlice, createSelector } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'chatbot',
	initialState: {
		chat: [],
		rating: 0
	},
	reducers: {
		updateChat: (chatbot, action) => {
			chatbot.chat = action.payload;
		},
		updateRating: (chatbot, action) => {
			chatbot.rating = action.payload;
		}
	}
});

export const { updateChat, updateRating } = slice.actions;

export default slice.reducer;

export const getChat = createSelector(
	state => state.entities.chatbot,
	chatbot => chatbot.chat
);

export const getRating = createSelector(
	state => state.entities.chatbot,
	chatbot => chatbot.rating
);
