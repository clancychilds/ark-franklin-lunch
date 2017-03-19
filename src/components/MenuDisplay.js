import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './menudisplay.cssmodule.css';

class MenuDisplay extends React.Component {

  render() {
    const { day, week } = this.props;
    return (
      <div className="menudisplay-component" styleName="menudisplay-component">
      {week.label} - {day.label}
      </div>
    );
  }
}

MenuDisplay.displayName = 'MenuDisplay';
MenuDisplay.propTypes = {};
MenuDisplay.defaultProps = {};

export default cssmodules(MenuDisplay, styles);
