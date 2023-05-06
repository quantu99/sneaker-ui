import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SizeDetail.module.scss';
import { Link } from 'react-router-dom';
import sneaker from '../../image/81sneakers4.jpg';

import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
    faArrowUp,
    faSquareCheck,
    faCartShopping,
    faSliders,
    faArrowUpRightFromSquare,
    faChevronRight,
    faCircleCheck,
    faHeartCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Layout/DefaultLayout/Header';
import End from '../../components/Layout/DefaultLayout/End';
const cx = classNames.bind(styles);
function MediumItems({ product, handleAddProducts, handleAddWishProducts }) {
    const [iconVisible, setIconVisible] = useState(true);
    const [textVisible, setTextVisible] = useState(true);
    function toggleIcon() {
        setIconVisible(!iconVisible);
    }
    function toggleText() {
        setTextVisible(!textVisible);
    }
    return (
        <div className={cx('container')}>
            <Link to={`/sneakers/${product.id}`}>
                <img className={cx('product_img')} src={product.img} />
                <div className={cx('product_caption')}>
                    <h3>
                        <a href="">{product.name}</a>
                    </h3>
                    <p className={cx('product_type')}>{product.type}</p>
                    <h3 className={cx('product_price')}>đ {product.price}</h3>
                </div>
            </Link>
            <div className={cx('product_detail')}>
                <div className={cx('product_detail-left')}>
                    <Tippy
                        interactive={true}
                        placement="top"
                        render={(attrs) => (
                            <div className={cx('product-tippy')} tabIndex="-1" {...attrs}>
                                Add to Cart
                            </div>
                        )}
                    >
                        <a>
                            {textVisible ? (
                                <div onClick={toggleText}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <span onClick={() => handleAddProducts(product)} className={cx('left-content')}>
                                        ADD TO CART
                                    </span>
                                </div>
                            ) : (
                                <div onClick={toggleText}>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <span onClick={() => handleAddProducts(product)} className={cx('left-content')}>
                                        ITEM IS ADDED TO CART
                                    </span>
                                </div>
                            )}
                        </a>
                    </Tippy>
                </div>
                <div className={cx('product_detail-right')}>
                    <Tippy
                        interactive={true}
                        placement="top"
                        render={(attrs) => (
                            <div className={cx('product-tippy')} tabIndex="-1" {...attrs}>
                                View Details
                            </div>
                        )}
                    >
                        <Link to={`/sneakers/${product.id}`}>
                            <FontAwesomeIcon icon={faSliders} />
                        </Link>
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
                        <a onClick={() => handleAddWishProducts(product)}>
                            {iconVisible ? (
                                <FontAwesomeIcon onClick={toggleIcon} className={cx('heart')} icon={faHeart} />
                            ) : (
                                <FontAwesomeIcon
                                    onClick={toggleIcon}
                                    className={cx('heart')}
                                    icon={faHeartCircleCheck}
                                />
                            )}
                        </a>
                    </Tippy>

                    <a>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>
            </div>
        </div>
    );
}
function Medium({ cartItems, handleAddProducts, wishItems, handleAddWishProducts, productItems }) {
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
    const [size, setSize] = useState([]);
    useEffect(() => {
        const products = productItems.filter((products) => {
            return products.size >= 39 && products.size <= 41;
        });
        setSize(products);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Header
                cartItems={cartItems}
                handleAddProducts={handleAddProducts}
                wishItems={wishItems}
                handleAddWishProducts={handleAddWishProducts}
            ></Header>
            <div className={cx('header')}>
                <Link className={cx('header-home')} to={'/sneaker-ui'}>
                    Home
                </Link>
                <FontAwesomeIcon className={cx('header-icon')} icon={faChevronRight} />
                <Link className={cx('header-sneakers')} to={'/sneakers'}>
                    Sneakers
                </Link>
                <FontAwesomeIcon className={cx('header-icon')} icon={faChevronRight} />

                <Link to={'/sneakers/1000000'} className={cx('header-product')}>
                    Size: 39- 41
                </Link>
            </div>
            <div className={cx('wrapper-2')}>
                <aside className={cx('sidebar')}>
                    <div className={cx('sidebar-container')}>
                        <h3 className={cx('sidebar-header')}>CATEGORIES</h3>
                        <ul>
                            <li className={cx('brand')}>
                                <Link className={cx('checkbox')} to={'/sneakers/nike'}>
                                    <FontAwesomeIcon className={cx('square')} icon={faSquare} />
                                    <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                </Link>
                                Nike
                            </li>
                            <li className={cx('brand')}>
                                <Link className={cx('checkbox')} to={'/sneakers/adidas'}>
                                    <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                    <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                </Link>
                                Adidas
                            </li>
                            <li className={cx('brand')}>
                                <Link className={cx('checkbox')} to={'/sneakers/jordan'}>
                                    <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                    <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                </Link>
                                Jordan
                            </li>
                            <li className={cx('brand')}>
                                <Link className={cx('checkbox')} to={'/sneakers/puma'}>
                                    <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                    <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                </Link>
                                Puma
                            </li>
                        </ul>

                        {/* Price */}
                        <h3 className={cx('price')}>Price</h3>
                        <ul>
                            <li className={cx('brand')}>
                                <Link className={cx('checkbox')} to={'/sneakers/1000000'}>
                                    <FontAwesomeIcon className={cx('square')} icon={faSquare} />
                                    <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                </Link>
                                &#60; đ 1.000.000
                            </li>
                            <li className={cx('brand')}>
                                <Link className={cx('checkbox')} to={'/sneakers/1000001-3000000'}>
                                    <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                    <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                </Link>
                                đ 1.000.000 - đ 3.000.000
                            </li>
                            <li className={cx('brand')}>
                                <Link className={cx('checkbox')} to={'/sneakers/3000001-5000000'}>
                                    <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                    <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                </Link>
                                đ 3.000.000 - đ 5.000.000
                            </li>
                            <li className={cx('brand')}>
                                <Link className={cx('checkbox')} to={'/sneakers/5000000'}>
                                    <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                    <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                </Link>
                                &#62; đ 5.000.000
                            </li>
                            {/* Size */}
                            <h3 className={cx('price')}>Size</h3>
                            <ul>
                                <li className={cx('brand')}>
                                    <Link className={cx('checkbox')} to={`/sneakers/small`}>
                                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />
                                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                    </Link>
                                    36- 38(US: 3.5- 5.5)
                                </li>
                                <li className={cx('brand')}>
                                    <Link className={cx('checkbox')} to={'/sneakers/medium'}>
                                        <FontAwesomeIcon className={cx('square', 'medium')} icon={faSquare} />

                                        <FontAwesomeIcon
                                            className={cx('square-check', 'medium-check')}
                                            icon={faSquareCheck}
                                        />
                                    </Link>
                                    39- 41(US: 6.5- 8)
                                </li>
                                <li className={cx('brand')}>
                                    <Link className={cx('checkbox')} to={'/sneakers/large'}>
                                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                    </Link>
                                    42- 44(US: 9- 11 )
                                </li>

                                <li className={cx('brand')}>
                                    <Link className={cx('checkbox')} to={'/sneakers/extra-large'}>
                                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                    </Link>
                                    &#62; 45(US: &#62; 11.5)
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <img className={cx('sidebar-img')} src={sneaker} />
                </aside>
                <div className={cx('products')}>
                    <h1 className={cx('products-header')}>PRODUCTS</h1>
                    <div className={cx('products-detail')}>
                        {size.map((product) => (
                            <MediumItems
                                product={product}
                                handleAddProducts={handleAddProducts}
                                handleAddWishProducts={handleAddWishProducts}
                            />
                        ))}
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

export default Medium;
