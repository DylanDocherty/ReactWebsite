import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();
    // http://jsonplaceholder.typicode.com/users
    this.state = {
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users=>this.setState({monsters: users}));
  }

  handleChange = (e)=> {
    this.setState({searchField: e.target.value});
  }

  render(){
    const {monsters, searchField} =  this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Bigelow+Rules&display=swap" rel="stylesheet"></link>
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='search monster'
          handleChange= {this.handleChange}
          />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );   
  }
}

export default App;
