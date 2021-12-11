import { rest } from 'lodash'
import React, { Component } from 'react'
import { React, Redirect } from 'react-router-dom'
import auth from './auth-helper'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={porps => (
        auth.isAuthenicated() ? (
            <Component{...props} />
        ) : (
            <Redirect to={{
                pathname: '/signin',
                state: { from: props.location }
            }} />
        )
    )} />
)
export default PrivateRoute