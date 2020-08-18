import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import Card from '../city/Card';

class Home extends React.Component {

    constructor(props){
        super(props)

        this.state = {
        cities: []
        }
    }


    componentDidMount(){
        fetch('http://localhost:3001/api/home')
        .then(resp => resp.json())
        .then(json => {
        const cities = json.cities
        this.setState({
            cities
        });
        
        console.log('components/containers/HomeContainer#componentDidMount this.state.cities',this.state.cities);

        })
    }

  

    render(){
        // console.log('components/containers/home#render this.state.cities', this.state.cities);
        // {if (this.props.cities.lenght > 0) {
        //     console.log('component/core/Home#render this.props.cities', this.props.cities)
        // }}

        return(
            
            
            <div
                className='container'
                style={{
                    fontFamily: 'Montserrat'
                }}>
                    
                
                <div className='row'>
                    
                    
                    <Router>
                        {this.state.cities.map((city, index) => {
                            return(
                                
                                <Link
                                    key = {index}
                                    to={`http://localhost:3001${city.source}`}
                                >
                                    <Card
                                        name = {city.name}
                                        source = {`http://localhost:3001${city.source}`}
                                        slug = {city.slug}
                                    >
                                    </Card>
                                </Link>
                            )
                        })}

                        <Switch>

                            {this.state.cities.map((city, index) => {

                                return(
                            
                                <Route 
                                    key = {index}
                                    path={`http://localhost:3001${city.source}`}
                                >
                                </Route>

                                )
                            })}

                        </Switch>
                    </Router>

                    <Card/> {/* Carte de test */}
                </div>
            </div>
        );
    }
}

export default Home;