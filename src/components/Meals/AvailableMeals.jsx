import { useState, useEffect } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import { API_URL } from '../../config/config';

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch(`${API_URL}/meals.json`);

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const data = await response.json();
        const fetchedMeals = [];

        for (const key in data) {
          fetchedMeals.push({
            id: key,
            title: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }

        setMeals(fetchedMeals);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchMeals();
  }, []);

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
