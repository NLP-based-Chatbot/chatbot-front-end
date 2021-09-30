import AxiosInstance from './../../helpers/AxiosInstance';

const feedback = {
	POST: {
		async feedback(user_id, domain, rating, chatsession) {
			return AxiosInstance({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				url: `/feedback/`,
				data: {
					user_id: user_id,
					rating: rating,
					domain: domain,
					chatsession: chatsession
				}
			});
		}
	}
};

export default feedback;
