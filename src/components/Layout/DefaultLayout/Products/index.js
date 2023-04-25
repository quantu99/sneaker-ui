import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Middle from './Middle';
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
        </div>
    );
}

export default Products;
