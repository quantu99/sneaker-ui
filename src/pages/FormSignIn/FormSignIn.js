import styles from './FormSignIn.module.scss';
import classNames from 'classnames/bind';
import Header from '../../components/Layout/DefaultLayout/Header';
import End from '../../components/Layout/DefaultLayout/End';
const cx = classNames.bind(styles);
function FormSignIn({ cartItems, wishItems, handleAddProducts, handleAddWishProducts }) {
    return (
        <div className={cx('wrapper')}>
            <Header
                cartItems={cartItems}
                wishItems={wishItems}
                handleAddProducts={handleAddProducts}
                handleAddWishProducts={handleAddWishProducts}
            />
            <div className={cx('container')}>
                <img src="https://i.pinimg.com/736x/fa/25/27/fa2527a1209b35dedfacd585769e4d82.jpg" />
                <div className={cx('wrapper-content')}>
                    <h1 className={cx('header')}>#Log in here</h1>
                    <div className={cx('input-div')}>
                        <label className={cx('label')}>Your email:</label>
                        <input type="email" placeholder="Your email( ex: abc@gmail.com,...)" name="email" />
                    </div>
                    <div className={cx('input-div')}>
                        <label className={cx('label')}>Password:</label>
                        <input type="password" placeholder="Your password" name="password" />
                    </div>
                    <div className={cx('content')}>
                        <button className={cx('login')}>Log in !</button>
                        {/* <div className={cx('content-2')}>
                            <p className={cx('p1')}> If you have already account</p>
                            <p className={cx('p2')}>Sign in now!</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <End />
        </div>
    );
}

export default FormSignIn;
