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

        const filed = <div className='group'>
                <Field className={inputClass} type={type} name={e} required />
                <span className="highlight"></span>
                <span className={barClass}></span>
                <label className="label">{label}</label>
            {errs[e] && touched[e] ? <div className='text-err'>{errs[e]}</div> : null}
        </div>;

        fields.push(filed)
    }

    return fields;
};

export default Input;