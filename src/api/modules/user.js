import AxiosInstance from './../../helpers/AxiosInstance';

const user = {
	POST: {
		async signIn(email, password) {
			return AxiosInstance({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				url: '/auth/jwt/create/',
				data: {
					email: email,
					password: password
				}
			});
		},
		async signUp(first_name, last_name, email, password, re_password) {
			return AxiosInstance({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				url: '/auth/users/',
				data: {
					first_name: first_name,
					last_name: last_name,
					email: email,
					password: password,
					re_password: re_password
				}
			});
		}
	},
	GET: {
		async getUser(token) {
			return AxiosInstance({
				method: 'GET',
				headers: {
					Authorization: `JWT ${token}`
				},
				url: '/auth/users/me'
			});
		}
	}
};

export default user;
