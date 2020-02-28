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

  render() {
    return (
      <div className="recipe-info">
        <img className="recipe-image" alt="recipe" src="https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/2018_Avocado-and-Bacon-Grilled-Cheese_2644_600x600.jpg?ext=.jpg" />
        <h1 className="recipe-title">{this.props.info.title}</h1>
        <p>{this.props.info.description}</p>
        <div className="info-container">
          <Info img={CookingPrep} text={"Prep time: " + this.props.info.prepTime} />
          <Info img={CookingPrep} text={"Cooking time: " + this.props.info.cookingTime} />
          <Info img={CookingPrep} text={"Serving size: " + this.props.info.servingSize} />
        </div>
      </div>
    )
  }
}

export default RecipeInfo;
