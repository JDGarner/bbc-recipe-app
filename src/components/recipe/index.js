import React from 'react';
import { Link } from 'react-router-dom'
import config from '../../config'
import Request from 'superagent'

class Recipe extends React.Component {

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
      return (
        <div className="recipe">
          <h3>Name: {this.state.recipe.name}</h3>
          <h3>Cooking Time: {this.state.recipe.cookingtime}</h3>
          <h3>Main Ingredients: {this.state.recipe.mainingredients}</h3>
          <Link to="/">Back to List</Link>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Recipe;
