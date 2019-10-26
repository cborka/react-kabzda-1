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


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                {/*{props.state.sidebar.friends[1].toString()}*/}
                <Sidebar state={props.state.sidebarPage}   />
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs' render={() => <Dialogs
                        dialogsPage={props.state.dialogsPage}
                        addMessage={props.addMessage}
                        updateNewMessage={props.updateNewMessage}
                    />} />
                    <Route path='/Profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
                <footer className='footer'>footer</footer>
            </div>
        </BrowserRouter>
    );
};

export default App;
