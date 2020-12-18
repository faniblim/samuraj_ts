import React from "react";
import {addFriendActionCreator, onFriendChangeActionCreator} from "../../redux/sidebar-reducer";
import Friends from "./Friends";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";

let mapStateToProps = (state: RootStateReduxType) => {
    return{
        friends: state.sidebarReducer.friends,
        newFriend: state.sidebarReducer.newFriend
    }}
let mapDispatchToProps = (dispatch: any) => {
    return{
        onFriendChange: (text: string) => {
            let action = onFriendChangeActionCreator(text)
            dispatch(action);
        },
        addFriend: () => {
            dispatch(addFriendActionCreator());
        }
    }}
const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends);

export default FriendsContainer;