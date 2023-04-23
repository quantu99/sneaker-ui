import Home from '../pages/Home';
import Accessories from '../pages/Accessories';
import Sneakers from '../pages/Sneakers';
import SneakersDetail from '../pages/SneakersDetail';
import Nike from '../pages/BrandsDetail/Nike';
import Jordan from '../pages/BrandsDetail/Jordan';
import Adidas from '../pages/BrandsDetail/Adidas';
import Gucci from '../pages/BrandsDetail/Gucci';
import Cart from '../pages/Cart/Cart';
import WistList from '../pages/WishList/WishList';
import FormSignUp from '../pages/FormSignUp/FormSignUp';
import Form from '../pages/FormSignUp/Form';

const publicRoutes = [
    { path: '/', component: Home, layout: null },
    { path: '/accessories', component: Accessories, layout: null },
    { path: '/sneakers', component: Sneakers, layout: null },
    { path: '/sneakers/:productId', component: SneakersDetail, layout: null },
    { path: '/sneakers/nike', component: Nike, layout: null },
    { path: '/sneakers/jordan', component: Jordan, layout: null },
    { path: '/sneakers/adidas', component: Adidas, layout: null },
    { path: '/sneakers/gucci', component: Gucci, layout: null },
    { path: '/cart', component: Cart, layout: null },
    { path: '/wish-list', component: WistList, layout: null },
    { path: '/register', component: Form, layout: null },
];

export { publicRoutes };
