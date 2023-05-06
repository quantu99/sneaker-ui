import End from '../../components/Layout/DefaultLayout/End';
import Header from '../../components/Layout/DefaultLayout/Header';
import styles from './FormSignIn.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import just from '../../image/just.jpg';

const cx = classNames.bind(styles);
function FormSignInSuccess({ cartItems, wishItems }) {
    return (
        <div className={cx('wrapper')}>
            <Header cartItems={cartItems} wishItems={wishItems} />
            <div className={cx('container')}>
                <img src={just} className={cx('image')} />
                <div className={cx('wrapper-content-success')}>
                    <h1 className={cx('header-success')}>
                        Login success &#160;
                        <FontAwesomeIcon icon={faHeart} />
                        &#160;
                        <FontAwesomeIcon icon={faHeart} />
                        &#160;
                        <FontAwesomeIcon icon={faHeart} />
                    </h1>
                    <h1 className={cx('welcome')}>Welcome to 81 Sneaker!</h1>
                </div>

                <Button to={'/sneakers'} className={cx('button-success-signup')}>
                    SHOP NOW
                </Button>
            </div>
            <End />
        </div>
    );
}

export default FormSignInSuccess;
