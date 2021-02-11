/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({ component: Component, ...rest }) => {
    if (!localStorage.getItem('user')) {
        return <Redirect to={{ pathname: '/login' }} />;
    }

    return <Route {...rest} component={Component} />;
};

export default privateRoute;
