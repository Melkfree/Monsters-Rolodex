import './character.styles.scss';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

function Character() {
    let params = useParams();
    const [character, setCharacter] = useState({});
     
    useEffect(()=>{
        const getCharacter = async () => {
            const data = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
            const characterData = await data.json();
            setCharacter(characterData);
        }
        getCharacter();
    },[params])

    
    return(
        <div className="character-container">
            <img src={character.image} alt="monster" />
            <div className='details'>
                <h2>Name: {character.name}</h2>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Location: {character.location && character.location.name}</p>
                <p>Episodes: {character.episode && character.episode.map((num)=>{return num.replace('https://rickandmortyapi.com/api/episode/', '')}).join(', ')}</p>
                <p>Status: {character.status}</p>
                <p>Date of creation: {Date(character.created)}</p>
                <p>Like/dislike</p>
            </div>
        </div>
    );
}

export default Character;