
import { Link, useLocation, useNavigate} from "react-router-dom"
import styles from "./Nav.module.css"



export default function Nav (props){
    // const navigate = useNavigate();
    // const handlerClick = ()=>{
    //     navigate("/About")
    // }
    // const handlerClick1 = ()=>{
    //     navigate("/About")
    // }

    const navigate = useNavigate();
    const location = useLocation();

    return(
        <div className={styles.titulo}>
            <div className={styles.navbut}>
                <div className={styles.tresbot}>
                
                    <Link to="/about"  style={{textDecoration:"none"}}><button className={styles.random}>About</button></Link>
                    <Link to="/home" style={{textDecoration:"none"}}><button  className={styles.random} >Home</button></Link>
                    <Link to="/favorites" style={{textDecoration:"none"}}><button  className={styles.random} >Favorites</button></Link>
                    
               
               <Link to="/" style={{textDecoration:"none"}}>  <button className={styles.random} onClick={props.logout}>Logout</button></Link>   </div>    
                                 <div className={styles.imgprin}>
                          
                        </div>
            
           
            
            </div>
           
            {/* <button className={styles.random} onClick={()=> props.onSearch(Math.floor(Math.random() * 826))}>RANDOM</button> */}
        
        
        </div>
       
    )

}