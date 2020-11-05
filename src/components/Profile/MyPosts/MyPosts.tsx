import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {NewPostType} from "../../../redux/state";

type PropsType = {
    posts: Array<NewPostType>;
    addPost: () => void;

    newPostText: string
    updateNewPostText: (newText: string) => void;
}


const MyPosts = (props: PropsType) => {

    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        // if (newPostElement.current) {
        //     let text = newPostElement.current.value;
        // props.addPost(text);
        // };
        props.addPost();
    }

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        // if (newPostElement.current) {
        //     let text = newPostElement.current.value;
        //     props.updateNewPostText(text);
        // }
        props.updateNewPostText(e.currentTarget.value);
    };


    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

};


export default MyPosts;
