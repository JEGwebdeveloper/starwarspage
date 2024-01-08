import React from "react";
import styles from "./About.module.css";


export default function About({namecom}) {
    return(
        <body className={styles.body}>
               <div className={styles.animacion}>
            <div className={styles.section}>
            <div className={styles.contenidotexto}>
                
                <p>
                And this is how {namecom.name} explored the depth of the page made
                by web developer Joseph Gutierrez and was able to 
                appreciate the technologies it has such as HTML,
                CSS, Redux, React, ReactHooks and the very powerful JavaScript.
                </p>

               <p> 
                With his ship he was able to venture through the 
                different areas of the page, such as the favorites
                where he found favorite cards or the library where he
                could explore little-known planets and races.
                </p>

                <p>
                {namecom.name} was able to appreciate the management of APIS,
                promises, states, routes and hooks used by the developer
                so that the page works optimally and presents {namecom.name} with
                a pleasant stay.
                </p>

                <p>
                Maybe this is a beginning for new meetings between {namecom.name} and Joseph,
                maybe the force will find them again in the next episode in {namecom.company}.
                </p>

                <h1 className={styles.end}>THANKS A LOT</h1>


            
                   
            </div>
            </div>
        </div>
        </body>
     
    
    )
}