import React from 'react'
import { Link } from 'react-router-dom'
import RecipeStar from '../recipe-star'

export default class RecipeListItem extends React.Component {

  render() {
    let recipe = this.props.recipe;

    return (
      <li className="recipe-list-item">
        <div className="recipe-list-item-info">
          <Link to={`/recipe/${recipe.id}`}>
            <h3>Name: {recipe.name}</h3>
            <h3>Cooking Time: {recipe.cookingtime} Minutes</h3>
            <h3>Main Ingredients: {recipe.mainingredients}</h3>
          </Link>
        </div>
        <RecipeStar recipeId={recipe.id} />
      </li>
    );
  }
}
