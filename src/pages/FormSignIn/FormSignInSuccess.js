import End from '../../components/Layout/DefaultLayout/End';
import Header from '../../components/Layout/DefaultLayout/Header';
import styles from './FormSignIn.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);
function FormSignInSuccess({ cartItems, wishItems }) {
    return (
        <div className={cx('wrapper')}>
            <Header cartItems={cartItems} wishItems={wishItems} />
            <div className={cx('container')}>
                <img src="https://i.pinimg.com/736x/fa/25/27/fa2527a1209b35dedfacd585769e4d82.jpg" />
                <div className={cx('wrapper-content-success')}>
                    <h1 className={cx('header-success')}>
                        Login success
                        <FontAwesomeIcon icon={faHeart} />
                        <FontAwesomeIcon icon={faHeart} />
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
