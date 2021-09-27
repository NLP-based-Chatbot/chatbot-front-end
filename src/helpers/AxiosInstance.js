import axios from 'axios';

const AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL
});

export default AxiosInstance;
