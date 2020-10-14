import s from "./Profile.module.css";
import ProfileInfo, {ProfileInfoType} from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPosts, {MyPostsType} from "./MyPosts/MyPosts";


export type ProfileType = {
    ProfileInfoType: ProfileInfoType;
    MyPostsType: MyPostsType;
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
};

export default Profile;
