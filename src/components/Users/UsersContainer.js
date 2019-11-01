import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reduser";


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId));},
        unfollow: (userId) => {dispatch(unfollowAC(userId));},
        setUsers: (users) => { dispatch(setUsersAC(users)); },
        setCurrentPage: (pageNumber) => { dispatch(setCurrentPageAC(pageNumber)); },
        setTotalUsersCount: (totalUsersCount) => { dispatch(setTotalUsersCountAC(totalUsersCount)); }
    }
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;