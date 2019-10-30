import React from 'react';
import s from './Sidebar.module.css';
import Friends from "./Friends/Friends";
import Navbar from "./Navbar/Navbar";
import StoreContext from "../../CreateContext";


const Sidebar = (props) => {
     return (
        <StoreContext.Consumer>
            {
                (store) => (
                    <div className={s.sidebar}>
                        <Navbar/>
                        <h3>Верные друзья</h3>
                        <Friends friends={store.getState().sidebarPage.friends}/>
                    </div>
                )
            }
        </StoreContext.Consumer>
    )
};

export default Sidebar;