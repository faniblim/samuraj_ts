import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import { RouteComponentProps } from "react-router";

type PathParamsType = {
    userId: any
}
type MapStatePropsType = {
    profile: any
    autorizedUserId: any
}

type MapDispatchPropstype = {
    getUserProfile: (userId:any)=>void
    getStatus: (userId:any)=>void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropstype
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps
    = (state: RootStateReduxType) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getUserProfile, getStatus, updateStatus}),
    //withRouter,
    //withAuthRedirect
)(ProfileContainer);

