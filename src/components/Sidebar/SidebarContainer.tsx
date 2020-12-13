import React from "react";
import {
  addFriendCreator,
  updateNewFriendCreator,
} from "../../redux/sidebar-reducer";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
    newPostText: state.sidebar.newFriend
    // newFriend: state.sidebar.newFriend
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewFriend: (friend) => {dispatch(updateNewFriendCreator(friend));},
    sendFriend: () => {dispatch(addFriendCreator());
    }
  }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)
(Sidebar);

export default SidebarContainer;
