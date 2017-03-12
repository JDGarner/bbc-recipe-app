import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Recipe from '../recipe'
import RecipeList from '../recipe-list'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={RecipeList}/>
          <Route path="/recipe/:recipeId" component={Recipe}/>
        </div>
      </Router>
    );
  }
}

export default App;
