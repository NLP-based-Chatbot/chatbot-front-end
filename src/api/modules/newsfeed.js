import AxiosInstance from './../../helpers/AxiosInstance';

const newsfeed = {
	GET: {
		async getNews(token, domain) {
			return AxiosInstance({
				method: 'GET',
				headers: {
					'Authorization': `JWT ${token}`
				},
				url: `/newsfeed/news/domain/${domain}`
			});
		},
        async getInstructions(token, domain) {
			return AxiosInstance({
				method: 'GET',
				headers: {
					'Authorization': `JWT ${token}`
				},
				url: `/newsfeed/instructions/domain/${domain}`
			});
		}
	},

	POST: {
		async addNews(token, domain, title, body, date, img_url) {
			return AxiosInstance({
				method: 'POST',
				headers: {
					'Authorization': `JWT ${token}`
				},
				url: `/newsfeed/news/`,
				data: {
					domain: domain,
					title: title,
					body: body,
					date: date,
					img_url: img_url
				}
			});
		},
		async addInstructions(token, domain, label, body) {
			return AxiosInstance({
				method: 'POST',
				headers: {
					'Authorization': `JWT ${token}`
				},
				url: `/newsfeed/instructions/`,
				data: {
					domain: domain,
					label: label,
					body: body,
				}
			});
		}
	},

	DELETE: {
		async deleteInstructions(token, id) {
			return AxiosInstance({
				method: 'DELETE',
				headers: {
					'Authorization': `JWT ${token}`
				},
				url: `/newsfeed/instructions/details/${id}`
			});
		}
	}
    
};

export default newsfeed;