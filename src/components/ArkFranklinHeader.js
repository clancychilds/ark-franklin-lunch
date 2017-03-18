import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './arkfranklinheader.cssmodule.css';

const arkLogo = require('../images/arklogo.png');

class ArkFranklinHeader extends React.Component {

  render() {
    return (
      <div className="arkfranklinheader-component" styleName="arkfranklinheader-component">
      <img src={arkLogo} alt='Ark Frankin Primary Academy' />
      Lunch Menu
      </div>
    );
  }
}

ArkFranklinHeader.displayName = 'ArkFranklinHeader';
ArkFranklinHeader.propTypes = {};
ArkFranklinHeader.defaultProps = {};

export default cssmodules(ArkFranklinHeader, styles);
