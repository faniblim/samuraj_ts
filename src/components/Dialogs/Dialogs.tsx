import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogType} from "../../redux/store";

type PropsType = {
    updateNewMessageBody: (body: string) => void;
    sendMessage: () => void;
    dialogsPage: DialogType
}

const Dialogs = (props: PropsType) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body);
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


