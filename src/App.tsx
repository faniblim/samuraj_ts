import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {withRouter, Route, BrowserRouter} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Sidebar/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import store, {RootStateReduxType} from "./redux/redux-store";

type PropsType = {
    initializeApp: any
}

class App extends Component<PropsType
    //,MapStateToPropsType
    >  {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer />} />
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/login" render={() => <LoginPage />} />
                    <Route path="/news" render={() => <News />} />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/settings" render={() => <Settings />} />
                    <Route path="/sidebar" render={() => <FriendsContainer />} />
                </div>
            </div>
        )
    }
}
// type MapStateToPropsType = {
//     initializeApp: any
// }
const mapStateToProps = (state: RootStateReduxType) => ({
    initialized: state.app.initialized
})

let AppContainer =  compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);

const SamuraiJSApp = ({...props}) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;

