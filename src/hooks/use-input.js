import { useState, useEffect } from 'react';

export default function useInput(validateValueFn) {
  const [enteredValue, setEnteredValue] = useState('');
  const [valueWasValid, setValueWasValid] = useState(false);
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const [inputLostFocus, setInputLostFocus] = useState(false);

  const enteredValueIsValid = validateValueFn(enteredValue);
  const inputHasError = !enteredValueIsValid && inputIsTouched;

  function inputChangeHandler(event) {
    setEnteredValue(event.target.value);
    setInputIsTouched(true);
  }

  function inputBlurHandler(event) {
    setInputIsTouched(true);
    setInputLostFocus(true);
  }

  function inputReset() {
    setEnteredValue('');
    setValueWasValid(false);
    setInputIsTouched(false);
    setInputLostFocus(false);
  }

  useEffect(() => {
    if (enteredValueIsValid) {
      setValueWasValid(true);
    }
  }, [enteredValueIsValid]);

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    wasValid: valueWasValid,
    isTouched: inputIsTouched,
    lostFocus: inputLostFocus,
    hasError: inputHasError,
    inputChangeHandler,
    inputBlurHandler,
    inputReset,
  };
}
