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

  onSearchChange = (event)=>{
            console.log(event.target.value);
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(()=>{return {searchField}})
          };

  render(){

    
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input className='search-box' type="search" placeholder='Seacrh monsters' onChange={onSearchChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  
}

export default App;
