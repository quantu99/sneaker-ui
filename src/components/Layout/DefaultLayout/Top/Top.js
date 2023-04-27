import classNames from 'classnames/bind';
import styles from './Top.module.scss';
import img1 from './topImage/img1.jpg';
import img2 from './topImage/img2.jpg';
import img3 from './topImage/img3.jpg';
import img4 from './topImage/img4.jpg';
import img5 from './topImage/img5.jpg';
import img6 from './topImage/img6.jpg';
import img7 from './topImage/img7.jpg';
import air from './topImage/air.jpg';
import jays from './topImage/jays.jpg';
const cx = classNames.bind(styles);
function Top() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <img className={cx('img-upper')} src={air} />
                    <img className={cx('img-under')} src={jays} />
                </div>
                <div className={cx('center')}>
                    <img src={img7} />
                    <div className={cx('title')}>BEST SELLER</div>
                </div>
            </div>
        </div>
    );
}

export default Top;
