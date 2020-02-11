import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export let RenderDOM = ( state, addPost, temp ) => {
 ReactDOM.render(<BrowserRouter><App state={state} addPost={addPost} temp={temp}/></BrowserRouter>, document.getElementById('root'));
}