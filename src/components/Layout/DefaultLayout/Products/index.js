import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Middle from './Middle';
import Sidebar from '../Sidebar';
const cx = classNames.bind(styles);
function Products({ handleAddProducts, handleAddWishProducts, handleRemoveWishProducts }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-2')}>
                <Middle
                    handleRemoveWishProducts={handleRemoveWishProducts}
                    handleAddProducts={handleAddProducts}
                    handleAddWishProducts={handleAddWishProducts}
                ></Middle>
            </div>
        </div>
    );
}

export default Products;
