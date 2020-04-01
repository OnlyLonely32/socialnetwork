import React from 'react';
import './App.css';
import Header from './templates/header/Header';
import Aside from './templates/asiede/Aside';
import Profile from './templates/profile/Profile';
import Dialogs from './templates/dialogs/Dialogs';
import Friends from "./templates/friends/Friends"
import News from "./templates/news/News"
import Music from "./templates/music/Music"
import { Route, BrowserRouter } from 'react-router-dom';


const App = (props) => {
 
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <div className="app__container">
          <Header />
          <Aside friends={props.state.aside.friendsItems}/>
          <div className="app__wrapper__content">
            <Route path='/profile' render={ () => <Profile posts={props.state.profilePage} dispatch={props.dispatch}/>}/>
            <Route path="/friends" component={Friends}/>
            <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.messagePage} dispatch={props.dispatch}/>}/>
            <Route path="/news" component={News}/>
            <Route path='/music' component={Music}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;