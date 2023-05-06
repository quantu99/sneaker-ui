import Header from './Header';
import Top from './Top/Top';
import Slider from './Slide/Slider';
import Products from './Products';
import End from './End';
import Content from './Content/Content';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { faArrowUp, faArrowsUpToLine } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function DefaultLayout({
    children,
    cartItems,
    handleAddProducts,
    wishItems,
    handleAddWishProducts,
    handleRemoveWishProducts,
    productItems,
    momentItems,
}) {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = function () {
            setScroll(window.scrollY >= 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const moveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div>
            <Header cartItems={cartItems} wishItems={wishItems} productItems={productItems} />
            <div className="container">
                <Slider />
                <Top />
                <Products
                    productItems={productItems}
                    handleAddProducts={handleAddProducts}
                    wishItems={wishItems}
                    handleAddWishProducts={handleAddWishProducts}
                    handleRemoveWishProducts={handleRemoveWishProducts}
                />
                <Content momentItems={momentItems}></Content>
                {scroll && (
                    <button className={cx('btn-top')} onClick={moveToTop}>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                )}
                <End />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
