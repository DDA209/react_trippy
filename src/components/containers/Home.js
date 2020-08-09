import React from 'react';

class Home extends React.Component {

    constructor(props){

        super(props);

        this.state = {
            cities: [],
        };
    }

    render(){
        return(
            <div>
                <h1>Hello Home</h1>
            </div>
        );
    }
}

export default Home;