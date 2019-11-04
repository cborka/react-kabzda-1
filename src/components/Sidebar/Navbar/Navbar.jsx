import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={`${s.nav} ${s.item}`}>
        Меню<br/>
        <div className={s.item}>
            <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Dialogs' activeClassName={s.activeLink}>Dialogs</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/News' activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Music' activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Settings' activeClassName={s.activeLink}>Settings</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/Users' activeClassName={s.activeLink}>Users</NavLink>
        </div>
    </nav>

};

export default Navbar;