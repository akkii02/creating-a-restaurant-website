import React from "react";
import classes from "./MealsItems.module.css";
import Card from "../UI/Card";
import MealItemForm from "./MealIemForm";

let indianFoodMenu = [
  {
    id: 1,
    foodname: "Palak Paneer",
    description:
      "Creamy spinach curry with cubes of paneer (Indian cottage cheese) and aromatic spices.",
    price: 180,
  },
  {
    id: 2,
    foodname: "Aloo Gobi",
    description:
      "A dry dish made with potatoes (aloo) and cauliflower (gobi), cooked with onions, tomatoes, and spices.",
    price: 90,
  },
  {
    id: 3,
    foodname: "Dal Tadka",
    description:
      "Yellow lentils (dal) cooked and tempered with mustard seeds, cumin, garlic, onions, and tomatoes.",
    price: 8.49,
  },
  {
    id: 4,
    foodname: "Vegetable Biryani",
    description:
      "Fragrant rice dish cooked with mixed vegetables and biryani spices, served with raita.",
    price: 250,
  },
  {
    id: 5,
    foodname: "Chana Masala",
    description:
      "Spicy and tangy chickpea curry cooked with onions, tomatoes, and a blend of Indian spices.",
    price: 100,
  },
];

function MealsItems(props) {
  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {indianFoodMenu.map((items) => {
            return (
              <li key={items.id} className={classes.meal}>
                <div>
                  <h3>{items.foodname}</h3>
                  <div className={classes.description}>{items.description}</div>
                  <div className={classes.price}>{items.price} &#8377;</div>
                </div>
                <div>
                  <MealItemForm id={items.id}/>
                </div>
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
}

export default MealsItems;
