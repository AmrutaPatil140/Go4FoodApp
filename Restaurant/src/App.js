import React from 'react';
// import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import AutoSearch from './Components/Search/AutoSearch';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/Signup';
import ResetPassword from './pages/forgetPassword/forgetPassword'
import Authentication from './Authentication';
import File from "./File";
import back from './Images/back.jpg'

function App() {
  return (
    <div className="App">
    <Authentication >
      <Router>
        <Header/>
        <Switch>
        
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/ForgetPassword" component={ResetPassword}/>
        <Route path="/AutoSearch" component={AutoSearch}/> 
        <Route path="/File" component={File}/>
        
      <AutoSearch/>
        
        </Switch>
      </Router>
     
     
   </Authentication>
   </div>
  
  );
 
}

export default App;
