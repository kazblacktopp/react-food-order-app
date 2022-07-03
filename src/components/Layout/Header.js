import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table full of delicious meals"></img>
      </div>
    </Fragment>
  );
}

export default Header;