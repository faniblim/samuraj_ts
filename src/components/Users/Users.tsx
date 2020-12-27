import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
    // setUsers: (users: any) => void
    // setCurrentPage: (currentPage: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    // isFetching: boolean
}

let Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);}

        return <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? styles.selectedPage:""}
                        onClick={(e) => {
                            props.onPageChanged(p);
                        }}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
    <span>
        <div>
            <NavLink to={'/profile/' + u.id}>
               <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
            </NavLink>

    </div>
     <div>
                {u.followed ? (<button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.1/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {"API-KEY": "d20f2cfd-7cab-429f-a515-e3c7d4a89ddd"}
                        })
                            .then((response: any) => {
                                if (response.data.resultCode == 0) {
                                    props.unfollow(u.id);
                                }
                            });

                    }}
                    >Unfollow</button>)
                    : (<button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.1/follow/${u.id}`, {},
                                {
                                    withCredentials: true,
                                    headers: {"API-KEY": "d20f2cfd-7cab-429f-a515-e3c7d4a89ddd"}
                                })
                                .then((response: any) => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id);
                                    }
                                });
                        }}
                        >Follow</button>
                    )}
              </div>
        </span>
                <span>
        <span>
            <div>{u.name}</div>
        <div>{u.status}</div>
        </span>
        <span>
        <div>{"u.location.country"}</div>
        <div>{"u.location.city"}</div>
        </span>
        </span>
            </div>)}
        </div>

}

export default Users;