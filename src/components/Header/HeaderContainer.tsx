import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import { logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component
    <MapStateToPropsType
        //& MapDispathPropsType
        , any> {
        render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: RootStateReduxType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
// type MapDispathPropsType = {
//     getAuthUserData: any
// }
type MapStateToPropsType = {
    isAuth: boolean
    login: string

}

export default connect
(mapStateToProps, {logout})(HeaderContainer);
