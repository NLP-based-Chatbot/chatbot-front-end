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
    
};

export default newsfeed;