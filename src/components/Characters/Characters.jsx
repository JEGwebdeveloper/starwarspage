// Characters.js
import React, { useState, useEffect } from "react";
import styles from "./Characters.module.css";
import Characterscards from "./Characterscards";
import axios from "axios"; 
import SearchBar from "../SearchBar/SearchBar";
import Nav from "../Nav/Nav";
import Titulo from "../../Images/titulo.png";
import Filters from "./Filters";


export default function Characters(props) {
  const [characters, setCharacters] = useState([]);
  const [copyfullcharacters, setCopyfullcharacters] = useState([]);
  const search = async (id) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/${id}`);
      const newCharacter = { ...response.data, id };
      setCharacters((characters) => [...characters, newCharacter]);
      setCopyfullcharacters((characters)=> [...characters, newCharacter]);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };
 
 

  useEffect((id) => {
    search(id); // Debes proporcionar un ID válido o dejarlo en blanco según tu lógica
  }, []);

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const handlerfiltercharacters = (p) =>{
    setCharacters(p)
  }


  return (
    <div className={styles.container}>
     <div className={styles.nav}>
                <Nav></Nav>
                <img className={styles.img1} src={Titulo} alt={Titulo} />
            </div>
            <div className={styles.search}>
                <SearchBar characters={characters} search={search}></SearchBar>
            </div>
      <div className={styles.content}>
        <div className={styles.filter}>
          <h1>FILTERS</h1>
          <Filters copyfullcharacters={copyfullcharacters} characters={characters} handlerfiltercharacters={handlerfiltercharacters} />
        </div>
        <div className={styles.cards}>
          {characters.map((element, index) => (
            <Characterscards
              onClose={onClose}
              img={`https://starwars-visualguide.com/assets/img/characters/${element.id}.jpg`}
              key={index}
              Name={element.name}
              Height={element.height}
              Mass={element.mass}
              Skin_color={element.skin_color}
              Gender={element.gender}
              Species={element.species}
              Haircolor={element.hair_color}
            ></Characterscards>
          ))}
        </div>
      </div>
    </div>
  );
}
