import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

export default function MealItem(props) {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.item.title}</h3>
        <div className={classes.description}>{props.item.description}</div>
        <div className={classes.price}>${props.item.price}</div>
      </div>
      <div>
        <MealItemForm id={props.item.id} />
      </div>
    </li>
  );
}
