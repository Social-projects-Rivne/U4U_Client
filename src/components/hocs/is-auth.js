import React from 'react';
import { AuthConsumer } from "../contexts";

const isAuth = (Wrapped) => (props) => (
    <AuthConsumer>
        {
            (isAuth)  => {
                return <Wrapped {...props} isAuth={isAuth.auth} />
            }
        }
    </AuthConsumer>
);

export default isAuth;
