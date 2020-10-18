import React from "react";
import s from "./../Dialogs.module.css";


type PropsType = {
    id: number;
    message: string;
}

const Message = (props: PropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}


export default Message;


