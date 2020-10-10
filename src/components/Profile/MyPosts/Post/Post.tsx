import React from "react";
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <div>
                <img src="https://sun9-48.userapi.com/c858224/v858224573/16208c/2yLzyVGWOg0.jpg"/>
                post 1
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    );
};


export default Post;
