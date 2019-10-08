import React, { useState } from 'react';
import { Notify } from "../notify";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import api from '../../services/tourist-service';
import {Redirect} from "react-router-dom";
import Input from '../forms/input';
import Button from "../forms/buttons/button";

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name is too Short!')
        .max(50, 'Name is too Long!')
        .required('Name is a required filed'),
    password: Yup.string()
        .min(4, 'Password is too Short!')
        .max(50, 'Password is too Long!')
        .required('Password is a required filed'),
    email: Yup.string()
        .email('Invalid email')
        .required('E-mail is a required field'),
});



const Register = () => {

    const [redirect, setRedirect] = useState(false);

    const submit = async (values) => {
        try{
            await api.register(values);
            setRedirect(true);
        } catch (e) {
            Notify.error(e.message)
        }
    };

    if(redirect) return <Redirect to='/' />;

    return (
        <div className="form sign-up">
            <h2>Time to feel like home,</h2>

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
                    <Form>
                        {Input(params)}

                        <Button type='submit' className="submit"> Sign In </Button>
                    </Form>
                )}

            </Formik>

            <button type="button" className="fb-btn">Join with <span>facebook</span></button>
        </div>
    )
};

export default Register;