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
        .min(2, 'Name is too short!')
        .max(50, 'Name is too long!')
        .required('Name is a required filed'),
    surname: Yup.string()
        .min(2, 'Name is too short!')
        .max(50, 'Name is too long!')
        .required('Surname is a required filed'),
    nickName: Yup.string()
        .min(2, 'Name is too short!')
        .max(50, 'Name is too long!')
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
        .min(4, 'Password is too short!')
        .max(50, 'Password is too long!')
        .required('Password is a required filed'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is a required field')
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

const Register = ({ onAuth }) => {

    const [redirect, setRedirect] = useState(false);
    const [err, setErr] = useState(false);

    const submit = async (values) => {
        try{
            await api.register(values);
            onAuth();
            setTimeout(() => setRedirect(true), 1000);
        } catch (e) {
            setErr(e);
        }
    };

    if(redirect) return <Redirect to='/' />;

    return (
        <div className="register-wrapper">
            <div className="register white-layout">
                <h1 className='register-title'>Registration</h1>
                <div className="form-group">
                    <Formik
                        initialValues={{
                            name: '',
                            surname: '',
                            nickname: '',
                            password: '',
                            email: '',
                        }}
                        validationSchema={RegisterSchema}
                        onSubmit={submit}
                    >

                        {(params) => (
                            <Form>
                                {Input(params)}

                                { err ? 'Server error please try to register later' : null}
                                <div className="register-submit">
                                    <Button type='submit' className="register-submit__button global-raised-button">Create Account</Button>
                                </div>
                            </Form>
                        )}

                    </Formik>
                </div>
            </div>
        </div>
    )
};

export default Register;