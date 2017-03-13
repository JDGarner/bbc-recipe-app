import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import RecipeListItem from '../index';

describe('<RecipeListItem/>', function () {
  it('should render component', function () {
    const props = {
      recipe: {
        id: 1,
        name: "Lemon Chicken",
        cookingtime: "30 Minutes",
        mainingredients: "Lemon, Chicken, Thyme"
      }
    }

    const recipe = shallow(<RecipeListItem recipe={props.recipe} />);
    expect(recipe).to.exist;
  });

  it('should link to recipe page when selected', function () {
    // TO DO
  });

  it('should display recipe info for given recipe', function () {
    // TO DO
  });
});
