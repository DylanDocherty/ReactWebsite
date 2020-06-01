import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component'


import './App.css';

class App extends Component {
  constructor(){
    super();
    // http://jsonplaceholder.typicode.com/users
    this.state = {
      monsters: []
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users=>this.setState({monsters: users}));
  }

  render(){
    return (
      <div className="App">
        <CardList>
        {
          this.state.monsters.map(monster=> <h1>{monster.name}</h1>)
        }
        </CardList>
      </div>
    );   
  }
}

export default App;
