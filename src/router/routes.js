import Home from '../views/home';
import Product from '../views/product';
import ContactUs from '../views/home/ContactUs';
import PublicTransportation from './../views/chatbot/PublicTransportation';
import HealthCare from '../views/chatbot/HealthCare.';
import Telecommunication from './../views/chatbot/Telecommunication';

const routes = [
	{ path: '/home', component: Home },
	{ path: '/product', component: Product },
	{ path: '/contactus', component: ContactUs },
	{ path: '/chatbot/public-transportation', component: PublicTransportation },
	{ path: '/chatbot/healthcare', component: HealthCare },
	{ path: '/chatbot/telecommunication', component: Telecommunication },
];

export default routes;
