import Header from './Header';
import Slider from './Slide/Slider';
import Products from './Products';
import End from './End';
import Sidebar from './Sidebar';
import Content from './Content/Content';
function DefaultLayout({
    children,
    cartItems,
    handleAddProducts,
    wishItems,
    handleAddWishProducts,
    handleRemoveWishProducts,
}) {
    return (
        <div>
            <Header cartItems={cartItems} wishItems={wishItems} />
            <div className="container">
                <Slider />
                <Products
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
