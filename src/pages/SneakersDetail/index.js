import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SneakersDetail.module.scss';
import { Link, useParams } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import Header from '../../components/Layout/DefaultLayout/Header';
import End from '../../components/Layout/DefaultLayout/End';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCircleCheck, faHeart, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const SneakersDetail = ({ handleAddProducts, cartItems, wishItems, handleAddWishProducts, productItems }) => {
    const [iconVisible, setIconVisible] = useState(true);
    const [textVisible, setTextVisible] = useState(true);
    function toggleIcon() {
        setIconVisible(!iconVisible);
    }
    function toggleText() {
        setTextVisible(!textVisible);
    }

    const { productId } = useParams();
    const product = productItems.find((product) => product.id == productId);
    return (
        <div>
            <Header cartItems={cartItems} wishItems={wishItems} productItems={productItems} />
            {product ? (
                <div className={cx('wrapper')}>
                    <div className={cx('header')}>
                        <Link className={cx('header-home')} to={'/'}>
                            Home
                        </Link>
                        <FontAwesomeIcon className={cx('header-icon')} icon={faChevronRight} />
                        <Link className={cx('header-sneakers')} to={'/sneakers'}>
                            Sneakers
                        </Link>
                        <FontAwesomeIcon className={cx('header-icon')} icon={faChevronRight} />

                        <Link className={cx('header-product')}>{product.name}</Link>
                    </div>
                    <div className={cx('container')}>
                        <img src={product.img} alt={product.name} />
                        <div className={cx('container-detail')}>
                            <div className={cx('info-upper')}>
                                <h2 className={cx('info-name')}>{product.name}</h2>
                                <div className={cx('info-brand')}>
                                    Brand:{' '}
                                    <Link to={`/sneakers/${product.brand}`}>
                                        <p className={cx('info-brand-detail')}> {product.brand}</p>
                                    </Link>
                                </div>
                                <div className={cx('info-size')}>
                                    Size: <p className={cx('info-size-detail')}>&#160; {product.size}</p>
                                </div>
                                <p className={cx('info-price')}>đ{product.price}</p>
                            </div>
                            <div className={cx('info-under')}>
                                <div className={cx('info-under-wrapper')}>
                                    <FontAwesomeIcon className={cx('info-icon')} icon={faCircle} />
                                    <div className={cx('info-cond')}>
                                        Condition: <p className={cx('info-cond-detail')}> {product.cond}</p>
                                    </div>
                                </div>
                                <div className={cx('info-under-wrapper')}>
                                    <FontAwesomeIcon className={cx('info-icon-2')} icon={faCircle} />
                                    <div className={cx('info-db')}>
                                        Delivery and Payment: <p className={cx('info-db-detail')}> {product.dp}</p>
                                    </div>
                                </div>

                                <div className={cx('info-gift-1')}>
                                    <FontAwesomeIcon className={cx('info-gift-icon')} icon={faSquareCheck} />
                                    Bonus free the auth Nike shocks(long, short).
                                </div>
                                <div className={cx('info-gift-2')}>
                                    <FontAwesomeIcon className={cx('info-gift-icon')} icon={faSquareCheck} />
                                    Bonus the replace shoes box.
                                </div>
                                <div className={cx('btn')}>
                                    <Tippy
                                        interactive={true}
                                        placement="top"
                                        render={(attrs) => (
                                            <div className={cx('product-tippy')} tabIndex="-1" {...attrs}>
                                                Add to Cart
                                            </div>
                                        )}
                                    >
                                        {textVisible ? (
                                            <div onClick={toggleText} className={cx('btn-div')}>
                                                <button
                                                    onClick={() => {
                                                        handleAddProducts(product);
                                                    }}
                                                    className={cx('btn-cart')}
                                                >
                                                    ADD TO CART
                                                </button>
                                            </div>
                                        ) : (
                                            <div onClick={toggleText} className={cx('btn-div')}>
                                                <button
                                                    className={cx('btn-cart-check')}
                                                    onClick={() => {
                                                        handleAddProducts(product);
                                                    }}
                                                    disabled={true}
                                                >
                                                    Item is added to cart
                                                    <FontAwesomeIcon
                                                        className={cx('btn-cart-check-icon')}
                                                        icon={faCircleCheck}
                                                    />
                                                </button>
                                            </div>
                                        )}
                                    </Tippy>
                                    <Tippy
                                        interactive={true}
                                        placement="top"
                                        render={(attrs) => (
                                            <div className={cx('product-tippy')} tabIndex="-1" {...attrs}>
                                                Add to Wish List
                                            </div>
                                        )}
                                    >
                                        {iconVisible ? (
                                            <div onClick={toggleIcon} className={cx('btn-div')}>
                                                <button
                                                    onClick={() => handleAddWishProducts(product)}
                                                    className={cx('btn-wish')}
                                                >
                                                    ADD TO WISHLIST
                                                </button>
                                            </div>
                                        ) : (
                                            <div onClick={toggleIcon} className={cx('btn-div')}>
                                                <button
                                                    disabled={true}
                                                    onClick={() => handleAddWishProducts(product)}
                                                    className={cx('btn-wish-check')}
                                                >
                                                    Okay! Check in your wish
                                                    <FontAwesomeIcon
                                                        className={cx('btn-wish-check-icon')}
                                                        icon={faHeart}
                                                    />
                                                </button>
                                            </div>
                                        )}
                                    </Tippy>
                                    <Tippy
                                        interactive={true}
                                        placement="top"
                                        render={(attrs) => (
                                            <div className={cx('product-tippy')} tabIndex="-1" {...attrs}>
                                                Buy now
                                            </div>
                                        )}
                                    >
                                        <div className={cx('btn-div')}>
                                            <button className={cx('btn-buy')}>BUY NOW</button>
                                        </div>
                                    </Tippy>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
            <End />
        </div>
    );
};

export default SneakersDetail;
