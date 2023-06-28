import React from "react";
import { useSelector } from "react-redux";

//Display user details in the profile page
const Profile = () => {
  const data = saveToLocalStorage(useSelector((state) => state.data)[0])
  // console.log(data)
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="main-container">
        <div className="img-container">
          <img src={data.image} alt="profile_pic" />
        </div>
        <div className="user-info">
          <p>
            Name:{" "}
            <span>
              {data.firstName} {data.lastName}
            </span>
          </p>
          <p>
            Username: <span>{data.username}</span>
          </p>
          <p>
            User ID: <span>{data.id}</span>
          </p>
          <p>
            Gender: <span>{data.gender}</span>
          </p>
          <p>
            Email: <span>{data.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

//Saves user data to local storage
function saveToLocalStorage(data) {
  data &&  localStorage.setItem('data', JSON.stringify(data))
  return JSON.parse(localStorage.getItem('data'))
}
export default Profile;
