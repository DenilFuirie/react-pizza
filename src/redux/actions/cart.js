export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
});

export const setTotalCount = (count) => ({
    type: 'SET_TOTAL_COUNT',
    payload: count
});