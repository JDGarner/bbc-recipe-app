import React from 'react'
import RecipeListItem from '../recipe-list-item'
import RecipeFilter from '../recipe-filter'
import config from '../../config'
import Request from 'superagent'

class RecipeList extends React.Component {
  constructor() {
    super();
    this.state = {
      allRecipes: [],
      displayedRecipes: [],
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
          allRecipes: response.body,
          displayedRecipes: response.body,
          recipesLoaded: true
        });
      }
    });
  }

  filterRecipes(filterString) {
    if (filterString) {
      this.setState({
        displayedRecipes: this.getFilteredRecipes(filterString)
      });
    } else {
      this.setState({
        displayedRecipes: this.state.allRecipes
      });
    }
  }

  getFilteredRecipes(filterString) {
    return this.state.allRecipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(filterString.toLowerCase()) ||
        recipe.mainingredients.toLowerCase().includes(filterString.toLowerCase())
    });
  }

  render() {
    if (this.state.recipesLoaded) {
      return (
        <div className="recipe-list">
          <RecipeFilter filterRecipes={this.filterRecipes.bind(this)} />
          { this.state.allRecipes.length > 0 ?
            this.renderRecipes() :
            this.renderNoRecipesMessage() }
        </div>
      );
    } else {
      return (
        <div>Loading recipes...</div>
      );
    }
  }

  renderNoRecipesMessage() {
    return (
      <div>Sorry, we currently have no recipes for you</div>
    );
  }

  renderRecipes() {
    if (this.state.displayedRecipes.length > 0) {
      return (
        <ul> {
          this.state.displayedRecipes.map((recipe, key) => {
            return (
              <RecipeListItem recipe={recipe} key={key} />
            );
          })
        } </ul>
      );
    } else {
      return (
        <div>Sorry, nothing matched your filter term</div>
      );
    }

  }
}

export default RecipeList;
