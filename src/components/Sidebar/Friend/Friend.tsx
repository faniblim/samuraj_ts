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
                    src="https://sun9-19.userapi.com/impf/QE3uV19vrEuBjteOmxVrC1q7d7RlUhMdFhg7Hw/tYnx66jsYak.jpg?size=201x201&quality=96&proxy=1&sign=62f245da04c83b3e70fec74f23afa0e9&type=album"/>
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