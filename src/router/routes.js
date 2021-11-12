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
import Feedback from './../views/dashboard/Feedback';
import Error404 from '../views/404';

export const routes_home = [
	{ exact: true, path: '/home', component: Home },
	{ exact: true, path: '/product', component: Product },
	{ exact: true, path: '/contactus', component: ContactUs },
	{ exact: true, path: '/aboutus', component: AboutUs },
	{
		exact: true,
		path: '/chatbot/public-transportation',
		component: PublicTransportation
	},
	{ exact: true, path: '/chatbot/healthcare', component: HealthCare },
	{
		exact: true,
		path: '/chatbot/telecommunication',
		component: Telecommunication
	},
	{ exact: true, path: '/admin/dashboard', component: Dashboard },
	{ exact: true, path: '/admin/dashboard/feedback', component: Feedback },
	{ component: Error404 }
];

export const routes_login = [
	{ exact: true, path: '/', component: Login },
	{ exact: true, path: '/register', component: Register },
	{ exact: true, path: '/forget_password', component: ForgetPassword },
	{
		exact: true,
		path: '/password/reset/confirm/:uid/:token',
		component: ResetPassword
	},
	{ exact: true, path: '/activate/:uid/:token', component: AccountActivation }
];
