import React, { useState} from "react";
import Profile from "./Profile";
import axios from "axios";

let data;
export default function LogIn() {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [passwordMismatchMsg, setPasswordMismatchMsg] = useState(false);
  const [credentialMsg, setCredentialMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  //Form validation(Error/Success Handling)
  function validateForm() {
    if (!fullName) {
      setErrorMsg(true);
      setSuccessMsg(false);
      setPasswordMismatchMsg(false);
      return;
    } else if (!password) {
      setErrorMsg(true);
      setSuccessMsg(false);
      setPasswordMismatchMsg(false);
      return;
    } else if (!confirmPassword) {
      setErrorMsg(true);
      setSuccessMsg(false);
      setPasswordMismatchMsg(false);
      return;
    } else if (password !== confirmPassword) {
      setErrorMsg(false);
      setPasswordMismatchMsg(true);
      setSuccessMsg(false);
      return;
    } else {
      setErrorMsg(false);
      setPasswordMismatchMsg(false);
      //Fetching user details and validating their credentials
      (async function () {
        //Error handling
        try {
          const res = await axios.post("https://dummyjson.com/auth/login", {
            username: fullName, //hbingley1
            password: password, //CQutx25i8r
          });
          setSuccessMsg(true);
          setCredentialMsg("");
          setTimeout(() => {
            setShowProfile(true);
          }, 2000);
          data = res.data
          console.log(res.data);
        } catch (error) {
          setCredentialMsg(error.response.data.message);
          console.log(error.response.data.message);
        }
      })();
    }
  }
  return (
    <>
      {!showProfile && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validateForm();
          }}
        >
          <h2>LogIn</h2>
          <div>
            <label htmlFor="full-name">Full Name</label>
            <input
              id="full-name"
              placeholder="Enter your fullname"
              type="text"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="Enter password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              placeholder="Enter confirm password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="error-success-msg">
            {errorMsg && <p id="error-msg">All the fields are mandatory</p>}
            {passwordMismatchMsg && (
              <p id="error-msg">Password and Confirm Password not matching</p>
            )}
            {credentialMsg && <p id="error-msg">{credentialMsg}</p>}
            {successMsg && <p id="success-msg">Successfully LoggedIn!!</p>}
          </div>
          <input type="submit" value="LogIn" id="signup-btn" />
        </form>
      )}
      {showProfile && <Profile data={data}/>}
    </>
  );
}
