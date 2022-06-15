import React from "react";
import './card-list.styles.css';
import { Card } from "../card/card.component";
import { Link } from "react-router-dom";
import ComboBox from "../search-box/search-box.component";


export const CardList = ({monsters}) => {
    return <div className="card-list">
        <ComboBox />
        {monsters.map(monster=>(
            <Link className="link" to={`/character/${monster.id}`}><Card key={monster.id} monster={monster} /></Link>
            
        ))}
    </div>
}