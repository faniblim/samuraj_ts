import React, {ChangeEvent} from "react";
import Friend from "./Friend/Friend";
import s from "./Friends.module.css";
import {
    addFriendActionCreator,
    FriendType, onFriendChangeActionCreator,
} from "../../redux/state";

type PropsType = {
    friends: Array<FriendType>;
    newFriend: string;
    dispatch: any
}

const Friends = (props: PropsType) => {

    let friendsElements = props.friends
        .map(f => <Friend id={f.id} name={f.name} friendCount={f.friendCount}/>);

    let newFriendElements = React.createRef<HTMLTextAreaElement>();

    let addFriend = () => {
        props.dispatch(addFriendActionCreator());
    }

    let onFriendChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        let action = onFriendChangeActionCreator(text);
        props.dispatch(action);
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
                        <button onClick={addFriend}>Add Friend</button>
                    </div>
                {/*    {friendsElements}*/}
                </div>

            </div>
            <div> {friendsElements}</div>
        </div>
    );
};

export default Friends;