import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Overlay from './Overlay';
import ModalOverlay from './ModalOverlay';

export default function Modal(props) {
  const overlaysElement = document.getElementById('overlays');

  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay />, overlaysElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlaysElement
      )}
    </Fragment>
  );
}
