import React from 'react';
import c from './myPosts.module.css'
import Post from './Post/Post';
import {newPostTextCreator, addPostCreator} from '../../redux/profileReducer';

const MyPosts = (props) => {
  let pItems = props.posts.postItems.map( p => <Post message={p.message} like={p.like}/>);
  let text = React.createRef();

  let show = () => {
    props.dispatch(addPostCreator());
  }
  
  let change = () => {
    let postText = text.current.value;
    props.dispatch(newPostTextCreator(postText));
  }

  return ( 
    <div className={c.myPosts}>
      <div className={c.newPost}>
        <textarea ref={text} 
                  onChange={change} 
                  className={c.postText} 
                  value={props.posts.postText} />

        <button onClick={show} 
                className={c.sendPost}>Add post</button>
      </div>
      { pItems }
    </div>
);
}

export default MyPosts;