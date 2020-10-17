import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "./MyPosts/Post/Post";


export type ProfileType = {
    posts: Array<PostType>;
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;
