import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import Navbar from "./Navbar/Navbar";


const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <Navbar/>
            <h3>Верные друзья</h3>
            <Friends friends={props.state.friends}/>
        </div>
        )
 };

export default Sidebar;