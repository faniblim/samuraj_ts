import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";




const MyPosts = (props: any) => {
    return (
       <div>
           My posts
           <div>
               <textarea></textarea>
               <button>Add post</button>
           </div>
           <Post
               message={"Hi, how are you?"}
               likecount={'like 15'}
           />
           <Post
               message={"It's my first post"}
               likecount={'like 20'}
           />
       </div>
    );
};


export default MyPosts;
