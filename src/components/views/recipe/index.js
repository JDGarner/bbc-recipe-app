import React from 'react';
import { Link } from 'react-router-dom'
import config from '../../config'
import Request from 'superagent'

export default class Recipe extends React.Component {

  constructor() {
    super();
    this.state = {
      recipe: {},
      recipeLoaded: false
    };
  }

  componentDidMount() {
    var url = config.recipeApiHost + '/recipes/' + this.props.match.params.recipeId;

    Request.get(url).end((err, response) => {
      if (err) {
        console.log('There was an error fetching from API', err);
      } else if (response) {
        this.setState({
          recipe: response.body,
          recipeLoaded: true
        });
      }
    });
  }

  render() {
    if (this.state.recipeLoaded) {
      let imgPath = config.cdnHost + this.state.recipe.imageurl;

      return (
        <div className="recipe">
          <h3>Name: {this.state.recipe.name}</h3>
          <h3>Cooking Time: {this.state.recipe.cookingtime} Minutes</h3>
          <img src={imgPath}/>
          <h3>Ingredients:</h3>
          { this.renderIngredients(this.state.recipe.ingredients) }
          <Link to="/">Back to List</Link>
        </div>
      );
    } else {
      return null;
    }
  }

  renderIngredients(ingredients) {
    return (
      <ul className="ingredients-list"> {
        ingredients.map((i, key) => {
          return (
            <li key={key} >{i.quantity} {i.quantityType} {i.name}</li>
          );
        })
      } </ul>
    );
  }
}
