import React from 'react';
import { Link } from 'react-router-dom'
import config from '../../config'
import RecipeStar from '../recipe-star'
import Request from 'superagent'

export default class Recipe extends React.Component {

  constructor() {
    super();
    this.state = {
      recipe: null,
      recipeNotFound: false
    };
  }

  componentDidMount() {
    var url = config.recipeApiHost + '/recipes/' + this.props.match.params.recipeId;

    Request.get(url).end((err, response) => {
      if (err) {
        console.log('There was an error fetching from API', err);
        if (err.status === 404) {
          this.setState({
            recipeNotFound: true
          });
        }
      } else if (response) {
        this.setState({
          recipe: response.body
        });
      }
    });
  }

  render() {
    if (this.state.recipe) {
      return this.renderRecipe(this.state.recipe);
    } else if (this.state.recipeNotFound) {
      return this.renderRecipeNotFound();
    } else {
      return null;
    }
  }

  renderRecipeNotFound() {
    return (
      <div>Sorry, this recipe doesn't exist or may have been removed</div>
    );
  }

  renderRecipe(recipe) {
    let imgPath = config.cdnHost + recipe.imageurl;

    return (
      <div className="recipe">
        <h3>Name: {recipe.name}</h3>
        <h3>Cooking Time: {recipe.cookingtime} Minutes</h3>
        <img src={imgPath}/>
        <h3>Ingredients:</h3>
        { this.renderIngredients(recipe.ingredients) }
        <Link to="/">Back to List</Link>
        <RecipeStar recipeId={recipe.id} />
      </div>
    );
  }

  renderIngredients(ingredients) {
    if (ingredients) {
      return (
        <ul className="ingredients-list"> {
          ingredients.map((i, key) => {
            return (
              <li key={key} >{i.quantity} {i.quantityType} {i.name}</li>
            );
          })
        } </ul>
      );
    } else {
      return null;
    }
  }
}
