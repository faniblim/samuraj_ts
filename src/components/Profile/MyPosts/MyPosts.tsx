import React from "react";
import s from "./MyPosts.module.css";
import Post, {PostType} from "./Post/Post";

type MyPoststype = {
    posts: Array<PostType>;
}


const MyPosts = (props: MyPoststype) => {

    let postsElements =
        props.posts.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
           <div>
               <div>
                   <textarea></textarea>
               </div>
               <div>
                   <button>Add post</button>
               </div>
           </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};


export default MyPosts;
