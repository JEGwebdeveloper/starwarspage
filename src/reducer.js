import { ADD_FAV, REMOVE_FAV } from "./types";

const initialState = {
 myFavorites: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            console.log("myFavorites:", [...state.myFavorites, action.payload]);
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                
            }
        
        case REMOVE_FAV:
            return{
                    ...state,
                    myFavorites: state.myFavorites.filter((fav) => fav.id !== action.payload)
                }
        default:
            return{
                   ...state     
                }
    }
}