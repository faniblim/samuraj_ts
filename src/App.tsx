import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Sidebar/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/sidebar" render={() => <FriendsContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
