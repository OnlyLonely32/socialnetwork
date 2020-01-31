import React from 'react';
import './App.css';

import Header from './templates/header/Header';
import Aside from './templates/asiede/Aside';
import Profile from './templates/profile/Profile';
import Dialogs from './templates/dialogs/Dialogs';


const App = () => {
  return (
    <div className="app__wrapper">
      <div className="app__container">
        <Header />
        <Aside />
        <div class="app__wrapper__content">
          <Dialogs />
          {/* <Profile /> */}
        </div>
      </div>
    </div>
  );
}

export default App;