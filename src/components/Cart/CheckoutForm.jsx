import useInput from '../../hooks/use-input';
import classes from './CheckoutForm.module.css';

function textIsValid(value) {
  return value.trim() !== '';
}

function postalCodeIsValid(code) {
  return code.trim().length === 4;
}

function CheckoutForm({ onCancel }) {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurhandler,
    inputReset: nameInputReset,
  } = useInput(textIsValid);

  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: streetInputHasError,
    inputChangeHandler: streetInputChangeHandler,
    inputBlurHandler: streetInputBlurhandler,
    inputReset: streetInputReset,
  } = useInput(textIsValid);

  const {
    value: enteredPostalCode,
    isValid: enteredPostalCodeIsValid,
    hasError: postalCodeInputHasError,
    inputChangeHandler: postalCodeInputChangeHandler,
    inputBlurHandler: postalCodeInputBlurhandler,
    inputReset: postalCodeInputReset,
  } = useInput(postalCodeIsValid);

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    inputChangeHandler: cityInputChangeHandler,
    inputBlurHandler: cityInputBlurhandler,
    inputReset: cityInputReset,
  } = useInput(textIsValid);

  let checkoutFormIsValid = false;

  if (
    enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredPostalCodeIsValid &&
    enteredCityIsValid
  ) {
    checkoutFormIsValid = true;
  }

  function submitHandler(event) {
    event.preventDefault();

    if (!checkoutFormIsValid) {
      return;
    }

    console.log(enteredName, enteredStreet, enteredPostalCode, enteredCity);

    nameInputReset();
    streetInputReset();
    postalCodeInputReset();
    cityInputReset();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurhandler}
        />
        {nameInputHasError && (
          <p className={classes['error-text']}>Please enter a valid name.</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          valud={enteredStreet}
          onChange={streetInputChangeHandler}
          onBlur={streetInputBlurhandler}
        />
        {streetInputHasError && (
          <p className={classes['error-text']}>Please enter a valid street.</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Post Code</label>
        <input
          type="text"
          id="postal"
          valud={enteredPostalCode}
          onChange={postalCodeInputChangeHandler}
          onBlur={postalCodeInputBlurhandler}
        />
        {postalCodeInputHasError && (
          <p className={classes['error-text']}>
            Please enter a valid postal code.
          </p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          valud={enteredCity}
          onChange={cityInputChangeHandler}
          onBlur={cityInputBlurhandler}
        />
        {cityInputHasError && (
          <p className={classes['error-text']}>Please enter a valid city.</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!checkoutFormIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
