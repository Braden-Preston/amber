import React from 'react';

import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';

import { auth } from '../firebase';

const SignOutButton = () =>
    <button
        type="button"
        onClick={auth.signOut}
    >
        <Redirect to={routes.ROOT} />
        Sign Out
  </button>

export default SignOutButton;