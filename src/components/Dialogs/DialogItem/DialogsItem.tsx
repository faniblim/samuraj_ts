import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number;
    name: string;
}

const DialogItem = (props: PropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.item}>
            <img src="https://sun9-48.userapi.com/c858224/v858224573/16208c/2yLzyVGWOg0.jpg"/>
            </div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>)
}


export default DialogItem;


