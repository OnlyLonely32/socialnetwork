import React from 'react';
import c from './profile.module.css'
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';


const Profile = () => {
  return ( 
  <main>
    <ProfileInfo />
    <MyPosts /> 
  </main>
);
}

export default Profile;