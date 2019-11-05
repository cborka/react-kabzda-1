import {combineReducers, createStore} from "redux";
import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";
import sidebarReduser from "./sidebar-reduser";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";

let redusers = combineReducers({
    dialogsPage: dialogsReduser,
    profilePage: profileReduser,
    sidebarPage: sidebarReduser,
    usersPage: usersReduser,
    auth:authReduser

});

let store = createStore(redusers);

export default store;