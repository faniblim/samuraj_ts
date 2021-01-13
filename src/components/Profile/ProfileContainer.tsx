import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import { RouteComponentProps } from "react-router";

// type PropsType = {
//     getUserProfile: any
//     profile: ProfileType
//     match: any
//     getStatus: any
// }
type PathParamsType = {
    userId: any
}
type MapStatePropsType = {
    profile: any
    // status: any
}

type MapDispatchPropstype = {
    getUserProfile: (userId:any)=>void
    getStatus: (userId:any)=>void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropstype
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
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
    //: MapStatePropsType
    = (state: RootStateReduxType) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getUserProfile, getStatus, updateStatus}),
    //withRouter,
    //withAuthRedirect
)(ProfileContainer);

