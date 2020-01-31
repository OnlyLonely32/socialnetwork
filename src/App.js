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


const App = () => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <div className="app__container">
          <Header />
          <Aside />
          <div class="app__wrapper__content">
            <Route path='/profile' component={Profile}/>
            <Route path="/friends" component={Friends}/>
            <Route path='/dialogs' component={Dialogs}/>
            <Route path="/news" component={News}/>
            <Route path='/music' component={Music}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;