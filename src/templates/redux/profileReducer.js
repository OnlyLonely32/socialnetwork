const newPostText = "newPostText";
const addPost = "addPost";
const actionPost = "actionPost";

let inicialState = {
  postItems: [
   {id: 1, message: "How are you&", like: 10},
   {id: 2, message: "Maybe г like this", like: 15},
   {id: 3, message: "Wow", like: 8},
  ],
  postText: ""
 }

const profileReducer = (state = inicialState, action) => {

switch(action.type){
  case newPostText:
    state.postText = action.newPostText;
    return state;
  case addPost:
    let newPost = {
      id: 4,
      message: state.postText,
      like: 0
    }
    state.postItems.push(newPost);
    state.postText = "";
    return state;
  case actionPost:
    return {type : "addPost"}
  default:
    return state;
}
}

export const newPostTextCreator = (newPostText) => ({type:"newPostText", newPostText: newPostText})
export const addPostCreator = () => ({type:"addPost"})

export default profileReducer;