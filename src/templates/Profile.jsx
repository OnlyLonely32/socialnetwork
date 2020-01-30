import React from 'react';
import './styles/profile.css'

const Profile = () => {
  return ( 
  <main className="content">
    <div className="content__img-container">
</div>
    <section className="content__container">
      <div className="avatar">avatar</div>
      <div className="description">about me</div>
      <div className="post">
        <div className="post__item">post 1</div>
        <div className="post__item">post 2</div>
        <div className="post__item">post 3</div>
      </div>
    </section>
  </main>
);
}

export default Profile;