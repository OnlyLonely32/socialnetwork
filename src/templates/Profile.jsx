import React from 'react';
import c from './styles/profile.module.css'

const Profile = () => {
  return ( 
  <main className={c.content}>
    <div className={c.contentImgContainer}>
</div>
    <section className={c.contentContainer}>
      <div className="avatar">avatar</div>
      <div className="description">about me</div>
      <div className="post">
        <div className="postItem">post 1</div>
        <div className="postItem">post 2</div>
        <div className="postItem">post 3</div>
      </div>
    </section>
  </main>
);
}

export default Profile;