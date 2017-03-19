import React from 'react';
import { shallow } from 'enzyme';
import MenuDisplay from 'components/MenuDisplay.js';

describe('<MenuDisplay />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<MenuDisplay />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "menudisplay-component"', function () {
      expect(component.hasClass('menudisplay-component')).to.equal(true);
    });
  });
});
