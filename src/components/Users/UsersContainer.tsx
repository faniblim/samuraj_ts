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
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import preloader from "../../assets/images/preloader.gif";

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    currentPage: number
    pageSize: number
    totalUsersCount: number
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}


class UsersContainer extends React.Component<PropsType, any> {
    componentDidMount() {

    //     this.props.toggleIsFetching(true);
    //     axios
    //         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    //         .then((response: any) => {
    //             this.props.toggleIsFetching(true);
    //             this.props.setUsers(response.data.items);
    //             this.props.setTotalUsersCount(response.data.totalCount);
    //         });
    // }
    // onPageChanged = (pageNumber: number) => {
    //     this.props.setCurrentPage(pageNumber);
    //     this.props.toggleIsFetching(true);
    //     this.props.toggleIsFetching(true);
    //     axios
    //         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    //         .then((response: any) => {
    //             this.props.toggleIsFetching(true);
    //             this.props.setUsers(response.data.items);
    //         });
    }


    render(): React.ReactNode {
        return <>
          {this.props.isFetching ? <Preloader /> : null }
            <div>Users</div>
        {/*    <Users*/}
        {/*    totalUsersCount={this.props.totalUsersCount}*/}
        {/*    pageSize={this.props.pageSize}*/}
        {/*    currentPage={this.props.currentPage}*/}
        {/*    onPageChanged={this.onPageChanged}*/}
        {/*    users={this.props.users}*/}
        {/*    follow={this.props.follow}*/}
        {/*    unfollow={this.props.unfollow}*/}
        {/*/>*/}
        </>
    }}

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
// let mapDispatchToProps = (dispatch: any) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(follow(userId));
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollow(userId));
//         },
//         setUsers: (users: any) => {
// dispatch(setUsers(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCarrentPage(currentPage));
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setUsersTotalCount(totalCount));
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(setToggleIsFetching(isFetching));
//         },
//     }
// }

export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers,
        setCarrentPage, setUsersTotalCount, setToggleIsFetching,
    }
)(UsersContainer);

