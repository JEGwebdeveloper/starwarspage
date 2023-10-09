import {createStore, applyMiddleware, compose} from "redux";
import  ThunkMiddleware  from "redux-thunk";
import {reducer} from "./reducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 


export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))
)