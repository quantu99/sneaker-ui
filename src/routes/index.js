import Home from '../pages/Home';
import Accessories from '../pages/Accessories';
import Sneakers from '../pages/Sneakers';
import SneakersDetail from '../pages/SneakersDetail';
import Nike from '../pages/BrandsDetail/Nike';
import Jordan from '../pages/BrandsDetail/Jordan';
import Adidas from '../pages/BrandsDetail/Adidas';
import Puma from '../pages/BrandsDetail/Puma';
import Cart from '../pages/Cart/Cart';
import WistList from '../pages/WishList/WishList';
import Form from '../pages/FormSignUp/Form';
import FormSignInFinal from '../pages/FormSignIn/FormSignInFinal';
import lessThanOne from '../pages/PricesDetail/lessThanOne';
import OneToThree from '../pages/PricesDetail/OneToThree';
import ThreeToFive from '../pages/PricesDetail/ThreeToFive';
import MoreThanFive from '../pages/PricesDetail/MoreThanFive';
import Small from '../pages/SizeDetail/Small';
import Medium from '../pages/SizeDetail/Medium';
import Large from '../pages/SizeDetail/Large';
import ExtraLarge from '../pages/SizeDetail/ExtraLarge';

const publicRoutes = [
    { path: '/sneaker-ui', component: Home, layout: null },
    { path: '/accessories', component: Accessories, layout: null },
    { path: '/sneakers', component: Sneakers, layout: null },
    { path: '/sneakers/:productId', component: SneakersDetail, layout: null },
    { path: '/sneakers/nike', component: Nike, layout: null },
    { path: '/sneakers/jordan', component: Jordan, layout: null },
    { path: '/sneakers/adidas', component: Adidas, layout: null },
    { path: '/sneakers/puma', component: Puma, layout: null },
    { path: '/sneakers/1000000', component: lessThanOne, layout: null },
    { path: '/sneakers/1000001-3000000', component: OneToThree, layout: null },
    { path: '/sneakers/3000001-5000000', component: ThreeToFive, layout: null },
    { path: '/sneakers/5000000', component: MoreThanFive, layout: null },
    { path: '/sneakers/small', component: Small, layout: null },
    { path: '/sneakers/medium', component: Medium, layout: null },
    { path: '/sneakers/large', component: Large, layout: null },
    { path: '/sneakers/extra-large', component: ExtraLarge, layout: null },
    { path: '/cart', component: Cart, layout: null },
    { path: '/wish-list', component: WistList, layout: null },
    { path: '/register', component: Form, layout: null },
    { path: '/login', component: FormSignInFinal, layout: null },
];

export { publicRoutes };
