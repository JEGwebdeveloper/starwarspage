import React, { useState } from "react";
import styles from "./Filters.module.css";

export default function Filters(props) {
  const [checkFilter, setCheckfilter] = useState({
    male: false,
    female: false,
    brown: false,
    blond: false,
    black: false,
    n_a: false,
    none: false,
  });

  const [datafilter, setDatafilter] = useState([]);

  const handlefilter = (event, hola) => {
    setCheckfilter({
      ...checkFilter,
      [event.target.value]: event.target.checked,
    });

    const filteredCharacters = props.characters.filter((character) => {
      if (hola === "gender") {
        return event.target.checked
          ? character.Gender === event.target.value
          : true;
      } else if (hola === "haircolor") {
        return event.target.checked
          ? character.HairColor === event.target.value
          : true;
      } else if (hola === "eyescolor") {
        return event.target.checked
          ? character.EyesColor === event.target.value
          : true;
      } else if (hola === "mass") {
        return event.target.checked
          ? character.Mass === event.target.value
          : true;
      }
      return true;
    });

    setDatafilter(filteredCharacters);
  };

  return (
    <div className={styles.container}>
        <div className={styles.type}>
            <div className={styles.title}>gender</div>
            <div className={styles.btnh2}> 
                <input type="checkbox"
                onChange={(event) => handlefilter(event, "gender")} />
                <h6>Male</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "gender")}/>
                <h6>Female</h6>
            </div>
        </div>

        <div className={styles.type}>
            <div className={styles.title}>hair color</div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                onChange={(event) => handlefilter(event, "haircolor")}/>
                <h6>Brown</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "haircolor")}/>
                <h6>Black</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "haircolor")}/>
                <h6>Blond</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "haircolor")}/>
                <h6>n/a</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "haircolor")}/>
                <h6>none</h6>
            </div>
        </div>

        <div className={styles.type}>
            <div className={styles.title}>eyes color</div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "eyescolor")} />
                <h6>Blue</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "eyescolor")} />
                <h6>Green</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "eyescolor")} />
                <h6>yellow</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox"
                 onChange={(event) => handlefilter(event, "eyescolor")}  />
                <h6>brown</h6>
            </div>
        </div>

        <div className={styles.type}>
            <div className={styles.title}>weight</div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                 onChange={(event) => handlefilter(event, "mass")} />
                <h6>less than 50kg</h6>
            </div>
            <div className={styles.btnh2}>
                <input type="checkbox" 
                onChange={(event) => handlefilter(event, "mass")} />
                <h6>over 50kg</h6>
            </div>
        </div>


        
    </div>   
  );
}
