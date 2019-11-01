import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <h3> Users will be here </h3>
            {
                pages.map(p => {
                        return (
                            <span className={(p === props.currentPage) && styles.selectedPage}
                                  onClick={() => {props.onPageChanged(p);}} > {p} </span>

                        )
                    }
                )
            }


            {
                props.users.map(u => {
                    return (
                        <div id={u.id}>
       <span>
       <div><img className={styles.usersPhoto}
                 src={u.photos.small != null ? u.photos.small : userPhoto}
                 alt="ava"/></div>
       <div>
       {u.followed ?
           <button onClick={() => props.unfollow(u.id)}>unFollow</button> :
           <button onClick={() => props.follow(u.id)}>Follow</button>
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
                        </div>)

                })
            }



        </div>
    )


};

export default Users;

