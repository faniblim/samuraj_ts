import React from "react";
import {UserType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type PropsType = {
    users: Array<UserType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: any
    follow: any
    unfollow: any
}

let Users = (props: PropsType) => {
    return (
        <div>
            <Paginator
                currentPage={props.currentPage}
                onPagechanged={props.onPageChanged}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
            />
            <div>
                {props.users.map((u) => (
                    <User
                        user={u}
                        followingInProgress={props.followingInProgress}
                        key={u.id}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                ))}
            </div>
        </div>
    );
};

export default Users;