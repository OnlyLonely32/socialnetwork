import React from 'react';
import c from './styles/Post.module.css'

const Posts = () => {
  return ( 
    <div className={c.postItem}>
      <div className={c.postImgage}>
        <img className={c.postImg} src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg" alt=""/>
      </div>
      <p className={c.postText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque reprehenderit accusamus voluptatibus voluptas, totam rem voluptatum, a deleniti corrupti quasi nesciunt at. Atque et culpa aliquam saepe dicta ut minus.</p>
    </div>
);
}

export default Posts;