import classNames from 'classnames/bind';
import styles from './FormSignUp.module.scss';
import Header from '../../components/Layout/DefaultLayout/Header';
import End from '../../components/Layout/DefaultLayout/End';
import validation from './validation';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function FormSignUp({ cartItems, wishItems, handleAddProducts, handleAddWishProducts, submitForm }) {
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [values, setValues] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    console.log(values);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
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
                <img src="https://i.pinimg.com/736x/fa/25/27/fa2527a1209b35dedfacd585769e4d82.jpg" />
                <div className={cx('wrapper-content')}>
                    <h1 className={cx('header')}>#Register form</h1>
                    <div className={cx('input-div')}>
                        <label className={cx('label')}>Full name:</label>
                        <input
                            value={values.fullname}
                            type="text"
                            placeholder="Your name( ex: Nguyen Van A,...)"
                            name="fullname"
                            onChange={handleChange}
                        />
                        {errors.fullname && <p className={cx('error-message')}>{errors.fullname}</p>}
                    </div>
                    <div className={cx('input-div')}>
                        <label className={cx('label')}>Email:</label>
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
                            type="password"
                            placeholder="Your password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className={cx('error-message')}>{errors.password}</p>}
                    </div>
                    <div className={cx('input-div')}>
                        <label className={cx('label')}>Password confirm:</label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <p className={cx('error-message')}>{errors.confirmPassword}</p>}
                    </div>
                    <div className={cx('content')}>
                        <button className={cx('submit')} onClick={handleSubmit}>
                            Submit !
                        </button>
                        <div className={cx('content-2')}>
                            <p className={cx('p1')}> If you have already account</p>
                            <p className={cx('p2')}>Sign in now!</p>
                        </div>
                    </div>
                </div>
            </div>
            <End />
        </div>
    );
}

export default FormSignUp;
