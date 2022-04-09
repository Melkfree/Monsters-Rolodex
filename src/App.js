import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox} from './components/search-box/search-box.component';


const App = () =>{
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
     .then(res=>res.json())
     .then(users=>setMonsters(users))
  },[])

  const onSearchChange = (event) =>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const filteredMonsters = monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return(
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange}/>
      <CardList monsters={filteredMonsters} />
    </div>
  )
}


export default App;
