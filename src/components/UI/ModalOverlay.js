import Cart from '../Cart/Cart';
import classes from './ModalOverlay.module.css';

export default function ModalOverlay() {
  return (
    <div className={classes.modal}>
      <Cart />
    </div>
  );
}
