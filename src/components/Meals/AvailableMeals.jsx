import { useState, useEffect } from 'react';

import useAJAX from '../../hooks/use-ajax';
import Card from '../UI/Card';
import MealItem from './MealItem';
import { API_URL } from '../../config/config';

import classes from './AvailableMeals.module.css';

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const {
    isLoading,
    error: httpError,
    sendRequest: sendHttpRequest,
  } = useAJAX();

  function extractMeals(mealsData) {
    const fetchedMeals = [];

    for (const key in mealsData) {
      fetchedMeals.push({
        id: key,
        title: mealsData[key].name,
        description: mealsData[key].description,
        price: mealsData[key].price,
      });
    }

    setMeals(fetchedMeals);
  }

  useEffect(() => {
    sendHttpRequest({ url: `${API_URL}/meals.json` }, extractMeals);
  }, [sendHttpRequest]);

  if (isLoading) {
    return (
      <section className={classes.mealIsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.httpError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map(meal => (
            <MealItem key={meal.id} item={meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
}
