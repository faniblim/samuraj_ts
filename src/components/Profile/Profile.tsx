import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {NewPostType, ProfileType} from "../../redux/state";


type PropsType = {
    // posts: Array<NewPostType>;
    profilePage: ProfileType
    // addPost: (postMessage: string)  => void;
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void

}

const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts

                posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;
