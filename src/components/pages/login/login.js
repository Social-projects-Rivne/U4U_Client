import React, { useState } from 'react';
import './login.scss';

import Input from "../../forms/input";
import Button from '../../forms/buttons/button';
import FacebookBtn from "../../forms/buttons/facebook-btn";
import Register from "../../register/register";
import api from '../../../services/tourist-service';
import { Redirect } from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';



const Login = () => {
    const [state, setState] = useState({
        redirect: false,
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

    const submit = async () => {
        if(!state.email || !state.password) {

        } else {
            try {
                await api.login(email, password);
                setState({ redirect: true })
            } catch (e) {

            }
    };

    const prevPath = localStorage.getItem('prevPath') ? localStorage.getItem('prevPath') : '/';

    if(state.redirect) return <Redirect to={prevPath} />;

    return (
        <>
                <div className="cont s--signup">

                    <div className="form sign-in">
                        <h2>Welcome back,</h2>

                        <p className="forgot-pass">Forgot password?</p>
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validationSchema={LoginSchema}
                            onSubmit={submit}
                        >

                            {(params) => (
                                <Form>
                                    {Input(params)}

                                    <Button type="submit" className="submit"> Sign In </Button>
                                </Form>
                            )}

                        </Formik>

                        <FacebookBtn/>

                    </div>
                    <div className="sub-cont">
                        <div className="img">

                            <div className="img__text m--up">
                                <h2>New here?</h2>
                                <p>Sign up and discover great variety of new places!</p>
                            </div>

                            <div className="img__text m--in">
                                <h2>One of us?</h2>
                                <p>If you already has an account, just sign in. We've missed you!</p>
                            </div>

                            <div className="img__btn" onClick={() => {
                                document.querySelector('.cont').classList.toggle('s--signup');
                            }}>
                                <span className="m--up">Sign Up</span>
                                <span className="m--in">Sign In</span>
                            </div>
                        </div>

                        <Register/>

                    </div>
                </div>
        </>
    )
};

export default Login;
