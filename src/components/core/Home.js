import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

// import Card from '../city/Card';
import Gallery from '../city/Gallery';

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        cities: []
        }
    }

    renderCards() {

        if (this.state.cities.length > 0) {
            return(
                
                        
                    
                <div className='row'>
                    
                   
                    <Router> {/*
                        {this.state.cities.map((city) => {
                            return(
                                
                                <Card
                                    key = {city.slug}
                                    name = {city.name}
                                    source = {`http://localhost:3001${city.source}`}
                                    slug = {`hotels?city=${city.slug}`}
                                >
                                </Card>
                            )
                        })}
                        */}
                        <Switch>

                            {this.state.cities.map((city) => {

                                return(
                            
                                <Route 
                                    key = {city.slug}
                                    path = {`http://localhost:3001${city.source}`}
                                >
                                </Route>

                                )
                            })}

                        </Switch>
                    </Router>

                   

                    <Gallery
                        cities = {this.state.cities}
                    />

                </div>
                
            )

            
        };

        return(
            <p>En cours de traitement, veuillez patienter...</p>
        )
    }


    componentDidMount() {
        fetch('http://localhost:3001/api/home')
        .then(resp => resp.json())
        .then(json => {
        const cities = json.cities
        this.setState({
            cities
        });
        
        // console.log('components/containers/HomeContainer#componentDidMount this.state.cities',this.state.cities);

        })
    }

  

    render() {
        // console.log('components/containers/home#render this.state.cities', this.state.cities);
        // {if (this.props.cities.lenght > 0) {
        //     console.log('component/core/Home#render this.props.cities', this.props.cities)
        // }}

        return(
            <div
                className='container'
                style={{fontFamily: 'Montserrat'}}
            >

                {this.renderCards()}
            
            </div>
        );
    }
}

export default Home;