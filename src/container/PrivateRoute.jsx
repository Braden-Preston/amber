import React from 'react';
import { Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                props.authUser ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/launch",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}
export default PrivateRoute