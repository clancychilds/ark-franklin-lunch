import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './menudisplay.cssmodule.css';
import menuData from './menudata.js';

class MenuDisplay extends React.Component {

  render() {
    const { day, week } = this.props;
    if (day === undefined || week === undefined) return;
    var dayValue = day.value;
    var weekValue = week.value
    const menu = menuData[weekValue][dayValue];
    return (
      <div className="menudisplay-component" styleName="menudisplay-component">
      { Object.keys(menu).map(menuItem => (<div><h1>{ menuItem }</h1><div styleName="item-detail">{ menu[menuItem] }</div></div>)) }
      </div>
    );
  }
}

MenuDisplay.displayName = 'MenuDisplay';
MenuDisplay.propTypes = {};
MenuDisplay.defaultProps = {};

export default cssmodules(MenuDisplay, styles);
