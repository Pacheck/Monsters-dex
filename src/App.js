import React from 'react';

import CardList from './components/card-list';
import SearchBox from './components/search-box';
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
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return(
      <div className="App">
        <SearchBox 
          placeholder="search monsters" 
          handleChange={e => this.setState({ searchField: e.target.value })} 
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
