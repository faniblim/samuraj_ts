import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProrsType = {
    profile: ProfileType
    status: string
    updateStatus: any

}

const Profile = (props: ProrsType):any => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer  />
        </div>
    );
};

export default Profile;