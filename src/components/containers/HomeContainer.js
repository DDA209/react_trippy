import React from 'react';

// import Home from '../core/Home';
// import Api from '../../utils/Api'

import '../../App.css';

// import ''

class HomeContainer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      cities: []
    }
  }

  // componentDidMount(){
  //   Api.getHome()
  //   console.log('containers/HomeContainers #componentDidMount Api.getHome()  this.state.cities',this.state.cities)
  // }

  getHome() {
  
    fetch('http://localhost:3001/api/home')
    .then(resp => resp.json())
    .then(json => {
      const cities = json.cities
      this.setState({
        cities
      });
      
      console.log('components/containers/HomeContainer#getHome this.state.cities',this.state.cities);

    })
  
  }
  componentDidMount(){

    
    

  }

  // componentDidMount(){
  //   fetch('http://localhost:3001/api/home')
  //   .then(resp => resp.json())
  //   .then(json => {
  //     const cities = json.cities
  //     this.setState({
  //       cities
  //     });
      
  //     console.log('components/containers/HomeContainer#componentDidMount this.state.cities',this.state.cities);

  //   })
  // }

  

  render() {
    console.log('components/containers/HomeContainer#render this.state.cities', this.state.cities)
    return (
      
      // <Home />
      <div>
        {this.state.cities.map((city, index) => {
          return(
            <p key={index}>{city.name}</p>
          )
        })}
      </div>

    );
  }
}

export default HomeContainer;