import React,{useState,useContext} from "react";
import styles from "../Header/Header.module.css";
import { NavLink,Link } from "react-router-dom";
import {AuthContext} from '../../Authentication';
import { firebaseApp } from "../../Firebase/Firebase";


const Header=() =>{
  
  const { currentUser } = useContext(AuthContext);
  const [isDropdown, setIsDropdown] = useState(false);
  const toggleDropdown=()=>{
    setIsDropdown(!isDropdown);
    
  }
  //Sign out function
  async function handleLogout() {
    await firebaseApp.auth().signOut();
    setIsDropdown(false);
  }
  return (
    <>
      <div className={styles.Navbar}>
        <Link exact to="/AutoSearch" className={styles.Title}>
          Go 4 Food
         
        </Link>
        {currentUser ? 
        (<div className={styles.NavItemContainer}>
          
          <li className={styles.anchor} onClick={toggleDropdown}>
          <div className={styles.NavItem}>{currentUser.email}</div>
          </li>
        </div>
         ) :(
          <>
              <div className={styles.secondSet}>
              <NavLink activeClassName={styles.Active} to="/login">
                <div className={styles.NavItem}>Login</div>
              </NavLink>
            
              <NavLink activeClassName={styles.Active} to="/signup">
                <div className={styles.NavItem}>Sign Up</div>
              </NavLink>
              
              </div>
              
              
            
          </>
        )
         }
         {isDropdown && (
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownItem} onClick={handleLogout}>
              Logout
            </div>
          </div>
        )}
      </div>
        
    </>
  );
}

export default Header;
