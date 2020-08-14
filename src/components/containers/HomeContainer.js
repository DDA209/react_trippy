import React from 'react';

// import Home from '../core/Home';
// import Api from '../../utils/Api'

import '../../App.css';

// import ''

class HomeContainer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
<<<<<<< HEAD
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

=======
      cities: [],
  };

  }

  componentDidMount(){
    const cities = Api.getHome();
    this.setState({
      cities
    })
    console.log('components/containers/HomeContainer#componentDidMount Api.getHome()', this.state.cities)
    
>>>>>>> 4085e94b39a23ee0aafa63370bd172ef85d2e2a7
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
      
<<<<<<< HEAD
      // <Home />
      <div>
        {this.state.cities.map((city, index) => {
          return(
            <p key={index}>{city.name}</p>
          )
        })}
      </div>
=======
      <Home cities={this.state.cities}/>
>>>>>>> 4085e94b39a23ee0aafa63370bd172ef85d2e2a7

    );
  }
}

export default HomeContainer;