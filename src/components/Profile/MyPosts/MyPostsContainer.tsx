import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../../redux/redux-store";

let mapStateToProps = (state: RootStateReduxType) => {
    return{
        posts: state.profileReducer.posts,
        //newPostText: state.profileReducer.newPostText
        //newPostText: state.profilePage.newPostText
    }}
let mapDispatchToProps = (dispatch: any) => {
    return{
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
