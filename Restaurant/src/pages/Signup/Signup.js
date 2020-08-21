import React, { useState,useContext } from "react";
import  "./Signup.css";

import { Link ,Redirect,withRouter} from "react-router-dom";
import {firebaseApp} from '../../Firebase/Firebase';


function Signup({history}) {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_no, setMobile_no] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  //unciton to Handle Sign up
  const SignUp=(e)=>{
      e.preventDefault();
      if(password === cpassword){
      console.log(name,email,password);
        firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(()=>{
         
          const user = firebaseApp.auth().currentUser;
          user
            .updateProfile({ displayName: name })
            .then(() => {
             
              history.push('/');
            })
            .catch((err) => {
              throw Error(err);
            });
            
        }).catch((err) => {
          alert(err.message);
        });  
      }
      else{
        alert('password does not match')
      }
      
    }
    
    
    
  return (
   <div className="formField">
    <form onSubmit={SignUp} className="FormFields">
      <p className="heading">Sign Up</p>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input  name="name" 
        type="text" 
        onChange={(e)=>setName(e.target.value)} 
        value={name} 
        placeholder="Your Name" 
        required></input>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input name="email" 
        type="text" 
        onChange={(e)=>setEmail(e.target.value)}  
        value={email} 
        placeholder="Enter E-Mail" 
        required></input>
      </div>
      <div className="form-group">
        <label htmlFor="mobile_no">Mobile Number</label>
        <input name="mobile_no" 
        type="text" 
        onChange={(e)=>setMobile_no(e.target.value)}  
        value={mobile_no}
       
        maxLength={10}
        keyboardType="numeric" 
        placeholder="Enter Mobile Number" 
        required></input>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input name="password" 
        type="password" 
        id="password"
        onChange={(e)=>setPassword(e.target.value)} 
        value={password} 
        placeholder="******" 
        required></input>
      </div>
      <div className="form-group">
        <label htmlFor="cpassword">Confirm Password</label>
        <input name="cpassword"
         type="password"
         id="cpassword" 
         onChange={(e)=>setCpassword(e.target.value)}
          value={cpassword} 
          
          placeholder="******"
           required></input>
      </div>
      <div className="group">
        <button 
        type="submit"
         >Sign Up</button>
         <div className="group1">
        Have An Account?
        <Link className="link" to="/login">
          Login now
        </Link>
      </div>
      </div>
      
    </form>
    </div>
  );
}


export default withRouter(Signup);