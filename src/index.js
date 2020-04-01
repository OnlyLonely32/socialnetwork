import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './templates/redux/reduxStore'

const RenderDOM = ( state ) => {
 
 ReactDOM.render(<BrowserRouter><App state={state} dispatch={store.dispatch.bind(store)}/>}/></BrowserRouter>, document.getElementById('root'));
}

RenderDOM(store.getState());

store.subscribe( () => {
 let state = store.getState();
 RenderDOM(state);
});

serviceWorker.unregister();
