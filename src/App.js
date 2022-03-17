import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';



class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>res.json())
    .then(users=> this.setState({monsters: users}))
  }

  render(){

    const filteredMonsters = this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input className='search-box' type="search" placeholder='Seacrh monsters' onChange={
          (event)=>{
            console.log(event.target.value);
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(()=>{return {searchField}})
          }}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  
}

export default App;
