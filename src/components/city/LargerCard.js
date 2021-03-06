import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import {
    Link
} from 'react-router-dom';

const Container = styled.div`

`;

class Card extends React.Component{

    // constructor(props){
    //     super(props)

    //     this.state = {

    //     }
    // }



    render(){


        // if (this.props.cities.length > 0){

            // this.setState({
            //     name: this.props.cities[0].name,
            //     slug: this.props.cities[0].slug,
            //     source: this.props.cities[0].source
            // })

            return(                                
                
                <Container className="col-12 col-md-6">
                    <Link
                        to={this.props.slug}
                    >
                        <div>
                            <img src={this.props.source} className="card-img-top" alt={'photo de ' + this.props.name} />
                            <p>{this.props.name}</p>
                        </div>

                    </Link>
                </Container>
            
            );
        // };

        // return null
    }
}

Card.defaultProps = {
    name: 'test',
    source: 'http://via.placeholder.com/300x200',
    slug: 'test'
}

export default Card;