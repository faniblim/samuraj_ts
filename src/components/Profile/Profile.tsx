import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {NewPostType} from "../../redux/state";



 type PropsType = {
    posts: Array<NewPostType>;
    addPost: (postMessage: string)  => void;
}

const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
            />
        </div>
    );
};

export default Profile;
