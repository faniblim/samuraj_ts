import React from "react";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state: RootStateReduxType) => {
    return{
        dialogsPage: state.dialogsReducer,
    }}
let mapDispatchToProps = (dispatch: any) => {
    return{
        sendMessage: (newMessageBody: any) => {dispatch(sendMessageCreator(newMessageBody))},
}}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);


