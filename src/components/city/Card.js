import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import {
    Link
} from 'react-router-dom';

const Container = styled.div`

`;

class Card extends React.Component{


    render(){

        const {source, name, slug} = this.props // Destructuration

        return(                                
                
            <Container className='col-6'>

                <Link
                    to={slug}
                >
                    <div>
                        <img 
                            src={source}
                            className="card-img-top"
                            alt={'photo de ' + name}
                        />
                           <p>{name}</p>
                    </div>

                </Link>

            </Container>
        );

    }
}

Card.defaultProps = {
    name: 'test',
    source: 'http://via.placeholder.com/300x200',
    slug: 'test'
}

export default Card;