import React from 'react';

import Home from '../core/Home';
import Api from '../../utils/Api'

import '../../App.css';

// import ''

class HomeContainer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      cities: [],
  };

  }

  componentDidMount(){
    const cities = Api.getHome();
    this.setState({
      cities
    })
    console.log('components/containers/HomeContainer#componentDidMount Api.getHome()', this.state.cities)
    
  }

  render() {
    return (
      
      <Home />

    );
  }
}

export default HomeContainer;