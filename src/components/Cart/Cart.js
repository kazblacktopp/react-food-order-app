import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';

export default function Cart(props) {
  const cartItems = [
    { id: 'item-1', name: 'Sushi', price: 22.98, amount: 1 },
  ].map(item => (
    <CartItem
      key={item.id}
      name={item.name}
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
