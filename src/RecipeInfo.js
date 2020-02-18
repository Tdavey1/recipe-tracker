import React from 'react';
import CookingPrep from "./icons/cooking_prep.svg"


function Info(props) {
  return (
    <div className="info">
      <img alt="" className="info-icon" width="45px" src={props.img}></img>
      <p className="info-text">{props.text}</p>
    </div>
  )
}

class RecipeInfo extends React.Component {
  state = {
    info: {
      prepTime: 15,
      cookingTime: 45,
      servingSize: 3
    }
  }

  render() {
    return (
      <div>
        <img className="recipe-image" alt="recipe" src="https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/2018_Avocado-and-Bacon-Grilled-Cheese_2644_600x600.jpg?ext=.jpg" />
        <h1 className="recipe-title">Apple Sandwich</h1>
        <div className="info-container">
          <Info img={CookingPrep} text={"Prep time: " + this.state.info.prepTime} />
          <Info img={CookingPrep} text={"Cooking time: " + this.state.info.cookingTime} />
          <Info img={CookingPrep} text={"Serving size: " + this.state.info.servingSize} />
        </div>
      </div>
    )
  }
}

export default RecipeInfo;
