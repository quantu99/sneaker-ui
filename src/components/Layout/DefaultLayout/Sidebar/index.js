import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';
const cx = classNames.bind(styles);

function Sidebar({ className }) {
    const [products, setProducts] = useState([]);
    const classes = cx('container', {
        [classNames]: className,
    });

    useEffect(() => {
        fetch(`http://localhost:3000/data/`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    }, []);
    return (
        <div className={classes}>
            <h3 className={cx('header')}>CATEGORIES</h3>
            <ul>
                <li className={cx('brand')}>
                    <Link className={cx('checkbox')} to={'/sneakers/nike'}>
                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />
                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                    </Link>
                    Nike
                </li>
                <li className={cx('brand')}>
                    <Link className={cx('checkbox')} to={'/sneakers/adidas'}>
                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                    </Link>
                    Adidas
                </li>
                <li className={cx('brand')}>
                    <Link className={cx('checkbox')} to={'/sneakers/jordan'}>
                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                    </Link>
                    Jordan
                </li>
                <li className={cx('brand')}>
                    <Link className={cx('checkbox')} to={'/sneakers/gucci'}>
                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                    </Link>
                    Gucci
                </li>
            </ul>

            {/* Price */}
            <h3 className={cx('price')}>Price</h3>
            <ul>
                <li className={cx('brand')}>
                    <Link className={cx('checkbox')} to={'/sneakers/nike'}>
                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />
                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                    </Link>
                    &#60; đ 1.000.000
                </li>
                <li className={cx('brand')}>
                    <Link className={cx('checkbox')} to={'/sneakers/adidas'}>
                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                    </Link>
                    đ 1.000.000 - đ 3.000.000
                </li>
                <li className={cx('brand')}>
                    <Link className={cx('checkbox')} to={'/sneakers/jordan'}>
                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                    </Link>
                    đ 3.000.000 - đ 5.000.000
                </li>
                <li className={cx('brand')}>
                    <Link className={cx('checkbox')} to={'/sneakers/gucci'}>
                        <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                        <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                    </Link>
                    &#62; đ 5.000.000
                </li>
                {/* Size */}
                <h3 className={cx('price')}>Size</h3>
                <ul>
                    <li className={cx('brand')}>
                        <Link className={cx('checkbox')} to={`/sneakers/nike`}>
                            <FontAwesomeIcon className={cx('square')} icon={faSquare} />
                            <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                        </Link>
                        36- 38(US: 3.5- 5.5)
                    </li>
                    <li className={cx('brand')}>
                        <Link className={cx('checkbox')} to={'/sneakers/adidas'}>
                            <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                            <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                        </Link>
                        39- 41(US: 6.5- 8)
                    </li>
                    <li className={cx('brand')}>
                        <Link className={cx('checkbox')} to={'/sneakers/jordan'}>
                            <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                            <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                        </Link>
                        42- 44(US: 9- 11 )
                    </li>

                    <li className={cx('brand')}>
                        <Link className={cx('checkbox')} to={'/sneakers/converse'}>
                            <FontAwesomeIcon className={cx('square')} icon={faSquare} />

                            <FontAwesomeIcon className={cx('square-check')} icon={faSquareCheck} />
                        </Link>
                        &#62; 45(US: &#62; 11.5)
                    </li>
                </ul>
            </ul>
        </div>
    );
}
export default Sidebar;
