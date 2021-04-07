import React from 'react';

import './index.css';

class Card extends React.Component {
    render(){
        return(           
            <div className="card-container">
                <img src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`} alt="monster"/>
                <h1>{this.props.monster.name}</h1>
                <h2>{this.props.monster.email}</h2>   
            </div>
        )
    }
}

export default Card;