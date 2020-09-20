import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import auth from './auth-helper';

function PrivateRoute({component:Component,...rest}) {
    return (
        <div>
          <Route {...rest}
          render={props=>(
              auth.isAuthenticated
              ?(<Component {...rest} />)
              :(<Redirect to={{
                  pathname:'/login',
                  state:{from:props.location}
              }}/>
              )
          )}/>   
        </div>
    )
}

export default PrivateRoute

