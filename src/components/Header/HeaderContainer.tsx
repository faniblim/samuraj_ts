import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<MapStateToPropsType & MapDispathPropsType, any> {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/auth/me`, {
                    withCredentials: true
                }
            )
            .then((response: any) => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data.login);
                }
            });
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
    setAuthUserData: any
}
type MapStateToPropsType = {
    isAuth: boolean
    login: string

}
export default connect<MapStateToPropsType, MapDispathPropsType, {}, RootStateReduxType>
(mapStateToProps, {setAuthUserData})(HeaderContainer);
