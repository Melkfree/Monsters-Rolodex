import React from "react";
import './card.styles.css';

export const Card = (props) =>{
    const {name, status} = props.monster;
    
    return(
        <div className="card-container">
            <h2>{name}</h2>
            <p>{status}</p>
            <p>Like/dislike</p>
        </div>
    )
}