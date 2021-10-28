import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hook/useAuth';

const PrivateAdmin = ({ children, ...rest }) => {
    const {adminInfo} = useAuth()
    return (
        <Route
        {...rest}
        render={
            ({ location }) => adminInfo?.name || adminInfo?.password ? children : <Redirect
                to={{
                    pathname: "/adminlog",
                    state: { from: location }
                }}
            >
            </Redirect>
        }
    >

    </Route>
    );
};

export default PrivateAdmin;