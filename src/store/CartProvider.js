import CartContext from './cart-context';

export function CartProvider(props) {
  const cartContext = {
    items: [],
    totalAmount: 0,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  function addToCartHandler(newItem) {}

  function removeFromCartHandler(id) {}

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
