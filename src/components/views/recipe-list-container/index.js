import React from 'react'
import RecipeList from '../recipe-list'
import RecipeFilter from '../recipe-filter'
import config from '../../config'
import Request from 'superagent'

class RecipeListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      allRecipes: [],
      displayedRecipes: [],
      currentPage: 0,
      recipesPerPage: 10,
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
    const filteredRecipes = filterString ?
      this.getFilteredRecipes(filterString) :
      this.state.allRecipes;

    this.setState({
      displayedRecipes: filteredRecipes,
      currentPage: 0,
    });
  }

  getFilteredRecipes(filterString) {
    return this.state.allRecipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(filterString.toLowerCase()) ||
        recipe.mainingredients.toLowerCase().includes(filterString.toLowerCase())
    });
  }

  goToNextPage() {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
  }

  goToPreviousPage() {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
  }

  recipesAvailable() {
    return this.state.allRecipes.length > 0
  }

  render() {
    if (this.state.recipesLoaded) {
      return (
        <div className="recipe-list-container">
          <RecipeFilter filterRecipes={this.filterRecipes.bind(this)} />
          { this.recipesAvailable() ?
            this.renderRecipeList() :
            this.renderNoRecipesMessage() }
        </div>
      );
    } else {
      return (
        <div>Loading recipes...</div>
      );
    }
  }

  renderRecipeList() {
    return (
      <RecipeList
        recipes={this.state.displayedRecipes}
        goToNextPage={this.goToNextPage.bind(this)}
        goToPreviousPage={this.goToPreviousPage.bind(this)}
        currentPage={this.state.currentPage}
        pageSize={this.state.recipesPerPage} />
    );
  }

  renderNoRecipesMessage() {
    return (
      <div>Sorry, we currently have no recipes for you</div>
    );
  }
}

export default RecipeListContainer;
