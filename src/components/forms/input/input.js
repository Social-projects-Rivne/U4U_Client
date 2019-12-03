import React from "react";
import { Field } from 'formik';

import './input.scss'

const Input = ({initialValues: values, errors: errs, touched, isValidating, setState, ...other}) => {
    let fields = [];
    for(let e in values) {
        // makes first char to uppercase
        let label = e.charAt(0).toUpperCase();
        label = label += e.slice(1);

        let type = 'text';

        if(e === 'password') {
            type = 'password'
        } else if (e === 'email') type = 'email';

        const inputClass = errs[e] && touched[e] ? 'input err-input' : 'input';
        const barClass = errs[e] && touched[e] ? 'bar err-bar' : 'bar';

        const filed = <div key={e} className='login-fields-group'>
                {errs[e] && touched[e] ? <span className='login-fields-group-text-err'>{errs[e]}</span> : <label className="label">{label}:</label>}
                <Field className={"global-input-text " + inputClass} placeholder={label} type={type} name={e} required />
                <span className="highlight"></span>
                <span className={barClass}></span>
        </div>;

        fields.push(filed)
    }

    return fields;
};

export default Input;