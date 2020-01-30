import React from 'react';
import c from './styles/profile.module.css'
import MyPosts from './myPosts/MyPosts';


const Profile = () => {
  return ( 
  <main className={c.content}>
    <div className={c.contentImgContainer}>
</div>
    <section className={c.contentContainer}>
      <div className="avatar">avatar</div>
      <div className="description">about me</div>
      <MyPosts />
    </section>
  </main>
);
}

export default Profile;