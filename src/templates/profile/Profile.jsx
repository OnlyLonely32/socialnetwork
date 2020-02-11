import React from 'react';
import c from './profile.module.css'
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
  return ( 
  <main>
    <ProfileInfo />
    <MyPosts posts={props.posts} temp={props.temp} addPost={props.addPost}/> 
  </main>
);
}

export default Profile;