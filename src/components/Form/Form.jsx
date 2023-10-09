import React, { useState } from "react";
import styles from "./Form.module.css";
import { validation } from "../validation";
import Titulo from "../../Images/titulo.png";




export function Formulario(props){
    const {login} = props;
    const [userData, setuserData] = useState({
        email:"",
        password:""
    });

    const [errors, seterrors] = useState({
        email:"",
        password:""
    })

    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData)
    }
 

    const handleChange = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        seterrors(
            validation({
            ...userData,
            [event.target.name]: event.target.value
        })
        )

       

    }

    return(

       
        // <div className={styles.main}>
        //     <h1 style={{fontWeight:"bolder", fontSize:100}}>Homer'S Web Page</h1>
            
        //     <div className={styles.cont}> 

        //         <div className={styles.forms}>
        //             <form onSubmit={handleSubmit} action="">
        //                 <div className={styles.text}>
        //                     <label htmlFor="Email">EMAIL</label>
        //                     <input type="text" onChange={handleChange} value={userData.email} name="email" />
        //                     {errors.email && <p>{errors.email}</p>}
        //                     <br />
        //                     <label htmlFor="Password">PASSWORD</label>
        //                     <input type="text" onChange={handleChange} value={userData.password} name="password" />
        //                     {errors.password && <p>{errors.password}</p>}
        //                     <br />
        //                     <button className={styles.sub}>Submit</button>
        //                 </div>
        
        //             </form>
        //         </div>
        //     </div>
        // </div>

   
 
        
       
    <div className={styles.main}>
            <div>
                <img className={styles.titulo} src={Titulo} alt="starwars" />
            </div>

            <div className={styles.cont}> 
    
                <div className={styles.forms}>
                        <form onSubmit={handleSubmit} action="">
                            <div className={styles.text}>
                                <label className={styles.labe} htmlFor="Email">EMAIL</label>
                                <input className={styles.in} type="text" onChange={handleChange} value={userData.email} name="email" />
                                {errors.email && <p className={styles.pa} >{errors.email}</p>}
                                <br />
                                <label className={styles.labe} htmlFor="Password">PASSWORD</label>
                                <input className={styles.in} type="text" onChange={handleChange} value={userData.password} name="password" />
                                {errors.password && <p className={styles.pa}>{errors.password}</p>}
                                <br />
                                <button className={styles.sub}>Log In</button>
                            </div>
                
                        </form>
                </div>

                <div className={styles.advice}>
                    <div className={styles.data}>
                        <h4>
                        Email: guest@jedi.com
                        Password: R2D2
                        </h4>
                    </div>
                        
                    <div className={styles.paragraph}>
                        <p>
                        Authentication simulation made with general expressions
                        to control user input.
                        </p>

                    </div>
                </div>

            </div>
    </div>
        
 

      
    )

}