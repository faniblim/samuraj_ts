import React from "react";
import s from "./Dialogs.module.css";
import DialogItem, {DialogItemType} from "./DialogItem/DialogsItem";
import Message, {MessageType} from "./Message/Message";

export type DialogsType = {
    dialogs: Array<DialogItemType>;
    messages: Array<MessageType>;
}

const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messages
        .map(m => <Message id={m.id} message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;


