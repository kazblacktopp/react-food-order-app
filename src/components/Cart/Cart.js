import classes from './Cart.module.css';
import CartItem from './CartItem';

export default function Cart(props) {
  return (
    <div>
      <ul className={classes['cart-items']}>
        <CartItem key="item-1" name="Sushi" price="22.98" amount="1" />
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$39.98</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
}
