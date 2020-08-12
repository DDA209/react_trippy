import React from 'react';

class Card extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            name: '',
            source: 'http://via.placeholder.com/300x200',
            slug: ''
        }
    }


    render(){
        return(
            <div>
                <img src={this.state.source} class="card-img-top" alt={'photo de ' + this.state.name} />
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default Card;