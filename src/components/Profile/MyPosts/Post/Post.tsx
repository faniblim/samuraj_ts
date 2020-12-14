import React from "react";
import s from "./Post.module.css";

type PropsType = {
    id: number;
    message: string;
    likesCount: string;
}

const Post = (props: PropsType) => {
    return (
        <div className={s.item}>
            <div>
                <img src="https://sun9-19.userapi.com/impf/LWCOwdEJQo-xFNu-DQ2CimVddfNTFac1c4z-JA/xm5mB2xb2Ps.jpg?size=501x501&quality=96&proxy=1&sign=98b98f38cd939216910fb4d1b6723589&type=album"/>
                {props.message}
            </div>
            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>
    );
};


export default Post;
