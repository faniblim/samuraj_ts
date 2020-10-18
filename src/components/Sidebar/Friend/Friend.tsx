import React from "react";
import {NavLink} from "react-router-dom";
import s from "./../Friends.module.css";

type PropsType = {
    id: number;
    name: string;
    friendCount: string;
}

const Friend = (props: PropsType) => {
    let path = "/sidebar/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <div className={s.friendAva}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8OWX7c2IADo4uKQDgwoqVdbGHujgcorOefQ&usqp=CAU"/>
            </div>
            <div>
                <NavLink to={path} className={s.friends}>{props.name} </NavLink>
            </div>
            <div>
                <NavLink to={path} className={s.friends}> {props.friendCount}</NavLink>
            </div>
        </div>
    );
};

export default Friend;