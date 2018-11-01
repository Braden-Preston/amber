import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = ({ authUser }) =>
    <div>
        {authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </div>

const NavigationAuth = () =>
    <React.Fragment>
        <Link to={routes.ROOT}>Landing | </Link>
        <Link to={routes.DASHBOARD}>Home | </Link>
        <Link to={routes.ACCOUNT}>Account</Link>
        <SignOutButton />
    </React.Fragment>

const NavigationNonAuth = () =>
    <React.Fragment>
        <Link to={routes.ROOT}>Landing | </Link>
    <Link to={routes.SIGN_IN}>Sign In</Link>         
    </React.Fragment>

export default Navigation;