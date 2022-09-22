import classes from './ModalOverlay.module.css';

export default function ModalOverlay(props) {
  return <div className={classes.modal}>{props.children}</div>;
}
