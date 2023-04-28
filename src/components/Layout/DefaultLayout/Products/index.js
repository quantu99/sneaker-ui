import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Middle from './Middle';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Products({ handleAddProducts, handleAddWishProducts, handleRemoveWishProducts, productItems }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-2')}>
                <Middle
                    productItems={productItems}
                    handleRemoveWishProducts={handleRemoveWishProducts}
                    handleAddProducts={handleAddProducts}
                    handleAddWishProducts={handleAddWishProducts}
                ></Middle>
            </div>
            <Link to={'/sneakers'} className={cx('wrapper-3')}>
                <h2 className={cx('wrapper-3-content')}>-----Watch all products-----</h2>
            </Link>
        </div>
    );
}

export default Products;
