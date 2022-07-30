import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

function HeaderCartButton(props) {
  const cartQuantity = 0;

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
}

export default HeaderCartButton;
