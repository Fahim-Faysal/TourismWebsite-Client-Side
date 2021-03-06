import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
      let { user, isloading } = useAuth()
      if (isloading) {
            return <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
            </div>
      }
      return (
            <Route
                  {...rest}
                  render={({ location }) =>
                        user?.email ? (
                              children
                        ) : (
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