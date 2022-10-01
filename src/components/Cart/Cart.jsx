import { Fragment, useContext, useState } from 'react';
import useAJAX from '../../hooks/use-ajax';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';
import { API_URL } from '../../config/config';
import classes from './Cart.module.css';

export default function Cart({ onCloseCart }) {
  const [cartHasItems, setCartHasItems] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [orderHasSubmitted, setOrderHasSubmitted] = useState(false);
  const cartCtx = useContext(CartContext);
  const {
    isLoading,
    error: httpError,
    sendRequest: sendHttpRequest,
  } = useAJAX();

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
      <button className={classes['button--alt']} onClick={onCloseCart}>
        Close
      </button>
      {cartHasItems && (
        <button className={classes.button} onClick={orderItemsHandler}>
          Order
        </button>
      )}
    </div>
  );

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const modalContent = (
    <Fragment>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {isCheckout && (
        <CheckoutForm
          onSubmitOrder={submitOrderHandler}
          onCancelOrder={cancelOrderHandler}
        />
      )}
      {!isCheckout && actionBtns}
    </Fragment>
  );

  const isLoadingContent = (
    <div className={classes.isLoading}>
      <p>Loading...</p>
    </div>
  );

  let httpErrorMsg = httpError;

  if (httpError === 'Failed to fetch') {
    httpErrorMsg = 'Unable to submit order. Please try again.';
  }

  const httpErrorContent = (
    <div className={classes.httpError}>
      <p>{httpErrorMsg}</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onCloseCart}>
          Close
        </button>
      </div>
    </div>
  );

  const orderHasSubmittedContent = (
    <div className={classes.isSubmitted}>
      <p>Your order has been submitted!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onCloseCart}>
          Close
        </button>
      </div>
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

  function submitOrderHandler(userData) {
    const sendRequestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        user: userData,
        orderedItems: cartCtx.items,
      },
    };

    sendHttpRequest(
      {
        url: `${API_URL}/orders.json`,
        options: sendRequestOptions,
      },
      processOrder
    );
  }

  function processOrder(httpResData) {
    if (!httpResData.name) {
      httpErrorMsg = 'Unable to submit order. Please contact us!';
      return;
    }

    setOrderHasSubmitted(true);
    cartCtx.clearCart();
  }

  function cancelOrderHandler() {
    setIsCheckout(false);
  }

  return (
    <Modal>
      {!isLoading && !httpError && !orderHasSubmitted && modalContent}
      {isLoading && !httpError && isLoadingContent}
      {httpError && httpErrorContent}
      {orderHasSubmitted && orderHasSubmittedContent}
    </Modal>
  );
}
