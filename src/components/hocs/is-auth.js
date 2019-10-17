import React from 'react';
import { AuthConsumer } from "../contexts";

const isAuth = (Wrapped) => (props) => (
    <AuthConsumer>
        {
            (isAuth)  => {
                return <Wrapped {...props} isAuth={isAuth} />
            }
        }
    </AuthConsumer>
);

export default isAuth;
