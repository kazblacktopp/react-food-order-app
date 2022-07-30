import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';

export default function AvailableMeals() {
  const meals = [
    {
      id: 'm1',
      title: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      title: 'Schnitzel',
      description: 'A german specialtiy!',
      price: 16.5,
    },
    {
      id: 'm3',
      title: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      title: 'Green Bowl',
      description: 'Healty...and green...',
      price: 18.99,
    },
  ];

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
