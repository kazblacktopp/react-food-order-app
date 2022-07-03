import classes from './Card.module.css';

function Card(props) {
  const cardClasses = `${props.className} ${classes.card}`;

  return <div className={cardClasses}>{props.children}</div>;
}

export default Card;
