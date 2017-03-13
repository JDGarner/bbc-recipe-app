import React from 'react'
import RecipeListItem from '../recipe-list-item'
import RecipeFilter from '../recipe-filter'
import config from '../../config'
import Request from 'superagent'

export default class RecipeList extends React.Component {
  constructor() {
    super();
    this.state = {
      allRecipes: [],
      currentPageRecipes: [],
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
          currentPageRecipes: this.pageRecipes(response.body, this.state.currentPage),
          recipesLoaded: true
        });
      }
    });
  }

  pageRecipes(recipes, pageNumber) {
    let recipesPerPage = this.state.recipesPerPage;

    return recipes.slice(
      pageNumber * recipesPerPage,
      pageNumber * recipesPerPage + recipesPerPage
    );
  }

  goToNextPage() {
    let newPage = this.state.currentPage + 1;
    this.setState({
      currentPage: newPage,
      currentPageRecipes: this.pageRecipes(this.state.allRecipes, newPage)
    });
  }

  goToPreviousPage() {
    let newPage = this.state.currentPage - 1;
    this.setState({
      currentPage: newPage,
      currentPageRecipes: this.pageRecipes(this.state.allRecipes, newPage)
    });
  }

  filterRecipes(filterString) {
    const filteredRecipes = filterString ?
      this.getFilteredRecipes(filterString) :
      this.state.allRecipes;

    this.setState({
      currentPageRecipes: this.pageRecipes(filteredRecipes)
    });
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
        <div className="recipe-list-container">
          <RecipeFilter filterRecipes={this.filterRecipes.bind(this)} />
          { this.state.allRecipes.length > 0 ?
            this.renderRecipeListContent() :
            this.renderNoRecipesMessage() }
        </div>
      );
    } else {
      return (
        <div>Loading recipes...</div>
      );
    }
  }

  renderRecipeListContent() {
    return (
      <div className="recipe-list-content">
        { this.renderRecipes() }
        { this.renderPageButtons() }
      </div>
    );
  }

  renderPageButtons() {
    return (
      <div className="page-buttons">
        <span onClick={this.goToPreviousPage.bind(this)}>Previous Page</span>
        <span onClick={this.goToNextPage.bind(this)}>Next Page</span>
      </div>
    );
  }

  renderNoRecipesMessage() {
    return (
      <div>Sorry, we currently have no recipes for you</div>
    );
  }

  renderRecipes() {
    if (this.state.currentPageRecipes.length > 0) {
      return (
        <ul className="recipe-list"> {
          this.state.currentPageRecipes.map((recipe, key) => {
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
