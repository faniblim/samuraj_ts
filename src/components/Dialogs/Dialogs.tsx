import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <h3>Dialogs</h3>
        {dialogsElements}
      </div>
      <div className={s.messages}>

        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
        <div>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
