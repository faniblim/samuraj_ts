import {RootStateReduxType} from "./redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state: RootStateReduxType) => {
    return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSelector, (users: any) => {
    return users().filter((u: any) => true);
});

export const getPageSize = (state: RootStateReduxType) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: RootStateReduxType) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: RootStateReduxType) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state: RootStateReduxType) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state: RootStateReduxType) => {
    return state.usersPage.followingInProgress;
}

