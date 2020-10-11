import React from "react";
import s from "./Dialogs.module.css";

export type DialogsType = {}

const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>Tana</div>
                <div className={s.dialog}>Semion</div>
                <div className={s.dialog}>Anastasja</div>
                <div className={s.dialog}>Nik</div>
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
