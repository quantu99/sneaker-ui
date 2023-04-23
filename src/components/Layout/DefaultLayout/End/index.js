import styles from './End.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import song2 from '../../../../music/song2.mp3';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
function End() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('container-1')}>
                    <img src="https://scontent.fvca1-3.fna.fbcdn.net/v/t1.15752-9/338080670_915671709686265_8393406944187007139_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=MWmUCmxljc8AX_wUeCR&_nc_ht=scontent.fvca1-3.fna&oh=03_AdS8zvTwi1LHHD4gtohmGYpsoa1JOGHIDmuytqyz6MxYYw&oe=644B04DF" />
                    <div className={cx('container-1-center')}>
                        <div className={cx('content')}>
                            <FontAwesomeIcon className={cx('container-1-content-icon')} icon={faHeadset} />
                            <span className={cx('phone')}>(+84) 98 858 57 94</span>
                        </div>
                        <p className={cx('caption')}>
                            We are the small hood, where all of peoples who love the beauty and have the same passion
                            with "Underground Culture", where we can meet everybody everyday. We can share, talk and
                            spread the beauty. More than this, we can listen to the story of each others. Come here,
                            welcome to us- 81 Sneaker
                        </p>
                    </div>
                    <div className={cx('container-1-under')}>
                        <div className={cx('under-header')}> Subcribe and follow us</div>
                        <div className={cx('under-page')}>
                            <a href="https://www.facebook.com/81Sneaker" target="_blank">
                                <FontAwesomeIcon className={cx('fb')} icon={faFacebook} />
                            </a>
                            <a href="https://www.tiktok.com/@81.sneakerr" target="_blank">
                                <FontAwesomeIcon className={cx('tik')} icon={faTiktok} />
                            </a>
                            <a href="https://www.instagram.com/81.sneaker/" target="_blank">
                                <FontAwesomeIcon className={cx('ins')} icon={faInstagram} />
                            </a>
                            <FontAwesomeIcon className={cx('ytb')} icon={faYoutube} />
                        </div>
                    </div>
                </div>
                <div className={cx('container-2')}>
                    <header className={cx('container-2-header')}>PRODUCTS</header>
                    <ul className={cx('end-list')}>
                        <Link className={cx('end-link')} to={'/sneakers/nike'}>
                            <li className={cx('end-list-item')}>Nike</li>
                        </Link>
                        <Link className={cx('end-link')} to={'/sneakers/adidas'}>
                            <li className={cx('end-list-item')}>Adidas</li>
                        </Link>
                        <Link className={cx('end-link')} to={'/sneakers/jordan'}>
                            <li className={cx('end-list-item')}>Jordan</li>
                        </Link>
                        <Link className={cx('end-link')} to={'/sneakers/gucci'}>
                            <li className={cx('end-list-item')}>Gucci</li>
                        </Link>

                        <Link className={cx('end-link')} to={'/sneakers'}>
                            <li className={cx('end-list-item')}>MORE . . .</li>
                        </Link>
                    </ul>
                </div>
                <div className={cx('container-3')}>
                    <header className={cx('container-3-header')}>CUSTOMER SUPPORT</header>
                    <ul className={cx('end-list')}>
                        <li className={cx('end-list-item')}>Shopping guide</li>
                        <li className={cx('end-list-item')}>Delivery policy</li>
                        <li className={cx('end-list-item')}>Return policy</li>
                        <li className={cx('end-list-item')}>Privacy policy</li>
                    </ul>
                </div>
                <div className={cx('container-4')}>
                    <div className={cx('container-4-upper')}>
                        <header className={cx('container-4-upper-header')}>GET IN TOUCH</header>
                        <ul>
                            <a
                                href="https://www.google.com/maps/place/Sneaker+81/@10.8075752,106.6401254,17z/data=!3m1!4b1!4m6!3m5!1s0x31752eb257b3701f:0x65b7c3b3491bf08b!8m2!3d10.8075752!4d106.6401254!16s%2Fg%2F11nmfh23t5?hl=vi-VN"
                                target="_blank"
                            >
                                <li>
                                    Address: Số 137 Nguyễn Đức Thuận, phường 13, Quận Tân Bình, Ho Chi Minh City,
                                    Vietnam{' '}
                                </li>
                            </a>
                            <li className={cx('container-4-phone')}>Phone number: (+84)988585794</li>
                            <li>Gmail: trantandat267@gmail.com</li>
                        </ul>
                    </div>
                    <div className={cx('container-4-under')}>
                        <header className={cx('container-4-under-header')}>OPENING TIME</header>
                        <div className={cx('under-wrapper')}>
                            Open:
                            <div className={cx('under-item')}>&#160; 9:00 AM</div>&#160;- Close:
                            <div className={cx('under-item')}>&#160; 21:00 PM</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('end')}>
                <div className={cx('right')}>
                    Copyright © 2023
                    <div className={cx('end-content')}>&#160;Callmequantu</div>&#160; All Rights Reserved.
                </div>
                <img src="https://cdn.shopify.com/s/files/1/0052/8164/4662/files/payment_5331d170-aa8c-4a49-9b5d-ea6411b23c75.png?v=1613544399" />
            </div>
            <audio className={cx('music')} src={song2} autoPlay loop></audio>
        </div>
    );
}

export default End;
