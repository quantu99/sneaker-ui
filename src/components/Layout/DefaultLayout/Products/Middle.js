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
// const products = [
//     {
//         img: 'https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/340261768_192293440254083_1279033147227164029_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=blZhgqWDMm4AX-sLnMN&_nc_ht=scontent.fvca1-1.fna&oh=00_AfDi_aQsnwMeJGFu4ffKpfbV634zNJq5pS7GDUfpzL_OXw&oe=64340DD6',
//         price: 2850000,
//         name: 'Jordan 1 Mid Black Amarillo Orange',
//         type: 'Shoes',
//     },
//     {
//         img: 'https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/340261835_251959147179969_2639807780897085861_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=rJWOPtqKvHYAX9QIuvz&_nc_ht=scontent.fvca1-2.fna&oh=00_AfDMRX_G5y-pk8BVflYK2Ke7jMELehwaNyBZV6hqZd9d7A&oe=6433811A',
//         price: 4200000,
//         name: 'Jordan 1 Retro High OG Light Smoke Grey ',
//         type: 'Shoes',
//     },
//     {
//         img: 'https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/340258882_1217119552499399_3295203818175907614_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=KMDt27zJtCQAX8HkdTJ&_nc_ht=scontent.fvca1-3.fna&oh=00_AfBUTHc5Fe5cPYHnd2VGGlIMlFQhZh97a7q-esJLRmaiZw&oe=6433F476',
//         price: 4800000,
//         name: 'Gucchi Tennis 1977',
//         type: 'Shoes',
//     },
//     {
//         img: 'https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/339460085_1053237105636922_3810480847682156601_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=w9COFYrZfjIAX_OkVN6&_nc_ht=scontent.fvca1-2.fna&oh=00_AfCV6KDDe0k6B2eqAKY4txRANqjtAFuCL22i-9b0rTozQw&oe=64331DDE',
//         price: 850000,
//         name: "Asics Gel PTG MT 'Cream Black' ",
//         type: 'Shoes',
//     },
//     {
//         img: 'https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/338689813_586606516733471_870786126140283126_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=weLD3u4vWhwAX9NqEEF&_nc_ht=scontent.fvca1-4.fna&oh=00_AfAg84KPqn1TEmTfVHBm4CTkbXUaC9C3c8JDHSLOb-JhkQ&oe=64338DF4',
//         price: '850000 - 1050000',
//         name: 'SB Delta Force Valk White',
//         type: 'Shoes',
//     },
//     {
//         img: 'https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/338579506_536033898694459_227693160054892589_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=EHcuOrDU8dcAX87X3KQ&_nc_ht=scontent.fvca1-3.fna&oh=00_AfDNLjxercUBwD0J0-L9x1VhAnI0Nno5Dp1REA8dnRt6ZQ&oe=64331E65',
//         price: 900000,
//         name: 'Court Legacy OG',
//         type: 'Shoes',
//     },
//     {
//         img: 'https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/338873724_1265588544048857_3794252966185740852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=rKQuQl1kYK4AX9--IQf&_nc_ht=scontent.fvca1-3.fna&oh=00_AfDRqXldTckxb8kNvR4wsWkFdXEtaJqqAMMRVvESRGcTlQ&oe=64334AED',
//         price: 4200000,
//         name: 'Jordan 1 Retro High OG Hyper Royal',
//         type: 'Shoes',
//     },
//     {
//         img: 'https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/338364961_886213792673814_426413545964515731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=YwKKHjDnMxMAX_68bbY&_nc_ht=scontent.fvca1-1.fna&oh=00_AfB6iw_c2DxaBACnaQAI_rV_7OhwJGlxS_ogu7u7TIWRTw&oe=6433E0F3',
//         price: 4300000,
//         name: 'Off White x Blazer Low White University Red',
//         type: 'Shoes',
//     },
//     {
//         img: 'https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/338367308_175553511994707_951087930368027712_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=kXN-BGjAMVEAX-EL14r&_nc_ht=scontent.fvca1-3.fna&oh=00_AfBnEWJYG0xmFOsjOole5rmDs2ivHYyuF6WBLhEquLUw4w&oe=643465FB',
//         price: 900000,
//         name: "Alphabounce EM 'Grey Gold '",
//         type: 'Shoes',
//     },
//     {
//         img: 'https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/338489029_1342844876561396_1799405206956021248_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=VsdobJnBEc4AX9wiTUM&_nc_ht=scontent.fvca1-4.fna&oh=00_AfALwZNj4Htyh4gUZIABXJCra_nlLw9ZSC_l03pZcBsh0Q&oe=643354F1',
//         price: 1550000,
//         name: "Freaker x Asics Gel Lite 3 'Tiger Snake'",
//         type: 'Shoes',
//     },
//     {
//         img: 'https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/338043896_1335411830335905_1518162388023538038_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=kdXgVt_dd_AAX_dnNpp&_nc_ht=scontent.fvca1-3.fna&oh=00_AfAixl0e7zmd-UxEHcEIvTzDm5jJ8qVeSmHTw9Xvf7vIrw&oe=64336675',
//         price: 1550000,
//         name: "Puma Ralph Sampson 70 'White Orange'",
//         type: 'Shoes',
//     },
//     {
//         img: 'https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/337993200_1222620701976031_7948293466418036810_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=2wZFqHdn9bgAX9RhjkL&_nc_ht=scontent.fvca1-3.fna&oh=00_AfCluwKyrjCKITC16DFVx06jEwy7EnH9EHv8dhqWddIq3A&oe=6434DD2C',
//         price: 5500000,
//         name: "Jordan 1 Retro High OG 'Pine Green'",
//         type: 'Shoes',
//     },
// ];
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
function Middle({ handleAddProducts, handleAddWishProducts, handleRemoveWishProducts }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    }, []);
    return (
        <div className={cx('wrapper')}>
            {products.map((product) => (
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
