import Header from '../../components/Layout/DefaultLayout/Header';
import Sidebar from '../../components/Layout/DefaultLayout/Sidebar';
import End from '../../components/Layout/DefaultLayout/End';
import styles from './Sneakers.module.scss';
import classNames from 'classnames/bind';
import Middle from '../../components/Layout/DefaultLayout/Products/Middle';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Sneakers({ cartItems, handleAddProducts, wishItems, handleAddWishProducts, productItems }) {
    const [height, setHeight] = useState(1015);
    const [scroll, setScroll] = useState(false);
    const moveToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        const handleScroll = function () {
            setScroll(window.scrollY >= 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <Header cartItems={cartItems} wishItems={wishItems} productItems={productItems} />
            <div className={cx('container')}>
                <aside className={cx('wrapper-3')}>
                    <Sidebar></Sidebar>
                </aside>
                <div className={cx('products')}>
                    <h1 className={cx('products-header')}>PRODUCTS</h1>
                    <div style={{ height: `${height}px` }} className={cx('products-wrapper')}>
                        <Middle
                            cartItems={cartItems}
                            handleAddProducts={handleAddProducts}
                            wishItems={wishItems}
                            handleAddWishProducts={handleAddWishProducts}
                            productItems={productItems}
                        ></Middle>
                    </div>
                    <div onClick={() => setHeight(height + 1450)} className={cx('products-more')}>
                        <h2 className={cx('products-more-content')}>-----Watch more products-----</h2>
                    </div>
                </div>
            </div>
            {scroll && (
                <button className={cx('btn-top')} onClick={moveToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
            <End />
        </div>
    );
}

export default Sneakers;
