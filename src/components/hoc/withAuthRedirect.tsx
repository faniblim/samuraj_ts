import React from 'react';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";

let mapStateToPropsForRedirect = (state: RootStateReduxType) =>( {
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component {
        render() {
            //if (!this.props.isAuth) return <Redirect to='/login' />

            return <Component {...this.props} />
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
