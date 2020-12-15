import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
    sendMessageCreator,
    DialogItemType,
    MessageType,
    updateNewMessageBodyCreator,
    Statetype
} from "../../redux/state";

type PropsType = {
    dialogs: Array<DialogItemType>;
    messages: Array<MessageType>;
    dispatch: any
    state: Statetype
    newMessageBody: string

}

const Dialogs = (props: PropsType) => {
    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messages
        .map(m => <Message id={m.id} message={m.message}/>);

    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }

    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                <h3>Dialogs</h3>
                {dialogsElements}
            </div>
            <div>
                <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>


            </div>

        </div>
    );
};

export default Dialogs;


