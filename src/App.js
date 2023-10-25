import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import MealsComponents from "./components/Meals/MealsComponents";
import Cart from "./components/Cart/Cart";

function App() {

  const [showCart,setShowCart] = useState(false);
  const  showCartHandler = () =>{
    setShowCart(true);
  }
  const hideCartHandler = () => {
    setShowCart(false);
  }
  return (
    <Fragment>
      {showCart && <Cart onClose={hideCartHandler} />} 
      <Header onShowCart={showCartHandler} />
      <main>
        <MealsComponents />
      </main>
    </Fragment>
  );
}

export default App;
