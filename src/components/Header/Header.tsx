import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header: any = (props: any) => {
    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {props.isAuth ? props.logins
                : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;