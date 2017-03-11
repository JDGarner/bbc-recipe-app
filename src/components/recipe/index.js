import React from 'react';

class Recipe extends React.Component {

  render() {
    return (
      <div>
        {this.props.recipe.name}
      </div>
    );
  }
}

export default Recipe;
