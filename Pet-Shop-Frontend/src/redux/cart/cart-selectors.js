
export const selectCart = store => store.cart;

export const selectTotalCartItems = store => {
    return store.cart.reduce((acum, item) => acum + item.count, 0);
};

export const selectTotalCartPrice = store => {
    return store.cart.reduce((acum, item) => {
        const price = item.discont_price ?? item.price;
        return acum + item.count * price
    }, 0).toFixed(2);
};