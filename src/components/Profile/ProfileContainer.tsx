import React from "react";
import Profile from "./Profile";
import  axios from "axios";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import profileReducer, {setUserProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../redux/store";
import { withRouter } from "react-router-dom";

type PropsType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType;
    match: any
}

class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){userId = 2}
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then((response:any) => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStateReduxType) => ({
    profile: state.profileReducer.profile
})

let WithUrlDataContainerComponent = connect(mapStateToProps, {setUserProfile})(ProfileContainer)

export default withRouter(WithUrlDataContainerComponent);