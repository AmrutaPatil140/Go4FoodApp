import React,{useState,useEffect} from 'react';
import {firebaseApp } from './Firebase/Firebase';

export const AuthContext=React.createContext();
export const Authentication=({children})=> {

    const [currentUser,SetCurrentUser]=useState('');

    useEffect(()=>{
        firebaseApp.auth().onAuthStateChanged(SetCurrentUser);
    },[]);

    return (
        <AuthContext.Provider
        value={{
            currentUser}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default Authentication
