import { useDispatch } from 'react-redux';
import { refreshToken } from '../store/slices/auth';
import api from './../api/index';

const TokenGenerator = async ({ access, refresh }) => {
	try {
		const result = await api.user.POST.verifyToken(access);
	} catch (err) {
		if (err.response.status === 401) {
			const result = await api.user.POST.refreshToken(refresh);
			return result;
		}
	}
	return 0;
};

export default TokenGenerator;
