import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CheckoutForm from './CheckoutForm';

export default function Cart(props) {
  const [cartHasItems, setCartHasItems] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const cartItems = cartCtx.items.map(item => (
    <CartItem
      key={item.id}
      title={item.title}
      price={item.price}
      amount={item.amount}
      onAddItem={addItemHandler.bind(null, item)}
      onRemoveItem={removeItemHandler.bind(null, item.id)}
    />
  ));

  const actionBtns = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onCloseCart}>
        Close
      </button>
      {cartHasItems && (
        <button className={classes.button} onClick={orderItemsHandler}>
          Order
        </button>
      )}
    </div>
  );

  if (cartHasItems && cartItems.length === 0) {
    setCartHasItems(false);
  }

  if (!cartHasItems && cartItems.length !== 0) {
    setCartHasItems(true);
  }

  function addItemHandler(item) {
    cartCtx.addToCart({ ...item, amount: 1 });
  }

  function removeItemHandler(id) {
    cartCtx.removeFromCart(id);
  }

  function orderItemsHandler() {
    setIsCheckout(true);
  }

  function cancelOrderHandler() {
    setIsCheckout(false);
  }

  return (
    <Modal>
      <div>
        <ul className={classes['cart-items']}>{cartItems}</ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>${totalAmount}</span>
        </div>
        {isCheckout && <CheckoutForm onCancel={cancelOrderHandler} />}
        {!isCheckout && actionBtns}
      </div>
    </Modal>
  );
}
