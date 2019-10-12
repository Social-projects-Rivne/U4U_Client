import React, { useState } from 'react';
import './login.scss';

import Input from "../../forms/input";
import Button from '../../forms/buttons/button';
import FacebookBtn from "../../forms/buttons/facebook-btn";
import Register from "../../register/register";
import api from '../../../services/tourist-service';
import { Redirect, Link } from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';



const Login = () => {
    const [state, setState] = useState({
        redirect: false,
        wrongData: false,
        err: false,
    });

    const LoginSchema = Yup.object().shape({
        password: Yup.string()
            .min(4, 'Password is too Short!')
            .max(50, 'Password is too Long!')
            .required('Password is a required filed'),
        email: Yup.string()
            .email('Invalid email')
            .required('E-mail is a required field'),
    });

        const submit = async (values) => {
            try {
                await api.login(values);
                setState({ redirect: true })
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
                <div className="login">
                    <h1 className='title'>Login</h1>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: ''
                                }}
                                validationSchema={LoginSchema}
                                onSubmit={submit}
                                onFocu
                            >

                                {(params) => (
                                    <Form>
                                        {Input(params, setState)}

                                        {state.wrongData ? <p className='text-wrong'>Wrong email or password</p> : null }
                                        {state.err ? <p className='text-wrong'>Server error please try later</p> : null }
                                        <Link to='/register' className='register-link'>not a member ?</Link>

                                        <div className='submit-wrapper'>
                                            <Button type="submit" className="submit"> Login </Button>
                                        </div>
                                    </Form>
                                )}

                            </Formik>
                        </div>
        )

};

export default Login;
