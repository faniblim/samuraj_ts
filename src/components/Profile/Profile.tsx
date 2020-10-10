import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://sun9-49.userapi.com/AfX6GrEzWjvLGKhcksDq9ktmbQ6L2Z2JGiEOZw/tTy-mw5GOYs.jpg" />
            </div>
            <div>ava+description</div>
           <MyPosts />
        </div>
    );
};


export default Profile;
