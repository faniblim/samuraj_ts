import React from "react";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {
    follow,
    setCarrentPage,
    setToggleIsFetching,
    setUsers,
    setUsersTotalCount,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    currentPage: number
    pageSize: number
    totalUsersCount: number
    setUsers: (users: any) => void
    setCarrentPage: (currentPage: number) => void
    setUsersTotalCount: (totalCount: number) => void
    isFetching: boolean
    setToggleIsFetching: (isFetching: boolean) => void
}


class UsersContainer extends React.Component<PropsType, any> {
    componentDidMount() {

        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data: any) => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCarrentPage(pageNumber);
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then((data: any) => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }


    render(): React.ReactNode {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <div>Users</div>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

const mapStateToProps = (state: RootStateReduxType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
type MapDispathPropsType = {
    follow: any
    unfollow: any
    setUsers: any
    setCarrentPage: any
    setUsersTotalCount: any
    setToggleIsFetching: any
}
type MapStateToPropsType = {
    users: any
    pageSize:number
    totalUsersCount: number
    currentPage: any
    isFetching: any
}

export default connect<MapStateToPropsType, MapDispathPropsType, {}, RootStateReduxType>
(mapStateToProps,
    {
        follow, unfollow, setUsers,
        setCarrentPage, setUsersTotalCount, setToggleIsFetching,
    }
)(UsersContainer);

