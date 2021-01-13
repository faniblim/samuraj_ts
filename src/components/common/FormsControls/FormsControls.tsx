import React from "react";
import styles from "./FormControls.module.css";
import {WrappedFieldMetaProps} from "redux-form";

type FormsControlsPropstype ={
    meta: WrappedFieldMetaProps

}


const Formcontrol:React.FC<FormsControlsPropstype> = ({ meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")} >
            <div>{props.children}</div>
            <div>{ hasError && <span>{meta.error}</span>}</div>
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
