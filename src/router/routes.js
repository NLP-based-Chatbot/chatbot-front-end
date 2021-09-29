import Home from '../views/home';
import Product from '../views/product';
import ContactUs from '../views/home/ContactUs';
import PublicTransportation from '../views/chatbot/PublicTransportation';
import Dashboard from '../views/dashboard/index';
import HealthCare from '../views/chatbot/HealthCare.';
import Telecommunication from '../views/chatbot/Telecommunication';
import AboutUs from '../views/about';
import Login from './../views/login/index';
import Register from './../views/register/index';
import ResetPassword from './../views/helpers/ResetPassword';
import ForgetPassword from './../views/helpers/ForgetPassword';
import AccountActivation from './../views/helpers/AccountActivation';

export const routes_home = [
	{ path: '/home', component: Home },
	{ path: '/product', component: Product },
	{ path: '/contactus', component: ContactUs },
	{ path: '/aboutus', component: AboutUs },
	{ path: '/chatbot/public-transportation', component: PublicTransportation },
	{ path: '/admin/dashboard', component: Dashboard },
	{ path: '/chatbot/healthcare', component: HealthCare },
	{ path: '/chatbot/telecommunication', component: Telecommunication }
];

export const routes_login = [
	{ exact: true, path: '/', component: Login },
	{ path: '/register', component: Register },
	{ path: '/forget_password', component: ForgetPassword },
	{ path: '/password/reset/confirm/:uid/:token', component: ResetPassword },
	{ path: '/activate/:uid/:token', component: AccountActivation }
];
