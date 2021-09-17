import ContactUs from '../views/home/ContactUs';
import Register from '../views/register';
import Login from './../views/login';

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/contactus', component: ContactUs },
    
];

export default routes;
