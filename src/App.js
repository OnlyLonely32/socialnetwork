import React from 'react';
import './App.css';

import Header from './templates/header/Header';
import Aside from './templates/asiede/Aside';
import Profile from './templates/profile/Profile';


const App = () => {
  return (
    <div className="app__wrapper">
      <div className="app__container">
        <Header />
        <Aside />
        <Profile />
      </div>
    </div>
  );
}

export default App;