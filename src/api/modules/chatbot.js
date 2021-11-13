import AxiosInstance from './../../helpers/AxiosInstance';

const chatbot = {
	POST: {
		async chat(token, sender, message, domain) {
			return AxiosInstance({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `JWT ${token}`
				},
				url: `/assistant/${domain}/`,
				data: {
					sender: sender,
					message: message
				}
			});
		}
	}
};

export default chatbot;
