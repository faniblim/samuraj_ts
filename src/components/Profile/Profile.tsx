import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileType} from "../../redux/state";


type PropsType = {
    profilePage: ProfileType
    // newPostText: string
    dispatch: any
}

const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;
