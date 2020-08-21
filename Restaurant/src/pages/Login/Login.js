import React,{useState,useContext} from 'react';
import  "./Login.css";
import {AuthContext} from '../../Authentication';
import { withRouter, Redirect,Link } from "react-router-dom";
import {firebaseApp} from '../../Firebase/Firebase';

function SignIn({history}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const Login=(e)=>{
    e.preventDefault();
    
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        
        history.push('/');
      })
      .catch((err) => {
        alert('Something wrong with your email or Password. Try again!');
        
      });
  }
 
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
    return (
      <div className="FormField">
     
        <form  className="Form-groups">
          <p className="heading">Login</p>
          
          <div className="Form-group">
            <label htmlFor="email">Email</label>
            <input name="email" type="text" onChange={(e)=>setEmail(e.target.value)} value={email}  placeholder="Enter E-mail" required></input>
          </div>
          <div className="Form-group">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" onChange={(e)=>setPassword(e.target.value)} value={password}  placeholder="******" required></input>
          </div>
          <div className="Form-group1">
            <label htmlFor="checkbox"></label>
            <input name="checkbox" type="checkbox" ></input>Remember Me
          </div>
         
         
          <div onClick={Login} className="group">
            <button  type="submit">Login</button>
           

          </div>
         
          <div className="group1">
            Don't Have An Account? 
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </div>
          <div className="group2">
          <Link className="link "  to="/ForgetPassword" >
            Forgot Password?
          </Link>
          </div>
        </form>
        </div>
      );
}

export default withRouter(SignIn)

