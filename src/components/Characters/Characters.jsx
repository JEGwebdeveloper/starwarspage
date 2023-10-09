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

  const search = async (id) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/${id}`);
      const newCharacter = { ...response.data, id };
      setCharacters((characters) => [...characters, newCharacter]);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  useEffect(() => {
    search(1); // Debes proporcionar un ID válido o dejarlo en blanco según tu lógica
  }, []);

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

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
          <h1>FILTER</h1>
          <Filters characters={characters} />
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
            ></Characterscards>
          ))}
        </div>
      </div>
    </div>
  );
}
