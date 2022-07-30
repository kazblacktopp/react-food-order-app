import classes from './Cart.module.css';

export default function Cart() {
  return (
    <div>
      <ul className={classes['cart-items']}>
        <li>Sushi</li>
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
