import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/users-reduser";
import * as axios from "axios";
import Users from "./Users";
import Fetching from "../common/Fetching/Fetching";

class UserContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length == 0) {
            this.props.setIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        if(this.props.isFetching) {
            return <Fetching />
        }

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
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
};

/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId));},
        unfollow: (userId) => {dispatch(unfollowAC(userId));},
        setUsers: (users) => { dispatch(setUsersAC(users)); },
        setCurrentPage: (pageNumber) => { dispatch(setCurrentPageAC(pageNumber)); },
        setTotalUsersCount: (totalUsersCount) => { dispatch(setTotalUsersCountAC(totalUsersCount)); },
        setIsFetching: (isFetching) => { dispatch(setIsFetchingAC(isFetching)); }
    }
};
*/

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching

})(UserContainer);;