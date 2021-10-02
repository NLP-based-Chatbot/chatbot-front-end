import AxiosInstance from './../../helpers/AxiosInstance';

const feedback = {
	POST: {
		async feedback(user_id, domain, rating, feedback, chatsession) {
			return AxiosInstance({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
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
		async sessions() {
			return AxiosInstance({
				method: 'GET',
				url: '/feedback/'
			});
		}
	}
};

export default feedback;
