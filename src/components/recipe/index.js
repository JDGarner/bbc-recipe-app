import React from 'react';
import { Link } from 'react-router-dom'

class Recipe extends React.Component {

  render() {
    console.log('props: ' + JSON.stringify(this.props));
    return (
      <div>
        Recipe Page
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Recipe;
