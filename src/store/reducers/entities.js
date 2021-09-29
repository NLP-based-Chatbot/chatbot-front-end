import { combineReducers } from 'redux';
import chatbot from '../slices/chatbot';

export default combineReducers({
	chatbot: chatbot
});
