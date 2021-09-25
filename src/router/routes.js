import Home from '../views/home';
import Product from '../views/product';
import ContactUs from '../views/home/ContactUs';
import PublicTransportation from './../views/chatbot/PublicTransportation';
import Dashboard from './../views/dashboard/index';
import HealthCare from '../views/chatbot/HealthCare.';
import Telecommunication from './../views/chatbot/Telecommunication';
import AboutUs from '../views/about';

const routes = [
	{ path: '/home', component: Home },
	{ path: '/product', component: Product },
	{ path: '/contactus', component: ContactUs },
	{ path: '/aboutus', component: AboutUs },
	{ path: '/chatbot/public-transportation', component: PublicTransportation },
	{ path: '/admin/dashboard', component: Dashboard },
	{ path: '/chatbot/healthcare', component: HealthCare },
	{ path: '/chatbot/telecommunication', component: Telecommunication }
];

export default routes;
