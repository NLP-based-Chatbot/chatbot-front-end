import AxiosInstance from './../../helpers/AxiosInstance';

const feedback = {
	POST: {
		async feedback(token, user_id, domain, rating, feedback, chatsession) {
			return AxiosInstance({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `JWT ${token}`
				},
				url: `/feedback/`,
				data: {
					user_id: user_id,
					rating: rating,
					feedback: feedback,
					domain: domain,
					chatsession: chatsession
				}
			});
		}
	},
	GET: {
		async sessions(token) {
			return AxiosInstance({
				method: 'GET',
				headers: {
					'Authorization': `JWT ${token}`
				},
				url: '/feedback/'
			});
		}
	}
};

export default feedback;
