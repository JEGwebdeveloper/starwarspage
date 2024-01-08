import React, { useState } from "react";
import styles from "./Shipsfilters.module.css";

export default function Filters(props) {
  const [checkFilter, setCheckfilter] = useState({
   
    star_destroyer: false,
    imperial: false,
    star_dreadnought: false,
    Starfighter: false,
    assault_starfighter: false,
    landing_craft: false,
    "n/a": false,
    "<100": false,
    ">100": false,
    "<1000": false,
    ">1000": false,
    "0": false,
  })

  

  const handlerclick = () => {
    console.log(props.copyfullships)
    // Crear un nuevo objeto con todos los valores establecidos en false
    const resetCheckfilter = Object.fromEntries(
      Object.keys(checkFilter).map(key => [key, false])
    );
    setCheckfilter(resetCheckfilter);
    props.handlerfilterships(props.copyfullships);
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
  props.setCopy(props.ships)}
  else ""

  if(hola === "starship_class"){
      console.log("soy filter antes de los if", checkFilter)
      if(event.target.checked){
        
        const valuereplace = event.target.value.replace(/_/g, ' ');
    
      
        
          const resultfilter = props.ships.filter(ship =>ship.starship_class.includes(valuereplace)); //cambiar logica a contiene
          props.handlerfilterships(resultfilter);
          
        

      }
      else {
        
        //   const areAllFalse = Object.values(checkFilter).every(value => value === false);
        //   console.log("soy",areAllFalse)
        //   console.log("soy el array de personajes",props.copyfullships)
        //   console.log("filtros",checkFilter)
        //   if (areAllFalse) {
        //     props.handlerfilterships(props.copyfullships);
        //   }
        //   else{
         
          props.handlerfilterships(props.copy);      
         
          }
      
  }
  else if(hola === "passengers"){
   
    if(event.target.checked){
        
        if(event.target.value === "0"){
            const resultfilter = props.ships.filter(ship => ship.passengers === "0");
            props.handlerfilterships(resultfilter);
        }
        else if(event.target.value === "n/a"){
            const resultfilter = props.ships.filter(ship => ship.passengers === "n/a");
            props.handlerfilterships(resultfilter);
        }
        else if(event.target.value === ">100"){
            const resultfilter = props.ships.filter(ship => parseInt(ship.passengers) > 100);
            props.handlerfilterships(resultfilter);
        }
        else if(event.target.value === "<100"){
            const resultfilter = props.ships.filter(ship => parseInt(ship.passengers) < 100);
            props.handlerfilterships(resultfilter);
        }
        else if(event.target.value === ">1000"){
            const resultfilter = props.ships.filter(ship => parseInt(ship.passengers) > 1000);
            props.handlerfilterships(resultfilter);
        }
        else if(event.target.value === "<1000"){
            const resultfilter = props.ships.filter(ship => parseInt(ship.passengers) < 1000);
            props.handlerfilterships(resultfilter);
        }
    }
    else{
     
        // const resultfilter = props.characters.filter(character => character.gender !== event.target.value);
        props.handlerfilterships(props.copy);      
    }
  }    
  };

 

  return (
    <div className={styles.container}>
        <div className={styles.type}>
            <div className={styles.title}>Starship class</div>
            <div className={styles.btnh2}> 
                <input type="checkbox"
                onChange={(event) => handlefilter(event, "starship_class")} value="Star_Destroyer" checked={checkFilter["Star_Destroyer"]}/>
                <h6>star destroyer</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "starship_class")} value="Imperial" checked={checkFilter["Imperial"]}/>
                <h6>imperial</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "starship_class")} value="Star_Dreadnought" checked={checkFilter["Star_Dreadnought"]}/>
                <h6>star dreadnought</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "starship_class")} value="Starfighter" checked={checkFilter["Starfighter"]}/>
                <h6>starfighter</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "starship_class")} value="assault_starfighter" checked={checkFilter["assault_starfighter"]}/>
                <h6>assault starfighter</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "starship_class")} value="landing_craft" checked={checkFilter["landing_craft"]}/>
                <h6>landing craft</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "starship_class")} value="Escort_ship" checked={checkFilter["Escort_ship"]}/>
                <h6>Escort Ship</h6>
            </div>
        </div>

        <div className={styles.type}>
            <div className={styles.title}>Passenger</div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                onChange={(event) => handlefilter(event, "passengers")} value="n/a" checked={checkFilter["n/a"]}/>
                <h6>n/a</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "passengers")} value=">100" checked={checkFilter[">100"]}/>
                <h6>over 100</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "passengers")} value="<100" checked={checkFilter["<100"]}/>
                <h6>less than 100</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "passengers")} value=">1000" checked={checkFilter[">1000"]}/>
                <h6>over 1000</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "passengers")} value="<1000" checked={checkFilter["<1000"]}/>
                <h6>less than 1000</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "passengers")} value="0" checked={checkFilter["0"]}/>
                <h6>0</h6>
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
