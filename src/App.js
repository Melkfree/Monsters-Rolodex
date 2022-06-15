import React from 'react';
import { useState, useEffect } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

import { useLocation } from 'react-router-dom';
import Character from './components/character/character.component';

const App = () =>{
  const location = useLocation();
  const [monsters, setMonsters] = useState([]);

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character`)
     .then(res=>res.json())
     .then(users=>setMonsters(users.results))
  },[])

  return(
    <div className="App">
      <Link to='/' className='app-title link'>Rick and Morty</Link>

      <Routes location={location} key={location.pathname}>
        <Route  path='/' element={<CardList monsters={monsters} />}>
        </Route>
        <Route path='/character/:id' element={ <Character /> } >  </Route>  
      </Routes>
    </div>
  )
}


export default App;
