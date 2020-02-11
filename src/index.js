import './index.css';
import { RenderDOM } from './render';
import * as serviceWorker from './serviceWorker';
import state, { addPost, temp } from './templates/redux/state'

RenderDOM(state, addPost, temp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
