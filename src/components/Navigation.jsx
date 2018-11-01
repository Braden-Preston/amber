import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as ROUTES from '../constants/routes';

const Navigation = ({ authUser }) =>
    <div>
        {authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </div>

const NavigationAuth = () =>
    <React.Fragment>
        <Link to={ROUTES.LANDING}>Landing | </Link>
        <Link to={ROUTES.HOME}>Home | </Link>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
        <SignOutButton />
    </React.Fragment>

const NavigationNonAuth = () =>
    <React.Fragment>
        <Link to={ROUTES.LANDING}>Landing | </Link>
    <Link to={ROUTES.SIGN_IN}>Sign In</Link>         
    </React.Fragment>

export default Navigation;