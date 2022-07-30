import { Fragment } from 'react';
import Overlay from './Overlay';
import ModalOverlay from './ModalOverlay';
import Cart from '../Cart/Cart';

export default function Modal() {
  return (
    <Fragment>
      <Overlay />
      <ModalOverlay>
        <Cart />
      </ModalOverlay>
    </Fragment>
  );
}
