import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import api from '../../services/tourist-service';
import {Redirect} from "react-router-dom";
import Input from '../forms/input';
import Button from "../forms/buttons/button";
import './register.scss';

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name is too Short!')
        .max(50, 'Name is too Long!')
        .required('Name is a required filed'),
    surname: Yup.string()
        .min(2, 'Name is too Short!')
        .max(50, 'Name is too Long!')
        .required('Surname is a required filed'),
    nickName: Yup.string()
        .min(2, 'Name is too Short!')
        .max(50, 'Name is too Long!')
        .required('Name is a required filed')
        .test('is-42',
            "Sorry, that nickname's taken. Try another? ",
            async (value) => {
                let errors = {};
                try {
                    await api.getNickName(value);
                    if(Object.keys(errors).length) {
                        throw errors;
                    }
                } catch (e) {
                    return Promise.resolve('done')
                }
            }),
    password: Yup.string()
        .min(4, 'Password is too Short!')
        .max(50, 'Password is too Long!')
        .required('Password is a required filed'),
    email: Yup.string()
        .email('Invalid email')
        .required('E-mail is a required field')
        .test('is-42',
            "Sorry, that email's taken. Try another? ",
            async (value) => {
                let errors = {};
                try {
                    await api.getEmail(value);
                    if(Object.keys(errors).length) {
                        throw errors;
                    }
                } catch (e) {
                    return Promise.resolve('done')
                }
            }),
});

const Register = () => {

    const [redirect, setRedirect] = useState(false);

    const submit = async (values) => {
        try{
            await api.register(values);
            setRedirect(true);
        } catch (e) {
        }
    };

    if(redirect) return <Redirect to='/' />;

    return (
        <div className="form sign-up">
            <h2>Time to feel like home,</h2>

            <div className="form-group register-form-group">
                <Formik
                    initialValues={{
                        name: '',
                        surname: '',
                        nickName: '',
                        password: '',
                        email: '',
                    }}
                    validationSchema={RegisterSchema}
                    onSubmit={submit}
                >

                    {(params) => (
                        <Form className='main-form'>
                            {Input(params)}

                            <div className='button-wrapper'><Button type='submit' className="submit"> Sign In </Button></div>
                        </Form>
                    )}

                </Formik>
            </div>


            <button type="button" className="fb-btn">Join with <span>facebook</span></button>
        </div>
    )
};

export default Register;