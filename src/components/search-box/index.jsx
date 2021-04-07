import React from 'react';

import './index.css';

class SearchBox extends React.Component {
    render(){
        return(
            <input type="search"
                className="" 
                placeholder={this.props.placeholder} 
                onChange={this.props.handleChange} 
            />
        )
    }
}

export default SearchBox;