import classes from './Cart.module.css';
import CartItem from './CartItem';

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
    <div>
      <ul className={classes['cart-items']}>{cartItems}</ul>
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
