import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';
import NotesIndexScreen from './screens/notes';
import UserEditScreen from './screens/users/edit';
import PrivateRoute from './components/auth/private_route';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <PrivateRoute exact path="/notes" component={NotesIndexScreen} />
            <PrivateRoute exact path="/users/edit" component={UserEditScreen} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
