import styles from './Content.module.scss';
import classNames from 'classnames/bind';
import Insta from './Insta';
const cx = classNames.bind(styles);
function Content({ momentItems }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img className={cx('image')} src="https://wallpapers.com/images/featured/1v3t9woifw5sawrg.jpg" />
                <div className={cx('content-1')}>
                    <h1 className={cx('header')}>OUR NEWS</h1>
                    <p className={cx('caption')}>
                        Subscribe and follow to our page and stay up-to-date with all our awesome products and latest
                        updates.
                    </p>
                    <div className={cx('input-wrapper')}>
                        <input
                            className={cx('input')}
                            placeholder="Enter you email address here..."
                            spellCheck={false}
                        />
                        <div className={cx('input-search')}>SUBCRIBE</div>
                    </div>
                </div>
                <div className={cx('content-2')}>
                    <h1 className={cx('content-2-header')}>#Shoes on Insta</h1>
                    <Insta momentItems={momentItems}></Insta>
                </div>
            </div>
        </div>
    );
}

export default Content;
