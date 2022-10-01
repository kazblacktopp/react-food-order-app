import useInput from '../../hooks/use-input';
import Input from '../UI/Input';
import classes from './CheckoutForm.module.css';

function textIsValid(value) {
  return value.trim() !== '';
}

function postalCodeIsValid(code) {
  return code.trim().length === 4;
}

function CheckoutForm({ onSubmitOrder, onCancelOrder }) {
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

    onSubmitOrder({
      name: enteredName,
      street: enteredStreet,
      postCode: enteredPostalCode,
      city: enteredCity,
    });

    nameInputReset();
    streetInputReset();
    postalCodeInputReset();
    cityInputReset();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        classes={{
          divClass: classes.control,
          errorClass: classes['error-text'],
        }}
        id={'name'}
        label={'Your Name'}
        type={'text'}
        value={enteredName}
        hasError={nameInputHasError}
        onChange={nameInputChangeHandler}
        onBlur={nameInputBlurhandler}
      />
      <Input
        classes={{
          divClass: classes.control,
          errorClass: classes['error-text'],
        }}
        id={'street'}
        label={'Street'}
        type={'text'}
        value={enteredStreet}
        hasError={streetInputHasError}
        onChange={streetInputChangeHandler}
        onBlur={streetInputBlurhandler}
      />
      <Input
        classes={{
          divClass: classes.control,
          errorClass: classes['error-text'],
        }}
        id={'post code'}
        label={'Post Code'}
        type={'text'}
        value={enteredPostalCode}
        hasError={postalCodeInputHasError}
        onChange={postalCodeInputChangeHandler}
        onBlur={postalCodeInputBlurhandler}
      />
      <Input
        classes={{
          divClass: classes.control,
          errorClass: classes['error-text'],
        }}
        id={'city'}
        label={'City'}
        type={'text'}
        value={enteredCity}
        hasError={cityInputHasError}
        onChange={cityInputChangeHandler}
        onBlur={cityInputBlurhandler}
      />
      <div className={classes.actions}>
        <button type="button" onClick={onCancelOrder}>
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
