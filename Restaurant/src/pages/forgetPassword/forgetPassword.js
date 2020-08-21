import React, { useState } from "react";
import { Link } from "react-router-dom";
import {firebaseApp} from '../../Firebase/Firebase';

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
 
  const sendResetEmail = event => {
	event.preventDefault();
	firebaseApp
    .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
      
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <div className="Form-groups" onSubmit={sendResetEmail}>
      <h1 className="heading">
        Reset your Password
      </h1>
	  <br></br>
      <div className="Form-group">
        <form action="">
          {emailHasBeenSent && (
            <div className="Form-group">
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div className="Form-group">
              {error}
            </div>
          )}
          <label htmlFor="userEmail" className="w-full block">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
			onChange={(e)=>setEmail(e.target.value)}
            className="mb-3 w-full px-1 py-2"
          />
          <button
            className="Form-group1"
          >
            Send me a reset link
          </button>
       <div className="group2">
        <Link
         to ="/login"
          className="link"
        >
          &larr; back to sign in page
        </Link>
		</div>
		</form>
      </div>
    </div>
  );
};
export default PasswordReset;