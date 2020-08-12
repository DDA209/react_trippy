import React from 'react';

class Home extends React.Component {

    constructor(props){

        super(props);

        this.state = {
            cities: [],
        };
    }

    render(){
        console.log('components/containers/home#render this.state.cities', this.state.cities);

        return(
            <div
                className='container-fluid'
                style={{
                    fontFamily: 'Montserrat'
                }}>
                <div
                    className='row'>
                    <div
                        className='col-lg-4 col-md-8 col-12'>
                        <p>
                            Je vérifie que les 2 mots : Voleur et <span style={{fontFamily: 'serif' }}>Voleur</span> ont une police d'écriture différente
                        </p>
                    </div>
                    <div
                        className='col-lg-8 col-md-4 col-12'>
                        Une autre phrase
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;