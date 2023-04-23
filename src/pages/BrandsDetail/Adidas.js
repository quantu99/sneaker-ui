import { useEffect } from 'react';
import { useState } from 'react';
import styles from './Adidas.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
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
const AdidasItems = ({ product, handleAddProducts, handleAddWishProducts }) => {
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
};
function Adidas({ cartItems, handleAddProducts, wishItems, handleAddWishProducts }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/data?brand=adidas')
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
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
                <Link className={cx('header-home')} to={'/'}>
                    Home
                </Link>
                <FontAwesomeIcon className={cx('header-icon')} icon={faChevronRight} />
                <Link className={cx('header-sneakers')} to={'/sneakers'}>
                    Sneakers
                </Link>
                <FontAwesomeIcon className={cx('header-icon')} icon={faChevronRight} />

                <Link to={'/sneakers/adidas'} className={cx('header-product')}>
                    Adidas
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
                                    <FontAwesomeIcon className={cx('square', 'adidas')} icon={faSquare} />

                                    <FontAwesomeIcon
                                        className={cx('square-check', 'adidas-check')}
                                        icon={faSquareCheck}
                                    />
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
                                <Link className={cx('checkbox')} to={'/sneakers/gucci'}>
                                    <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                    <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                </Link>
                                Gucci
                            </li>
                        </ul>

                        {/* Price */}
                        <h3 className={cx('price')}>Price</h3>
                        <ul>
                            <li className={cx('brand')}>
                                <Link className={cx('checkbox')} to={'/sneakers/nike'}>
                                    <FontAwesomeIcon className={cx('square')} icon={faSquare} />
                                    <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                </Link>
                                &#60; đ 1.000.000
                            </li>
                            <li className={cx('brand')}>
                                <Link className={cx('checkbox')} to={'/sneakers/adidas'}>
                                    <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                    <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                </Link>
                                đ 1.000.000 - đ 3.000.000
                            </li>
                            <li className={cx('brand')}>
                                <Link className={cx('checkbox')} to={'/sneakers/jordan'}>
                                    <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                    <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                </Link>
                                đ 3.000.000 - đ 5.000.000
                            </li>
                            <li className={cx('brand')}>
                                <Link className={cx('checkbox')} to={'/sneakers/gucci'}>
                                    <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                    <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                </Link>
                                &#62; đ 5.000.000
                            </li>
                            {/* Size */}
                            <h3 className={cx('price')}>Size</h3>
                            <ul>
                                <li className={cx('brand')}>
                                    <Link className={cx('checkbox')} to={`/sneakers/nike`}>
                                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />
                                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                    </Link>
                                    36- 38(US: 3.5- 5.5)
                                </li>
                                <li className={cx('brand')}>
                                    <Link className={cx('checkbox')} to={'/sneakers/adidas'}>
                                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                    </Link>
                                    39- 41(US: 6.5- 8)
                                </li>
                                <li className={cx('brand')}>
                                    <Link className={cx('checkbox')} to={'/sneakers/jordan'}>
                                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                    </Link>
                                    42- 44(US: 9- 11 )
                                </li>

                                <li className={cx('brand')}>
                                    <Link className={cx('checkbox')} to={'/sneakers/converse'}>
                                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                                    </Link>
                                    &#62; 45(US: &#62; 11.5)
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <img
                        className={cx('sidebar-img')}
                        src="https://pyxis.nymag.com/v1/imgs/c8c/c6f/a822e27af8ae7ae42c30004c46f0045816-01-Off-White-sneaker-LEDE.rvertical.w600.jpg"
                    />
                </aside>
                <div className={cx('products')}>
                    <h1 className={cx('products-header')}>PRODUCTS</h1>
                    <div className={cx('products-detail')}>
                        {products.map((product) => (
                            <AdidasItems
                                product={product}
                                handleAddProducts={handleAddProducts}
                                handleAddWishProducts={handleAddWishProducts}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <End />
        </div>
    );
}

export default Adidas;
