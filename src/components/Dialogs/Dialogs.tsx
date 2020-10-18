import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogItemType, MessageType} from "../../redux/state";

type PropsType = {
    dialogs: Array<DialogItemType>;
    messages: Array<MessageType>;
}

const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messages
        .map(m => <Message id={m.id} message={m.message}/>);

    let newMessageElements = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
       if (newMessageElements.current) {
           let text = newMessageElements.current.value;
           alert(text);
       }
    };

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <h3>Dialogs</h3>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <textarea ref={newMessageElements}></textarea>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;


