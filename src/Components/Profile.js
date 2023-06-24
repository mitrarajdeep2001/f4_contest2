import React from 'react'

//Display user details in the profile page
const Profile = ({data}) => {
  return (
    <div className='profile-container'>
        <h1>Profile</h1>
        <div className='main-container'>
        <div className='img-container'>
            <img src={data.image} alt='profile_pic'/>
        </div>
        <div className='user-info'>
            <p>Name: <span>{data.firstName} {data.lastName}</span></p>
            <p>Username: <span>{data.username}</span></p>
            <p>User ID: <span>{data.id}</span></p>
            <p>Gender: <span>{data.gender}</span></p>
            <p>Email: <span>{data.email}</span></p>
        </div>
        </div> 
    </div>
  )
}

export default Profile