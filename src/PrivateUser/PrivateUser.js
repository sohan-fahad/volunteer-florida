import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hook/useAuth';

const PrivateUser = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()

    if (isLoading) {
        return <div className="d-flex align-items-center justify-content-center">
            <Spinner animation="border" variant="primary" />
        </div>
    }
    return (
        <Route
            {...rest}
            render={
                ({ location }) => user?.displayName ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                >
                </Redirect>
            }
        >

        </Route>
    );
};

export default PrivateUser;