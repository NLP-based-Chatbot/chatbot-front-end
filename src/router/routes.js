import Home from '../views/home';
import Product from '../views/product';
import ContactUs from '../views/home/ContactUs';
import PublicTransportation from './../views/chatbot/PublicTransportation';

const routes = [
	{ path: '/home', component: Home },
	{ path: '/product', component: Product },
	{ path: '/contactus', component: ContactUs },
	{ path: '/chatbot/public-transportation', component: PublicTransportation }
];

export default routes;
