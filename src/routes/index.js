import SportLayout from '../components/Layout/SportLayout';

import HomePage from '../Pages/HomePage/HomePage';
import News from '../Pages/News/News';
import Sports from '../Pages/Sports/Sports';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import Business from '../Pages/Business/Business';
import Innovation from '../Pages/Innovation/Innovation';
import Culture from '../Pages/Culture/Culture';
import Account from '../Pages/Account/Account';
import Setting from '../Pages/Setting/Setting';

//Public routes
const publicRouter = [
    { path: '/', component: HomePage },
    { path: '/news', component: News },
    { path: '/sports', component: Sports, layout: SportLayout },
    { path: '/login', component: Login, layout: null },
    { path: '/Register', component: Register, layout: null },
    { path: '/business', component: Business },
    { path: '/innovation', component: Innovation },
    { path: '/culture', component: Culture },
    { path: '/account', component: Account, layout: null },
    { path: '/setting', component: Setting, layout: null },
];

//Private routes
const privateRouter = [];

export { publicRouter, privateRouter };
