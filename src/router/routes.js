import Home from '../views/home';
import Product from '../views/product';
import ContactUs from './../views/home/ContactUs';

const routes = [
	{ path: '/home', component: Home },
	{ path: '/product', component: Product },
	{ path: '/contactus', component: ContactUs }
];

export default routes;
