import React, {ChangeEvent} from "react";
import Friend from "./Friend/Friend";
import s from "./Friends.module.css";
import {FriendsType, FriendType} from "../../redux/store";

type PropsType = {
    newFriend: string;
    friends: Array<FriendType>
    addFriend: () => void;
    onFriendChange: (text: string) => void
}

const Friends = (props: PropsType) => {
    // let state = props.sidebar;

    let friendsElements = props.friends.map(f => <Friend id={f.id} name={f.name} friendCount={f.friendCount}/>);
    let newFriendElements = React.createRef<HTMLTextAreaElement>();

    let onAddFriend = () => {
        props.addFriend();
    }

    let onFriendChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.onFriendChange(text);
    };

    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <div className={s.friend}>
                <div className={s.friends}>
                <textarea onChange={onFriendChange}
                          ref={newFriendElements}
                          value={props.newFriend}/>
                    <div>
                        <button onClick={onAddFriend}>Add Friend</button>
                    </div>
                </div>

            </div>
            <div> {friendsElements}</div>
        </div>
    );
};

export default Friends;