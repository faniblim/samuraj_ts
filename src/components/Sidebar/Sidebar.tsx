import React from "react";
import Friend from "./Friend/Friend";
import s from "./Sidebar.module.css";

const Sidebar = (props) => {
  let state = props.sidebar;

  let friendsElements = state.friends.map((f) => (
    <Friend id={f.id} name={f.name} friendCount={f.friendCount} />
  ));
  let newFriend = state.newFriend;

  let onSendFriendClick = () => {
    props.sendFriend();
  };

  let onNewFriendChange = (e) => {
    let friend = e.target.value;
    props.updateNewFriend(friend);
  };

  return (
    <div className={s.friends}>
      <h3>Friends</h3>
      <div className={s.namefriend}>
        <div>
          <textarea 
          value={newFriend}
          onChange={onNewFriendChange}
          placeholder="Enter your name"></textarea>
        </div>
        <div><button onClick={onSendFriendClick}>Send</button></div>
      </div>
      <div className={s.friend}>{friendsElements}</div>
    </div>
  );
};

export default Sidebar;
