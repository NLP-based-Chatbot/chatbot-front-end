import user from './modules/user';
import chatbot from './modules/chatbot';
import feedback from './modules/feedback';
import newsfeed from './modules/newsfeed';

const api = {
	user: user,
	chatbot: chatbot,
	feedback: feedback,
	newsfeed: newsfeed
};

export default api;
