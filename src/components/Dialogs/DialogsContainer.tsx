import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";

let mapStateToProps = (state: RootStateReduxType) => {
    return{
        dialogsPage: state.dialogsReducer
    }}
let mapDispatchToProps = (dispatch: any) => {
    return{
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
}}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;


