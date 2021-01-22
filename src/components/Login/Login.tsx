import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {RootStateReduxType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css";


const LoginForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            {createField("Email", "email",[required], Input)}
            {createField("Password", "password",[required], Input, {type: "password"})}
            {createField(null, "rememberMe",[], Input, {type: "checkbox"}, "remember me")}
            {props.error && (
                <div className={style.formSummaryError}>{props.error}</div>
            )}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.remeberMe);
    };


    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: RootStateReduxType) => ({
    isAuth: state.auth.isAuth
})
//faniblim@mail.ru
//5wVUt_e4_6AY2Gm

export default connect(mapStateToProps, {login})(Login)