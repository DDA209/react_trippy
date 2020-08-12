import React from 'react';

import Home from '../core/Home';
import Api from '../../utils/Api'

import '../../App.css';

// import ''

class HomeContainer extends React.Component {

  componentDidMount(){
    const qqchose = Api.getHome()
    console.log('containers/HomeContainers #componentDidMount Api.getHome()', qqchose)
  }

  render() {
    return (
      
      <Home />

    );
  }
}

export default HomeContainer;