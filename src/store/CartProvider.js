import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCart = {
  items: [],
  totalAmount: 0,
};

function cartStateReducer(state, action) {
  if (action.type === 'ADD-ITEM') {
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedCartItems;

    if (existingCartItem) {
      const updatedCartItem = {
        ...action.item,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    } else {
      updatedCartItems = [...state.items, action.item];
    }
    return { items: updatedCartItems, totalAmount: updatedTotalAmount };
  }
  return state;
}

export default function CartProvider(props) {
  const [cartState, dispatchCartReducer] = useReducer(
    cartStateReducer,
    defaultCart
  );

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  function addToCartHandler(newItem) {
    dispatchCartReducer({ type: 'ADD-ITEM', item: newItem });
  }

  function removeFromCartHandler(id) {}

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
