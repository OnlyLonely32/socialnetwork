import React from 'react';
import c from './styles/myPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return ( 
    <div className={c.myPosts}>
      <textarea className={c.postText}></textarea>
      <button>Add post</button>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
);
}

export default MyPosts;