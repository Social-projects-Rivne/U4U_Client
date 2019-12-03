import React, { useState } from 'react';
import './login.scss';

import Input from "../../forms/input";
import Button from '../../forms/buttons/button';
import api from '../../../services/tourist-service';
import { Redirect, Link } from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';



const Login = ({ onAuth }) => {
    const [state, setState] = useState({
        redirect: false,
        wrongData: false,
        err: false,
    });

        const LoginSchema = Yup.object().shape({
        password: Yup.string()
            .min(4, 'Password is too short!')
            .max(50, 'Password is too long!')
            .required('Password is a required filed!'),
        email: Yup.string()
            .email('Invalid email!')
            .required('Email is a required field!'),
    });

        const submit = async (values) => {
            try {
                await api.login(values);
                setState({ redirect: true });
                onAuth(true);
            } catch (res) {
                if(res.status >= 400 && res.status < 500) {
                    setState({ wrongData: true })
                } else {
                    setState({ err: true })
                }
            }
        };

        const prevPath = localStorage.getItem('prevPath') ? localStorage.getItem('prevPath') : '/';

        if (state.redirect) return <Redirect to={prevPath}/>;

        return (
                <div className="login-wrapper">
                        <div className="login global-white-layout">
                            <h1 className='login-title'>Sign In</h1>
                            {state.wrongData ? <p className='login-error'>Wrong email or password!</p> : null }
                            {state.err ? <p className='login-error'>Server error please try later!</p> : null }

                                    <Formik
                                        initialValues={{
                                            email: '',
                                            password: ''
                                        }}
                                        validationSchema={LoginSchema}
                                        onSubmit={submit}
                                    >

                                        {(params) => (
                                            <Form className="login-form">
                                                {Input(params, setState)}
                                                
                                                <div className='login-submit'>
                                                    <Button type="submit" className="login-submit__button global-raised-button">Sign In</Button>
                                                </div>

                                                <Link to='/register' className='login-register-link'>Registration</Link>
                                            </Form>
                                        )}

                                    </Formik>
                        </div>
                </div>
        )

};

export default Login;
