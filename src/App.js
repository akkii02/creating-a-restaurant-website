import { useState } from "react";
import Header from "./components/Layout/Header";
import MealsComponents from "./components/Meals/MealsComponents";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [showCart,setShowCart] = useState(false);
  const  showCartHandler = () =>{
    setShowCart(true);
  }
  const hideCartHandler = () => {
    setShowCart(false);
  }
  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />} 
      <Header onShowCart={showCartHandler} />
      <main>
        <MealsComponents />
      </main>
    </CartProvider>
  );
}

export default App;
