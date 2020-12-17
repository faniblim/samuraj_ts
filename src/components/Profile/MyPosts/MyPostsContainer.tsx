import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StateType} from "../../../redux/store";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../../redux/redux-store";

let mapStateToProps = (state: RootStateReduxType) => {
    return{
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }}
let mapDispatchToProps = (dispatch: any) => {
    return{
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
