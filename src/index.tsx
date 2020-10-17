import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";



// let posts: Array<PostType> = [
//     {id: 1, message: "Hi, how are you?", likesCount: "11"},
//     {id: 2, message: "It/'s my first post", likesCount: "20"},
//     {id: 3, message: "Hi", likesCount: "35"},
//     {id: 4, message: "Yo", likesCount: "2"},
// ];
//
// let dialogs  = [
//     {id: 1, name: "Tana"},
//     {id: 2, name: "Semion"},
//     {id: 3, name: "Anastasja"},
//     {id: 4, name: "Nik"},
// ];
//
// let messages = [
//     {id: 1, message: "How are you?"},
//     {id: 2, message: "Hi"},
//     {id: 3, message: "Yo"},
//     {id: 4, message: "Yo"},
// ];


ReactDOM.render(
    <React.StrictMode>
        <App
            state={state} />
            {/*// posts={posts}*/}
            {/*// dialogs={dialogs}*/}
            {/*// messages={messages}/>*/}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
