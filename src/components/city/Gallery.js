import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    margin-top: 10;
    margin-bottom: 20;
    color: Global.color.body;
    font-family: Global.font.primary;
`;




class Gallery extends React.Component{

// recoit this.props.cities >>> [{...}, {...}, {...}, {...}]

    render(){
        return(
            <Container className="row">
                <div className="col-md-12">
                    <h1>Explorez le monde</h1>
                </div>
            </Container>
        )
    }
}

export default Gallery;