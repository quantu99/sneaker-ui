import DefaultLayout from '../../components/Layout/DefaultLayout';
function Home({ cartItems, handleAddProducts, wishItems, handleAddWishProducts, handleRemoveWishProducts }) {
    return (
        <DefaultLayout
            cartItems={cartItems}
            handleAddProducts={handleAddProducts}
            wishItems={wishItems}
            handleAddWishProducts={handleAddWishProducts}
            handleRemoveWishProducts={handleRemoveWishProducts}
        />
    );
}

export default Home;
