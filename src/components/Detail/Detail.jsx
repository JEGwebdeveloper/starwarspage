import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



export default function Detail() {
    const [character,setcharacter] = useState({});
    console.log(character)

    const {id} = useParams();
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setcharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setcharacter({});
     }, [id]);


    return(
    <div>
        {
            character?(
                <div>

                    <h2>name: {character.name}</h2>
                    <h2>status: {character.status}</h2>
                    <h2>species: {character.species}</h2>
                    <h2>gender: {character.gender}</h2>
                    <h2>origin: {character.origin?.name}</h2>
                    <img src={character.image} alt={character.name} />


                </div>
                 )
                    :("")
                    
        }

    </div>
    )
}