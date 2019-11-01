import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reduser";
import * as axios from "axios";
import Users from "./Users";

class UserContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length == 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <Users
            pageSize = {this.props.pageSize}
            totalUsersCount = {this.props.totalUsersCount}
            currentPage = {this.props.currentPage}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
            users = {this.props.users}
            onPageChanged = {this.onPageChanged.bind(this)}
        />
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);;