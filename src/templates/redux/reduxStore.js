import { createStore, combineReducers } from "redux";

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import asideReducer from "./asideReducer";

let reducers = combineReducers({
 profilePage: profileReducer,
 messagePage: dialogsReducer,
 aside: asideReducer
});

let store = createStore(reducers);

export default store;