import React from "react";
import styles from "./Favorites.module.css"

import { connect } from "react-redux";

import Card from "../Card/Card";

export const Favorites = ({myFavorites}) => {

 return(
  <div className={styles.divs}>
 {
 myFavorites?.map(fav => {
  return(
    
  <Card
      name = {fav.name}
      id = {fav.id}
      key= {fav.id}
      image= {fav.image}
      gender= {fav.gender}
      species= {fav.species}

  />
  

  )
 
 })}
 </div>
 )
}



const mapStateToProps = (state) => {
 
    return{
      myFavorites: state.myFavorites
    }
 }

 export default connect(mapStateToProps,null)(Favorites)


