import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={`${s.nav} ${s.item}`} >
        Меню<br />
        <div className={s.item}>
            <a href='/Profile'>Profile</a>
        </div>
        <div className={s.item}>
            <a href='/Dialogs'>Messages</a>
        </div>
        <div className={s.item}>
            <a href='/News'>News</a>
        </div>
        <div className={s.item}>
            <a href='/Music'>Music</a>
        </div>
        <div className={s.item}>
            <a href='/Settings'>Settings</a>
        </div>
    </nav>

};

export default Navbar;