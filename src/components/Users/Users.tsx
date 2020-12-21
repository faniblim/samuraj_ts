import React from "react";
import {UserType} from "../../redux/users-reducer";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png';

type PropsType = {
    users: Array<UserType>
    // follow: (userId: number) => void;
    // unfollow: (userId: number) => void
    setUsers: (users: any) => void;
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    pageSize: number
    setTotalUsersCount: (totalCount: number) => void
   }

class Users extends React.Component<PropsType, any> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
    onPagechanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items);
            });
    }

    render(): React.ReactNode {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <=pagesCount; i++){
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p  && styles.selectedPage}
                                 onClick={(e) => {this.onPagechanged(p);}} >{p}</span>
                })}
            </div>
            {this.props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
            </div>
            <div>
                {u.followed
                    ? (<button onClick={() => {
                        this.props.users.unfollow(u.id)
                    }}>Unfollow</button>)
                    : (<button onClick={() => {
                        this.props.users.follow(u.id)
                    }}> Follow</button>)
                }
            </div>
        </span>
                <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                 <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
        </span>
            </div>)}
        </div>
    }
}

export default Users;