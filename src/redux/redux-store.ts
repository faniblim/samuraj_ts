import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
 profileReducer: profileReducer,
 dialogsReducer: dialogsReducer,
 sidebarReducer: sidebarReducer,
 usersPage: userReducer,
 auth: authReducer,
 form: formReducer,
 app: appReducer,
});
export type RootStateReduxType = ReturnType<typeof  reducers>

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


let store = createStore(reducers, applyMiddleware(thunkMiddleware));
let storeReduxType = typeof store

//@ts-ignore
//window.store = store;

 export default store;