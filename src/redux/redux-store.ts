import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
 profileReducer: profileReducer,
 dialogsReducer: dialogsReducer,
 sidebarReducer: sidebarReducer,
 usersPage: userReducer,
 auth: authReducer,
 form: formReducer,
});
export type RootStateReduxType = ReturnType<typeof  reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
let storeReduxType = typeof store

//@ts-ignore
window.store = store;

 export default store;