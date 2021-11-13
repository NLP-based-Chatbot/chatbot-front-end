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
					Authorization: `JWT ${token}`
				},
				url: '/feedback/'
			});
		}
	},
	PUT: {
		async updateFeedback(
			id,
			domain,
			rating,
			chatsession,
			feedback,
			user_id,
			token
		) {
			return AxiosInstance({
				method: 'PUT',
				headers: {
					Authorization: `JWT ${token}`
				},
				url: `/feedback/update/${id}`,
				data: {
					domain: domain,
					rating: rating,
					chatsession: chatsession,
					feedback: feedback,
					resolved: true,
					user_id: user_id
				}
			});
		}
	}
};

export default feedback;
