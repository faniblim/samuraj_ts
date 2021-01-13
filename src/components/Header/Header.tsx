import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header: any = (props: any) => {
    return (
        <header className={s.header}>
            <img src="https://sun9-29.userapi.com/v-EQVFyM-vKmJchVflbW2X-2Vv9d6P53aRok0A/lIjt8EU0gSw.jpg" />
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} = <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;