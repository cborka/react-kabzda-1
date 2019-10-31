import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            {/*{props.state.sidebar.friends[1].toString()}*/}
            <Sidebar store={props.store}/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <DialogsContainer  />}/>
                <Route path='/Profile' render={() => <Profile /> } />
                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
                <Route path='/Users' render = {() => <UsersContainer />} />

            </div>
            <footer className='footer'>footer</footer>
        </div>

    );
};

export default App;
