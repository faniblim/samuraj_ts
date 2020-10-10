import React from "react";
import s from "./Post.module.css";

export type PostsType = {
    message: string;
    likecount: string;
}

const Post = (props: PostsType) => {
    return (
        <div className={s.item}>
            <div>
                <img src="https://sun9-48.userapi.com/c858224/v858224573/16208c/2yLzyVGWOg0.jpg"/>
                {props.message}
            </div>
            <div>
                <span>{props.likecount}</span>
            </div>
        </div>
    );
};


export default Post;
