import React from 'react';

import CardList from './components/card-list';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankstein',
          id: '1'
        },
        {
          name: 'Dracula',
          id: '2'
        },
        {
          name: 'Zombie',
          id: '3'
        },
        {
          name: 'Henrique pauzudo',
          id: '4'
        }
      ],
      searchField: '',
    }
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(users => this.setState({ monsters: users}))
  }

  render(){
    return(
      <div className="App">
        <input type="search" placeholder="search monsters" 
          onChange={e => this.setState({ searchField: e.target.value })} 
        />
        <CardList monsters={this.state.monsters}/>
      </div>
    )
  }
}

export default App;
