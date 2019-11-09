import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
debugger
    return <header className={s.header}>
        <img src='http://mp.metapoznanie.ru/img/mp21.bmp'></img>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.doExit}>Exit</button></div>
                : <NavLink to='/login'>Login</NavLink>}
        </div>
    </header>
};

export default Header;