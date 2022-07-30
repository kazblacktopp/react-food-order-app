import Input from '../UI/Input';
import classes from './MealItemForm.module.css';

export default function MealItemForm(props) {
  function formSubmitHandler(event) {
    event.preventDefault();
  }

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        id={`amount_${props.id}`}
        label="Amount"
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <button type="submit">+ Add</button>
    </form>
  );
}
