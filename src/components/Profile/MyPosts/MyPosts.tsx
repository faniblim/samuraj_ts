import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {PostType} from "../../../redux/profile-reducer";

const maxLength10 = maxLengthCreator(10);

export type PropsType = {
    posts: Array<PostType>;
    //newPostText: string
    //updateNewPostText: (text: string) => void
    addPost: (values: any) => void
}
let AddNewPostForm = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field  name="newPostText" component={Textarea} placeholder={"Post message"}
                        validate={[required, maxLength10]} />
            </div>
            <div><button>Add post</button></div>
        </form>
    );
};

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = React.memo((props: PropsType) => {
    //
    let postsElements = props.posts.map(p =>
        <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText);
    };

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={s.posts}>{postsElements}</div>
    </div>

});


export default MyPosts;
