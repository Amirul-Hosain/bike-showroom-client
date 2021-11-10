import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>;
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? (children) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            )
            }
        />
    );
};

export default PrivateRoute;