import React from 'react';
import s from './Sidebar.module.css';
import Friends from "./Friends/Friends";
import Navbar from "./Navbar/Navbar";


const Sidebar = (props) => {

    let friends = props.store.getState().sidebarPage.friends;

    return (
        <div className={s.sidebar}>
            <Navbar/>
            <h3>Верные друзья</h3>
            <Friends friends={friends}/>
        </div>
        )
 };

export default Sidebar;