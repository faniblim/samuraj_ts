import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

type PropsType = {
    updateNewMessageBody: (body: string) => void;
    sendMessage: (values:any) => void;
    dialogsPage: DialogType
    isAuth: any
}


const Dialogs = (props: PropsType) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message} key={m.id} />);
    // let newMessageBody = state.newMessageBody;
    if(!props.isAuth) return <Redirect to={"/login"} />;
    let addNewMessage = (values:any) => {
        props.sendMessage(values.newMessageBody);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    );
};



export default Dialogs;


