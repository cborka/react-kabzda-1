import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {

    render() {
        return (
            <div>
               {/* <button onClick={this.getUsers}>Get Users</button>*/}
                <h3>Users will be here</h3>
                {
                    this.props.users.map(u => <div id={u.id}>
                        <span>
                            <div><img className={styles.usersPhoto}
                                      src={u.photos.small != null ? u.photos.small : userPhoto}
                                      alt="ava"/></div>
                            <div>
                                 {u.followed ?
                                     <button onClick={() => this.props.unfollow(u.id)}>unFollow</button> :
                                     <button onClick={() => this.props.follow(u.id)}>Follow</button>
                                 }
                            </div>
                        </span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>'u.location.city'</div>
                            <div>'u.location.country'</div>
                        </span>
                    </div>
                    )
                }
            </div>
        )
    }

    componentDidMount() {
        if (this.props.users.length == 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    }

}

export default Users;