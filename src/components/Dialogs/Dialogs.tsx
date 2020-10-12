import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogsType = {}

const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Tana</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Semion</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Anastasja</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Nik</NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Yo</div>
                <div className={s.message}>Yo</div>
            </div>

        </div>
    );
};


export default Dialogs;
