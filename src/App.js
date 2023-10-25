import { Fragment } from "react";
import Header from "./components/Layout/Header";
import MealsComponents from "./components/Meals/MealsComponents";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <MealsComponents />
      </main>
    </Fragment>
  );
}

export default App;
