import React from "react";
import { Field } from 'formik';

import './input.scss'

const Input = ({initialValues: values, errors: errs, touched, isValidating, ...other}) => {
    let fields = [];
    for(let e in values) {
        let  wrappClass = errs[e] && touched[e] ? 'form-group has-danger' : 'form-group';
        let  fieldClass = errs[e] && touched[e] ? 'form-control is-invalid' :' form-control';
        // makes first char to uppercase
        let label = e.charAt(0).toUpperCase();
        label = label += e.slice(1);

        const filed = <div className={wrappClass}>
            <label className="form-control-label">{label}</label>
            <Field name={e} type="text" className={fieldClass} />
            { errs[e] && touched[e] ? <div className="invalid-feedback">{ errs[e] }</div> : null }
        </div>;

        fields.push(filed)
    }

    return fields;
};

export default Input;