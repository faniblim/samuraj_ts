import * as serviceWorker from './serviceWorker';
import store, {Statetype} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntiereTree = (state: Statetype) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={store.addPost.bind(store)}
                    addMessage={store.addMessage.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                    updateNewMessageText={store.updateNewMessageText.bind(store)}
                    newPostText={state.profilePage.newPostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntiereTree(store.getState());
store.subscribe(rerenderEntiereTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


