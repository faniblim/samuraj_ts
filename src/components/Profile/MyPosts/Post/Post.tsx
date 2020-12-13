import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://sun9-68.userapi.com/c858320/v858320264/206cd1/_aG64uwCOao.jpg" />
      {/* <img src="https://sun9-48.userapi.com/c858224/v858224573/16208c/2yLzyVGWOg0.jpg" /> */}
      {props.message}
      <div>
        <span>like</span>{props.likesCount}
      </div>
    </div>
  );
};

export default Post;
