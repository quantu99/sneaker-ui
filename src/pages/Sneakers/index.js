import Header from '../../components/Layout/DefaultLayout/Header';
import Sidebar from '../../components/Layout/DefaultLayout/Sidebar';
import End from '../../components/Layout/DefaultLayout/End';
import Products from '../../components/Layout/DefaultLayout/Products';
import styles from './Sneakers.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Sneakers({ cartItems, handleAddProducts, wishItems, handleAddWishProducts, productItems }) {
    return (
        <div>
            <Header cartItems={cartItems} wishItems={wishItems} />
            <div className={cx('container')}>
                <aside className={cx('wrapper-3')}>
                    <Sidebar></Sidebar>
                </aside>
                <div className={cx('products')}>
                    <h1 className={cx('products-header')}>PRODUCTS</h1>
                    {/* <div className={cx('products-options')}>
                        <FontAwesomeIcon icon={faGrid} />
                    </div>
                    <FontAwesomeIcon icon={fa}/> */}
                    <Products
                        cartItems={cartItems}
                        handleAddProducts={handleAddProducts}
                        wishItems={wishItems}
                        handleAddWishProducts={handleAddWishProducts}
                        productItems={productItems}
                    />
                </div>
            </div>
            <End />
        </div>
    );
}

export default Sneakers;
