import { useState } from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';

function MealItemForm(props) {
  const [amount, setAmount] = useState(1);

  function changeAmountHandler(event) {
    setAmount(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log(`New amount: ${amount}`);
  }

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <Input
        id={`amount_${props.id}`}
        label="Amount"
        type="number"
        min="1"
        max="5"
        step="1"
        value={amount}
        onChange={changeAmountHandler}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
