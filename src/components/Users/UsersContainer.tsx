import React from "react";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {
    follow,
    requestUser,
    setCarrentPage,
    toggleFollowingProgress, unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching, getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component<MapStateToPropsType & MapDispathPropsType, any> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.followSuccess}
                unfollow={this.props.unfollowSuccess}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: RootStateReduxType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
type MapDispathPropsType = {
    followSuccess: any
    unfollowSuccess: any
    setCarrentPage: any
    toggleFollowingProgress: any
    getUsers: any
}
type MapStateToPropsType = {
    users: any
    pageSize: number
    totalUsersCount: number
    currentPage: any
    isFetching: any
    followingInProgress: any
}

export default withAuthRedirect(connect(
    mapStateToProps,
    {follow, unfollow, setCarrentPage, toggleFollowingProgress, getUsers: requestUser}
)(UsersContainer));