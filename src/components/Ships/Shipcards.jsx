import styles from "./Shipcards.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../actions"
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";





 function Shipscards({Name,num, img, onClose, addFav, removeFav, myFavorites,id }) {
   
   const [isFav, setisFav] = useState(false)

  
  
   const handleFavorite = ()=>{
      if(isFav){
         setisFav(false);
         removeFav(id)
      }
      else {
         setisFav(true);
         addFav({id, Name})
      }
   }  

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setisFav(true);
         }
      });
   }, [myFavorites]);

  return (
      <div className={styles.tarjetas}> 
        
            <div className={styles.topbtn}>
               <div className={styles.delete}>
               <div className={styles.boton}>
         
                     {<button className={styles.boton1} onClick={ () =>{onClose(num)}}>Eliminar tarjeta</button>}
               </div>
               </div>
               <div className={styles.fav}>
                  {
                     isFav ? (
                        <button onClick={handleFavorite}>❤️</button>
                     ) : (
                        <button onClick={handleFavorite}>🤍</button>
                     )
                  }
               </div>
            </div>
            <div  className={styles.imgcard}>
              
               <img src={img} alt="Descripción de la imagen"
                  onError={(e) => {
                     e.target.src = "https://media.istockphoto.com/id/640015230/es/vector/fondo-vectorial-de-deformaci%C3%B3n-de-velocidad-efecto-de-zoom-del-hiperespacio-del-radiador-de.jpg?s=612x612&w=0&k=20&c=7MdBawsXYPZupDKQ8Oy6hwqn0YhTzbcRe37gfExEbmY=";
                  }}>
               </img> 
            
            </div>
            <div className={styles.bottominfo}>
               <div className={styles.name}>{Name}</div>
               <div className={styles.info}><Link to={`/detail/${id}`}>{<h2 className={styles.nombre}>{Name}</h2>}</Link></div>
               
            </div>
    
      </div>

   );
  
   
}
  
const mapStateToProps = (state) => {
   return{
     myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = (dispatch) => {
   return{
      addFav: ({id, name, species, gender, image})=>{dispatch(addFav({id, name, species, gender, image}))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   }
}

export default connect(mapStateToProps,
   mapDispatchToProps
)(Shipscards)