import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = () => {
    /*    alert(store);
        alert(store.updateNewPostText);*/

    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                state={store.getState()}
                dispatch={store.dispath.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));
};

store.subscriber(rerenderEntireTree);

rerenderEntireTree();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
