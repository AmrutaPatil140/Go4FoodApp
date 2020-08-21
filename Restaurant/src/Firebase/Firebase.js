import * as firebase from "firebase"
require('firebase/auth')
//import FirebaseContext ,{withFirebase} from './context';

//export{FirebaseContext,withFirebase};
 // Your web app's Firebase configuration
 
export var firebaseConfig = {
    apiKey: "AIzaSyDoPD0FGMWX8J5K1Ww8celQN8ewU-__i_A",
    authDomain: "home-food-delivery-ab45b.firebaseapp.com",
    databaseURL: "https://home-food-delivery-ab45b.firebaseio.com",
    projectId: "home-food-delivery-ab45b",
    storageBucket: "home-food-delivery-ab45b.appspot.com",
    messagingSenderId: "72164019775",
    appId: "1:72164019775:web:9966a98d58eb0cf976728a",
    measurementId: "G-7R4VS1E6G7"
  };
  
// Initialize Firebase

export const firebaseApp = firebase.initializeApp(firebaseConfig);
 
export default firebaseApp.firestore();
export const passwordReset = email => { return firebase.auth().sendPasswordResetEmail(email);}