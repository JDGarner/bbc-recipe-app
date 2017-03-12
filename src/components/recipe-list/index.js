import React from 'react'
import RecipeListItem from '../recipe-list-item'
import config from '../../config'
import Request from 'superagent'

class RecipeList extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      recipesLoaded: false
    };
  }

  componentDidMount() {
    var url = config.recipeApiHost + '/recipes';

    Request.get(url).end((err, response) => {
      if (err) {
        console.log('There was an error fetching from API', err);
      } else if (response) {
        this.setState({
          recipes: response.body,
          recipesLoaded: true
        });
      }
    });
  }

  render() {
    if (this.state.recipesLoaded) {
      return (
        <ul className="recipe-list">
          {
            this.state.recipes.map((recipe, key) => {
              return (
                <RecipeListItem recipe={recipe} key={key} />
              );
            })
          }
        </ul>
      );
    } else {
      return null;
    }
  }
}

export default RecipeList;
