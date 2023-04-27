import Header from './Header';
import Top from './Top/Top';
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
    momentItems,
}) {
    return (
        <div>
            <Header cartItems={cartItems} wishItems={wishItems} productItems={productItems} />
            <div className="container">
                <Slider />
                <Top />
                <Products
                    productItems={productItems}
                    handleAddProducts={handleAddProducts}
                    wishItems={wishItems}
                    handleAddWishProducts={handleAddWishProducts}
                    handleRemoveWishProducts={handleRemoveWishProducts}
                />
                <Content momentItems={momentItems}></Content>
                <End />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
