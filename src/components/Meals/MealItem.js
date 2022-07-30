import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

export default function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = props.item.price.toFixed(2);

  function addItemToCartHandler(amount) {
    cartCtx.addToCart({ ...props.item, amount: amount });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.item.title}</h3>
        <div className={classes.description}>{props.item.description}</div>
        <div className={classes.price}>${price}</div>
      </div>
      <div>
        <MealItemForm id={props.item.id} onAddItem={addItemToCartHandler} />
      </div>
    </li>
  );
}
