import React, { useState } from 'react';
import './login.scss';

import Input from "../../forms/input";
import Button from '../../forms/buttons/button';
import FacebookBtn from "../../forms/buttons/facebook-btn";
import Register from "../../register/register";
import touristService from '../../../services/tourist-service';
import { Notify } from '@i_oleksandr/prcomponents';

const Login = () => {
    const [state, setState] = useState({
        email: null,
        password: null,
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
        console.log(state);
    };

    const submit = async () => {
        try {
            const { token, user} = await touristService.login();
            localStorage.setItem('token', token);
            setState({...state, user})
        } catch (e) {
            Notify.error({ message: 'Wrong email or password' })
        }
    };

    return (
        <>
            <div className="cont">
                <div className="form sign-in">
                    <h2>Welcome back,</h2>

                    <Input
                     label='Email'
                     name='email'
                     type='email'
                     onChange={handleChange}/>

                    <Input
                        label='Password'
                        type='password'
                        name='password'
                        onChange={handleChange}/>

                    <p className="forgot-pass">Forgot password?</p>

                    <Button className="submit"> Sign In </Button>
                    <FacebookBtn />

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

                   <Register />

                </div>
            </div>
        </>
    )
};

export default Login;