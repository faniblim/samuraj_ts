import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogItemType, MessageType} from "../../redux/state";

type PropsType = {
    dialogs: Array<DialogItemType>;
    messages: Array<MessageType>;
    newMessageText?: string
    dispatch: any

}

const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messages
        .map(m => <Message id={m.id} message={m.message}/>);

    let newMessageElements = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        let action = {type: 'UPDATI-NEW-MESSAGE-TEXT', newMessage: text};
        props.dispatch(action);
    };

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <h3>Dialogs</h3>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <textarea onChange={onMessageChange}
                          ref={newMessageElements}
                          value={props.newMessageText}/>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;


