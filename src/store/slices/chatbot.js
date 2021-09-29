import { createSlice, createSelector } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'chatbot',
	initialState: {
		chat: []
	},
	reducers: {
		updateChat: (chatbot, action) => {
			chatbot.chat = action.payload;
		}
	}
});

export const { updateChat } = slice.actions;

export default slice.reducer;

export const getChat = createSelector(
	state => state.entities.chatbot,
	chatbot => chatbot.chat
);
