import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsItems = [
 {message: "How are you&", like: 10},
 {message: "Maybe г like this", like: 15},
 {message: "Wow", like: 8},
]

let dialogsItems = [
 {id: 1, name: "Каролина"},
 {id: 2, name: "Ольгерд"},
 {id: 3, name: "Евгений"},
 {id: 4, name: "Гелатьт"} 
];

let messageItems = [
 {message: "Привет"},
 {message: "Привет!"},
 {message: "Как ты?"},
 {message: "Хорошо"}
];

ReactDOM.render(<App posts={postsItems} dialogs={dialogsItems} messages={messageItems}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
