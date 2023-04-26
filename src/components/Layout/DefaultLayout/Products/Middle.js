import classNames from 'classnames/bind';
import styles from './Middle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpRightFromSquare,
    faCartShopping,
    faSliders,
    faHeartCircleCheck,
    faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const ProductsItem = ({ product, handleAddProducts, handleAddWishProducts, handleRemoveWishProducts }) => {
    const [iconVisible, setIconVisible] = useState(true);
    const [textVisible, setTextVisible] = useState(true);
    function toggleIcon() {
        setIconVisible(!iconVisible);
    }
    function toggleText() {
        setTextVisible(!textVisible);
    }
    return (
        <div>
            {product ? (
                <div className={cx('container')}>
                    <Link to={`/sneakers/${product.id}`}>
                        <img className={cx('product_img')} src={product.img} />
                        <div className={cx('product_caption')}>
                            <h3 className={cx('product_name')}>{product.name}</h3>
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
                                    <div>
                                        {textVisible ? (
                                            <div onClick={toggleText}>
                                                <FontAwesomeIcon icon={faCartShopping} />
                                                <span
                                                    onClick={() => handleAddProducts(product)}
                                                    className={cx('left-content')}
                                                >
                                                    ADD TO CART
                                                </span>
                                            </div>
                                        ) : (
                                            <div onClick={toggleText}>
                                                <FontAwesomeIcon icon={faCircleCheck} />
                                                <span
                                                    onClick={() => handleAddProducts(product)}
                                                    className={cx('left-content')}
                                                >
                                                    ITEM IS ADDED
                                                </span>
                                            </div>
                                        )}
                                    </div>
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
                                <a className={cx('wish')} onClick={() => handleAddWishProducts(product)}>
                                    <div>
                                        {iconVisible ? (
                                            <FontAwesomeIcon
                                                className={cx('heart')}
                                                icon={faHeart}
                                                onClick={toggleIcon}
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                className={cx('heart-check')}
                                                icon={faHeartCircleCheck}
                                                onClick={toggleIcon}
                                            />
                                        )}
                                    </div>
                                </a>
                            </Tippy>

                            <a>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <div>This product is unvailable, sorry for this inconvenience.</div>
            )}
        </div>
    );
};
function Middle({ handleAddProducts, handleAddWishProducts, handleRemoveWishProducts, productItems }) {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:3000/data')
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setProducts(res);
    //         });
    // }, []);
    return (
        <div className={cx('wrapper')}>
            {productItems.map((product) => (
                <ProductsItem
                    product={product}
                    handleAddProducts={handleAddProducts}
                    handleAddWishProducts={handleAddWishProducts}
                    handleRemoveWishProducts={handleRemoveWishProducts}
                />
            ))}
        </div>
    );
}

export default Middle;
