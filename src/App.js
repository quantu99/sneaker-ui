import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Fragment } from 'react';
import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import data from './Data/Data';
function App() {
    const { productItems } = data;
    const [cartItems, setCartItems] = useState([]);
    const [wishItems, setWishItems] = useState([]);
    const handleAddWishProducts = (product) => {
        const ProductExists = wishItems.find((item) => item.id === product.id);
        if (ProductExists) {
            setWishItems(
                wishItems.map((item) => item.id === product.id)
                    ? { ...ProductExists, quantity: ProductExists.quantity + 1 }
                    : item,
            );
        } else {
            setWishItems([...wishItems, { ...product, quantity: 1 }]);
        }
    };
    const handleRemoveWishProducts = (product) => {
        const ProductExists = wishItems.find((item) => item.id === product.id);
        if (ProductExists.quantity === 1) {
            setWishItems(wishItems.filter((item) => item.id !== product.id));
        } else {
            setWishItems(
                wishItems.map((item) =>
                    item.id === product.id ? { ...ProductExists, quantity: ProductExists.quantity - 1 } : item,
                ),
            );
        }
    };
    const handleAddProducts = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist) {
            setCartItems(
                cartItems.map((item) => item.id === product.id)
                    ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
                    : item,
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    const handleRemoveProducts = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item,
                ),
            );
        }
    };
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route) => {
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page
                                            productItems={productItems}
                                            handleRemoveProducts={handleRemoveProducts}
                                            handleAddProducts={handleAddProducts}
                                            cartItems={cartItems}
                                            wishItems={wishItems}
                                            handleAddWishProducts={handleAddWishProducts}
                                            handleRemoveWishProducts={handleRemoveWishProducts}
                                        />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
