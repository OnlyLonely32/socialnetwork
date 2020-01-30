import React from 'react';
import c from './myPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return ( 
    <div className={c.myPosts}>
      <textarea className={c.postText}></textarea>
      <button>Add post</button>
      <Post message="message is null" like="10" />
      <Post message="refact this post" like="12"  />
    </div>
);
}

export default MyPosts;