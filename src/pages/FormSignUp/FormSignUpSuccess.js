import End from '../../components/Layout/DefaultLayout/End';
import Header from '../../components/Layout/DefaultLayout/Header';
import styles from './FormSignUp.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button/Button';
import signup from '../../image/signup.jpg';
const cx = classNames.bind(styles);
function FormSignUpSuccess({ cartItems, wishItems }) {
    return (
        <div className={cx('wrapper')}>
            <Header cartItems={cartItems} wishItems={wishItems} />
            <div className={cx('container')}>
                <img src={signup} className={cx('image')} />
                <div className={cx('wrapper-content-success')}>
                    <h1 className={cx('header-success')}> Account created success</h1>
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

export default FormSignUpSuccess;
