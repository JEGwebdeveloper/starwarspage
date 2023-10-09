import styles from "./SearchBar.module.css"
import { useState } from 'react';


export default function SearchBar({search, characters}) {
   const [id, setId] = useState("");
  

   const handlerChange = (event) =>{
      setId(event.target.value)
   }


   return (
      <>
     
      <div className={styles.bar}>
         
         <input className={styles.input} 
         onChange={handlerChange} 
         value={id} 
         type="search"
         placeholder="1,2,3,4..." /> 
         
        
        <button className={styles.agregar} onClick={()=> search(id)}>Agregar</button> 

         
       
        
      </div>
      </>
   );
}
