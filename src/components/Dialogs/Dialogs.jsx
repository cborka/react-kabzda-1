import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to="/dialogs/1">Dimych</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/2">Boris</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to="/dialogs/3">Alex</NavLink>

            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hi
            </div>
            <div className={s.message}>How are you?
            </div>
            <div className={s.message}>Yo
            </div>


        </div>
        Dialogs
    </div>
  );
};

export default Dialogs;