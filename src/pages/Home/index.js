import DefaultLayout from '../../components/Layout/DefaultLayout';
function Home({
    cartItems,
    handleAddProducts,
    wishItems,
    handleAddWishProducts,
    handleRemoveWishProducts,
    productItems,
    momentItems,
}) {
    return (
        <DefaultLayout
            momentItems={momentItems}
            productItems={productItems}
            cartItems={cartItems}
            handleAddProducts={handleAddProducts}
            wishItems={wishItems}
            handleAddWishProducts={handleAddWishProducts}
            handleRemoveWishProducts={handleRemoveWishProducts}
        />
    );
}

export default Home;
