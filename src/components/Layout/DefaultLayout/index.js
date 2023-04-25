import Header from './Header';
import Slider from './Slide/Slider';
import Products from './Products';
import End from './End';
import Content from './Content/Content';
function DefaultLayout({
    children,
    cartItems,
    handleAddProducts,
    wishItems,
    handleAddWishProducts,
    handleRemoveWishProducts,
    productItems,
}) {
    return (
        <div>
            <Header cartItems={cartItems} wishItems={wishItems} productItems={productItems} />
            <div className="container">
                <Slider />
                <Products
                    productItems={productItems}
                    handleAddProducts={handleAddProducts}
                    wishItems={wishItems}
                    handleAddWishProducts={handleAddWishProducts}
                    handleRemoveWishProducts={handleRemoveWishProducts}
                />
                <Content></Content>
                <End />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
