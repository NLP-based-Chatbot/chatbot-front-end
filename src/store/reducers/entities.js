import { combineReducers } from 'redux';
import chatbot from '../slices/chatbot';
import sessions from '../slices/sessions';

export default combineReducers({
	chatbot: chatbot,
	sessions: sessions
});
