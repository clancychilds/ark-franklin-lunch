import React from 'react';
import { shallow } from 'enzyme';
import ArkFranklinHeader from 'components//ArkFranklinHeader.js';

describe('<ArkFranklinHeader />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<ArkFranklinHeader />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "arkfranklinheader-component"', () => {
      expect(component.hasClass('arkfranklinheader-component')).to.equal(true);
    });
  });
});
