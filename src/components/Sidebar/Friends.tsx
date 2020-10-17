import React from "react";
import Friend, {FriendType} from "./Friend/Friend";
import s from "./Friends.module.css";

export type FriendsType = {
    friends: Array<FriendType>;
}

const Friends = (props: FriendsType) => {

    let friendsElements = props.friends
        .map(f => <Friend id={f.id} name={f.name} friendCount={f.friendCount}/>);

    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <div className={s.friend}>
                {friendsElements}
            </div>
        </div>
    );
};

export default Friends;