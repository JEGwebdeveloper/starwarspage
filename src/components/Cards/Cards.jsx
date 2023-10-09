import Card from '../Card/Card';
import styles from "./Cards.module.css"
import Maincards from "../Maincards/Maincards";

export default function Cards({characters, onClose}) {
 
   return (
   <div className={styles.divs}>
      <Maincards/>
      {characters?.map((element) =>{
         return(
            
            <div className={styles.cartas}>

               <Card 
                  // onClose={onClose}
                  // id={element._id}
                  // name={element.Nombre}
                  // status={element.status}
                  // species={element.species}
                  // gender={element.gender}
                  // origin={element.origin.name}
                  // image={element.image}
               
                  // key={element.id}
                  quote={element.quote}
                  name={element.character}
                  image={element.image}
               />
            </div>
           
      )}
      )}

      </div>
      
   
   
 
   
      )}


