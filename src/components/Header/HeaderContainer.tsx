import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component
    <MapStateToPropsType & MapDispathPropsType, any> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: RootStateReduxType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
type MapDispathPropsType = {
    getAuthUserData: any
}
type MapStateToPropsType = {
    isAuth: boolean
    login: string

}

export default connect
//<MapStateToPropsType, MapDispathPropsType, {}, RootStateReduxType>
(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);
