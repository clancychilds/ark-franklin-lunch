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
    console.log(menuData);
    console.log(dayValue);
    console.log(weekValue);
    const menu = menuData[weekValue][dayValue];
    console.log(menu);
    return (
      <div className="menudisplay-component" styleName="menudisplay-component">
      {week.label} - {day.label}
      { Object.keys(menu).map(menuItem => (<div><h1>{ menuItem }</h1><div>{ menu[menuItem] }</div></div>)) }
      </div>
    );
  }
}

MenuDisplay.displayName = 'MenuDisplay';
MenuDisplay.propTypes = {};
MenuDisplay.defaultProps = {};

export default cssmodules(MenuDisplay, styles);
