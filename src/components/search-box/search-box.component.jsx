import {React, Component} from "react";
import './search-box.styles.css';

export const SearchBox = (props) =>{
    return(
        <input className='search-box' type="search" placeholder='Search monsters' onChange={props.onChangeHandler}/>
    )
}