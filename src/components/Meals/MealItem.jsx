import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

export default function MealItem(props) {
  const { id, title, description, price } = props.item;
  const cartCtx = useContext(CartContext);
  const fixedPrice = price.toFixed(2);

  function addItemToCartHandler(amount) {
    cartCtx.addToCart({ ...props.item, amount: amount });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{title}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${fixedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddItem={addItemToCartHandler} />
      </div>
    </li>
  );
}
