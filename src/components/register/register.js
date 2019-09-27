import React from 'react';
import Input from "../forms/input";

const Register = () => {
    return (
        <div className="form sign-up">
            <h2>Time to feel like home,</h2>

            <Input name='name' label='Name' />
            <Input name='email' label='Email' type='email' />
            <Input name='password' label='password' type='password' />

            <button type="button" className="submit">Sign Up</button>
            <button type="button" className="fb-btn">Join with <span>facebook</span></button>
        </div>
    )
};

export default Register;