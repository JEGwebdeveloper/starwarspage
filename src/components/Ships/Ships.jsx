import React, {useState, useEffect} from "react"
import SearchBar from "../SearchBar/SearchBar"
import { Link, useLocation, useNavigate} from "react-router-dom"
import styles from "./Ships.module.css"
import Titulo from "../../Images/titulo.png"
import Nav from "../Nav/Nav"
import Shipcards from "./Shipcards"
import axios from "axios"
import Shipsfilters from "./Shipsfilters"





export default function Ships(props){

    const [Ships, setShips] = useState([]);
    const [copyfullships, setCopyfullships] = useState([]);
 

    const search = async (id) => {
      
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
        const newShip={...response.data, id};
        setShips((ships) => [...ships, newShip]); // Almacena los datos en el estado como una matriz
        setCopyfullships((ships) => [...ships, newShip])
        console.log(Ships)
      } catch (error) {
        console.error('Error al obtener datos de la API: vehiculos', error);
      }
    console.log(Ships)
    };
  
    useEffect((id) => {
      // Aquí debes proporcionar un ID válido o dejarlo en blanco según tu lógica
      // Ejemplo: planetSearch(1) para obtener el primer planeta
      search(id);
    }, []);
  
    const onClose = (id) =>{
      setShips(
         Ships.filter((ship) => ship.id !==id))
   }
  
   const handlerfilterships = (p) =>{
    setShips(p)
  }
  


    return(
        <div className={styles.container}>
            <div className={styles.nav}>
                <Nav></Nav>
                <img className={styles.img1} src={Titulo} alt={Titulo} />
            </div>
            <div className={styles.search}>
                <SearchBar ships={Ships} search={search}></SearchBar>
            </div>
            <div className={styles.content}>
                <div className={styles.filter}>
                  <h1>FILTERS</h1>
                <Shipsfilters  
                copyfullships={copyfullships} 
                ships={Ships} 
                handlerfilterships={handlerfilterships}>
                </Shipsfilters>
                </div>
                <div className={styles.cards}>
                    {Ships.map((element, index) => (
                        <Shipcards
                        onClose={onClose}
                        img={`https://starwars-visualguide.com/assets/img/starships/${element.id}.jpg`}
                        key={index}
                        Name={element.name}
                        Model={element.model}
                        Passengers={element.passengers}
                        Films={element.Films}
                        Cost_in_credits={element.cost_in_credits}
                        Speed={element.max_atmosphering_speed}
                        Manufacturer={element.manufacturer}
                        ></Shipcards>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}