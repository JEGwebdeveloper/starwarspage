import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { Formulario } from './components/Form/Form';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Favorites from './components/Favorites/Favorites';
import { Userform } from './components/Userform/userform';
import Planets from './components/Planets/Planets';
import Characters from './components/Characters/Characters';
import Ships from './components/Ships/Ships';






function App() {
   
   const [namecom, setNamecom] = useState({})
   const navigate = useNavigate();
   const [access, setAccess] = useState(false)
   const EMAIL = "guest@jedi.com"
   const PASSWORD= "R2D2"

   
  
   function login(userData){
    if(EMAIL === userData.email && PASSWORD === userData.password){
        setAccess(true)
        navigate('/home')
    }
   }

   function logout(userData){
      
         setAccess(false)
         navigate('/')
      
     }
  

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   function loginuserform(userData){
      if( userData.name &&  userData.company){
          navigate('/aboutend')
          setNamecom(userData)
      }
     }

  const location = useLocation();

   const [characters,setcharacters] = useState([]);
   


   // function onSearch(id) {
   //    axios.get("https://thesimpsonsquoteapi.glitch.me/quotes?count=200")
   //       .then((response) => {
   //          const data = response.data;
   //          const formattedData = data.map((character) => {
   //             return {
   //                quote: character.quote,
   //                character: character.character,
   //                image: character.image
   //             }
   //          })
   //          setcharacters(formattedData)
   //       })
   //       .catch((error) => {
   //          console.error('Error en la solicitud Axios:', error);
   //       });

       
      
      // axios.get(`https://apisimpsons.fly.dev/api/personajes/${id}`)
      //    .then((response) => {
      //       const data = response.data.docs;
      //       const formattedData = data.map((character) => {
      //          return {
      //             id: character._id,
      //             nombre: character.Nombre,
      //             historia: character.Historia,
      //             imagen: character.Imagen,
      //             genero: character.Genero,
      //             estado: character.Estado,
      //             ocupacion: character.Ocupacion,
      //          };
      //       });
   
      //       setcharacters(formattedData);
      //    })
      //    .catch((error) => {
      //       console.error('Error en la solicitud Axios:', error);
      //    });
   

  

   return (
      
      
      <div className='App'>
          
         {location.pathname === "/home"  ?  <Nav logout={logout} /> : "" }
         
       
         <Routes>
            <Route path='/favorites' element={<Favorites></Favorites>}></Route>
            <Route 
            path='/home' 
            element={<Cards characters={characters} >
            </Cards>}>
            </Route>
            <Route path='/planets' element={<Planets  />}></Route>
            <Route path='/characters' element={<Characters/>}></Route>
            <Route path='/ships' element={<Ships/>}></Route>
            <Route path='/about' element={<Userform  loginuserform={loginuserform}/>}></Route>
            <Route path='/detail/:id' element={<Detail></Detail>}></Route>
            <Route path='/' element={<Formulario login={login}></Formulario>}></Route>
            <Route path='/aboutend' element={<About namecom={namecom}></About>}></Route>
            
           

         </Routes>
       
         

       
      </div>

   
      
   );
}

export default App;
