import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items.map(item => (
    <CartItem
      key={item.id}
      title={item.title}
      price={item.price}
      amount={item.amount}
    />
  ));

  return (
    <Modal>
      <div>
        <ul className={classes['cart-items']}>{cartItems}</ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>$39.98</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes['button--alt']}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
}
