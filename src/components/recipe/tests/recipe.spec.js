import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Recipe from '../index';

describe('<Recipe/>', function () {
  it('should render component', function () {
    const props = {
      match: {
        params: {
          recipeId: 1
        }
      }
    }

    const recipe = shallow(<Recipe match={props.match}/>);
    expect(recipe).to.exist;
  });
});
