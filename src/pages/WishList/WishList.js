import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../../components/Layout/DefaultLayout/Sidebar';
import Header from '../../components/Layout/DefaultLayout/Header';
import styles from './WishList.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function WistList({ wishItems, handleRemoveWishProducts, handleAddWishProductsm, handleAddProducts, cartItems }) {
    const totalPrice = wishItems.reduce((accumulator, item) => accumulator + item.price, 0);
    return (
        <div className={cx('wrapper')}>
            <Header cartItems={cartItems} wishItems={wishItems} />
            <h1 className={cx('header')}>Your Favorite</h1>
            {wishItems.length === 0 && <div className={cx('cart_no-cart')}>No items are added</div>}
            <div className={cx('container')}>
                <aside className={cx('sidebar')}>
                    <Sidebar />
                </aside>
                <div className={cx('detail')}>
                    {wishItems.map((item) => (
                        <div className={cx('cart-info')}>
                            <img src={item.img} />
                            <div className={cx('info-1')}>
                                <div className={cx('info-2')}>
                                    <h1 className={cx('info-name')}>{item.name}</h1>
                                    <p className={cx('info-size')}>Size: {item.size}</p>
                                </div>
                                <div className={cx('info-3')}>
                                    <p className={cx('info-price')}>Price: đ{item.price}</p>
                                    <div className={cx('info-remove')} onClick={() => handleAddProducts(item)}>
                                        Add to cart
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={cx('total-price')}>
                        Total price:
                        <div className={cx('total-price-detail')}>đ{totalPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WistList;
