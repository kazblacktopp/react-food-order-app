import { useState } from 'react';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
import AvailableMeals from './components/Meals/AvailableMeals';

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function closeCartHandler() {
    setCartIsOpen(false);
  }

  function openCartHandler() {
    setCartIsOpen(true);
  }

  return (
    <CartProvider>
      {cartIsOpen && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </CartProvider>
  );
}

export default App;
