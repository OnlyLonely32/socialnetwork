import React from 'react';
import c from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return ( 
    <section>
      <div className={c.contentImgContainer}>
      </div>
      <div className={c.contentContainer}>
        <div className={c.avatar}></div>
        <div className="description">name <br/>info <br/></div>
      </div>
    </section>
);
}

export default ProfileInfo;