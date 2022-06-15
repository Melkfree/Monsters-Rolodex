import {React, Component, Fragment} from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ComboBox() {

    const [searchedMonsters, setSearchedMonsters] = useState({});

    useEffect(()=>{
      fetch(`https://rickandmortyapi.com/api/character`)
       .then(res=>res.json())
       .then(users=>setSearchedMonsters(users.results))
    },[])

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={searchedMonsters}
      getOptionLabel={ (option) =>  option.name}
      sx={{ width: 300 }}
      onChange={ (e, obj) => { console.log(obj)} }
      renderOption={(e, obj) =>{return <Link to={`/character/${obj.id}`}><li>{obj.name}</li></Link> }}
      renderInput={(params, obj) => <TextField {...params} label="Search character" />}
    />
  );
}