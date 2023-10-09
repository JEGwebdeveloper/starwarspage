import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Planets.module.css";
import Titulo from "../../Images/titulo.png";
import Nav from "../Nav/Nav";
import axios from "axios";
import Card from "../Card/Card";

export default function Planets(props) {
  const [planets, setPlanets] = useState([]);
 
 

  const search = async (id) => {
    
    try {
      const response = await axios.get(`https://swapi.dev/api/planets/${id}`);
      const newPlanet={...response.data, id};
      setPlanets((planets) => [...planets, newPlanet]); // Almacena los datos en el estado como una matriz
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    }
  };

  useEffect((id) => {
    // Aquí debes proporcionar un ID válido o dejarlo en blanco según tu lógica
    // Ejemplo: planetSearch(1) para obtener el primer planeta
    search(id);
  }, []);

  const onClose = (id) =>{
    setPlanets(
       planets.filter((planet) => planet.id !==id))
 }


  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Nav></Nav>
        <img className={styles.img1} src={Titulo} alt={Titulo} />
      </div>
      <div className={styles.search}>
        <SearchBar planets={planets} search={search}></SearchBar>
      </div>
      <div className={styles.content}>
        <div className={styles.filter}>filter</div>
        <div className={styles.cards}>
          {planets.map((element, index) => (
            <Card
            img={`https://starwars-visualguide.com/assets/img/planets/${element.id}.jpg`}
              onClose={onClose}
             
              key={index}
              Name={element.name}
              Climate={element.climate}
              Terrain={element.terrain}
              Population={element.population}
              Diameter={element.diameter}
              Rotation_Period={element.rotation_period}
              Gravity={element.gravity}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
}
