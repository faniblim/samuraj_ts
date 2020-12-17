import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {StoreType} from "./store";

let reducers = combineReducers({
 profileReducer: profileReducer,
 dialogsReducer: dialogsReducer,
 sidebarReducer: sidebarReducer
});
export type RootStateReduxType = ReturnType<typeof  reducers>

let store = createStore(reducers);
let storeReduxType = typeof store

 export default store;