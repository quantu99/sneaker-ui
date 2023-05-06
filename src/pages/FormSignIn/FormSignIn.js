import { useState, useEffect } from 'react';
import styles from './FormSignIn.module.scss';
import classNames from 'classnames/bind';
import Header from '../../components/Layout/DefaultLayout/Header';
import End from '../../components/Layout/DefaultLayout/End';
import login from './login';
import just from '../../image/just.jpg';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function FormSignIn({ cartItems, wishItems, handleAddProducts, handleAddWishProducts, loginForm }) {
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleLogin = (e) => {
        e.preventDefault();
        setErrors(login(values));
        setDataIsCorrect(true);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            loginForm(true);
        }
    }, [errors]);
    return (
        <div className={cx('wrapper')}>
            <Header
                cartItems={cartItems}
                wishItems={wishItems}
                handleAddProducts={handleAddProducts}
                handleAddWishProducts={handleAddWishProducts}
            />
            <div className={cx('container')}>
                <img src={just} />
                <div className={cx('wrapper-content')}>
                    <h1 className={cx('header')}>#Log in here</h1>
                    <div className={cx('input-div')}>
                        <label className={cx('label')}>Your email:</label>
                        <input
                            type="email"
                            placeholder="Your email( ex: abc@gmail.com,...)"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className={cx('error-message')}>{errors.email}</p>}
                    </div>
                    <div className={cx('input-div')}>
                        <label className={cx('label')}>Password:</label>
                        <input
                            value={values.password}
                            onChange={handleChange}
                            type="password"
                            placeholder="Your password"
                            name="password"
                        />
                        {errors.password && <p className={cx('error-message')}>{errors.password}</p>}
                    </div>
                    <div className={cx('content')}>
                        <button className={cx('login')} onClick={handleLogin}>
                            Log in !
                        </button>
                        <div className={cx('content-2')}>
                            <p className={cx('p1')}> If you haven't account yet</p>
                            <Link to={'/register'}>
                                <p className={cx('p2')}>Sign up now!</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <End />
        </div>
    );
}

export default FormSignIn;
