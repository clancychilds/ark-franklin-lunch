import React from 'react';
import ArkFranklinHeader from './ArkFranklinHeader';
import MenuForm from '../containers/MenuForm';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <ArkFranklinHeader />
        <MenuForm />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
