import React from 'react';
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {

    return (

        <div className='app-wrapper'>
            <HeaderContainer />
            {/*{props.state.sidebar.friends[1].toString()}*/}
            <Sidebar store={props.store}/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' render={() => <DialogsContainer  />}/>
                <Route path='/Profile/:userId?'
                       render={() => <ProfileContainer /> } />
                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>
                <Route path='/Users'
                       render = {() => <UsersContainer />} />

            </div>
            <footer className='footer'>footer</footer>
        </div>

    );
};

export default App;
