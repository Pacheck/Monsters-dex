import React from 'react';
import './index.css';

import Card from '../card';

class CardList extends React.Component {
    render(){
        return(
            <div className="lista">
                {this.props.monsters.map(monster => <Card monster={monster} key={monster.id}/>)}
            </div>
        )
    }
}

export default CardList;