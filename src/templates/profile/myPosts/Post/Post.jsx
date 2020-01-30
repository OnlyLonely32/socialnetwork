import React from 'react';
import c from './Post.module.css'

const Posts = (props) => {
  return ( 
    <div className={c.postItem}>
      <div className={c.postImgage}>
        <img className={c.postImg} src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg" alt=""/>
      </div>
      <p className={c.postText}> {props.message} </p>
    <p>like-> {props.like}</p>
    </div>
);
}

export default Posts;