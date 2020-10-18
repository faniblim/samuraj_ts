import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {NewPostType} from "../../../redux/state";

type PropsType = {
    posts: Array<NewPostType>;
    addPost: (postMessage: string)  => void;

}


const MyPosts = (props: PropsType) => {

    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElements = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElements.current) {
        let text = newPostElements.current.value;
        props.addPost(text);
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElements}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};


export default MyPosts;
