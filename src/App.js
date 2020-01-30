import React from 'react';
import './App.css';

import Header from './templates/Header.jsx';
import Aside from './templates/Aside.jsx';
import Profile from './templates/Profile';


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