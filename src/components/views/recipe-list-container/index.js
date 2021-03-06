import React from 'react'
import RecipeList from '../recipe-list'
import RecipeFilter from '../recipe-filter'
import config from '../../config'
import Request from 'superagent'

export default class RecipeListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      allRecipes: [],
      displayedRecipes: [],
      currentPage: 0,
      recipesPerPage: 10,
      recipesNotFound: false,
      filterString: '',
      showOnlyStarredRecipes: false,
      cookingTimeFilter: Number.POSITIVE_INFINITY
    };
  }

  componentDidMount() {
    var url = config.recipeApiHost + '/recipes';

    Request.get(url).end((err, response) => {
      if (err) {
        console.log('There was an error fetching from API', err);
        if (err.status === 404) {
          this.setState({
            recipesNotFound: true
          });
        }
      } else if (response) {
        this.setState({
          allRecipes: response.body,
          displayedRecipes: response.body
        });
      }
    });
  }

  updateFilterString(filterString) {
    this.setState({
      filterString,
      currentPage: 0,
    });
  }

  updateMaxCookingTime(cookingTimeFilter) {
    this.setState({
      cookingTimeFilter,
      currentPage: 0,
    });
  }

  updateShowStarred(showOnlyStarredRecipes) {
    this.setState({
      showOnlyStarredRecipes,
      currentPage: 0,
    });
  }

  applyFilters() {
    return this.state.allRecipes.filter((recipe) => {
      return this.recipeContainsString(recipe, this.state.filterString) &&
        this.recipeWithinMaxCookingTime(recipe, this.state.cookingTimeFilter) &&
        this.recipeIsStarred(recipe, this.state.showOnlyStarredRecipes)
    });
  }

  recipeContainsString(recipe, filterString) {
    return recipe.name.toLowerCase().includes(filterString.toLowerCase()) ||
      recipe.mainingredients.toLowerCase().includes(filterString.toLowerCase())
  }

  recipeWithinMaxCookingTime(recipe, time) {
    return recipe.cookingtime <= time
  }

  recipeIsStarred(recipe, showOnlyStarred) {
    let starredRecipes = JSON.parse(localStorage.getItem('starredRecipes')) || [];
    return !showOnlyStarred || starredRecipes.includes(recipe.id);
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
    if (this.recipesAvailable()) {
      return (
        <div className="recipe-list-container">
          <RecipeFilter
            updateFilterString={this.updateFilterString.bind(this)}
            updateShowStarred={this.updateShowStarred.bind(this)}
            updateMaxCookingTime={this.updateMaxCookingTime.bind(this)} />
          { this.renderRecipeList() }
        </div>
      );
    } else if (this.state.recipesNotFound) {
      return this.renderNoRecipesMessage();
    } else {
      return this.renderLoadingRecipes();
    }
  }

  renderRecipeList() {
    let filteredRecipes = this.applyFilters();

    return (
      <RecipeList
        recipes={filteredRecipes}
        goToNextPage={this.goToNextPage.bind(this)}
        goToPreviousPage={this.goToPreviousPage.bind(this)}
        currentPage={this.state.currentPage}
        pageSize={this.state.recipesPerPage} />
    );
  }

  renderLoadingRecipes() {
    return (
      <div>Loading recipes...</div>
    );
  }

  renderNoRecipesMessage() {
    return (
      <div>Sorry, we currently have no recipes for you</div>
    );
  }
}
