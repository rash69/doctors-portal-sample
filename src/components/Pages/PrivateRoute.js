import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Auth/auth";

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signIn",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
