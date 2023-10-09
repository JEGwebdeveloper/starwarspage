import React, { useState } from "react";
import styles from "./userform.module.css";
import { validationUserform } from "../Userform/validationUserform";





export function Userform(props){
    const {loginuserform} = props;
    const [userData, setuserData] = useState({
        name:"",
        company:""
    });

    const [errors, seterrors] = useState({
        name:"",
        company:""
    })

    const handleSubmit = (event)=>{
        event.preventDefault();
        loginuserform(userData)
    }
 

    const handleChange = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        seterrors(
            validationUserform({
            ...userData,
            [event.target.name]: event.target.value
        })
        )

       

    }

    return(
     
        
           <div className={styles.container1}>
            <div className={styles.forms1}>
                <form onSubmit={handleSubmit} action="">
                <div className={styles.text1}>
                <label htmlFor="Name">Name</label>
                <input className={styles.input1} type="text" onChange={handleChange} value={userData.name} name="name" />
                {errors.name && <p className={styles.pa1}>{errors.name}</p>}
                <br />
                <label htmlFor="Company name">Company name</label>
                <input className={styles.input1} type="text" onChange={handleChange} value={userData.company} name="company" />
                {errors.company && <p className={styles.pa1}>{errors.company}</p>}
                <br />
                <button className={styles.sub1}>Submit</button>
                </div>




                </form>
            </div>
            </div>
           
    )

}