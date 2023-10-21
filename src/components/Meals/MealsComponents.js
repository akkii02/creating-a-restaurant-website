import React, { Fragment } from 'react'
import MealsSummary from "./MealsSummary";
import MealsItems from "./MealsItems";

const MealsComponents = () =>{
      return(
            <Fragment>
                  <MealsSummary/>
                  <MealsItems/>
            </Fragment>
      );
};

export default MealsComponents;