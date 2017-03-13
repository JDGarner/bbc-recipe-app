import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Recipe from '../recipe'
import RecipeListContainer from '../recipe-list-container'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <h1>BBC Recipe App</h1>
          <Route exact path="/" component={RecipeListContainer}/>
          <Route path="/recipe/:recipeId" component={Recipe}/>
        </div>
      </Router>
    );
  }
}
