import React from 'react';
import c from './profile.module.css'
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
  return ( 
  <main>
    <ProfileInfo />
    <MyPosts posts={props.posts} dispatch={props.dispatch}/> 
  </main>
);
}

export default Profile;