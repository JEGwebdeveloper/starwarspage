import React, { useState } from "react";
import styles from "./Planetsfilters.module.css";

export default function Filters(props) {
  const [checkFilter, setCheckfilter] = useState({
   
    arid: false,
    temperate: false,
    tropical: false,
    murky: false,
    windy: false,
    artificaltemplate: false,
    rock: false,
    airlessasteroid: false,
    desert: false,
    mountain: false,
    barren: false,
    cityscape: false,
    forest: false,
    lakes: false,
    swamp: false,
    jungles: false,
    gasgiant: false,
  });

  const [copy, setCopy] = useState([])

  const handlerclick = () => {
    console.log(props.copyfullplanets)
    // Crear un nuevo objeto con todos los valores establecidos en false
    const resetCheckfilter = Object.fromEntries(
      Object.keys(checkFilter).map(key => [key, false])
    );
    setCheckfilter(resetCheckfilter);
    props.handlerfilterplanets(props.copyfullplanets);
  };

  const handlefilter = (event, hola) => {
    console.log("deberia ser male", event.target.value)
   
   
      // Copiar el estado actual de checkFilter
      const updatedCheckFilter = {
        ...checkFilter,
        [event.target.value]: event.target.checked,
      };
  
      // Actualizar checkFilter con el nuevo estado
      setCheckfilter(updatedCheckFilter);


  console.log("deberia ser true", event.target.checked)
  if(event.target.checked){
  setCopy(props.planets)}
  else ""

  if(hola === "climate"){
      console.log("soy filter antes de los if", checkFilter)
      if(event.target.checked){
     
          const resultfilter = props.planets.filter(planet => planet.climate.includes(event.target.value)); //cambiar logica a contiene
          props.handlerfilterplanets(resultfilter);
          
        

      }
      else {
        
        //   const areAllFalse = Object.values(checkFilter).every(value => value === false);
        //   console.log("soy",areAllFalse)
        //   console.log("soy el array de personajes",props.copyfullplanets)
        //   console.log("filtros",checkFilter)
        //   if (areAllFalse) {
        //     props.handlerfilterplanets(props.copyfullplanets);
        //   }
        //   else{
         
          props.handlerfilterplanets(copy);      
          
          }
      
  }
  else if(hola === "terrain"){
   
    if(event.target.checked){
    
        const resultfilter = props.planets.filter(planet => planet.terrain.includes(event.target.value));
        props.handlerfilterplanets(resultfilter);
    }
    else{
      console.log(copy)
        // const resultfilter = props.characters.filter(character => character.gender !== event.target.value);
        props.handlerfilterplanets(copy);      
    }
  }    
  };

 

  return (
    <div className={styles.container}>
        <div className={styles.type}>
            <div className={styles.title}>Climate</div>
            <div className={styles.btnh2}> 
                <input type="checkbox"
                onChange={(event) => handlefilter(event, "climate")} value="arid" checked={checkFilter["arid"]}/>
                <h6>Arid</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "climate")} value="temperate" checked={checkFilter["temperate"]}/>
                <h6>Temperate</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "climate")} value="murky" checked={checkFilter["murky"]}/>
                <h6>Murky</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "climate")} value="windy" checked={checkFilter["windy"]}/>
                <h6>Windy</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "climate")} value="Artificial temperate" checked={checkFilter["Artificial temperate"]}/>
                <h6>Artificial temperate</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "climate")} value="tropical" checked={checkFilter["tropical"]}/>
                <h6>Tropical</h6>
            </div>
        </div>

        <div className={styles.type}>
            <div className={styles.title}>Terrain</div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                onChange={(event) => handlefilter(event, "terrain")} value="airless asteroid" checked={checkFilter["airless asteroid"]}/>
                <h6>Airless asteroid</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "terrain")} value="rock" checked={checkFilter["rock"]}/>
                <h6>Rock</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "terrain")} value="desert" checked={checkFilter["desert"]}/>
                <h6>Desert</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "terrain")} value="mountain" checked={checkFilter["mountain"]}/>
                <h6>Mountain</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "terrain")} value="barren" checked={checkFilter["barren"]}/>
                <h6>Barren</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "terrain")} value="cityscape" checked={checkFilter["cityscape"]}/>
                <h6>Cityscape</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "terrain")} value="forest" checked={checkFilter["forest"]}/>
                <h6>Forest</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "terrain")} value="lakes" checked={checkFilter["lakes"]}/>
                <h6>Lakes</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "terrain")} value="swamp" checked={checkFilter["swamp"]}/>
                <h6>Swamp</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "terrain")} value="jungles" checked={checkFilter["jungles"]}/>
                <h6>Jungles</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "terrain")} value="gas giant" checked={checkFilter["gas giant"]}/>
                <h6>Gas giant</h6>
            </div>
        </div>

        <div className={styles.resetbtn}>
            <div ><button className={styles.btn}
                 onClick={handlerclick}>
               CLEAN FILTERS</button></div>
        </div>

        
    </div>   
  );
}
