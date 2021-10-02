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
		async signUp(
			first_name,
			last_name,
			email,
			user_type,
			password,
			re_password
		) {
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
					user_type: user_type,
					password: password,
					re_password: re_password
				}
			});
		},
		async forgotPassword(email) {
			return AxiosInstance({
				method: 'POST',
				url: '/auth/users/reset_password/',
				data: {
					email: email
				}
			});
		},
		async resetPassword(uid, token, new_password, re_password) {
			return AxiosInstance({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				url: '/auth/users/reset_password_confirm/',
				data: {
					uid: uid,
					token: token,
					new_password: new_password,
					re_password: re_password
				}
			});
		},
		async activateUser(uid, token) {
			return AxiosInstance({
				method: 'POST',
				url: '/auth/users/activation/',
				data: {
					uid: uid,
					token: token
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
