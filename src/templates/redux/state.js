import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'

let store = {
  _state: {
    aside:{
     friendsItems: [
      {id: 1, name: "Каролина", img: "https://sun9-63.userapi.com/c854016/v854016151/10d54/7znl7uGtnzY.jpg?ava=1"},
      {id: 2, name: "Ольгерд", img: "https://sun9-51.userapi.com/c840320/v840320264/57c00/W84Ks-jyj-0.jpg?ava=1"},
      {id: 3, name: "Евгений", img: "https://sun9-9.userapi.com/c204520/v204520295/1ec95/E5fIuT8ivv8.jpg?ava=1"},
      {id: 4, name: "Гелатьт", img: "https://sun2.dataix-by-minsk.userapi.com/c857132/v857132943/1b76e/LlysqbH3dxQ.jpg?ava=1"} 
     ],
    },
    profilePage: {
     postItems: [
      {id: 1, message: "How are you&", like: 10},
      {id: 2, message: "Maybe г like this", like: 15},
      {id: 3, message: "Wow", like: 8},
     ],
     postText: ""
    },
    messagePage: {
     dialogsItems: [
      {id: 1, name: "Каролина", img: "https://sun9-63.userapi.com/c854016/v854016151/10d54/7znl7uGtnzY.jpg?ava=1"},
      {id: 2, name: "Ольгерд", img: "https://sun9-51.userapi.com/c840320/v840320264/57c00/W84Ks-jyj-0.jpg?ava=1"},
      {id: 3, name: "Евгений", img: "https://sun9-9.userapi.com/c204520/v204520295/1ec95/E5fIuT8ivv8.jpg?ava=1"},
      {id: 4, name: "Гелатьт", img: "https://sun2.dataix-by-minsk.userapi.com/c857132/v857132943/1b76e/LlysqbH3dxQ.jpg?ava=1"} 
     ],
     messageText: "",
     messageItems: [
      {message: "Если ты ответы не знаешь", inOut: "out"},
      {message: "Там ее хуева туча, даже если почитаешь не запомнишь", inOut: "in"},
      {message: "Поэтому я забил", inOut: "in"},
      {message: "Вечером повторю как делаются все эти задания и все", inOut: "in"},
      {message: "По алгоритму и сделаю их", inOut: "in"},
      {message: "Попробуем", inOut: "out"}
     ],
     
    }
   },

  callSubscribe() {},
  subscribe(observer) {
    this.callSubscribe = observer;
  } ,
  getState()
  { return this._state},

  dispatch(action) {
    // this._state.aside = asideReducer(this._state.aside, action);
    this._state.messagePage = dialogsReducer(this._state.messagePage, action);

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this.callSubscribe(this);
    debugger;
  }
  
}

export default store;