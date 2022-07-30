import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
import AvailableMeals from './components/Meals/AvailableMeals';
import Modal from './components/UI/Modal/Modal';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <CartProvider>
      <Modal>
        <Cart />
      </Modal>
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </CartProvider>
  );
}

export default App;
