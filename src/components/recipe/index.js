import React from 'react';
import { Link } from 'react-router-dom'

class Recipe extends React.Component {

  render() {
    return (
      <div>
        Recipe ID {this.props.match.params.recipeId}
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Recipe;
