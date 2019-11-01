import React from 'react';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'
import Users from "./Users";

class UsersAPIComponent extends React.Component {

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

export default UsersAPIComponent;