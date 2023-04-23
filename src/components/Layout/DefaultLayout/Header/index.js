import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBagShopping,
    faCaretDown,
    faCaretLeft,
    faCaretRight,
    faChevronDown,
    faHeadset,
    faMapPin,
    faPhone,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Wrapper from '../../../Popper/Wrapper';
import Search from '../../Search';

const cx = classNames.bind(styles);
function Header({ cartItems, wishItems }) {
    return (
        <div className={cx('header_wrapper')}>
            <div className={cx('header_inner')}>
                <div className={cx('header_upper')}>
                    <Link to="/">
                        <img
                            className={cx('header_upper-image')}
                            src="https://scontent.fvca1-3.fna.fbcdn.net/v/t1.15752-9/338080670_915671709686265_8393406944187007139_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=MWmUCmxljc8AX_wUeCR&_nc_ht=scontent.fvca1-3.fna&oh=03_AdS8zvTwi1LHHD4gtohmGYpsoa1JOGHIDmuytqyz6MxYYw&oe=644B04DF"
                            alt="81 sneakers"
                        />
                    </Link>
                    <div className={cx('header_upper-menu')}>
                        <ul className={cx('header_upper-menu-list')}>
                            <li className={cx('header_upper-menu-list-item')}>
                                <Link to="/">HOME</Link>
                                {/* <FontAwesomeIcon className={cx('upper-icon')} icon={faChevronDown} /> */}
                            </li>
                            <Tippy
                                interactive={true}
                                placement="bottom"
                                render={(attrs) => (
                                    <div className={cx('upper_menu-result')} tabIndex="-1" {...attrs}>
                                        <Wrapper>
                                            <ul>
                                                <li>For Men</li>
                                                <li>For Women</li>
                                                <li className={cx('upper_menu-result-list-item')}>
                                                    Others
                                                    <FontAwesomeIcon
                                                        className={cx('upper_menu-result-list-item-iconDown')}
                                                        icon={faCaretDown}
                                                    />
                                                    <FontAwesomeIcon
                                                        className={cx('upper_menu-result-list-item-iconLeft')}
                                                        icon={faCaretRight}
                                                    />
                                                    <ul className={cx('menu-children-list')}>
                                                        <Link to={'/sneakers/nike'}>
                                                            <li className={cx('menu-children')}>Nike</li>
                                                        </Link>
                                                        <Link to={'/sneakers/adidas'}>
                                                            <li className={cx('menu-children')}>Adidas</li>
                                                        </Link>
                                                        <Link to={'/sneakers/jordan'}>
                                                            <li className={cx('menu-children')}>Jordan</li>
                                                        </Link>
                                                        <Link to={'/sneakers/gucci'}>
                                                            <li className={cx('menu-children')}>Gucci</li>
                                                        </Link>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </Wrapper>
                                    </div>
                                )}
                            >
                                <li className={cx('header_upper-menu-list-item')}>
                                    SNEAKERS
                                    <FontAwesomeIcon className={cx('upper-icon')} icon={faChevronDown} />
                                </li>
                            </Tippy>
                            <Tippy
                                interactive={true}
                                placement="bottom"
                                render={(attrs) => (
                                    <div className={cx('upper_menu-result')} tabIndex="-1" {...attrs}>
                                        <Wrapper>
                                            <div className={cx('coming')}>
                                                <h1>Coming soon !</h1>
                                                <img src="https://cdn.pixabay.com/photo/2017/12/10/10/09/coming-soon-3009545_640.png" />
                                            </div>
                                        </Wrapper>
                                    </div>
                                )}
                            >
                                <li className={cx('header_upper-menu-list-item')}>
                                    ACCESSORIES
                                    <FontAwesomeIcon className={cx('upper-icon')} icon={faChevronDown} />
                                </li>
                            </Tippy>
                            <Tippy
                                interactive={true}
                                placement="bottom"
                                render={(attrs) => (
                                    <div className={cx('upper_menu-result')} tabIndex="-1" {...attrs}>
                                        <Wrapper></Wrapper>
                                    </div>
                                )}
                            >
                                <li className={cx('header_upper-menu-list-item')}>
                                    TOP PRODUCTS
                                    <FontAwesomeIcon className={cx('upper-icon')} icon={faChevronDown} />
                                </li>
                            </Tippy>
                            <Tippy
                                interactive={true}
                                placement="bottom"
                                render={(attrs) => (
                                    <div className={cx('upper_menu-result')} tabIndex="-1" {...attrs}>
                                        <Wrapper>
                                            <ul>
                                                <li className={cx('upper_menu-result-list-item')}>
                                                    <FontAwesomeIcon
                                                        className={cx('upper_menu-result-list-item-icon')}
                                                        icon={faMapPin}
                                                    />
                                                    Address
                                                    <FontAwesomeIcon
                                                        className={cx('upper_menu-result-list-item-iconDown')}
                                                        icon={faCaretDown}
                                                    />
                                                    <FontAwesomeIcon
                                                        className={cx('upper_menu-result-list-item-iconLeft')}
                                                        icon={faCaretRight}
                                                    />
                                                    <ul className={cx('menu-children-list')}>
                                                        <li className={cx('menu-children')}>
                                                            <a
                                                                href="https://www.google.com/maps/place/Sneaker+81/@10.8075805,106.6375505,17z/data=!3m1!4b1!4m6!3m5!1s0x31752eb257b3701f:0x65b7c3b3491bf08b!8m2!3d10.8075752!4d106.6401254!16s%2Fg%2F11nmfh23t5?hl=vi-VN"
                                                                target="_blank"
                                                            >
                                                                Số 137 Nguyễn Đức Thuận Phường 13 Quận Tân Bình, Ho Chi
                                                                Minh City, Vietnam
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className={cx('upper_menu-result-list-item')}>
                                                    <FontAwesomeIcon
                                                        className={cx('upper_menu-result-list-item-icon')}
                                                        icon={faPhone}
                                                    />
                                                    Contact us
                                                    <FontAwesomeIcon
                                                        className={cx('upper_menu-result-list-item-iconDown')}
                                                        icon={faCaretDown}
                                                    />
                                                    <FontAwesomeIcon
                                                        className={cx('upper_menu-result-list-item-iconLeft')}
                                                        icon={faCaretRight}
                                                    />
                                                    <ul className={cx('menu-children-list')}>
                                                        <li className={cx('menu-children')}>
                                                            Phone number: (+84)988585794
                                                        </li>
                                                        <li className={cx('menu-children')}>
                                                            <a
                                                                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvnJtCJVNHQPGNwFMrTHxMZlnrZkpvBWHnhBLnrHkWrGtmtJSlCvQXJzmpRVvnPgmXZzML"
                                                                target="_blank"
                                                            >
                                                                Gmail: trantandat267@gmail.com
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </Wrapper>
                                    </div>
                                )}
                            >
                                <li className={cx('header_upper-menu-list-item')}>
                                    ABOUT US
                                    <FontAwesomeIcon className={cx('upper-icon')} icon={faChevronDown} />
                                </li>
                            </Tippy>
                        </ul>
                    </div>
                </div>
                <div className={cx('header_under')}>
                    <div className={cx('under_inner')}>
                        <div className={cx('under_inner-left')}>
                            <FontAwesomeIcon className={cx('under_inner-left-icon')} icon={faHeadset} />
                            <div className={cx('left_content')}>
                                <span className={cx('content')}>Customer Support</span>
                                <span className={cx('phone')}>(+84) 98 858 57 94</span>
                            </div>
                        </div>
                        <Search></Search>
                        <div className={cx('under_inner-right')}>
                            <div className={cx('register')}>
                                <div className={cx('register-logo')}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className={cx('register-content-wrapper')}>
                                    <Link to={'/register'}>
                                        <a className={cx('link')}>Register</a>
                                    </Link>
                                    <span>
                                        or
                                        <a className={cx('signin')}> Sign in</a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx('carts')}>
                                <Link to={'/wish-list'} className={cx('favorite')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <div className={cx('favorite-number')}>
                                        {wishItems.length === 0 ? '0' : wishItems.length}
                                    </div>
                                </Link>

                                <Link to={'/cart'} className={cx('cart')}>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                    <div className={cx('cart-number')}>
                                        {cartItems.length === 0 ? '0' : cartItems.length}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
