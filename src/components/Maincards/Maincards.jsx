import React from "react";
import { Link} from "react-router-dom"
import styles from "./Maincards.module.css"
import darthvader from "../../Images/darth.jpg"
import ships from "../../Images/ships.jpg"
import deathstar1 from "../../Images/deathstar1.jpg"
import Titulo from "../../Images/titulo.png";
import { Button } from "@radix-ui/themes";

 export default function Maincards (){ 
    
    const maincardspremap = [
        {
            title:"Planets",
            img: deathstar1,
            nav: "/planets"
        },
        {
            title:"Characters",
            img: darthvader,
            nav: "/characters"
        },
        {
            title:"Ships",
            img: ships,
            nav: "/Ships"
        }
    ]
    

    return (
    <div  className={styles.cont} >
        <img className={styles.img} src={Titulo} alt="hola" />

        <div className={styles.maincards}>
             

            {maincardspremap.map((element, index) => {
                return(
                <div key={index} className={styles.maincard}>
                  
                    <img src={element.img} alt={element.title} />
                   <Link to={element.nav}> <h4>{element.title}</h4> </Link>
                </div>
                )
            })}

        </div>
    </div>
    )
}

