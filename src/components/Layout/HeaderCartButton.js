import { useContext, useEffect, useRef, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton(props) {
  const [cartDidUpdate, setCartDidUpdate] = useState(false);
  const isMounted = useRef(false);
  const cartCtx = useContext(CartContext);

  const cartQuantity = cartCtx.items.reduce((currQuantity, item) => {
    return currQuantity + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${cartDidUpdate ? classes.bump : ''}`;

  const { items } = cartCtx;

  useEffect(() => {
    if (isMounted.current) {
      setCartDidUpdate(true);

      const timer = setTimeout(() => {
        setCartDidUpdate(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    } else {
      isMounted.current = true;
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
}
