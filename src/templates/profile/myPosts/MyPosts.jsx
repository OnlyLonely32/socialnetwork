import React from 'react';
import c from './myPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  let pItems = props.posts.map( p => <Post message={p.message} like={p.like}/>);
  return ( 
    <div className={c.myPosts}>
      <textarea className={c.postText}></textarea>
      <button>Add post</button>
      { pItems }
    </div>
);
}

export default MyPosts;