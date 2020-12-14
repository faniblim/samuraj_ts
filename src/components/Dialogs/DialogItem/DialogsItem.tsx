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
            <img src="https://sun9-75.userapi.com/impf/CRGuOuwrcfLuesHSnP1EgqGazi3TR326rX3bbA/b6aK0mB3Bxw.jpg?size=501x501&quality=96&proxy=1&sign=c9da0ec4b3dc2aa2fc6a83fdaca5c8d0&type=album"/>
            </div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>)
}


export default DialogItem;


