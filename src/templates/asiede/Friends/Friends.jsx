import React from 'react';
import c from './Friends.module.css'


const Friends = (props) => {
 return (
  <div className={c.friendsItem}>
    <div className={c.friendsImg}>
      <img className={c.friendsImgContent} src={props.img} alt=""/>
    </div>
    <div className={c.friendsTitle}>
      {props.name}
    </div>
  </div>
 )
}

export default Friends;