import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import store from "./redux/state";


const App = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            {/*{props.state.sidebar.friends[1].toString()}*/}
            <Sidebar state={props.state.sidebarPage}/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <Dialogs
                    store={store}
                    dispatch={props.dispatch}
                    dialogsPage={props.state.dialogsPage}
                />}/>
                <Route path='/Profile' render={() => <Profile
                    store={store}
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                />}/>
                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
            </div>
            <footer className='footer'>footer</footer>
        </div>

    );
};

export default App;
