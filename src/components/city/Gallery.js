import React from 'react';
import styled from 'styled-components';

import LargeCard from './LargerCard';
import Card from './Card';
// import Config from '../../Config';

const Container = styled.div`
    margin-top: 10;
    margin-bottom: 20;
    color: Global.color.body;
    font-family: Global.font.primary;
`;


class Gallery extends React.Component{

// reçoit this.props.cities >>> [{...}, {...}, {...}, {...}]
    renderCards() {
        return (
            <div className="row">
                {this.props.cities.map( (city) => {
                //     console.log('components/city/Gallery#renderCards city.slug', city.slug);
                //     console.log('components/city/Gallery#renderCards this.props.cities[0].slug', this.props.cities[0].slug);
                    
                    if (city.slug !== this.props.cities[0].slug){
                        // console.log('components/city/Gallery#renderCards in "if(){}"');
                        return(
                            // <p key = {city.slug} >OK</p>
                            <Card
                                key = {city.slug}
                                name = {city.name}
                                source = {`http://localhost:3001${city.source}`}
                                slug = {`hotels?city=${city.slug}`}
                                >
                            </Card>
                        );
                    };
                    return null;
                })}
            </div>
        )
        // return(<p>OK</p>)
        // this.props.cities.map( (city) => {
        //     console.log('components/city/Gallery#renderCards city.slug', city.slug);
        //     console.log('components/city/Gallery#renderCards this.props.cities[0].slug', this.props.cities[0].slug);
            
        //     if (city.slug !== this.props.cities[0].slug){
        //         console.log('components/city/Gallery#renderCards in "if(){}"');
                // return(
                    // <p key = {city.slug} >OK</p>
                    // <div>
                    //     <Card
                    //     key = {city.slug}
                    //     name = {city.name}
                    //     source = {`http://localhost:3001${city.source}`}
                    //     slug = {`hotels?city=${city.slug}`}
                    //     >
                    //     </Card>
                        
                    // </div>
                // );
        //     };
        // })
    }

    render() {
        return(
            
            <Container className="row">
                <div className="col-md-12">
                    <h1>Explorez le monde</h1>
                    <div className="row">
                        <LargeCard
                            name = {this.props.cities[0].name}
                            source = {`http://localhost:3001${this.props.cities[0].source}`}
                            // source = {Config.host + city.source}
                            slug = {`hotels?city=${this.props.cities[0].slug}`}
                        />
                    
                        <div className="col-12 col-md-6">
                                {this.renderCards()}
                        </div>
                    </div>
                </div>
                <Card/> {/* Carte de test */}
            </Container>
        )
    }
}

export default Gallery;