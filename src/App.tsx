import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {AddPostType, Statetype} from "./redux/state";
import Friends from "./components/Sidebar/Friends";

type PropsType = {
    state: Statetype
    addPost: (postMessage: string)  => void;
}
const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => (
                        <Dialogs
                            dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}
                        />)}/>
                    <Route path="/profile"
                           render={() => <Profile posts={props.state.profilePage.posts}
                                                  addPost={props.addPost}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/sidebar"
                           render={() =>
                               <Friends
                                   friends={props.state.sidebar.friends}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
