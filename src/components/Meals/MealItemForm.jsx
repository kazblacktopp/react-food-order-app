import { useRef } from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';

export default function MealItemForm(props) {
  const inputRef = useRef();

  function formSubmitHandler(event) {
    event.preventDefault();
    const amount = inputRef.current.value;
    props.onAddItem(+amount);
  }

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        classes={{ divClass: classes.input }}
        ref={inputRef}
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
