import React, { useState } from "react";
import styles from "./Filters.module.css";

export default function Filters(props) {
  const [checkFilter, setCheckfilter] = useState({
   
    female: false,
    brown: false,
    blond: false,
    black: false,
    n_a: false,
    none: false,
    male: false,
    blue: false
  });

  const [copy, setCopy] = useState([])

  const handlerclick = () => {
    // Crear un nuevo objeto con todos los valores establecidos en false
    const resetCheckfilter = Object.fromEntries(
      Object.keys(checkFilter).map(key => [key, false])
    );
    setCheckfilter(resetCheckfilter);
    props.handlerfiltercharacters(props.copyfullcharacters);
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
  setCopy(props.characters)}
  else ""

  if(hola === "gender"){
      console.log("soy filter antes de los if", checkFilter)
      if(event.target.checked){
     
          const resultfilter = props.characters.filter(character => character.gender === event.target.value);
          props.handlerfiltercharacters(resultfilter);
          
        

      }
      else {
        
          const areAllFalse = Object.values(checkFilter).every(value => value === false);
          console.log("soy",areAllFalse)
          console.log("soy el array de personajes",props.copyfullcharacters)
          console.log("filtros",checkFilter)
          if (areAllFalse) {
            props.handlerfiltercharacters(props.copyfullcharacters);
          }
          else{
         
          props.handlerfiltercharacters(copy);      
          console.log(event.target.checked);
          }
      }
  }
  else if(hola === "haircolor"){
   
    if(event.target.checked){
    
        const resultfilter = props.characters.filter(character => character.hair_color === event.target.value);
        props.handlerfiltercharacters(resultfilter);
    }
    else{
      console.log(copy)
        // const resultfilter = props.characters.filter(character => character.gender !== event.target.value);
        props.handlerfiltercharacters(copy);      
    }
  }   
  else if(hola === "eyescolor"){
    console.log("soy filter antes de los if", checkFilter)
    if(event.target.checked){
     
     
        const resultfilter = props.characters.filter(character => character.eye_color === event.target.value);
        props.handlerfiltercharacters(resultfilter);
    }
    else {
    
        // const resultfilter = props.characters.filter(character => character.gender !== event.target.value);
        props.handlerfiltercharacters(copy);      
       
    }
  }   
  else if(hola === "mass"){
    const copy =  props.copyfullcharacters;
    if(event.target.checked){
        const resultfilter = props.characters.filter(character => character.mass === event.target.value);
        props.handlerfiltercharacters(resultfilter);
    }
    else {
        // const resultfilter = props.characters.filter(character => character.gender !== event.target.value);
        props.handlerfiltercharacters(copy);      
    }
  }
     
  };

 

  return (
    <div className={styles.container}>
        <div className={styles.type}>
            <div className={styles.title}>gender</div>
            <div className={styles.btnh2}> 
                <input type="checkbox"
                onChange={(event) => handlefilter(event, "gender")} value="male" checked={checkFilter["male"]}/>
                <h6>Male</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "gender")} value="female" checked={checkFilter["female"]}/>
                <h6>Female</h6>
            </div>
        </div>

        <div className={styles.type}>
            <div className={styles.title}>hair color</div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                onChange={(event) => handlefilter(event, "haircolor")} value="brown" checked={checkFilter["brown"]}/>
                <h6>Brown</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "haircolor")} value="black" checked={checkFilter["black"]}/>
                <h6>Black</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "haircolor")} value="blond" checked={checkFilter["blond"]}/>
                <h6>Blond</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "haircolor")} value="n/a" checked={checkFilter["n/a"]}/>
                <h6>n/a</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "haircolor")} value="none" checked={checkFilter["none"]}/>
                <h6>none</h6>
            </div>
        </div>

        <div className={styles.type}>
            <div className={styles.title}>eyes color</div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "eyescolor")} value="blue"checked={checkFilter["blue"]}/>
                <h6>Blue</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"   
                 onChange={(event) => handlefilter(event, "eyescolor")} value="green" checked={checkFilter["green"]} />
                <h6>Green</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "eyescolor")} value="yellow" checked={checkFilter["yellow"]} />
                <h6>yellow</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "eyescolor")} value="brown" checked={checkFilter["brown"]}/>
                <h6>brown</h6>
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
