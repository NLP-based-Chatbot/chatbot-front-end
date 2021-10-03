import AxiosInstance from '../../helpers/AxiosInstance';

const signUp = (
	first_name,
	last_name,
	email,
	user_type,
	password,
	re_password
) =>
	AxiosInstance({
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

export default signUp;
