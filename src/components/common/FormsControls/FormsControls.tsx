import React from "react";
import styles from "./FormsControls.module.css";
import {WrappedFieldMetaProps, Field} from "redux-form";

type FormsControlsPropstype ={
    meta: WrappedFieldMetaProps

}


const Formcontrol:React.FC<FormsControlsPropstype> = ({ meta:{touched,error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")} >
            <div>{children}</div>
            <div>{ hasError && <span>{error}</span>}</div>
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, ...restprops} = props;
    return <Formcontrol {...props}><textarea {...input}  {...restprops} /></Formcontrol>    
}

export const Input = (props: any) => {
    const {input, meta, ...restprops} = props;
    return <Formcontrol {...props}><input {...input}  {...restprops} /></Formcontrol>    
}
export const createField = (placeholder:any, name: any, validators: any, component: any, props={}, text="") =>
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators} component={component} {...props} /> {text}
    </div>
